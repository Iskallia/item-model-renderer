import { ItemModelRender } from "@iskallia/item-model-renderer";
import { useItemModelGlContext } from "lib/context/ItemModelGl.ctx";
import { Minecraft } from "lib/types";
import { useEffect } from "react";

interface Props {
  itemId: string;
  itemModel: Minecraft.ItemModel;
  canRender?: boolean;
  renderLoader?: () => React.ReactNode;
}

export function ItemModelDisplayer(props: Props) {
  const imgl = useItemModelGlContext();

  const cachedImg = imgl.getCachedImage(props.itemId);

  useEffect(() => {
    if (cachedImg == null) {
      imgl.queueItemForRender(props.itemId, props.itemModel);
    }
  }, [cachedImg]);

  if (imgl.renderingItem === props.itemId && props.canRender) {
    return <ItemModelRender {...props} />;
  }

  if (!cachedImg) {
    return props.renderLoader?.();
  }

  return <img src={cachedImg} />;
}
