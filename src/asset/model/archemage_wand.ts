import { Minecraft } from "lib/types";

export const archemageWandModel: Minecraft.ItemModel = {
  credit: "Made with Blockbench",
  texture_size: [64, 64],
  textures: {
    "1": "the_vault:item/gear/wand/archmage",
  },
  elements: [
    {
      from: [7, -1.5, 7],
      to: [9, 31, 9],
      rotation: { angle: 0, axis: "y", origin: [0, -2, 0] },
      faces: {
        north: { uv: [0, 0, 0.5, 8.25], texture: "#1" },
        east: { uv: [0.5, 0, 1, 8.25], texture: "#1" },
        south: { uv: [1, 0, 1.5, 8.25], texture: "#1" },
        west: { uv: [1.5, 0, 2, 8.25], texture: "#1" },
        up: { uv: [6, 2, 5.5, 1.5], texture: "#1" },
        down: { uv: [2.5, 5.75, 2, 6.25], texture: "#1" },
      },
    },
    {
      from: [6.5, -0.75, 6.5],
      to: [9.5, 8.5, 9.5],
      rotation: { angle: 0, axis: "y", origin: [0, -1.5, 0] },
      faces: {
        north: { uv: [4, 0, 4.75, 2.25], texture: "#1" },
        east: { uv: [4, 2.25, 4.75, 4.5], texture: "#1" },
        south: { uv: [4, 4.5, 4.75, 6.75], texture: "#1" },
        west: { uv: [4.75, 0, 5.5, 2.25], texture: "#1" },
        up: { uv: [6.25, 0.75, 5.5, 0], texture: "#1" },
        down: { uv: [6.25, 0.75, 5.5, 1.5], texture: "#1" },
      },
    },
    {
      from: [6.875, 8, 6.875],
      to: [9.125, 31.075, 9.125],
      rotation: { angle: 0, axis: "y", origin: [0, 10, 0] },
      faces: {
        north: { uv: [2, 0, 2.5, 5.75], texture: "#1" },
        east: { uv: [2.5, 0, 3, 5.75], texture: "#1" },
        south: { uv: [3, 0, 3.5, 5.75], texture: "#1" },
        west: { uv: [3.5, 0, 4, 5.75], texture: "#1" },
        up: { uv: [6.25, 3.25, 5.75, 2.75], texture: "#1" },
        down: { uv: [6.25, 3.25, 5.75, 3.75], texture: "#1" },
      },
    },
    {
      from: [6.25, -2.25, 6.25],
      to: [9.75, -1, 9.75],
      rotation: { angle: 0, axis: "y", origin: [-0.5, -10.25, 0.5] },
      faces: {
        north: { uv: [5.5, 2, 6.5, 2.25], texture: "#1" },
        east: { uv: [5.75, 2.25, 6.75, 2.5], texture: "#1" },
        south: { uv: [2.5, 5.75, 3.5, 6], texture: "#1" },
        west: { uv: [5.75, 2.5, 6.75, 2.75], texture: "#1" },
        up: { uv: [5.75, 3.25, 4.75, 2.25], texture: "#1" },
        down: { uv: [5.75, 3.25, 4.75, 4.25], texture: "#1" },
      },
    },
    {
      from: [6.25, 8.75, 6.25],
      to: [9.75, 10, 9.75],
      rotation: { angle: 0, axis: "y", origin: [-0.5, 0.75, 0.5] },
      faces: {
        north: { uv: [5.75, 3.75, 6.75, 4], texture: "#1" },
        east: { uv: [5.75, 4, 6.75, 4.25], texture: "#1" },
        south: { uv: [5.75, 4.25, 6.75, 4.5], texture: "#1" },
        west: { uv: [5.75, 4.5, 6.75, 4.75], texture: "#1" },
        up: { uv: [5.75, 5.25, 4.75, 4.25], texture: "#1" },
        down: { uv: [5.75, 5.25, 4.75, 6.25], texture: "#1" },
      },
    },
  ],
  display: {
    thirdperson_righthand: {
      translation: [0, 1, 1],
      scale: [0.4, 0.4, 0.4],
    },
    thirdperson_lefthand: {
      translation: [0, 1, 1],
      scale: [0.4, 0.4, 0.4],
    },
    firstperson_righthand: {
      rotation: [-10, 0, 0],
      translation: [4, 0, 0.5],
      scale: [0.42, 0.42, 0.42],
    },
    firstperson_lefthand: {
      rotation: [-13, 0, 0],
      translation: [4, 0, 0.5],
      scale: [0.42, 0.42, 0.42],
    },
    ground: {
      rotation: [60, 0, 0],
      translation: [0, 1, 0],
      scale: [0.37813, 0.37813, 0.37813],
    },
    gui: {
      rotation: [-21, 0, -51],
      translation: [-2.5, -2, 0],
      scale: [0.54883, 0.54883, 0.54883],
    },
    fixed: {
      rotation: [0, 0, 48],
      translation: [3, -2.75, 0],
      scale: [0.65445, 0.65445, 0.65445],
    },
  },
  groups: [
    {
      name: "common wand",
      origin: [-0.5, -9.25, 0.5],
      color: 0,
      children: [0, 1, 2, 3, 4],
    },
  ],
};
