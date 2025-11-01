import { Cuboid } from '@iskallia-dev/item-model-renderer';
import { OrthographicCamera } from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';
import { RenderContext, useItemModelGlContext } from 'lib/context/ItemModelGl.ctx';
import { MeshMinecraftMaterial } from 'lib/render/MeshMinecraftMaterial';
import { TextureLoader } from 'lib/render/TextureLoader';
import { ComponentRef, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { Minecraft } from '../types';

const IDENTITY_TRANSFORM: Minecraft.ItemModelTransformation = {
	rotation: [0, 0, 0],
	translation: [0, 0, 0],
	scale: [1, 1, 1],
};

export const ItemModelRender = () => {
	const canvasRef = useRef<ComponentRef<'canvas'>>(null);

	const imgl = useItemModelGlContext();

	const currentCtx = !imgl.renderingItem ? undefined : imgl.renderContextMap.current.get(imgl.renderingItem);

	return (
		<>
			{imgl.renderingItem &&
				createPortal(
					<div
						id="iskallia-item-model-renderer"
						style={{
							width: currentCtx?.imageSize,
							height: currentCtx?.imageSize,
							position: 'fixed',
							top: '-100%',
							left: '-100%',
						}}>
						<Canvas ref={canvasRef} gl={{ preserveDrawingBuffer: true }}>
							{currentCtx && <ItemModel key={currentCtx.itemId} ctx={currentCtx} />}
						</Canvas>
					</div>,
					document.body,
				)}
		</>
	);
};

export function ItemModel(props: { ctx: RenderContext }) {
	const imgl = useItemModelGlContext();
	const gl = useThree((state) => state.gl);

	const modelTransformName = imgl.itemModelTransform ?? 'gui';
	const modelTransformation = props.ctx.itemModel.display[modelTransformName] ?? IDENTITY_TRANSFORM;

	const materialLookup = useRef(new Map<string, MeshMinecraftMaterial>());

	const zoomFactor = imgl.zoomFactor ?? 1;
	const zoom = zoomFactor * ((25 / 480) * (props.ctx.imageSize ?? 480));

	const [materialMaps, setMaterialMaps] = useState<Record<Minecraft.CuboidSide, MeshMinecraftMaterial>[]>();

	useEffect(() => {
		console.debug('Rendering', props.ctx);

		const loadFaceMaterial = async (face: Minecraft.ItemModelFace) => {
			const textureRef = face.texture.substring(1);
			const textureLocation = props.ctx.itemModel.textures[textureRef];
			if (!textureLocation) return null;

			const textureUrl = imgl.resolveTextureUrl(textureLocation);

			if (materialLookup.current.has(textureUrl)) {
				return materialLookup.current.get(textureUrl)!;
			}

			const texture = await TextureLoader.getOrLoadItemTexture(textureUrl);

			const material = new MeshMinecraftMaterial(imgl.mcmetaCache.current.get(textureLocation), {
				map: texture,
				transparent: true,
				alphaTest: 1,
			});

			materialLookup.current.set(textureUrl, material);

			return material;
		};

		const loadMaterialMap = async (element: Minecraft.ItemModelElement) => {
			const entries = await Promise.all(
				Object.entries(element.faces).map(async ([side, face]) => [side, await loadFaceMaterial(face)] as const),
			);
			return Object.fromEntries(entries) as Record<Minecraft.CuboidSide, MeshMinecraftMaterial>;
		};

		const loadMaterialMaps = async () => {
			const loadedMaps = await Promise.all(props.ctx.itemModel.elements.map((element) => loadMaterialMap(element)));
			setMaterialMaps(loadedMaps);

			setTimeout(() => {
				const image = gl.domElement.toDataURL('image/png');
				imgl.finishRendering(props.ctx.itemId, image);
			}, imgl.individualRenderWait ?? 100);
		};

		loadMaterialMaps();
	}, []);

	return (
		<>
			<OrthographicCamera makeDefault manual zoom={zoom} position={[0, 0, 100]} />

			<ambientLight intensity={0.3} color={0xffffff} />

			<directionalLight
				position={[10, 15, 10]}
				intensity={1.5}
				color={0xffffff}
				castShadow={false}
			/>

			<directionalLight
				position={[-8, -5, 5]}
				intensity={0.5}
				color={0xffffff}
				castShadow={false}
			/>

			<directionalLight
				position={[-5, 10, -8]}
				intensity={0.7}
				color={0xffffff}
				castShadow={false}
			/>

			<pointLight position={[0, 15, 15]} intensity={0.4} distance={50} color={0xffffff} />

			<group
				position={modelTransformation.translation}
				rotation={modelTransformation.rotation?.map((deg) => (deg * Math.PI) / 180) as Minecraft.Vec3}
				scale={modelTransformation.scale}>
				{materialMaps != null &&
					props.ctx.itemModel.elements.map((element, i) => (
						<Cuboid key={i} element={element} materialMap={materialMaps[i]} />
					))}
			</group>
		</>
	);
}
