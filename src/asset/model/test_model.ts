import { Minecraft } from "lib/types";

export const testModel: Minecraft.ItemModel = {
  credit: "Made with Blockbench",
  texture_size: [64, 64],
  textures: {
    "0": "test",
    particle: "test",
  },
  elements: [
    {
      from: [0, 0, 0],
      to: [16, 16, 16],
      faces: {
        north: { uv: [0, 0, 4, 4], texture: "#0" },
        east: { uv: [0, 4, 4, 8], texture: "#0" },
        south: { uv: [4, 0, 8, 4], texture: "#0" },
        west: { uv: [4, 4, 8, 8], texture: "#0" },
        up: { uv: [4, 12, 0, 8], texture: "#0" },
        down: { uv: [12, 0, 8, 4], texture: "#0" },
      },
    },
  ],
  display: {
    gui: {
      rotation: [-160, 60, -180],
      scale: [0.5, 0.5, 0.5],
    },
  },
};
