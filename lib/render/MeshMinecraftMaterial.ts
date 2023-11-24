import { Minecraft } from "lib/types";
import { MeshStandardMaterial, MeshStandardMaterialParameters } from "three";

export class MeshMinecraftMaterial extends MeshStandardMaterial {
  public readonly mcmeta?: Minecraft.Mcmeta | null;

  constructor(
    parameters?: MeshStandardMaterialParameters & {
      mcmeta?: Minecraft.Mcmeta | null;
    }
  ) {
    super({ ...parameters, transparent: true, alphaTest: 1 });
    this.mcmeta = parameters?.mcmeta;
  }
}
