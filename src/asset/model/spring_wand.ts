import { Minecraft } from "lib/types";

export const springWandModel: Minecraft.ItemModel = {
	"credit": "Made with Blockbench",
	"texture_size": [64, 64],
	"textures": {
		"0": "the_vault:item/gear/wand/spring_wand",
		"particle": "the_vault:item/gear/wand/spring_wand"
	},
	"elements": [
		{
			"from": [7, 0, 7],
			"to": [9, 14, 9],
			"rotation": {"angle": 0, "axis": "y", "origin": [7, 0, 7]},
			"faces": {
				"north": {"uv": [2.25, 7.25, 2.75, 10.75], "texture": "#0"},
				"east": {"uv": [2.75, 7.75, 3.25, 11.25], "texture": "#0"},
				"south": {"uv": [3.25, 7.75, 3.75, 11.25], "texture": "#0"},
				"west": {"uv": [3.75, 7.75, 4.25, 11.25], "texture": "#0"},
				"up": {"uv": [3.5, 5, 3, 4.5], "texture": "#0"},
				"down": {"uv": [4, 4.5, 3.5, 5], "texture": "#0"}
			}
		},
		{
			"from": [3.5, 14, 7.5],
			"to": [12.5, 15, 8.5],
			"rotation": {"angle": 0, "axis": "y", "origin": [3.5, 14, 7.5]},
			"faces": {
				"north": {"uv": [7.75, 2.5, 10, 2.75], "texture": "#0"},
				"east": {"uv": [4, 4.5, 4.25, 4.75], "texture": "#0"},
				"south": {"uv": [7.75, 2.75, 10, 3], "texture": "#0"},
				"west": {"uv": [4.25, 4.5, 4.5, 4.75], "texture": "#0"},
				"up": {"uv": [10, 3.25, 7.75, 3], "texture": "#0"},
				"down": {"uv": [10, 3.25, 7.75, 3.5], "texture": "#0"}
			}
		},
		{
			"from": [3.5, 24, 7.5],
			"to": [12.5, 25, 8.5],
			"rotation": {"angle": 0, "axis": "y", "origin": [3.5, 24, 7.5]},
			"faces": {
				"north": {"uv": [7.75, 3.5, 10, 3.75], "texture": "#0"},
				"east": {"uv": [4, 4.75, 4.25, 5], "texture": "#0"},
				"south": {"uv": [7.75, 3.75, 10, 4], "texture": "#0"},
				"west": {"uv": [4.25, 4.75, 4.5, 5], "texture": "#0"},
				"up": {"uv": [10.5, 4.25, 8.25, 4], "texture": "#0"},
				"down": {"uv": [10.5, 4.25, 8.25, 4.5], "texture": "#0"}
			}
		},
		{
			"from": [2.5, 15, 7.5],
			"to": [3.5, 24, 8.5],
			"rotation": {"angle": 0, "axis": "y", "origin": [2.5, 22, 7.5]},
			"faces": {
				"north": {"uv": [5.25, 7.75, 5.5, 10], "texture": "#0"},
				"east": {"uv": [5.5, 7.75, 5.75, 10], "texture": "#0"},
				"south": {"uv": [5.75, 7.75, 6, 10], "texture": "#0"},
				"west": {"uv": [6, 7.75, 6.25, 10], "texture": "#0"},
				"up": {"uv": [3.25, 5.25, 3, 5], "texture": "#0"},
				"down": {"uv": [3.5, 5, 3.25, 5.25], "texture": "#0"}
			}
		},
		{
			"from": [3.5, 13, 8.5],
			"to": [3.5, 24, 14.5],
			"rotation": {"angle": 0, "axis": "y", "origin": [2.5, 22, 8.5]},
			"faces": {
				"north": {"uv": [0, 0, 0, 2.75], "texture": "#0"},
				"east": {"uv": [0, 4.5, 1.5, 7.25], "texture": "#0"},
				"south": {"uv": [0, 0, 0, 2.75], "texture": "#0"},
				"west": {"uv": [4.5, 0, 6, 2.75], "texture": "#0"},
				"up": {"uv": [0, 1.5, 0, 0], "texture": "#0"},
				"down": {"uv": [0, 0, 0, 1.5], "texture": "#0"}
			}
		},
		{
			"from": [4.5, 15, 13.5],
			"to": [4.5, 24, 22.5],
			"rotation": {"angle": 22.5, "axis": "x", "origin": [4.5, 24, 14.5]},
			"faces": {
				"north": {"uv": [0, 0, 0, 2.25], "texture": "#0"},
				"east": {"uv": [0, 0, 2.25, 2.25], "texture": "#0"},
				"south": {"uv": [0, 0, 0, 2.25], "texture": "#0"},
				"west": {"uv": [0, 2.25, 2.25, 4.5], "texture": "#0"},
				"up": {"uv": [0, 2.25, 0, 0], "texture": "#0"},
				"down": {"uv": [0, 0, 0, 2.25], "texture": "#0"}
			}
		},
		{
			"from": [11.5, 15, 13.5],
			"to": [11.5, 24, 22.5],
			"rotation": {"angle": 22.5, "axis": "x", "origin": [11.5, 24, 14.5]},
			"faces": {
				"north": {"uv": [0, 0, 0, 2.25], "texture": "#0"},
				"east": {"uv": [2.25, 0, 4.5, 2.25], "texture": "#0"},
				"south": {"uv": [0, 0, 0, 2.25], "texture": "#0"},
				"west": {"uv": [2.25, 2.25, 4.5, 4.5], "texture": "#0"},
				"up": {"uv": [0, 2.25, 0, 0], "texture": "#0"},
				"down": {"uv": [0, 0, 0, 2.25], "texture": "#0"}
			}
		},
		{
			"from": [3.5, 13, 13.5],
			"to": [4.5, 24, 13.5],
			"rotation": {"angle": 0, "axis": "y", "origin": [3.5, 22, 8.5]},
			"faces": {
				"north": {"uv": [4.25, 7.75, 4.5, 10.5], "texture": "#0"},
				"east": {"uv": [0, 0, 0, 2.75], "texture": "#0"},
				"south": {"uv": [4.5, 7.75, 4.75, 10.5], "texture": "#0"},
				"west": {"uv": [0, 0, 0, 2.75], "texture": "#0"},
				"up": {"uv": [0.25, 0, 0, 0], "texture": "#0"},
				"down": {"uv": [0.25, 0, 0, 0], "texture": "#0"}
			}
		},
		{
			"from": [11.5, 13, 13.5],
			"to": [12.5, 24, 13.5],
			"rotation": {"angle": 0, "axis": "y", "origin": [12.5, 22, 8.5]},
			"faces": {
				"north": {"uv": [4.75, 7.75, 5, 10.5], "texture": "#0"},
				"east": {"uv": [0, 0, 0, 2.75], "texture": "#0"},
				"south": {"uv": [5, 7.75, 5.25, 10.5], "texture": "#0"},
				"west": {"uv": [0, 0, 0, 2.75], "texture": "#0"},
				"up": {"uv": [0.25, 0, 0, 0], "texture": "#0"},
				"down": {"uv": [0.25, 0, 0, 0], "texture": "#0"}
			}
		},
		{
			"from": [12.5, 13, 8.5],
			"to": [12.5, 24, 14.5],
			"rotation": {"angle": 0, "axis": "y", "origin": [13.5, 22, 8.5]},
			"faces": {
				"north": {"uv": [0, 0, 0, 2.75], "texture": "#0"},
				"east": {"uv": [1.5, 4.5, 3, 7.25], "texture": "#0"},
				"south": {"uv": [0, 0, 0, 2.75], "texture": "#0"},
				"west": {"uv": [4.5, 2.75, 6, 5.5], "texture": "#0"},
				"up": {"uv": [0, 1.5, 0, 0], "texture": "#0"},
				"down": {"uv": [0, 0, 0, 1.5], "texture": "#0"}
			}
		},
		{
			"from": [12.5, 15, 7.5],
			"to": [13.5, 24, 8.5],
			"rotation": {"angle": 0, "axis": "y", "origin": [12.5, 22, 7.5]},
			"faces": {
				"north": {"uv": [6.25, 7.75, 6.5, 10], "texture": "#0"},
				"east": {"uv": [6.5, 8.25, 6.75, 10.5], "texture": "#0"},
				"south": {"uv": [6.75, 8.25, 7, 10.5], "texture": "#0"},
				"west": {"uv": [7, 8.25, 7.25, 10.5], "texture": "#0"},
				"up": {"uv": [3.75, 5.25, 3.5, 5], "texture": "#0"},
				"down": {"uv": [4, 5, 3.75, 5.25], "texture": "#0"}
			}
		},
		{
			"from": [3.5, 15, 8.5],
			"to": [12.5, 15, 13.5],
			"rotation": {"angle": 0, "axis": "y", "origin": [3.5, 15, 7.5]},
			"faces": {
				"north": {"uv": [0, 0, 2.25, 0], "texture": "#0"},
				"east": {"uv": [0, 0, 1.25, 0], "texture": "#0"},
				"south": {"uv": [0, 0, 2.25, 0], "texture": "#0"},
				"west": {"uv": [0, 0, 1.25, 0], "texture": "#0"},
				"up": {"uv": [8.75, 8.25, 6.5, 7], "texture": "#0"},
				"down": {"uv": [2.25, 7.25, 0, 8.5], "texture": "#0"}
			}
		},
		{
			"from": [4.5, 15, 13.5],
			"to": [11.5, 15, 18.5],
			"rotation": {"angle": 22.5, "axis": "x", "origin": [3.5, 15, 13.5]},
			"faces": {
				"north": {"uv": [0, 0, 1.75, 0], "texture": "#0"},
				"east": {"uv": [0, 0, 1.25, 0], "texture": "#0"},
				"south": {"uv": [0, 0, 1.75, 0], "texture": "#0"},
				"west": {"uv": [0, 0, 1.25, 0], "texture": "#0"},
				"up": {"uv": [9.5, 1.25, 7.75, 0], "texture": "#0"},
				"down": {"uv": [9.5, 1.25, 7.75, 2.5], "texture": "#0"}
			}
		},
		{
			"from": [3.5, 24, 8.5],
			"to": [12.5, 24, 14.5],
			"rotation": {"angle": 0, "axis": "y", "origin": [3.5, 24, 8.5]},
			"faces": {
				"north": {"uv": [0, 0, 2.25, 0], "texture": "#0"},
				"east": {"uv": [0, 0, 1.5, 0], "texture": "#0"},
				"south": {"uv": [0, 0, 2.25, 0], "texture": "#0"},
				"west": {"uv": [0, 0, 1.5, 0], "texture": "#0"},
				"up": {"uv": [8.25, 5.5, 6, 4], "texture": "#0"},
				"down": {"uv": [8.75, 5.5, 6.5, 7], "texture": "#0"}
			}
		},
		{
			"from": [4.5, 24, 14.5],
			"to": [11.5, 24, 22.5],
			"rotation": {"angle": 22.5, "axis": "x", "origin": [3.5, 24, 14.5]},
			"faces": {
				"north": {"uv": [0, 0, 1.75, 0], "texture": "#0"},
				"east": {"uv": [0, 0, 2, 0], "texture": "#0"},
				"south": {"uv": [0, 0, 1.75, 0], "texture": "#0"},
				"west": {"uv": [0, 0, 2, 0], "texture": "#0"},
				"up": {"uv": [7.75, 2, 6, 0], "texture": "#0"},
				"down": {"uv": [7.75, 2, 6, 4], "texture": "#0"}
			}
		},
		{
			"from": [4.5, 15, 22.5],
			"to": [11.5, 24, 22.5],
			"rotation": {"angle": 22.5, "axis": "x", "origin": [3.5, 24, 14.5]},
			"faces": {
				"north": {"uv": [3, 5.5, 4.75, 7.75], "texture": "#0"},
				"east": {"uv": [0, 0, 0, 2.25], "texture": "#0"},
				"south": {"uv": [4.75, 5.5, 6.5, 7.75], "texture": "#0"},
				"west": {"uv": [0, 0, 0, 2.25], "texture": "#0"},
				"up": {"uv": [1.75, 0, 0, 0], "texture": "#0"},
				"down": {"uv": [1.75, 0, 0, 0], "texture": "#0"}
			}
		}
	],
	"display": {
		"thirdperson_righthand": {
			"rotation": [0, 146, 0],
			"translation": [0, 0, 1.5],
			"scale": [0.6, 0.6, 0.6]
		},
		"thirdperson_lefthand": {
			"rotation": [0, 146, 0],
			"translation": [0, 0, 1.5],
			"scale": [0.6, 0.6, 0.6]
		},
		"firstperson_righthand": {
			"rotation": [7, 17, -13],
			"translation": [0, -0.75, 0],
			"scale": [0.5, 0.5, 0.5]
		},
		"firstperson_lefthand": {
			"rotation": [7, 17, -13],
			"translation": [0, -0.75, 0],
			"scale": [0.5, 0.5, 0.5]
		},
		"ground": {
			"rotation": [-67, -118, 0],
			"translation": [0, 1, 0],
			"scale": [0.5, 0.5, 0.5]
		},
		"gui": {
			"rotation": [146.9, 30.5, -146.2],
			"translation": [-2.5, -2.5, 0],
			"scale": [0.6, 0.6, 0.6]
		},
		"fixed": {
			"rotation": [35.14, -36.64, 49.71],
			"translation": [2.25, -2.75, -1],
			"scale": [0.7, 0.7, 0.7]
		}
	}
};
