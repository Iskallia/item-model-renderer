import { DisplayStand } from "src/component/DisplayStand";

import testTexture from "./asset/texture/test.png";
import archmageTexture from "./asset/texture/archmage.png";
import deathsDoorTexture from "./asset/texture/deaths_door.png";
import bigChoppaTexture from "./asset/texture/big_choppa.png";
import bigChoppaTexture1 from "./asset/texture/big_choppa_layer1.png";

import { archemageWandModel } from "./asset/model/archemage_wand";
import { deathsDoorModel } from "./asset/model/deathsdoor_sword";
import { bigChoppaModel } from "src/asset/model/big_choppa_axe";

export const App = () => {
  const textureResolver = (resourceLocation: string) => {
    switch (resourceLocation) {
      case "the_vault:item/gear/wand/archmage":
        return archmageTexture;
      case "the_vault:item/gear/sword/deaths_door":
        return deathsDoorTexture;
      case "the_vault:item/gear/axe/big_choppa":
        return bigChoppaTexture;
      case "the_vault:item/gear/axe/big_choppa_layer1":
        return bigChoppaTexture1;
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

      <DisplayStand
        itemModel={bigChoppaModel}
        resolveTextureUrl={textureResolver}
        zoomFactor={0.5}
      />
    </div>
  );
};
