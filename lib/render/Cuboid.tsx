import { MeshMinecraftMaterial } from "lib/render/MeshMinecraftMaterial";
import { useEffect, useMemo, useRef } from "react";
import { BoxGeometry, BufferAttribute, Mesh } from "three";
import { Minecraft } from "../types";

function prepFaceUV(uv: Minecraft.Vec4, material?: MeshMinecraftMaterial) {
  const mcmeta = material?.mcmeta;
  const frameWidth = mcmeta?.animation?.width ?? material?.map?.image?.width;
  const frameHeight =
    mcmeta?.animation != null
      ? mcmeta?.animation?.height ?? material?.map?.image?.height
      : material?.map?.image?.height;
  const frameCount = mcmeta != null ? frameHeight / frameWidth : 1;

  const left = uv[0] / 16;
  const right = uv[2] / 16;
  const bottom = (1 - uv[1] / 16) / frameCount;
  const top = (1 - uv[3] / 16) / frameCount;

  // prettier-ignore
  return [
    left, bottom, 
    right, bottom, 
    left, top, 
    right, top
  ];
}

export const Cuboid = (props: {
  materialMap: Record<Minecraft.CuboidSide, MeshMinecraftMaterial>;
  element: Minecraft.ItemModelElement;
}) => {
  const meshRef = useRef<Mesh>(null);

  const lenX = props.element.to[0] - props.element.from[0];
  const lenY = props.element.to[1] - props.element.from[1];
  const lenZ = props.element.to[2] - props.element.from[2];

  const geometry = useMemo(() => new BoxGeometry(lenX, lenY, lenZ), []);

  const materials = [
    props.materialMap.east,
    props.materialMap.west,
    props.materialMap.up,
    props.materialMap.down,
    props.materialMap.south,
    props.materialMap.north,
  ];

  useEffect(() => {
    const faces = props.element.faces;
    geometry.setAttribute(
      "uv",
      new BufferAttribute(
        new Float32Array([
          ...prepFaceUV(faces.east.uv, props.materialMap.east), // 0
          ...prepFaceUV(faces.west.uv, props.materialMap.west), // 1
          ...prepFaceUV(faces.up.uv, props.materialMap.up), // 2
          ...prepFaceUV(faces.down.uv, props.materialMap.down), // 3
          ...prepFaceUV(faces.south.uv, props.materialMap.south), // 4
          ...prepFaceUV(faces.north.uv, props.materialMap.north), // 5
        ]),
        2
      )
    );
  }, [geometry, props.element]);

  useEffect(() => {
    const angle = props.element.rotation?.angle ?? 0;
    const axis = props.element.rotation?.axis;
    const pivot = props.element.rotation?.origin;

    if (angle !== 0) {
      const mesh = meshRef.current!;

      const deltaPivot = [
        pivot![0] - props.element.from[0] - lenX / 2,
        pivot![1] - props.element.from[1] - lenY / 2,
        pivot![2] - props.element.from[2] - lenZ / 2,
      ];

      mesh.translateX(deltaPivot[0]);
      mesh.translateY(deltaPivot[1]);
      mesh.translateZ(deltaPivot[2]);

      if (axis === "x") {
        mesh.rotateX(angle * (Math.PI / 180));
      } else if (axis === "y") {
        mesh.rotateY(angle * (Math.PI / 180));
      } else if (axis === "z") {
        mesh.rotateZ(angle * (Math.PI / 180));
      }

      mesh.translateX(-deltaPivot[0]);
      mesh.translateY(-deltaPivot[1]);
      mesh.translateZ(-deltaPivot[2]);
    }
  }, []);

  return (
    <mesh
      ref={meshRef}
      geometry={geometry}
      material={materials}
      position={[
        props.element.from[0] + lenX / 2 - 8,
        props.element.from[1] + lenY / 2 - 8,
        props.element.from[2] + lenZ / 2 - 8,
      ]}
    />
  );
};
