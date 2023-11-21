import { type Minecraft } from "@iskallia/item-model-renderer";
import { PropsWithChildren, memo, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { archemageWandModel } from "./asset/model/archemage_wand";
import {
  CameraControls,
  OrbitControls,
  OrthographicCamera,
  TransformControls,
} from "@react-three/drei";
import archmageTexture from "./asset/texture/archmage.png";
import deathsDoorTexture from "./asset/texture/deaths_door.png";
import testTexture from "./asset/texture/test.png";
import { text } from "stream/consumers";
import { deathsDoorModel } from "./asset/model/deathsdoor_sword";
import { testModel } from "./asset/model/test_model";

// Maybe we shall create our lightweight texture cache/registry?
THREE.Cache.enabled = true;

const RotateAroundPivot = (
  props: PropsWithChildren & {
    pivot: Minecraft.Vec3;
    rot: Minecraft.Vec3;
  }
) => {
  return (
    <group position={props.pivot}>
      <group rotation={props.rot}>{props.children}</group>
    </group>
  );
};

const Cuboid = memo(
  (props: {
    textureMap: Record<string, string>;
    element: Minecraft.ItemModelElement;
  }) => {
    const meshRef = useRef<THREE.Mesh>(null);

    // Create a texture loader
    const textureLoader = new THREE.TextureLoader();

    const lenX = props.element.to[0] - props.element.from[0];
    const lenY = props.element.to[1] - props.element.from[1];
    const lenZ = props.element.to[2] - props.element.from[2];

    // Create a BoxGeometry with custom UV coordinates
    const geometry = new THREE.BoxGeometry(lenX, lenY, lenZ);

    const prepVec8 = (uv: Minecraft.Vec4) => {
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
    };

    // Set UV coordinates for each face
    const uvAttribute = new THREE.BufferAttribute(
      new Float32Array([
        ...prepVec8(props.element.faces.east.uv), // 0
        ...prepVec8(props.element.faces.west.uv), // 1
        ...prepVec8(props.element.faces.up.uv), // 2
        ...prepVec8(props.element.faces.down.uv), // 3
        ...prepVec8(props.element.faces.south.uv), // 4
        ...prepVec8(props.element.faces.north.uv), // 5
      ]),
      2
    );

    geometry.setAttribute("uv", uvAttribute);
    console.log(geometry.attributes);

    // Load textures and create materials for each side
    const materials = Object.keys(props.textureMap).map((side) => {
      const texture = textureLoader.load(props.textureMap[side]);
      texture.minFilter = THREE.NearestFilter;
      texture.magFilter = THREE.NearestFilter;
      return new THREE.MeshStandardMaterial({
        map: texture,
        transparent: true,
        alphaTest: 1,
      });
    });

    useEffect(() => {
      const angle = props.element.rotation?.angle ?? 0;
      const axis = props.element.rotation?.axis;
      const pivot = props.element.rotation?.origin;
      const pushPopTranslation = (tr: Minecraft.Vec3, fn: () => void) => {
        meshRef.current!.translateX(tr[0]);
        meshRef.current!.translateY(tr[1]);
        meshRef.current!.translateZ(tr[2]);
        fn();
        meshRef.current!.translateX(-tr[0]);
        meshRef.current!.translateY(-tr[1]);
        meshRef.current!.translateZ(-tr[2]);
      };
      if (angle !== 0) {
        pushPopTranslation(
          [
            //
            pivot![0] - props.element.from[0] - lenX / 2,
            pivot![1] - props.element.from[1] - lenY / 2,
            pivot![2] - props.element.from[2] - lenZ / 2,
          ],
          () => {
            if (axis === "x") {
              meshRef.current!.rotateX(angle * (Math.PI / 180));
            } else if (axis === "y") {
              meshRef.current!.rotateY(angle * (Math.PI / 180));
            } else if (axis === "z") {
              meshRef.current!.rotateZ(angle * (Math.PI / 180));
            }
          }
        );
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

export const App = () => {
  // const textures = {
  //   top: archmageTexture,
  //   bottom: archmageTexture,
  //   east: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhpe92sN_x7DHYNORdMMF6jq6kdHGiMkbuVw&usqp=CAU",
  //   west: archmageTexture,
  //   south: archmageTexture,
  //   north: archmageTexture,
  // };
  const textures = {
    top: archmageTexture,
    east: archmageTexture,
    west: archmageTexture,
    bottom: archmageTexture,
    south: archmageTexture,
    north: archmageTexture,
  };
  const textures2 = {
    top: deathsDoorTexture,
    east: deathsDoorTexture,
    west: deathsDoorTexture,
    bottom: deathsDoorTexture,
    south: deathsDoorTexture,
    north: deathsDoorTexture,
  };
  const textures3 = {
    top: testTexture,
    east: testTexture,
    west: testTexture,
    bottom: testTexture,
    south: testTexture,
    north: testTexture,
  };

  return (
    <div
      className="app"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        flexWrap: "wrap",
      }}
    >
      <div
        style={{
          position: "relative",
          height: 480,
          width: 480,
          border: "2px solid white",
        }}
      >
        <Canvas orthographic camera={{ zoom: 25, position: [0, 0, 100] }}>
          {/* <ambientLight color={0x404040} intensity={0.5} /> */}
          <ambientLight intensity={1} color={0xffffffff} />
          {/* <pointLight position={[-2, 2, 0]} /> */}
          {/* <spotLight position={[10, 10, 10]} angle={0} penumbra={1} /> */}
          {/* <pointLight position={[-10, -10, -10]} /> */}

          <group rotation={[0, 0, 0]}>
            <group
              position={archemageWandModel.display.gui?.translation}
              rotation={
                archemageWandModel.display.gui?.rotation?.map(
                  (r) => (r * Math.PI) / 180
                ) as Minecraft.Vec3
              }
              scale={archemageWandModel.display.gui?.scale}
            >
              {archemageWandModel.elements.map((element, i) => (
                <Cuboid key={i} element={element} textureMap={textures} />
              ))}
            </group>
          </group>
        </Canvas>

        <p
          style={{
            position: "absolute",
            bottom: "10px",
            right: "15px",
            margin: 0,
            fontFamily: "consolas",
            color: "white",
          }}
        >
          GUI Preview
        </p>
      </div>

      <div
        style={{
          position: "relative",
          height: 480,
          width: 480,
          border: "2px solid white",
        }}
      >
        <Canvas orthographic camera={{ zoom: 25, position: [0, 0, 100] }}>
          {/* <ambientLight color={0x404040} intensity={0.5} /> */}
          <ambientLight intensity={0.5} color={0xffffffff} />
          <directionalLight position={[-1, -1, 10]} />
          {/* <spotLight position={[10, 10, 10]} angle={0} penumbra={1} /> */}
          {/* <pointLight position={[-10, -10, -10]} /> */}

          <group rotation={[0, 0, 0]}>
            <group
              position={archemageWandModel.display.gui?.translation}
              rotation={
                archemageWandModel.display.gui?.rotation?.map(
                  (r) => (r * Math.PI) / 180
                ) as Minecraft.Vec3
              }
              scale={archemageWandModel.display.gui?.scale}
            >
              {archemageWandModel.elements.map((element, i) => (
                <Cuboid key={i} element={element} textureMap={textures} />
              ))}
            </group>
          </group>
        </Canvas>

        <p
          style={{
            position: "absolute",
            bottom: "10px",
            right: "15px",
            margin: 0,
            fontFamily: "consolas",
            color: "white",
          }}
        >
          GUI Preview
        </p>
      </div>

      <div
        style={{
          position: "relative",
          height: 480,
          width: 480,
          border: "2px solid white",
        }}
      >
        <Canvas orthographic camera={{ zoom: 20, position: [0, 0, 100] }}>
          {/* <ambientLight color={0x404040} intensity={0.5} /> */}
          <ambientLight intensity={0.5} color={0xffffffff} />
          <directionalLight position={[-1, -1, 10]} />
          {/* <spotLight position={[10, 10, 10]} angle={0} penumbra={1} /> */}
          {/* <pointLight position={[-10, -10, -10]} /> */}

          <group rotation={[0, 0, 0]}>
            <group
              // position={deathsDoorModel.display.gui?.translation}
              // rotation={
              //   deathsDoorModel.display.gui?.rotation?.map(
              //     (r) => (r * Math.PI) / 180
              //   ) as Minecraft.Vec3
              // }
              scale={deathsDoorModel.display.gui?.scale}
            >
              {deathsDoorModel.elements.map((element, i) => (
                <Cuboid key={i} element={element} textureMap={textures2} />
              ))}
            </group>
          </group>
          <CameraControls />
        </Canvas>

        <p
          style={{
            position: "absolute",
            bottom: "10px",
            right: "15px",
            margin: 0,
            fontFamily: "consolas",
            color: "white",
          }}
        >
          GUI Preview
        </p>
      </div>

      <div
        style={{
          position: "relative",
          height: 480,
          width: 480,
          border: "2px solid white",
        }}
      >
        <Canvas orthographic camera={{ zoom: 25, position: [0, 0, 100] }}>
          {/* <ambientLight color={0x404040} intensity={0.5} /> */}
          <ambientLight intensity={0.25} color={0xffffffff} />
          <directionalLight position={[-1, -1, 10]} />
          {/* <spotLight position={[10, 10, 10]} angle={0} penumbra={1} /> */}
          {/* <pointLight position={[-10, -10, -10]} /> */}

          <group rotation={[0, 0, 0]}>
            <group
              position={testModel.display.gui?.translation}
              rotation={
                testModel.display.gui?.rotation?.map(
                  (r) => (r * Math.PI) / 180
                ) as Minecraft.Vec3
              }
              scale={testModel.display.gui?.scale}
            >
              {testModel.elements.map((element, i) => (
                <Cuboid key={i} element={element} textureMap={textures3} />
              ))}
            </group>
          </group>
        </Canvas>

        <p
          style={{
            position: "absolute",
            bottom: "10px",
            right: "15px",
            margin: 0,
            fontFamily: "consolas",
            color: "white",
          }}
        >
          GUI Preview
        </p>
      </div>
    </div>
  );
};
