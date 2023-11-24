import { DisplayStand } from "src/component/DisplayStand";
import { archemageWandModel } from "./asset/model/archemage_wand";
import { deathsDoorModel } from "./asset/model/deathsdoor_sword";
import archmageTexture from "./asset/texture/archmage.png";
import deathsDoorTexture from "./asset/texture/deaths_door.png";
import testTexture from "./asset/texture/test.png";

export const App = () => {
  const textureResolver = (resourceLocation: string) => {
    switch (resourceLocation) {
      case "the_vault:item/gear/wand/archmage":
        return archmageTexture;
      case "the_vault:item/gear/sword/deaths_door":
        return deathsDoorTexture;
      default:
        return testTexture;
    }
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
      <DisplayStand
        itemModel={archemageWandModel}
        resolveTextureUrl={textureResolver}
        zoomFactor={0.8}
      />
      <DisplayStand
        itemModel={deathsDoorModel}
        resolveTextureUrl={textureResolver}
        zoomFactor={0.8}
      />
      <DisplayStand
        itemModel={deathsDoorModel}
        resolveTextureUrl={textureResolver}
        zoomFactor={0.5}
        containerSize={200}
      />
    </div>
  );
};
