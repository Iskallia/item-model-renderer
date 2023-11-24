import { Cuboid } from "@iskallia/item-model-renderer";
import { OrthographicCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { MeshMinecraftMaterial } from "lib/render/MeshMinecraftMaterial";
import { TextureLoader } from "lib/render/TextureLoader";
import { ObjUtils } from "lib/util/obj.utils";
import { useRef } from "react";
import usePromise from "react-use-promise";
import { degToRad } from "three/src/math/MathUtils";
import useResizeObserver from "use-resize-observer";
import { Minecraft } from "../types";

interface Props {
  itemModel: Minecraft.ItemModel;
  itemModelTransform?: Minecraft.ItemModelTransformationName;
  resolveTextureUrl: (resourceLocation: string) => string;
  resolveMcmeta: (resourceLocation: string) => Promise<Minecraft.Mcmeta | null>;
  zoomFactor?: number;
}

const IDENTITY_TRANSFORM: Minecraft.ItemModelTransformation = {
  rotation: [0, 0, 0],
  translation: [0, 0, 0],
  scale: [1, 1, 1],
};

export const ItemModelRender = (props: Props) => {
  const modelTransformName = props.itemModelTransform ?? "gui";
  const modelTransformation =
    props.itemModel.display[modelTransformName] ?? IDENTITY_TRANSFORM;

  const canvasRef = useResizeObserver<HTMLCanvasElement>({ box: "border-box" });

  const materialLookup = useRef(new Map<string, MeshMinecraftMaterial>());

  const [mcmetaData] = usePromise(
    () =>
      Promise.all(
        ObjUtils.getValues(props.itemModel.textures).map(async (textureId) => [
          textureId,
          await props.resolveMcmeta(textureId),
        ])
      ).then(
        (entries) =>
          Object.fromEntries(entries) as Record<string, Minecraft.Mcmeta | null>
      ),
    [props.itemModel]
  );

  const zoomFactor = props.zoomFactor ?? 1;
  const zoom = zoomFactor * ((25 / 480) * (canvasRef.width ?? 480));

  if (mcmetaData == null) {
    return null;
  }

  return (
    <Canvas ref={canvasRef.ref}>
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
        {props.itemModel.elements.map((element, i) => {
          const materialMap = ObjUtils.mapObject(
            element.faces,
            (side, face) => {
              const textureRef = face.texture.substring(1);
              const textureLocation = props.itemModel.textures[textureRef];
              const textureUrl = props.resolveTextureUrl(textureLocation);

              if (materialLookup.current.has(textureUrl)) {
                return materialLookup.current.get(textureUrl)!;
              }

              const texture = TextureLoader.getOrLoadItemTexture(textureUrl);
              const material = new MeshMinecraftMaterial({
                map: texture,
                transparent: true,
                alphaTest: 1,
                mcmeta: mcmetaData[textureLocation],
              });

              materialLookup.current.set(textureUrl, material);

              return material;
            }
          );

          return <Cuboid key={i} element={element} materialMap={materialMap} />;
        })}
      </group>
    </Canvas>
  );
};
