import { type Minecraft } from "@iskallia/item-model-renderer";
import { memo } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { archemageWandModel } from "./asset/model/archemage_wand";
import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import archmageTexture from "./asset/texture/archmage.png";

const Cuboid = memo(
  (props: {
    textures: Record<string, string>;
    element: Minecraft.ItemModelElement;
  }) => {
    // Create a texture loader
    const textureLoader = new THREE.TextureLoader();

    const lenX = props.element.to[0] - props.element.from[0];
    const lenY = props.element.to[1] - props.element.from[1];
    const lenZ = props.element.to[2] - props.element.from[2];

    // Create a BoxGeometry with custom UV coordinates
    const geometry = new THREE.BoxGeometry(lenX, lenY, lenZ);

    // TODO
    // Set UV coordinates for each face
    // const uvAttribute = new THREE.BufferAttribute(
    //   new Float32Array([
    //     ...textureUvs.bottom,
    //     ...textureUvs.east,
    //     ...textureUvs.west,
    //     ...textureUvs.top,
    //     ...textureUvs.south,
    //     ...textureUvs.north
    //   ]),
    //   2
    // )
    // geometry.setAttribute('uv', uvAttribute)
    // console.log(geometry.attributes.uv);

    // Load textures and create materials for each side
    const materials = Object.keys(props.textures).map((side) => {
      const texture = textureLoader.load(props.textures[side]);
      return new THREE.MeshBasicMaterial({ map: texture });
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
    bottom: archmageTexture,
    east: archmageTexture,
    west: archmageTexture,
    south: archmageTexture,
    north: archmageTexture,
  };

  return (
    <div className="app" style={{ position: "relative" }}>
      <div
        style={{
          height: 320,
          width: 320,
          position: "absolute",
          inset: 1,
          margin: "auto",
          border: "2px solid white",
        }}
      >
        <Canvas orthographic camera={{ zoom: 15, position: [0, 0, 100] }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />

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
              <Cuboid key={i} element={element} textures={textures} />
            ))}
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
