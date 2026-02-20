import { MeshStandardMaterial, MeshStandardMaterialParameters, Texture } from 'three';

export declare namespace Minecraft {
	type Vec2 = [number, number];
	type Vec3 = [number, number, number];
	type Vec4 = [number, number, number, number];
	type Axis = 'x' | 'y' | 'z';
	type CuboidSide = 'up' | 'down' | 'west' | 'east' | 'north' | 'south';
	type ItemModelTransformationName =
		| 'thirdperson_righthand'
		| 'thirdperson_lefthand'
		| 'firstperson_righthand'
		| 'firstperson_lefthand'
		| 'ground'
		| 'gui'
		| 'fixed'
		| 'head';
	type Mcmeta = {
		animation: {
			interpolate?: boolean;
			width?: number;
			height?: number;
			frametime?: number;
			frames?: ({ index: number; time: number } | number)[];
		};
	};
	type ItemModelFace = { uv: Vec4; texture: string; rotation?: number };
	type ItemModelElement = {
		name?: string;
		from: Vec3;
		to: Vec3;
		rotation?: { angle: number; axis: Axis; origin: Vec3 };
		faces: Record<CuboidSide, ItemModelFace>;
	};
	type ItemModelTransformation = {
		rotation?: Vec3;
		translation?: Vec3;
		scale?: Vec3;
	};
	type ItemModel = {
		credit?: string;
		texture_size?: Vec2;
		textures: Record<string, string>;
		elements: ItemModelElement[];
		display: Partial<Record<ItemModelTransformationName, ItemModelTransformation>>;
		groups?: any;
		parent?: any;
		overrides?: any;
	};
}

export interface RenderContext {
	itemId: string;
	itemModel: Minecraft.ItemModel;
	imageSize: number;
}

export declare class MeshMinecraftMaterial extends MeshStandardMaterial {
	readonly mcmeta?: Minecraft.Mcmeta | null;
	constructor(mcmeta?: Minecraft.Mcmeta | null, parameters?: MeshStandardMaterialParameters);
}

export declare namespace TextureLoader {
	function getOrLoadItemTexture(url: string): Promise<Texture>;
}

export declare const Cuboid: (props: {
	materialMap: Record<Minecraft.CuboidSide, MeshMinecraftMaterial>;
	element: Minecraft.ItemModelElement;
}) => JSX.Element;

export declare const ItemModelRender: () => JSX.Element;

export declare function ItemModel(props: { ctx: RenderContext }): JSX.Element;

export declare function ItemModelDisplayer(props: {
	itemId: string;
	itemModel: Minecraft.ItemModel;
	renderedSize?: number;
	className?: string;
}): JSX.Element;

export declare const ItemModelGlProvider: (props: {
	resolveTextureUrl: (resourceLocation: string) => string;
	resolveMcmeta: (resourceLocation: string) => Promise<Minecraft.Mcmeta | null>;
	itemModelTransform?: Minecraft.ItemModelTransformationName;
	zoomFactor?: number;
	individualRenderWait?: number;
	children?: any;
}) => JSX.Element;

export declare const ItemModelGlConsumer: (props: {
	children: (value: {
		resolveTextureUrl: (resourceLocation: string) => string;
		resolveMcmeta: (resourceLocation: string) => Promise<Minecraft.Mcmeta | null>;
		itemModelTransform?: Minecraft.ItemModelTransformationName;
		zoomFactor?: number;
		individualRenderWait?: number;
		children?: any;
		imageCache: { current: Map<string, string> };
		mcmetaCache: { current: Map<string, Minecraft.Mcmeta | null> };
		renderContextMap: { current: Map<string, RenderContext> };
		renderingItem: string | undefined;
		renderQueue: { current: Set<string> };
		mcmetaQueue: { current: Set<string> };
		queueItemForRender: (ctx: RenderContext) => void;
		finishRendering: (itemId: string, img: string) => void;
	}) => any;
}) => JSX.Element;

export declare const useItemModelGlContext: () => {
	resolveTextureUrl: (resourceLocation: string) => string;
	resolveMcmeta: (resourceLocation: string) => Promise<Minecraft.Mcmeta | null>;
	itemModelTransform?: Minecraft.ItemModelTransformationName;
	zoomFactor?: number;
	individualRenderWait?: number;
	children?: any;
	imageCache: { current: Map<string, string> };
	mcmetaCache: { current: Map<string, Minecraft.Mcmeta | null> };
	renderContextMap: { current: Map<string, RenderContext> };
	renderingItem: string | undefined;
	renderQueue: { current: Set<string> };
	mcmetaQueue: { current: Set<string> };
	queueItemForRender: (ctx: RenderContext) => void;
	finishRendering: (itemId: string, img: string) => void;
};
