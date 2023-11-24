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
import { ItemModelRender } from "lib/render/ItemModelRender";

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
          border: "6px solid #F8AD1D",
          backgroundImage:
            "url('https://vaulthunters.gg/assets/icon-frame-e92a019c.png')",
          backgroundPosition: "center",
          backgroundSize: "110%",
        }}
      >
        <ItemModelRender
          itemModel={archemageWandModel}
          resolveTextureUrl={(resourceLocation) => archmageTexture}
        />

        {/* <p
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
        </p> */}
      </div>
    </div>
  );
};
