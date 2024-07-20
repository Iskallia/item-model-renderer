import { Minecraft } from "lib/types";
import { ObjUtils } from "lib/util/obj.utils";
import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { contextBuilder } from "react-compound-composer";

interface Props extends PropsWithChildren {
  resolveTextureUrl: (resourceLocation: string) => string;
  resolveMcmeta: (resourceLocation: string) => Promise<Minecraft.Mcmeta | null>;
  itemModelTransform?: Minecraft.ItemModelTransformationName;
  zoomFactor?: number;
}

export const {
  Provider: ItemModelGlProvider,
  Consumer: ItemModelGlConsumer,
  useContext: useItemModelGlContext,
} = contextBuilder((props: Props) => {
  const imageCache = useRef(new Map());
  const mcmetaCache = useRef(new Map());
  const renderQueue = useRef<Set<string>>(new Set());
  const mcmetaQueue = useRef<Set<string>>(new Set());

  const [lastUpdateTime, forceUpdate] = useState(0);
  const [renderingItem, setRenderingItem] = useState<string>();

  const queueItemForRender = (
    itemId: string,
    itemModel: Minecraft.ItemModel
  ) => {
    if (mcmetaQueue.current.has(itemId)) return;
    mcmetaQueue.current.add(itemId);

    if (renderQueue.current.has(itemId)) return;
    if (imageCache.current.has(itemId)) return;

    console.debug(itemId, "queued for mcmeta retrieval");

    Promise.all(
      ObjUtils.getValues(itemModel.textures).map(
        async (textureId) =>
          [textureId, await props.resolveMcmeta(textureId)] as const
      )
    ).then((result) => {
      result.forEach(([k, v]) => mcmetaCache.current.set(k, v));
      mcmetaQueue.current.delete(itemId);
      renderQueue.current.add(itemId);
      console.debug(itemId, "queued for rendering later");
      forceUpdate(() => Date.now());
    });
  };

  const finishRendering = (itemId: string, img: string) => {
    console.debug(itemId, "finished rendering");
    imageCache.current.set(itemId, img);
    setRenderingItem(undefined);
    forceUpdate(() => Date.now());
  };

  useEffect(() => {
    if (renderingItem == null) {
      if (renderQueue.current.size > 0) {
        const nextItem = renderQueue.current.values().next().value;
        renderQueue.current.delete(nextItem);
        console.debug(nextItem, "set as the rendering target");
        setRenderingItem(nextItem);
        forceUpdate(() => Date.now());
      }
    }
  }, [lastUpdateTime]);

  return {
    imageCache,
    mcmetaCache,
    renderingItem,
    renderQueue,
    mcmetaQueue,
    queueItemForRender,
    finishRendering,
    ...props,
  };
});
