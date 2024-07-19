import { NearestFilter, Texture, TextureLoader as _TextureLoader } from "three";

export namespace TextureLoader {
  const loader = new _TextureLoader();
  const textures = new Map<string, Texture>();

  export async function getOrLoadItemTexture(url: string) {
    return new Promise<Texture>((resolve, reject) => {
      if (textures.has(url)) return resolve(textures.get(url)!);

      const texture = loader.load(url, (texture) => {
        resolve(texture);
      });

      texture.minFilter = NearestFilter;
      texture.magFilter = NearestFilter;
    });
  }
}
