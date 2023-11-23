import { memo, useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { Minecraft } from "../types";
import { TextureLoader } from "lib/render/TextureLoader";

// Maybe we shall create our lightweight texture cache/registry?
THREE.Cache.enabled = true;

function prepFaceUV(uv: Minecraft.Vec4) {
  const left = uv[0] / 16;
  const right = uv[2] / 16;
  const bottom = 1 - uv[1] / 16;
  const top = 1 - uv[3] / 16;

  // prettier-ignore
  return [
    left, bottom, 
    right, bottom, 
    left, top, 
    right, top
  ];
}

export const Cuboid = memo(
  (props: {
    textureMap: Record<string, string>;
    element: Minecraft.ItemModelElement;
  }) => {
    const meshRef = useRef<THREE.Mesh>(null);

    const lenX = props.element.to[0] - props.element.from[0];
    const lenY = props.element.to[1] - props.element.from[1];
    const lenZ = props.element.to[2] - props.element.from[2];

    const geometry = useMemo(() => new THREE.BoxGeometry(lenX, lenY, lenZ), []);

    const materials = useMemo(() => {
      return Object.keys(props.textureMap).map((side) => {
        const texture = TextureLoader.getOrLoadItemTexture(
          props.textureMap[side]
        );
        return new THREE.MeshStandardMaterial({
          map: texture,
          transparent: true,
          alphaTest: 1,
        });
      });
    }, [geometry]);

    useEffect(() => {
      const uvAttribute = new THREE.BufferAttribute(
        new Float32Array([
          ...prepFaceUV(props.element.faces.east.uv), // 0
          ...prepFaceUV(props.element.faces.west.uv), // 1
          ...prepFaceUV(props.element.faces.up.uv), // 2
          ...prepFaceUV(props.element.faces.down.uv), // 3
          ...prepFaceUV(props.element.faces.south.uv), // 4
          ...prepFaceUV(props.element.faces.north.uv), // 5
        ]),
        2
      );

      geometry.setAttribute("uv", uvAttribute);
    }, [geometry]);

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
  }
);
