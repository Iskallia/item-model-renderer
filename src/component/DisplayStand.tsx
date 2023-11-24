import { ItemModelRender } from "@iskallia/item-model-renderer";
import { ComponentProps } from "react";

type Props = ComponentProps<typeof ItemModelRender> & {
  containerSize?: number;
};

export const DisplayStand = (props: Props) => {
  return (
    <div
      style={{
        position: "relative",
        height: props.containerSize ?? 480,
        width: props.containerSize ?? 480,
        border: "6px solid #F8AD1D",
        backgroundImage:
          "url('https://vaulthunters.gg/assets/icon-frame-e92a019c.png')",
        backgroundPosition: "center",
        backgroundSize: "110%",
      }}
    >
      <ItemModelRender {...props} />

      {/* <p
        style={{
          position: "absolute",
          bottom: "10px",
          right: "15px",
          margin: 0,
          fontFamily: "consolas",
          color: "white",
        }}
      >
        GUI Preview
      </p> */}
    </div>
  );
};
