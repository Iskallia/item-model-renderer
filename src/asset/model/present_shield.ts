import { Minecraft } from "lib/types";

export const presentShieldModel: Minecraft.ItemModel = {
  credit: "Made with Blockbench",
  texture_size: [32, 32],
  textures: {
    "0": "the_vault:item/gear/shield/present",
    particle: "the_vault:item/gear/shield/present",
  },
  elements: [
    {
      from: [0, -15.5, 2],
      to: [16, 16.5, 5],
      rotation: {
        angle: 0,
        axis: "z",
        origin: [8, 0.5, 7.43151],
      },
      faces: {
        north: {
          uv: [0, 0, 8, 16],
          texture: "#0",
        },
        east: {
          uv: [6.5, 0, 8, 16],
          texture: "#0",
        },
        south: {
          uv: [0, 0, 8, 16],
          texture: "#0",
        },
        west: {
          uv: [0, 0, 1.5, 16],
          texture: "#0",
        },
        up: {
          uv: [0, 0, 8, 1.5],
          texture: "#0",
        },
        down: {
          uv: [0, 14.5, 8, 16],
          texture: "#0",
        },
      },
    },
    {
      from: [2, 14.5, 5],
      to: [14, 16.5, 8],
      rotation: {
        angle: 0,
        axis: "z",
        origin: [8, 0.5, 7.43151],
      },
      faces: {
        north: {
          uv: [0, 0, 6, 1],
          texture: "#missing",
        },
        east: {
          uv: [0, 0, 1.5, 1],
          texture: "#missing",
        },
        south: {
          uv: [1, 0, 7, 1],
          texture: "#0",
        },
        west: {
          uv: [0.5, 0, 2, 1],
          texture: "#missing",
        },
        up: {
          uv: [1, 1.5, 7, 3],
          texture: "#0",
        },
        down: {
          uv: [1, 0.5, 7, 2],
          texture: "#0",
        },
      },
    },
    {
      from: [2, -15.5, 5],
      to: [14, -13.5, 8],
      rotation: {
        angle: 0,
        axis: "z",
        origin: [8, 0.5, 7.43151],
      },
      faces: {
        north: {
          uv: [0, 0, 6, 1],
          texture: "#missing",
        },
        east: {
          uv: [0, 0, 1.5, 1],
          texture: "#missing",
        },
        south: {
          uv: [1, 15, 7, 16],
          texture: "#0",
        },
        west: {
          uv: [0, 0, 1.5, 1],
          texture: "#missing",
        },
        up: {
          uv: [1, 14, 7, 15.5],
          texture: "#0",
        },
        down: {
          uv: [1, 14.5, 7, 16],
          texture: "#0",
        },
      },
    },
    {
      from: [0, -15.5, 5],
      to: [2, 16.5, 8],
      rotation: {
        angle: 0,
        axis: "z",
        origin: [8, 0.5, 7.43151],
      },
      faces: {
        north: {
          uv: [0, 0, 1, 16],
          texture: "#missing",
        },
        east: {
          uv: [2.5, 0, 4, 16],
          texture: "#0",
        },
        south: {
          uv: [0, 0, 1, 16],
          texture: "#0",
        },
        west: {
          uv: [1.5, 0, 3, 16],
          texture: "#0",
        },
        up: {
          uv: [0, 1.5, 1, 3],
          texture: "#0",
        },
        down: {
          uv: [0, 14.5, 1, 16],
          texture: "#0",
        },
      },
    },
    {
      from: [14, -15.5, 5],
      to: [16, 16.5, 8],
      rotation: {
        angle: 0,
        axis: "z",
        origin: [8, 0.5, 7.43151],
      },
      faces: {
        north: {
          uv: [0, 0, 1, 16],
          texture: "#missing",
        },
        east: {
          uv: [1.5, 0, 3, 16],
          texture: "#0",
        },
        south: {
          uv: [7, 0, 8, 16],
          texture: "#0",
        },
        west: {
          uv: [1.5, 0, 3, 16],
          texture: "#0",
        },
        up: {
          uv: [7, 1.5, 8, 3],
          texture: "#0",
        },
        down: {
          uv: [7, 14.5, 8, 16],
          texture: "#0",
        },
      },
    },
    {
      from: [9, -0.5, 1.5],
      to: [16.25, 1.5, 2],
      rotation: {
        angle: 0,
        axis: "z",
        origin: [8, 0.5, 7.43151],
      },
      faces: {
        north: {
          uv: [15, 0, 16, 3.5],
          rotation: 90,
          texture: "#0",
        },
        east: {
          uv: [15, 0, 16, 3.5],
          rotation: 90,
          texture: "#0",
        },
        south: {
          uv: [15, 0, 16, 3.5],
          rotation: 90,
          texture: "#0",
        },
        west: {
          uv: [15, 0, 16, 3.5],
          rotation: 90,
          texture: "#0",
        },
        up: {
          uv: [15, 0, 16, 3.5],
          rotation: 90,
          texture: "#0",
        },
        down: {
          uv: [15, 0, 16, 3.5],
          rotation: 90,
          texture: "#0",
        },
      },
    },
    {
      from: [13.75, -0.5, 2],
      to: [16.25, 1.5, 8.25],
      rotation: {
        angle: 0,
        axis: "z",
        origin: [8, 0.5, 7.43151],
      },
      faces: {
        north: {
          uv: [14.625, 0, 15.625, 1.25],
          rotation: 270,
          texture: "#0",
        },
        east: {
          uv: [14.625, 0, 15.625, 1.25],
          rotation: 270,
          texture: "#0",
        },
        south: {
          uv: [14.625, 0, 15.625, 1.25],
          rotation: 270,
          texture: "#0",
        },
        west: {
          uv: [14.625, 0, 15.625, 1.25],
          rotation: 270,
          texture: "#0",
        },
        up: {
          uv: [14.625, 0, 15.625, 1.25],
          rotation: 270,
          texture: "#0",
        },
        down: {
          uv: [14.625, 0, 15.625, 1.25],
          rotation: 270,
          texture: "#0",
        },
      },
    },
    {
      from: [2.25, -0.5, 7],
      to: [13.75, 1.5, 8.25],
      rotation: {
        angle: 0,
        axis: "z",
        origin: [8, 0.5, 7.43151],
      },
      faces: {
        north: {
          uv: [14.625, 0, 15.625, 1.25],
          rotation: 270,
          texture: "#0",
        },
        east: {
          uv: [14.625, 0, 15.625, 1.25],
          rotation: 270,
          texture: "#0",
        },
        south: {
          uv: [14.625, 0, 15.625, 1.25],
          rotation: 270,
          texture: "#0",
        },
        west: {
          uv: [14.625, 0, 15.625, 1.25],
          rotation: 270,
          texture: "#0",
        },
        up: {
          uv: [14.625, 0, 15.625, 1.25],
          rotation: 270,
          texture: "#0",
        },
        down: {
          uv: [14.625, 0, 15.625, 1.25],
          rotation: 270,
          texture: "#0",
        },
      },
    },
    {
      from: [7, 1.5, 7],
      to: [9, 14.25, 8.25],
      rotation: {
        angle: 0,
        axis: "z",
        origin: [8, 0.5, 7.43151],
      },
      faces: {
        north: {
          uv: [14.625, 0, 15.625, 1.25],
          rotation: 270,
          texture: "#0",
        },
        east: {
          uv: [14.625, 0, 15.625, 1.25],
          rotation: 270,
          texture: "#0",
        },
        south: {
          uv: [14.625, 0, 15.625, 1.25],
          rotation: 270,
          texture: "#0",
        },
        west: {
          uv: [14.625, 0, 15.625, 1.25],
          rotation: 270,
          texture: "#0",
        },
        up: {
          uv: [14.625, 0, 15.625, 1.25],
          rotation: 270,
          texture: "#0",
        },
        down: {
          uv: [14.625, 0, 15.625, 1.25],
          rotation: 270,
          texture: "#0",
        },
      },
    },
    {
      from: [7, -13.25, 7],
      to: [9, -0.5, 8.25],
      rotation: {
        angle: 0,
        axis: "z",
        origin: [8, 0.5, 7.43151],
      },
      faces: {
        north: {
          uv: [14.625, 0, 15.625, 1.25],
          rotation: 270,
          texture: "#0",
        },
        east: {
          uv: [14.625, 0, 15.625, 1.25],
          rotation: 270,
          texture: "#0",
        },
        south: {
          uv: [14.625, 0, 15.625, 1.25],
          rotation: 270,
          texture: "#0",
        },
        west: {
          uv: [14.625, 0, 15.625, 1.25],
          rotation: 270,
          texture: "#0",
        },
        up: {
          uv: [14.625, 0, 15.625, 1.25],
          rotation: 270,
          texture: "#0",
        },
        down: {
          uv: [14.625, 0, 15.625, 1.25],
          rotation: 270,
          texture: "#0",
        },
      },
    },
    {
      from: [-0.25, -0.5, 2],
      to: [2.25, 1.5, 8.25],
      rotation: {
        angle: 0,
        axis: "z",
        origin: [8, 0.5, 7.43151],
      },
      faces: {
        north: {
          uv: [14.625, 1.25, 15.625, 0],
          rotation: 270,
          texture: "#0",
        },
        east: {
          uv: [14.625, 1.25, 15.625, 0],
          rotation: 270,
          texture: "#0",
        },
        south: {
          uv: [14.625, 1.25, 15.625, 0],
          rotation: 270,
          texture: "#0",
        },
        west: {
          uv: [14.625, 1.25, 15.625, 0],
          rotation: 270,
          texture: "#0",
        },
        up: {
          uv: [14.625, 1.25, 15.625, 0],
          rotation: 270,
          texture: "#0",
        },
        down: {
          uv: [14.625, 1.25, 15.625, 0],
          rotation: 270,
          texture: "#0",
        },
      },
    },
    {
      from: [-0.25, -0.5, 1.5],
      to: [7, 1.5, 2],
      rotation: {
        angle: 0,
        axis: "z",
        origin: [8, 0.5, 7.43151],
      },
      faces: {
        north: {
          uv: [15, 0, 16, 3.5],
          rotation: 90,
          texture: "#0",
        },
        east: {
          uv: [15, 0, 16, 3.5],
          rotation: 90,
          texture: "#0",
        },
        south: {
          uv: [15, 0, 16, 3.5],
          rotation: 90,
          texture: "#0",
        },
        west: {
          uv: [15, 0, 16, 3.5],
          rotation: 90,
          texture: "#0",
        },
        up: {
          uv: [15, 0, 16, 3.5],
          rotation: 90,
          texture: "#0",
        },
        down: {
          uv: [15, 0, 16, 3.5],
          rotation: 90,
          texture: "#0",
        },
      },
    },
    {
      from: [7, -16, 1.5],
      to: [9, 17, 2],
      rotation: {
        angle: 0,
        axis: "z",
        origin: [8, 0.5, 7.43151],
      },
      faces: {
        north: {
          uv: [8, 0, 16, 1],
          rotation: 90,
          texture: "#0",
        },
        east: {
          uv: [8, 0, 16, 1],
          rotation: 90,
          texture: "#0",
        },
        south: {
          uv: [8, 0, 16, 1],
          rotation: 90,
          texture: "#0",
        },
        west: {
          uv: [8, 0, 16, 1],
          rotation: 90,
          texture: "#0",
        },
        up: {
          uv: [8, 0, 16, 1],
          rotation: 90,
          texture: "#0",
        },
        down: {
          uv: [8, 0, 16, 1],
          rotation: 90,
          texture: "#0",
        },
      },
    },
    {
      from: [7, 14.25, 2],
      to: [9, 17, 8.25],
      rotation: {
        angle: 0,
        axis: "z",
        origin: [8, 0.5, 7.43151],
      },
      faces: {
        north: {
          uv: [14.625, 0, 16, 1],
          rotation: 270,
          texture: "#0",
        },
        east: {
          uv: [14.625, 0, 16, 1],
          rotation: 270,
          texture: "#0",
        },
        south: {
          uv: [14.625, 0, 16, 1],
          rotation: 270,
          texture: "#0",
        },
        west: {
          uv: [14.625, 0, 16, 1],
          rotation: 270,
          texture: "#0",
        },
        up: {
          uv: [14.625, 0, 16, 1],
          rotation: 270,
          texture: "#0",
        },
        down: {
          uv: [14.625, 0, 16, 1],
          rotation: 270,
          texture: "#0",
        },
      },
    },
    {
      from: [7, -16, 2],
      to: [9, -13.25, 8.25],
      rotation: {
        angle: 0,
        axis: "z",
        origin: [8, 0.5, 7.43151],
      },
      faces: {
        north: {
          uv: [14.625, 0, 16, 1],
          rotation: 270,
          texture: "#0",
        },
        east: {
          uv: [14.625, 0, 16, 1],
          rotation: 270,
          texture: "#0",
        },
        south: {
          uv: [14.625, 0, 16, 1],
          rotation: 270,
          texture: "#0",
        },
        west: {
          uv: [14.625, 0, 16, 1],
          rotation: 270,
          texture: "#0",
        },
        up: {
          uv: [14.625, 0, 16, 1],
          rotation: 270,
          texture: "#0",
        },
        down: {
          uv: [14.625, 0, 16, 1],
          rotation: 270,
          texture: "#0",
        },
      },
    },
    {
      from: [10.8069, -0.6, 2.0086],
      to: [15.8069, 1.6, 2.5086],
      rotation: {
        angle: 0,
        axis: "z",
        origin: [8, 0.5, 7.43151],
      },
      faces: {
        north: {
          uv: [13, 1.225, 10.5, 0.125],
          texture: "#0",
        },
        east: {
          uv: [10.75, 1.225, 10.5, 0.125],
          texture: "#0",
        },
        south: {
          uv: [13, 1.225, 10.5, 0.125],
          texture: "#0",
        },
        west: {
          uv: [10.75, 1.225, 10.5, 0.125],
          texture: "#0",
        },
        up: {
          uv: [13, 0.375, 10.5, 0.125],
          texture: "#0",
        },
        down: {
          uv: [13, 0.375, 10.5, 0.125],
          texture: "#0",
        },
      },
    },
    {
      from: [10.8069, -0.6, 3.0086],
      to: [15.8069, 1.6, 3.5086],
      rotation: {
        angle: 0,
        axis: "z",
        origin: [8, 0.5, 7.43151],
      },
      faces: {
        north: {
          uv: [12.5, 1.225, 10, 0.125],
          texture: "#0",
        },
        east: {
          uv: [10.25, 1.225, 10, 0.125],
          texture: "#0",
        },
        south: {
          uv: [12.5, 1.225, 10, 0.125],
          texture: "#0",
        },
        west: {
          uv: [10.25, 1.225, 10, 0.125],
          texture: "#0",
        },
        up: {
          uv: [12.5, 0.375, 10, 0.125],
          texture: "#0",
        },
        down: {
          uv: [12.5, 0.375, 10, 0.125],
          texture: "#0",
        },
      },
    },
    {
      from: [15.3069, -0.6, 2.5086],
      to: [15.8069, 1.6, 3.0086],
      rotation: {
        angle: 0,
        axis: "z",
        origin: [8, 0.5, 7.43151],
      },
      faces: {
        north: {
          uv: [8.75, 1.225, 9, 0.125],
          texture: "#0",
        },
        east: {
          uv: [8.75, 1.225, 9, 0.125],
          texture: "#0",
        },
        south: {
          uv: [8.75, 1.225, 9, 0.125],
          texture: "#0",
        },
        west: {
          uv: [8.75, 1.225, 9, 0.125],
          texture: "#0",
        },
        up: {
          uv: [8.75, 0.375, 9, 0.125],
          texture: "#0",
        },
        down: {
          uv: [8.75, 0.375, 9, 0.125],
          texture: "#0",
        },
      },
    },
    {
      from: [0.1931, -0.6, 2.0086],
      to: [5.1931, 1.6, 2.5086],
      rotation: {
        angle: 0,
        axis: "z",
        origin: [8, 0.5, 7.43151],
      },
      faces: {
        north: {
          uv: [10, 1.225, 12.5, 0.125],
          texture: "#0",
        },
        east: {
          uv: [10, 1.225, 10.25, 0.125],
          texture: "#0",
        },
        south: {
          uv: [10, 1.225, 12.5, 0.125],
          texture: "#0",
        },
        west: {
          uv: [10, 1.225, 10.25, 0.125],
          texture: "#0",
        },
        up: {
          uv: [10, 0.375, 12.5, 0.125],
          texture: "#0",
        },
        down: {
          uv: [10, 0.375, 12.5, 0.125],
          texture: "#0",
        },
      },
    },
    {
      from: [0.1931, -0.6, 3.0086],
      to: [5.1931, 1.6, 3.5086],
      rotation: {
        angle: 0,
        axis: "z",
        origin: [8, 0.5, 7.43151],
      },
      faces: {
        north: {
          uv: [10, 1.225, 12.5, 0.125],
          texture: "#0",
        },
        east: {
          uv: [10, 1.225, 10.25, 0.125],
          texture: "#0",
        },
        south: {
          uv: [10, 1.225, 12.5, 0.125],
          texture: "#0",
        },
        west: {
          uv: [10, 1.225, 10.25, 0.125],
          texture: "#0",
        },
        up: {
          uv: [10, 0.375, 12.5, 0.125],
          texture: "#0",
        },
        down: {
          uv: [10, 0.375, 12.5, 0.125],
          texture: "#0",
        },
      },
    },
    {
      from: [0.1931, -0.6, 2.5086],
      to: [0.6931, 1.6, 3.0086],
      rotation: {
        angle: 0,
        axis: "z",
        origin: [8, 0.5, 7.43151],
      },
      faces: {
        north: {
          uv: [9, 1.225, 8.75, 0.125],
          texture: "#0",
        },
        east: {
          uv: [9, 1.225, 8.75, 0.125],
          texture: "#0",
        },
        south: {
          uv: [9, 1.225, 8.75, 0.125],
          texture: "#0",
        },
        west: {
          uv: [9, 1.225, 8.75, 0.125],
          texture: "#0",
        },
        up: {
          uv: [9, 0.375, 8.75, 0.125],
          texture: "#0",
        },
        down: {
          uv: [9, 0.375, 8.75, 0.125],
          texture: "#0",
        },
      },
    },
    {
      from: [6.9, -8.4972, 3.05189],
      to: [9.1, -1.4972, 3.55189],
      rotation: {
        angle: 0,
        axis: "z",
        origin: [8, 0.5, 7.43151],
      },
      faces: {
        north: {
          uv: [10, 2.325, 13.5, 1.225],
          rotation: 90,
          texture: "#0",
        },
        east: {
          uv: [10, 1.475, 13.5, 1.225],
          rotation: 90,
          texture: "#0",
        },
        south: {
          uv: [10, 2.325, 13.5, 1.225],
          rotation: 90,
          texture: "#0",
        },
        west: {
          uv: [10, 1.475, 13.5, 1.225],
          rotation: 90,
          texture: "#0",
        },
        up: {
          uv: [10, 2.325, 10.25, 1.225],
          rotation: 90,
          texture: "#0",
        },
        down: {
          uv: [10, 2.325, 10.25, 1.225],
          rotation: 90,
          texture: "#0",
        },
      },
    },
    {
      from: [6.9, -8.4972, 2.55189],
      to: [9.1, -7.9972, 3.05189],
      rotation: {
        angle: 0,
        axis: "z",
        origin: [8, 0.5, 7.43151],
      },
      faces: {
        north: {
          uv: [9, 2.225, 8.75, 1.125],
          rotation: 90,
          texture: "#0",
        },
        east: {
          uv: [9, 1.375, 8.75, 1.125],
          rotation: 90,
          texture: "#0",
        },
        south: {
          uv: [9, 2.225, 8.75, 1.125],
          rotation: 90,
          texture: "#0",
        },
        west: {
          uv: [9, 1.375, 8.75, 1.125],
          rotation: 90,
          texture: "#0",
        },
        up: {
          uv: [9, 2.225, 8.75, 1.125],
          rotation: 90,
          texture: "#0",
        },
        down: {
          uv: [9, 2.225, 8.75, 1.125],
          rotation: 90,
          texture: "#0",
        },
      },
    },
    {
      from: [6.9, -8.4972, 2.05189],
      to: [9.1, -1.4972, 2.55189],
      rotation: {
        angle: 0,
        axis: "z",
        origin: [8, 0.5, 7.43151],
      },
      faces: {
        north: {
          uv: [10.25, 0, 13.75, 1.1],
          rotation: 90,
          texture: "#0",
        },
        east: {
          uv: [10.25, 0, 13.75, 0.25],
          rotation: 90,
          texture: "#0",
        },
        south: {
          uv: [10.25, 0, 13.75, 1.1],
          rotation: 90,
          texture: "#0",
        },
        west: {
          uv: [10.25, 0, 13.75, 0.25],
          rotation: 90,
          texture: "#0",
        },
        up: {
          uv: [10.25, 0, 10.5, 1.1],
          rotation: 90,
          texture: "#0",
        },
        down: {
          uv: [10.25, 0, 10.5, 1.1],
          rotation: 90,
          texture: "#0",
        },
      },
    },
    {
      from: [6.9, 2.6166, 2.96531],
      to: [9.1, 9.6166, 3.46531],
      rotation: {
        angle: 0,
        axis: "z",
        origin: [8, 0.5, 7.43151],
      },
      faces: {
        north: {
          uv: [10, 1.225, 13.5, 0.125],
          rotation: 90,
          texture: "#0",
        },
        east: {
          uv: [10, 0.375, 13.5, 0.125],
          rotation: 90,
          texture: "#0",
        },
        south: {
          uv: [10, 1.225, 13.5, 0.125],
          rotation: 90,
          texture: "#0",
        },
        west: {
          uv: [10, 0.375, 13.5, 0.125],
          rotation: 90,
          texture: "#0",
        },
        up: {
          uv: [10, 1.225, 10.25, 0.125],
          rotation: 90,
          texture: "#0",
        },
        down: {
          uv: [10, 1.225, 10.25, 0.125],
          rotation: 90,
          texture: "#0",
        },
      },
    },
    {
      from: [6.9, 2.6166, 1.96531],
      to: [9.1, 9.6166, 2.46531],
      rotation: {
        angle: 0,
        axis: "z",
        origin: [8, 0.5, 7.43151],
      },
      faces: {
        north: {
          uv: [10, 1.225, 13.5, 0.125],
          rotation: 90,
          texture: "#0",
        },
        east: {
          uv: [10, 0.375, 13.5, 0.125],
          rotation: 90,
          texture: "#0",
        },
        south: {
          uv: [10, 1.225, 13.5, 0.125],
          rotation: 90,
          texture: "#0",
        },
        west: {
          uv: [10, 0.375, 13.5, 0.125],
          rotation: 90,
          texture: "#0",
        },
        up: {
          uv: [10, 1.225, 10.25, 0.125],
          rotation: 90,
          texture: "#0",
        },
        down: {
          uv: [10, 1.225, 10.25, 0.125],
          rotation: 90,
          texture: "#0",
        },
      },
    },
    {
      from: [6.9, 9.1166, 2.46531],
      to: [9.1, 9.6166, 2.96531],
      rotation: {
        angle: 0,
        axis: "z",
        origin: [8, 0.5, 7.43151],
      },
      faces: {
        north: {
          uv: [9, 1.225, 8.75, 0.125],
          rotation: 90,
          texture: "#0",
        },
        east: {
          uv: [9, 0.375, 8.75, 0.125],
          rotation: 90,
          texture: "#0",
        },
        south: {
          uv: [9, 1.225, 8.75, 0.125],
          rotation: 90,
          texture: "#0",
        },
        west: {
          uv: [9, 0.375, 8.75, 0.125],
          rotation: 90,
          texture: "#0",
        },
        up: {
          uv: [9, 1.225, 8.75, 0.125],
          rotation: 90,
          texture: "#0",
        },
        down: {
          uv: [9, 1.225, 8.75, 0.125],
          rotation: 90,
          texture: "#0",
        },
      },
    },
    {
      from: [7, 2.25, 8.25],
      to: [9, 3.75, 12],
      rotation: {
        angle: 0,
        axis: "z",
        origin: [8, 0.5, 7.43151],
      },
      faces: {
        north: {
          uv: [14.625, 1.25, 15.625, 0],
          texture: "#0",
        },
        east: {
          uv: [14.625, 1.25, 15.625, 0],
          rotation: 180,
          texture: "#0",
        },
        south: {
          uv: [14.625, 1.25, 15.625, 0],
          rotation: 180,
          texture: "#0",
        },
        west: {
          uv: [14.625, 1.25, 15.625, 0],
          rotation: 180,
          texture: "#0",
        },
        up: {
          uv: [14.625, 1.25, 15.625, 0],
          rotation: 180,
          texture: "#0",
        },
        down: {
          uv: [14.625, 1.25, 15.625, 0],
          rotation: 180,
          texture: "#0",
        },
      },
    },
    {
      from: [7, -3.75, 12],
      to: [9, 3.75, 13.5],
      rotation: {
        angle: 0,
        axis: "z",
        origin: [8, 0.5, 7.43151],
      },
      faces: {
        north: {
          uv: [14.625, 0, 15.625, 1.25],
          texture: "#0",
        },
        east: {
          uv: [14.625, 0, 15.625, 1.25],
          rotation: 180,
          texture: "#0",
        },
        south: {
          uv: [14.625, 0, 15.625, 1.25],
          rotation: 180,
          texture: "#0",
        },
        west: {
          uv: [14.625, 0, 15.625, 1.25],
          rotation: 180,
          texture: "#0",
        },
        up: {
          uv: [14.625, 0, 15.625, 1.25],
          rotation: 180,
          texture: "#0",
        },
        down: {
          uv: [14.625, 0, 15.625, 1.25],
          rotation: 180,
          texture: "#0",
        },
      },
    },
    {
      from: [7, -3.75, 8.25],
      to: [9, -2.25, 12],
      rotation: {
        angle: 0,
        axis: "z",
        origin: [8, 0.5, 7.43151],
      },
      faces: {
        north: {
          uv: [14.625, 0, 15.625, 1.25],
          texture: "#0",
        },
        east: {
          uv: [14.625, 0, 15.625, 1.25],
          rotation: 180,
          texture: "#0",
        },
        south: {
          uv: [14.625, 0, 15.625, 1.25],
          rotation: 180,
          texture: "#0",
        },
        west: {
          uv: [14.625, 0, 15.625, 1.25],
          rotation: 180,
          texture: "#0",
        },
        up: {
          uv: [14.625, 0, 15.625, 1.25],
          rotation: 180,
          texture: "#0",
        },
        down: {
          uv: [14.625, 0, 15.625, 1.25],
          rotation: 180,
          texture: "#0",
        },
      },
    },
    {
      from: [7.24424, -2.47123, 13.36794],
      to: [8.51936, -2.18143, 16.26594],
      rotation: {
        angle: 0,
        axis: "z",
        origin: [8, 0.5, 7.43151],
      },
      faces: {
        north: {
          uv: [10.75, 1.225, 10.5, 0.125],
          rotation: 270,
          texture: "#0",
        },
        east: {
          uv: [13, 0.375, 10.5, 0.125],
          rotation: 180,
          texture: "#0",
        },
        south: {
          uv: [10.75, 1.225, 10.5, 0.125],
          rotation: 90,
          texture: "#0",
        },
        west: {
          uv: [13, 0.375, 10.5, 0.125],
          texture: "#0",
        },
        up: {
          uv: [13, 1.225, 10.5, 0.125],
          rotation: 90,
          texture: "#0",
        },
        down: {
          uv: [13, 1.225, 10.5, 0.125],
          rotation: 90,
          texture: "#0",
        },
      },
    },
    {
      from: [7.24424, -1.89163, 13.36794],
      to: [8.51936, -1.60183, 16.26594],
      rotation: {
        angle: 0,
        axis: "z",
        origin: [8, 0.5, 7.43151],
      },
      faces: {
        north: {
          uv: [10.25, 1.225, 10, 0.125],
          rotation: 270,
          texture: "#0",
        },
        east: {
          uv: [12.5, 0.375, 10, 0.125],
          rotation: 180,
          texture: "#0",
        },
        south: {
          uv: [10.25, 1.225, 10, 0.125],
          rotation: 90,
          texture: "#0",
        },
        west: {
          uv: [12.5, 0.375, 10, 0.125],
          texture: "#0",
        },
        up: {
          uv: [12.5, 1.225, 10, 0.125],
          rotation: 90,
          texture: "#0",
        },
        down: {
          uv: [12.5, 1.225, 10, 0.125],
          rotation: 90,
          texture: "#0",
        },
      },
    },
    {
      from: [7.24424, -2.18143, 15.97614],
      to: [8.51936, -1.89163, 16.26594],
      rotation: {
        angle: 0,
        axis: "z",
        origin: [8, 0.5, 7.43151],
      },
      faces: {
        north: {
          uv: [8.75, 1.225, 9, 0.125],
          rotation: 270,
          texture: "#0",
        },
        east: {
          uv: [8.75, 0.375, 9, 0.125],
          rotation: 180,
          texture: "#0",
        },
        south: {
          uv: [8.75, 1.225, 9, 0.125],
          rotation: 90,
          texture: "#0",
        },
        west: {
          uv: [8.75, 0.375, 9, 0.125],
          texture: "#0",
        },
        up: {
          uv: [8.75, 1.225, 9, 0.125],
          rotation: 90,
          texture: "#0",
        },
        down: {
          uv: [8.75, 1.225, 9, 0.125],
          rotation: 90,
          texture: "#0",
        },
      },
    },
    {
      from: [1.40079, -0.01936, 6.60581],
      to: [1.69059, 1.25576, 9.50381],
      rotation: {
        angle: 0,
        axis: "z",
        origin: [8, 0.5, 7.43151],
      },
      faces: {
        north: {
          uv: [10, 1.225, 10.25, 0.125],
          rotation: 180,
          texture: "#0",
        },
        east: {
          uv: [10, 1.225, 12.5, 0.125],
          rotation: 180,
          texture: "#0",
        },
        south: {
          uv: [10, 1.225, 10.25, 0.125],
          rotation: 180,
          texture: "#0",
        },
        west: {
          uv: [10, 1.225, 12.5, 0.125],
          rotation: 180,
          texture: "#0",
        },
        up: {
          uv: [10, 0.375, 12.5, 0.125],
          rotation: 90,
          texture: "#0",
        },
        down: {
          uv: [10, 0.375, 12.5, 0.125],
          rotation: 270,
          texture: "#0",
        },
      },
    },
    {
      from: [1.98039, -0.01936, 6.60581],
      to: [2.27019, 1.25576, 9.50381],
      rotation: {
        angle: 0,
        axis: "z",
        origin: [8, 0.5, 7.43151],
      },
      faces: {
        north: {
          uv: [10, 1.225, 10.25, 0.125],
          rotation: 180,
          texture: "#0",
        },
        east: {
          uv: [10, 1.225, 12.5, 0.125],
          rotation: 180,
          texture: "#0",
        },
        south: {
          uv: [10, 1.225, 10.25, 0.125],
          rotation: 180,
          texture: "#0",
        },
        west: {
          uv: [10, 1.225, 12.5, 0.125],
          rotation: 180,
          texture: "#0",
        },
        up: {
          uv: [10, 0.375, 12.5, 0.125],
          rotation: 90,
          texture: "#0",
        },
        down: {
          uv: [10, 0.375, 12.5, 0.125],
          rotation: 270,
          texture: "#0",
        },
      },
    },
    {
      from: [7.24424, -5.80941, 6.60581],
      to: [8.51936, -5.51961, 6.89561],
      rotation: {
        angle: 0,
        axis: "z",
        origin: [8, 0.5, 7.43151],
      },
      faces: {
        north: {
          uv: [9, 1.225, 8.75, 0.125],
          rotation: 270,
          texture: "#0",
        },
        east: {
          uv: [9, 0.375, 8.75, 0.125],
          rotation: 180,
          texture: "#0",
        },
        south: {
          uv: [9, 1.225, 8.75, 0.125],
          rotation: 90,
          texture: "#0",
        },
        west: {
          uv: [9, 0.375, 8.75, 0.125],
          texture: "#0",
        },
        up: {
          uv: [9, 1.225, 8.75, 0.125],
          rotation: 90,
          texture: "#0",
        },
        down: {
          uv: [9, 1.225, 8.75, 0.125],
          rotation: 90,
          texture: "#0",
        },
      },
    },
    {
      from: [1.99584, -4.21489, 11.53414],
      to: [6.05304, -3.92509, 12.80926],
      rotation: {
        angle: 22.5,
        axis: "z",
        origin: [8, 0.5, 7.43151],
      },
      faces: {
        north: {
          uv: [10.25, 0, 13.75, 0.25],
          texture: "#0",
        },
        east: {
          uv: [10.25, 0, 10.5, 1.1],
          rotation: 270,
          texture: "#0",
        },
        south: {
          uv: [10.25, 0, 13.75, 0.25],
          rotation: 180,
          texture: "#0",
        },
        west: {
          uv: [10.25, 0, 10.5, 1.1],
          rotation: 90,
          texture: "#0",
        },
        up: {
          uv: [10.25, 0, 13.75, 1.1],
          rotation: 180,
          texture: "#0",
        },
        down: {
          uv: [10.25, 0, 13.75, 1.1],
          rotation: 180,
          texture: "#0",
        },
      },
    },
    {
      from: [1.99584, -3.92509, 11.53414],
      to: [2.28564, -3.63529, 12.80926],
      rotation: {
        angle: 22.5,
        axis: "z",
        origin: [8, 0.5, 7.43151],
      },
      faces: {
        north: {
          uv: [9, 1.375, 8.75, 1.125],
          texture: "#0",
        },
        east: {
          uv: [9, 2.225, 8.75, 1.125],
          rotation: 270,
          texture: "#0",
        },
        south: {
          uv: [9, 1.375, 8.75, 1.125],
          rotation: 180,
          texture: "#0",
        },
        west: {
          uv: [9, 2.225, 8.75, 1.125],
          rotation: 90,
          texture: "#0",
        },
        up: {
          uv: [9, 2.225, 8.75, 1.125],
          rotation: 180,
          texture: "#0",
        },
        down: {
          uv: [9, 2.225, 8.75, 1.125],
          rotation: 180,
          texture: "#0",
        },
      },
    },
    {
      from: [1.99584, -3.63529, 11.53414],
      to: [6.05304, -3.34549, 12.80926],
      rotation: {
        angle: 22.5,
        axis: "z",
        origin: [8, 0.5, 7.43151],
      },
      faces: {
        north: {
          uv: [10, 1.475, 13.5, 1.225],
          texture: "#0",
        },
        east: {
          uv: [10, 2.325, 10.25, 1.225],
          rotation: 270,
          texture: "#0",
        },
        south: {
          uv: [10, 1.475, 13.5, 1.225],
          rotation: 180,
          texture: "#0",
        },
        west: {
          uv: [10, 2.325, 10.25, 1.225],
          rotation: 90,
          texture: "#0",
        },
        up: {
          uv: [10, 2.325, 13.5, 1.225],
          rotation: 180,
          texture: "#0",
        },
        down: {
          uv: [10, 2.325, 13.5, 1.225],
          rotation: 180,
          texture: "#0",
        },
      },
    },
    {
      from: [9.79776, -3.77594, 11.53414],
      to: [13.85496, -3.48614, 12.80926],
      rotation: {
        angle: -22.5,
        axis: "z",
        origin: [8, 0.5, 7.43151],
      },
      faces: {
        north: {
          uv: [10, 0.375, 13.5, 0.125],
          texture: "#0",
        },
        east: {
          uv: [10, 1.225, 10.25, 0.125],
          rotation: 270,
          texture: "#0",
        },
        south: {
          uv: [10, 0.375, 13.5, 0.125],
          rotation: 180,
          texture: "#0",
        },
        west: {
          uv: [10, 1.225, 10.25, 0.125],
          rotation: 90,
          texture: "#0",
        },
        up: {
          uv: [10, 1.225, 13.5, 0.125],
          rotation: 180,
          texture: "#0",
        },
        down: {
          uv: [10, 1.225, 13.5, 0.125],
          rotation: 180,
          texture: "#0",
        },
      },
    },
    {
      from: [9.79776, -4.35554, 11.53414],
      to: [13.85496, -4.06574, 12.80926],
      rotation: {
        angle: -22.5,
        axis: "z",
        origin: [8, 0.5, 7.43151],
      },
      faces: {
        north: {
          uv: [10, 0.375, 13.5, 0.125],
          texture: "#0",
        },
        east: {
          uv: [10, 1.225, 10.25, 0.125],
          rotation: 270,
          texture: "#0",
        },
        south: {
          uv: [10, 0.375, 13.5, 0.125],
          rotation: 180,
          texture: "#0",
        },
        west: {
          uv: [10, 1.225, 10.25, 0.125],
          rotation: 90,
          texture: "#0",
        },
        up: {
          uv: [10, 1.225, 13.5, 0.125],
          rotation: 180,
          texture: "#0",
        },
        down: {
          uv: [10, 1.225, 13.5, 0.125],
          rotation: 180,
          texture: "#0",
        },
      },
    },
    {
      from: [13.56516, -4.06574, 11.53414],
      to: [13.85496, -3.77594, 12.80926],
      rotation: {
        angle: -22.5,
        axis: "z",
        origin: [8, 0.5, 7.43151],
      },
      faces: {
        north: {
          uv: [9, 0.375, 8.75, 0.125],
          texture: "#0",
        },
        east: {
          uv: [9, 1.225, 8.75, 0.125],
          rotation: 270,
          texture: "#0",
        },
        south: {
          uv: [9, 0.375, 8.75, 0.125],
          rotation: 180,
          texture: "#0",
        },
        west: {
          uv: [9, 1.225, 8.75, 0.125],
          rotation: 90,
          texture: "#0",
        },
        up: {
          uv: [9, 1.225, 8.75, 0.125],
          rotation: 180,
          texture: "#0",
        },
        down: {
          uv: [9, 1.225, 8.75, 0.125],
          rotation: 180,
          texture: "#0",
        },
      },
    },
  ],
  display: {
    thirdperson_righthand: {
      rotation: [0, -90, 0],
      translation: [2, 6, 4.25],
    },
    thirdperson_lefthand: {
      rotation: [0, -90, 0],
      translation: [2, 6, 4.25],
    },
    firstperson_righthand: {
      rotation: [0, 0, -4],
      translation: [0, -6, 0],
    },
    firstperson_lefthand: {
      rotation: [0, 0, -4],
      translation: [0, -6, 0],
    },
    ground: {
      translation: [0, 3.25, 0],
      scale: [0.26, 0.26, 0.26],
    },
    gui: {
      rotation: [-180, 32, -176],
      translation: [0.75, 3.25, 0],
      scale: [0.42, 0.42, 0.42],
    },
    fixed: {
      translation: [0, 3.5, -1],
      scale: [0.5, 0.5, 0.5],
    },
  },
  groups: [
    {
      name: "present",
      origin: [0, 0, 0],
      color: 0,
      children: [0, 1, 2, 3, 4],
    },
    {
      name: "handle",
      origin: [0, 0, 0],
      color: 0,
      children: [],
    },
    {
      name: "ribbon",
      origin: [8, 8, 8],
      color: 0,
      children: [
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        {
          name: "3",
          origin: [8, 8, 8],
          color: 0,
          children: [15, 16, 17],
        },
        {
          name: "4",
          origin: [8, 8, 8],
          color: 0,
          children: [18, 19, 20],
        },
        {
          name: "2",
          origin: [8, 8, 8],
          color: 0,
          children: [21, 22, 23],
        },
        {
          name: "1",
          origin: [8, 8, 8],
          color: 0,
          children: [24, 25, 26],
        },
      ],
    },
    {
      name: "handle",
      origin: [8, 8, 8],
      color: 0,
      children: [
        27,
        28,
        29,
        {
          name: "ribbon",
          origin: [8, 8, 8],
          color: 0,
          children: [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41],
        },
      ],
    },
  ],
};
