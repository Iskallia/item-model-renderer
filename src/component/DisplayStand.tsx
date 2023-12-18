import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  containerSize?: number;
}>;

export const DisplayStand = (props: Props) => {
  return (
    <div
      style={{
        height: props.containerSize ?? 480,
        width: props.containerSize ?? 480,
        border: "6px solid #F8AD1D",
        backgroundImage:
          "url('https://vaulthunters.gg/assets/icon-frame-e92a019c.png')",
        backgroundPosition: "center",
        backgroundSize: "110%",
      }}
    >
      {props.children}
    </div>
  );
};
