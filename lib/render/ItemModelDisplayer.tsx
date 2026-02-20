import { useItemModelGlContext } from "lib/context/ItemModelGl.ctx";
import { Minecraft } from "lib/types";
import { ElementRef, useEffect, useRef } from "react";

interface Props {
  itemId: string;
  itemModel: Minecraft.ItemModel;
  renderedSize?: number;
  className?: string;
}

export function ItemModelDisplayer(props: Props) {
  const ref = useRef<ElementRef<"img">>(null);

  const imgl = useItemModelGlContext();

  const cachedImg = imgl.imageCache.current.get(props.itemId);

  useEffect(() => {
    if (!cachedImg) {
      imgl.queueItemForRender({
        itemId: props.itemId,
        itemModel: props.itemModel,
        imageSize:
          props.renderedSize ??
          ref.current?.getBoundingClientRect().width ??
          300,
      });
    }
  }, [cachedImg]);

  return (
    <img
      ref={ref}
      src={cachedImg}
      className={props.className}
      style={{ width: "100%", height: "100%" }}
    />
  );
}
