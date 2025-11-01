import { DisplayStand } from "src/component/DisplayStand";

import archmageTexture from "./asset/texture/archmage.png";
import bigChoppaTexture from "./asset/texture/big_choppa.png";
import bigChoppaTexture1 from "./asset/texture/big_choppa_layer1.png";
import bigChoppaTexture1McmetaRaw from "./asset/texture/big_choppa_layer1.png.mcmeta?raw";
import deathsDoorTexture from "./asset/texture/deaths_door.png";
import presentTexture from "./asset/texture/present.png";
import testTexture from "./asset/texture/test.png";
import springWandTexture from "./asset/texture/spring_wand.png";

import { ItemModelDisplayer, ItemModelGlProvider, ItemModelRender, Minecraft } from '@iskallia-dev/item-model-renderer';
import { bigChoppaModel } from "src/asset/model/big_choppa_axe";
import { presentShieldModel } from "src/asset/model/present_shield";
import { resolveAfterDelay } from "src/asset/util/resolveAfterDelay";
import { archemageWandModel } from "./asset/model/archemage_wand";
import { deathsDoorModel } from "./asset/model/deathsdoor_sword";
import { springWandModel } from "./asset/model/spring_wand";

export const App = () => {
  const textureResolver = (resourceLocation: string) => {
    if (resourceLocation == null) throw new Error();
    switch (resourceLocation) {
      case "the_vault:item/gear/wand/archmage":
        return archmageTexture;
      case "the_vault:item/gear/sword/deaths_door":
        return deathsDoorTexture;
      case "the_vault:item/gear/axe/big_choppa":
        return bigChoppaTexture;
      case "the_vault:item/gear/axe/big_choppa_layer1":
        return bigChoppaTexture1;
      case "the_vault:item/gear/shield/present":
        return presentTexture;
      case "the_vault:item/gear/wand/spring_wand":
        return springWandTexture;
      default:
        return testTexture;
    }
  };

  const mcmetaResolver = async (resourceLocation: string) => {
    return resolveAfterDelay(() => {
      switch (resourceLocation) {
        case "the_vault:item/gear/axe/big_choppa_layer1":
          return JSON.parse(bigChoppaTexture1McmetaRaw) as Minecraft.Mcmeta;
        default:
          return null;
      }
    }, 1000);
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
      <ItemModelGlProvider
        resolveTextureUrl={textureResolver}
        resolveMcmeta={mcmetaResolver}
        zoomFactor={0.8}
      >
        <ItemModelRender />
        <DisplayStand>
          <ItemModelDisplayer itemId="A" itemModel={archemageWandModel} />
        </DisplayStand>
        <DisplayStand>
          <ItemModelDisplayer itemId="B" itemModel={deathsDoorModel} />
        </DisplayStand>
        <DisplayStand containerSize={200}>
          <ItemModelDisplayer itemId="C" itemModel={deathsDoorModel} />
        </DisplayStand>
        <DisplayStand containerSize={200}>
          <ItemModelDisplayer itemId="S" itemModel={presentShieldModel} />
        </DisplayStand>
        <DisplayStand containerSize={200}>
          <ItemModelDisplayer itemId="E" itemModel={springWandModel} />
        </DisplayStand>
        {Array.from({ length: 100 }).map((_, i) => (
          <DisplayStand key={i} containerSize={200}>
            <ItemModelDisplayer itemId={"D" + i} itemModel={bigChoppaModel} />
          </DisplayStand>
        ))}
      </ItemModelGlProvider>
    </div>
  );
};
