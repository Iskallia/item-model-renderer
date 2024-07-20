import { Minecraft } from "lib/types";
import { MeshStandardMaterial, MeshStandardMaterialParameters } from "three";

export class MeshMinecraftMaterial extends MeshStandardMaterial {
  public readonly mcmeta?: Minecraft.Mcmeta | null;

  constructor(
    mcmeta?: Minecraft.Mcmeta | null,
    parameters?: MeshStandardMaterialParameters
  ) {
    super({ ...parameters, transparent: true, alphaTest: 1 });
    this.mcmeta = mcmeta;
  }
}
