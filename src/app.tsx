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
import { Cuboid } from "lib/render/Cuboid";

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
