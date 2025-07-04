import { Minecraft } from "lib/types";

export const bigChoppaModel: Minecraft.ItemModel = {
  credit: "Made with Blockbench",
  textures: {
    "0": "the_vault:item/gear/axe/big_choppa",
    "1": "the_vault:item/gear/axe/big_choppa_layer1",
  },
  elements: [
    {
      from: [7, -9, 8],
      to: [9, -8, 10],
      faces: {
        north: { uv: [11.5, 10.5, 12.5, 11], texture: "#0" },
        east: { uv: [12, 1.5, 13, 2], texture: "#0" },
        south: { uv: [12, 10, 13, 10.5], texture: "#0" },
        west: { uv: [12, 11, 13, 11.5], texture: "#0" },
        up: { uv: [11.5, 8.5, 10.5, 7.5], texture: "#0" },
        down: { uv: [12.5, 3.5, 11.5, 4.5], texture: "#0" },
      },
    },
    {
      from: [7.5, 13, 8],
      to: [8.5, 15, 10],
      faces: {
        north: { uv: [12, 11.5, 12.5, 12.5], texture: "#0" },
        east: { uv: [11.5, 4.5, 12.5, 5.5], texture: "#0" },
        south: { uv: [12.5, 0, 13, 1], texture: "#0" },
        west: { uv: [11.5, 5.5, 12.5, 6.5], texture: "#0" },
        up: { uv: [13, 3, 12.5, 2], texture: "#0" },
        down: { uv: [13, 3, 12.5, 4], texture: "#0" },
      },
    },
    {
      from: [8, 12, 9],
      to: [8, 16, 13],
      faces: {
        north: { uv: [0, 0, 0, 2], texture: "#0" },
        east: { uv: [7, 0, 9, 2], texture: "#0" },
        south: { uv: [0, 0, 0, 2], texture: "#0" },
        west: { uv: [7, 2, 9, 4], texture: "#0" },
        up: { uv: [0, 2, 0, 0], texture: "#0" },
        down: { uv: [0, 0, 0, 2], texture: "#0" },
      },
    },
    {
      from: [7, 14, 7.5],
      to: [9, 16, 10.5],
      faces: {
        north: { uv: [11.5, 6.5, 12.5, 7.5], texture: "#0" },
        east: { uv: [10.5, 0, 12, 1], texture: "#0" },
        south: { uv: [7.5, 11.5, 8.5, 12.5], texture: "#0" },
        west: { uv: [10.5, 1, 12, 2], texture: "#0" },
        up: { uv: [11.5, 3.5, 10.5, 2], texture: "#0" },
        down: { uv: [11.5, 3.5, 10.5, 5], texture: "#0" },
      },
    },
    {
      from: [7.5, 17.5, 11.5],
      to: [8.5, 19.5, 14.5],
      faces: {
        north: { uv: [12.5, 6, 13, 7], texture: "#0" },
        east: { uv: [10, 5, 11.5, 6], texture: "#0" },
        south: { uv: [7.5, 12.5, 8, 13.5], texture: "#0" },
        west: { uv: [10, 10, 11.5, 11], texture: "#0" },
        up: { uv: [1, 13.5, 0.5, 12], texture: "#0" },
        down: { uv: [1.5, 12, 1, 13.5], texture: "#0" },
      },
    },
    {
      from: [7.5, 17.5, 8.5],
      to: [9.5, 20.5, 11.5],
      faces: {
        north: { uv: [10.5, 6, 11.5, 7.5], texture: "#0" },
        east: { uv: [7.5, 10, 9, 11.5], texture: "#0" },
        south: { uv: [10, 11, 11, 12.5], texture: "#0" },
        west: { uv: [10, 8.5, 11.5, 10], texture: "#0" },
        up: { uv: [12, 12.5, 11, 11], texture: "#0" },
        down: { uv: [12.5, 2, 11.5, 3.5], texture: "#0" },
      },
    },
    {
      from: [9.5, 18.5, 9.5],
      to: [10.5, 19.5, 13.5],
      faces: {
        north: { uv: [10.5, 12.5, 11, 13], texture: "#0" },
        east: { uv: [11.5, 7.5, 13.5, 8], texture: "#0" },
        south: { uv: [12.5, 10.5, 13, 11], texture: "#0" },
        west: { uv: [11.5, 8, 13.5, 8.5], texture: "#0" },
        up: { uv: [9, 13.5, 8.5, 11.5], texture: "#0" },
        down: { uv: [12, 8.5, 11.5, 10.5], texture: "#0" },
      },
    },
    {
      from: [9.5, 19.5, 12.5],
      to: [10.5, 22.5, 13.5],
      faces: {
        north: { uv: [6.5, 12, 7, 13.5], texture: "#0" },
        east: { uv: [7, 12, 7.5, 13.5], texture: "#0" },
        south: { uv: [12, 8.5, 12.5, 10], texture: "#0" },
        west: { uv: [9, 12, 9.5, 13.5], texture: "#0" },
        up: { uv: [11.5, 13, 11, 12.5], texture: "#0" },
        down: { uv: [12, 12.5, 11.5, 13], texture: "#0" },
      },
    },
    {
      from: [10, 22.5, 9.5],
      to: [10, 31.5, 16.5],
      faces: {
        north: { uv: [0, 0, 0, 9], texture: "#1" },
        east: { uv: [0, 0, 7, 9], texture: "#1" },
        south: { uv: [0, 0, 0, 9], texture: "#1" },
        west: { uv: [0, 0, 7, 9], texture: "#1" },
        up: { uv: [0, 7, 0, 0], texture: "#1" },
        down: { uv: [0, 0, 0, 7], texture: "#1" },
      },
    },
    {
      from: [7, 16, 6],
      to: [9, 21, 12],
      faces: {
        north: { uv: [9.5, 6, 10.5, 8.5], texture: "#0" },
        east: { uv: [0, 4.5, 3, 7], texture: "#0" },
        south: { uv: [6.5, 9.5, 7.5, 12], texture: "#0" },
        west: { uv: [3, 4.5, 6, 7], texture: "#0" },
        up: { uv: [10, 3, 9, 0], texture: "#0" },
        down: { uv: [10, 3, 9, 6], texture: "#0" },
      },
    },
    {
      from: [7.5, 12, 3],
      to: [8.5, 22, 6],
      faces: {
        north: { uv: [9.5, 8.5, 10, 13.5], texture: "#0" },
        east: { uv: [6, 4.5, 7.5, 9.5], texture: "#0" },
        south: { uv: [10, 0, 10.5, 5], texture: "#0" },
        west: { uv: [0, 7, 1.5, 12], texture: "#0" },
        up: { uv: [0.5, 13.5, 0, 12], texture: "#0" },
        down: { uv: [12.5, 0, 12, 1.5], texture: "#0" },
      },
    },
    {
      from: [7.5, 10, 1],
      to: [8.5, 22, 3],
      faces: {
        north: { uv: [9, 6, 9.5, 12], texture: "#0" },
        east: { uv: [3.5, 7, 4.5, 13], texture: "#0" },
        south: { uv: [6, 9.5, 6.5, 15.5], texture: "#0" },
        west: { uv: [4.5, 7, 5.5, 13], texture: "#0" },
        up: { uv: [13, 5, 12.5, 4], texture: "#0" },
        down: { uv: [13, 5, 12.5, 6], texture: "#0" },
      },
    },
    {
      from: [8, 10, -1],
      to: [8, 22, 1],
      faces: {
        north: { uv: [0, 0, 0, 6], texture: "#0" },
        east: { uv: [1.5, 7, 2.5, 13], texture: "#0" },
        south: { uv: [0, 0, 0, 6], texture: "#0" },
        west: { uv: [2.5, 7, 3.5, 13], texture: "#0" },
        up: { uv: [0, 1, 0, 0], texture: "#0" },
        down: { uv: [0, 0, 0, 1], texture: "#0" },
      },
    },
    {
      from: [7.5, -8, 8.5],
      to: [8.5, 13, 9.5],
      faces: {
        north: { uv: [5.5, 7, 6, 13], texture: "#0" },
        east: { uv: [7.5, 4, 8, 10], texture: "#0" },
        south: { uv: [8, 4, 8.5, 10], texture: "#0" },
        west: { uv: [8.5, 4, 9, 10], texture: "#0" },
        up: { uv: [7.5, 4.5, 7, 4], texture: "#0" },
        down: { uv: [13, 1, 12.5, 1.5], texture: "#0" },
      },
    },
    {
      from: [7.5, 18, 8.5],
      to: [8.5, 19, 9.5],
      faces: {
        north: { uv: [12.5, 7, 13, 7.5], texture: "#0" },
        east: { uv: [8, 12.5, 8.5, 13], texture: "#0" },
        south: { uv: [12.5, 8.5, 13, 9], texture: "#0" },
        west: { uv: [12.5, 9, 13, 9.5], texture: "#0" },
        up: { uv: [13, 10, 12.5, 9.5], texture: "#0" },
        down: { uv: [10.5, 12.5, 10, 13], texture: "#0" },
      },
    },
  ],
  display: {
    thirdperson_righthand: {
      translation: [0, 2.25, 0],
      scale: [1.34, 1.23, 1.23],
    },
    thirdperson_lefthand: {
      translation: [0, 2.25, 0],
    },
    firstperson_righthand: {
      rotation: [16, 0, 0],
      translation: [0, 3, 0],
      scale: [0.55, 0.55, 0.55],
    },
    firstperson_lefthand: {
      rotation: [16, 0, 0],
      translation: [0, 3, 0],
      scale: [0.55, 0.55, 0.55],
    },
    ground: {
      rotation: [42.24, 5.36, 13.87],
      translation: [0, 0, -2.75],
    },
    gui: {
      rotation: [99.98, 51.04, -97.78],
      translation: [-0.5, -1, 0],
      scale: [0.72656, 0.72656, 0.72656],
    },
    head: {
      rotation: [-95.78, -46.03, 85.74],
      translation: [-1.75, 13.5, 0],
    },
    fixed: {
      rotation: [-92.42, 55.32, 87.81],
      translation: [2, -8, -1],
      scale: [1.86, 1.84, 1.84],
    },
  },
};
