import { type Minecraft } from "@iskallia/item-model-renderer";
import { memo, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { archemageWandModel } from "./asset/model/archemage_wand";
import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import archmageTexture from "./asset/texture/archmage.png";
import { text } from "stream/consumers";

// Maybe we shall create our lightweight texture cache/registry?
THREE.Cache.enabled = true;

function convertQuadToTriangles(quadUV: Minecraft.Vec4) {
  // Assuming quadUV is a Vec4 or an array [left, top, right, bottom]
  const [left, top, right, bottom] = quadUV;

  // Convert the quad UVs to two triangles
  const triangle1 = [left, top, right, top, right, bottom];
  const triangle2 = [left, top, right, bottom, left, bottom];

  return [triangle1, triangle2];
}

const Cuboid = memo(
  (props: {
    textureMap: Record<string, string>;
    element: Minecraft.ItemModelElement;
  }) => {
    // Create a texture loader
    const textureLoader = new THREE.TextureLoader();

    const lenX = props.element.to[0] - props.element.from[0];
    const lenY = props.element.to[1] - props.element.from[1];
    const lenZ = props.element.to[2] - props.element.from[2];

    // Create a BoxGeometry with custom UV coordinates
    const geometry = new THREE.BoxGeometry(lenX, lenY, lenZ);

    const prepVec8 = (uv: Minecraft.Vec4) => {
      const left = (4 * uv[0]) / 64;
      const right = (4 * uv[2]) / 64;
      const bottom = 1 - (4 * uv[1]) / 64;
      const top = 1 - (4 * uv[3]) / 64;

      // prettier-ignore
      return [
        right, bottom, 
        left, bottom, 
        right, top, 
        left, top
      ];
    };

    // Set UV coordinates for each face
    const uvAttribute = new THREE.BufferAttribute(
      new Float32Array([
        ...prepVec8(props.element.faces.south.uv), // 0
        ...prepVec8(props.element.faces.north.uv), // 1
        ...prepVec8(props.element.faces.up.uv), // 2
        ...prepVec8(props.element.faces.down.uv), // 3
        ...prepVec8(props.element.faces.east.uv), // 4
        ...prepVec8(props.element.faces.west.uv), // 5
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
      return new THREE.MeshPhongMaterial({
        map: texture,
        transparent: true,
        alphaTest: 1,
      });
    });

    // Create a Mesh with the geometry and materials
    return (
      <mesh
        geometry={geometry}
        material={materials}
        position={[
          props.element.from[0] + lenX / 2 - 8,
          props.element.from[1] + lenY / 2 - 8,
          props.element.from[2] + lenZ / 2 - 8,
        ]}
      >
        {/* You can add other props like position, rotation, etc. if needed */}
      </mesh>
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

  return (
    <div
      className="app"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
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
              position={archemageWandModel.display.gui.translation}
              rotation={
                archemageWandModel.display.gui.rotation?.map(
                  (r) => (r * Math.PI) / 180
                ) as Minecraft.Vec3
              }
              scale={archemageWandModel.display.gui.scale}
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
              position={archemageWandModel.display.gui.translation}
              rotation={
                archemageWandModel.display.gui.rotation?.map(
                  (r) => (r * Math.PI) / 180
                ) as Minecraft.Vec3
              }
              scale={archemageWandModel.display.gui.scale}
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
    </div>
  );
};
