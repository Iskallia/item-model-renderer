import { Canvas } from "@react-three/fiber";
import { Minecraft } from "../types";
import { Cuboid } from "@iskallia/item-model-renderer";
import { useRef } from "react";
import { Material, MeshStandardMaterial } from "three";
import { degToRad } from "three/src/math/MathUtils";
import { ObjUtils } from "lib/util/obj.utils";
import { TextureLoader } from "lib/render/TextureLoader";

interface Props {
  itemModel: Minecraft.ItemModel;
  itemModelTransform?: Minecraft.ItemModelTransformationName;
  resolveTextureUrl: (resourceLocation: string) => string;
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

  const materialLookup = useRef(new Map<string, Material>());

  return (
    <Canvas orthographic camera={{ zoom: 25, position: [0, 0, 100] }}>
      <ambientLight intensity={0.25} color={0xffffffff} />
      <directionalLight position={[-1, -1, 10]} />

      <group
        position={modelTransformation.translation}
        rotation={modelTransformation.rotation?.map(degToRad) as Minecraft.Vec3}
        scale={modelTransformation.scale}
      >
        {props.itemModel.elements.map((element, i) => {
          const materialMap = ObjUtils.mapValues(
            element.faces,
            (side, face) => {
              const textureRef = face.texture.substring(1);
              const textureLocation = props.itemModel.textures[textureRef];
              const textureUrl = props.resolveTextureUrl(textureLocation);

              if (materialLookup.current.has(textureUrl)) {
                return materialLookup.current.get(textureUrl)!;
              }

              const texture = TextureLoader.getOrLoadItemTexture(textureUrl);
              const material = new MeshStandardMaterial({
                map: texture,
                transparent: true,
                alphaTest: 1,
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
