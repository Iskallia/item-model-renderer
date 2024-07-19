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
  const mcmmetaCache = useRef(new Map());
  const queue = useRef<Set<string>>(new Set());
  const mcmetaQueue = useRef<Set<string>>(new Set());

  const [lastUpdateTime, forceUpdate] = useState(0);
  const [renderingItem, setRenderingItem] = useState<string>();

  const getCachedImage = (itemId: string) => {
    return imageCache.current.get(itemId);
  };

  const queueItemForRender = (
    itemId: string,
    itemModel: Minecraft.ItemModel
  ) => {
    if (mcmetaQueue.current.has(itemId)) return;
    mcmetaQueue.current.add(itemId);
    
    Promise.all(
      ObjUtils.getValues(itemModel.textures).map(async (textureId) => [
        textureId,
        await props.resolveMcmeta(textureId),
      ])
    )
      .then((entries) => {
        return Object.fromEntries(entries) as Record<
          string,
          Minecraft.Mcmeta | null
        >;
      })
      .then((mcmetas) => {
        Object.entries(mcmetas).forEach(([k, v]) =>
          mcmmetaCache.current.set(k, v)
        );
        queue.current.add(itemId);
        mcmetaQueue.current.delete(itemId);
        forceUpdate(Date.now());
      });
  };

  const finishRendering = (itemId: string, img: string) => {
    imageCache.current.set(itemId, img);
    setRenderingItem(undefined);
    forceUpdate(Date.now());
  };

  useEffect(() => {
    if (renderingItem == null) {
      if (queue.current.size > 0) {
        const nextItem = queue.current.keys().next().value;
        queue.current.delete(nextItem);
        setRenderingItem(nextItem);
      }
    }
  }, [renderingItem, lastUpdateTime]);

  return {
    renderingItem,
    mcmmetaCache,
    getCachedImage,
    queueItemForRender,
    finishRendering,
    ...props,
  };
});
