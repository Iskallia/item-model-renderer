import { Minecraft } from "lib/types";
import { ObjUtils } from "lib/util/obj.utils";
import { PropsWithChildren, useRef, useState } from "react";
import { contextBuilder } from "react-compound-composer";

interface Props extends PropsWithChildren {
  resolveTextureUrl: (resourceLocation: string) => string;
  resolveMcmeta: (resourceLocation: string) => Promise<Minecraft.Mcmeta | null>;
  itemModelTransform?: Minecraft.ItemModelTransformationName;
  zoomFactor?: number;
  individualRenderWait?: number;
}

export interface RenderContext {
  itemId: string;
  itemModel: Minecraft.ItemModel;
  imageSize: number;
}

export const {
  Provider: ItemModelGlProvider,
  Consumer: ItemModelGlConsumer,
  useContext: useItemModelGlContext,
} = contextBuilder((props: Props) => {
  const cachedImages = useRef(new Map<string, string>());
  const cachedMcmeta = useRef(new Map<string, Minecraft.Mcmeta | null>());
  const renderContextMap = useRef(new Map<string, RenderContext>());
  const renderQueue = useRef(new Set<string>());
  const mcmetaQueue = useRef(new Set<string>());

  const [renderingItem, setRenderingItem] = useState<string>();

  const queueItemForRender = (ctx: RenderContext) => {
    if (renderingItem === ctx.itemId) return;
    if (renderQueue.current.has(ctx.itemId)) return;
    if (cachedImages.current.has(ctx.itemId)) return;

    if (mcmetaQueue.current.has(ctx.itemId)) return;
    mcmetaQueue.current.add(ctx.itemId);

    const mcmetaFetchTasks = ObjUtils.getValues(ctx.itemModel.textures).map(
      async (textureId) => {
        return [textureId, await props.resolveMcmeta(textureId)] as const;
      }
    );

    Promise.all(mcmetaFetchTasks)
      .then((result) => {
        result.forEach(([textureId, mcmeta]) =>
          cachedMcmeta.current.set(textureId, mcmeta)
        );
        mcmetaQueue.current.delete(ctx.itemId);

        renderContextMap.current.set(ctx.itemId, ctx);

        setRenderingItem((renderingItem) => {
          const hasOverhead =
            renderingItem != null || renderQueue.current.size > 0;
          if (!hasOverhead) return ctx.itemId;

          renderQueue.current.add(ctx.itemId);
          return renderingItem;
        });
      })
      .catch(() => {
        console.error("Failed to fetch mcmeta files for", ctx.itemId);
        mcmetaQueue.current.delete(ctx.itemId);
        queueItemForRender(ctx); // Retry
      });
  };

  const finishRendering = (itemId: string, img: string) => {
    cachedImages.current.set(itemId, img);

    if (renderQueue.current.size > 0) {
      const nextItem = renderQueue.current.values().next().value;
      renderQueue.current.delete(nextItem);
      setRenderingItem(nextItem);
    } else {
      setRenderingItem(undefined);
    }
  };

  return {
    imageCache: cachedImages,
    mcmetaCache: cachedMcmeta,
    renderContextMap,
    renderingItem,
    renderQueue,
    mcmetaQueue,
    queueItemForRender,
    finishRendering,
    ...props,
  };
});
