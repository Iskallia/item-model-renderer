import { Cuboid } from "@iskallia/item-model-renderer";
import { OrthographicCamera } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { MeshMinecraftMaterial } from "lib/render/MeshMinecraftMaterial";
import { TextureLoader } from "lib/render/TextureLoader";
import { ObjUtils } from "lib/util/obj.utils";
import { ComponentRef, useEffect, useRef, useState } from "react";
import usePromise from "react-use-promise";
import useResizeObserver from "use-resize-observer";
import { Minecraft } from "../types";
import { degToRad } from "three/src/math/MathUtils";
import { useItemModelGlContext } from "lib/context/ItemModelGl.ctx";

interface Props {
  itemId: string;
  itemModel: Minecraft.ItemModel;
}

const IDENTITY_TRANSFORM: Minecraft.ItemModelTransformation = {
  rotation: [0, 0, 0],
  translation: [0, 0, 0],
  scale: [1, 1, 1],
};

export const ItemModelRender = (props: Props) => {
  const canvasRef = useRef<ComponentRef<"canvas">>(null);

  const { width } = useResizeObserver<HTMLCanvasElement>({
    box: "border-box",
    ref: canvasRef,
  });

  return (
    <>
      <Canvas ref={canvasRef} gl={{ preserveDrawingBuffer: true }}>
        <ItemModel width={width} {...props} />
      </Canvas>
    </>
  );
};

export function ItemModel(props: Props & { width?: number }) {
  const imgl = useItemModelGlContext();
  const gl = useThree((state) => state.gl);

  const modelTransformName = imgl.itemModelTransform ?? "gui";
  const modelTransformation =
    props.itemModel.display[modelTransformName] ?? IDENTITY_TRANSFORM;

  const materialLookup = useRef(new Map<string, MeshMinecraftMaterial>());

  const zoomFactor = imgl.zoomFactor ?? 1;
  const zoom = zoomFactor * ((25 / 480) * (props.width ?? 480));

  const [materialMaps, setMaterialMaps] =
    useState<Record<Minecraft.CuboidSide, MeshMinecraftMaterial>[]>();

  useEffect(() => {
    const loadFaceMaterial = async (face: Minecraft.ItemModelFace) => {
      const textureRef = face.texture.substring(1);
      const textureLocation = props.itemModel.textures[textureRef];
      const textureUrl = imgl.resolveTextureUrl(textureLocation);

      if (materialLookup.current.has(textureUrl)) {
        return materialLookup.current.get(textureUrl)!;
      }

      const texture = await TextureLoader.getOrLoadItemTexture(textureUrl);

      const material = new MeshMinecraftMaterial({
        map: texture,
        transparent: true,
        alphaTest: 1,
        mcmeta: imgl.mcmmetaCache.current.get(textureLocation),
      });

      materialLookup.current.set(textureUrl, material);

      return material;
    };

    const loadMaterialMap = async (element: Minecraft.ItemModelElement) => {
      const entries = await Promise.all(
        Object.entries(element.faces).map(
          async ([side, face]) => [side, await loadFaceMaterial(face)] as const
        )
      );
      return Object.fromEntries(entries) as Record<
        Minecraft.CuboidSide,
        MeshMinecraftMaterial
      >;
    };

    (async function () {
      setMaterialMaps(
        await Promise.all(
          props.itemModel.elements.map((element) => loadMaterialMap(element))
        )
      );
    })();
  }, []);

  useEffect(() => {}, []);

  useEffect(() => {
    if (materialMaps != null) {
      setTimeout(() => {
        imgl.finishRendering(
          props.itemId,
          gl.domElement.toDataURL("image/png")
        );
      }, 100);
    }
  }, [materialMaps]);

  return (
    <>
      <OrthographicCamera
        makeDefault
        manual
        zoom={zoom}
        position={[0, 0, 100]}
      />

      <ambientLight intensity={0.25} color={0xffffffff} />
      <directionalLight position={[-1, -1, 10]} />

      <group
        position={modelTransformation.translation}
        rotation={modelTransformation.rotation?.map(degToRad) as Minecraft.Vec3}
        scale={modelTransformation.scale}
      >
        {materialMaps != null &&
          props.itemModel.elements.map((element, i) => (
            <Cuboid key={i} element={element} materialMap={materialMaps[i]} />
          ))}
      </group>
    </>
  );
}
