import { NearestFilter, Texture, TextureLoader as _TextureLoader } from "three";

export namespace TextureLoader {
  const loader = new _TextureLoader();
  const textures = new Map<string, Texture>();

  export function getOrLoadItemTexture(url: string) {
    if (textures.has(url)) return textures.get(url);

    const texture = loader.load(url);
    texture.minFilter = NearestFilter;
    texture.magFilter = NearestFilter;
    return texture;
  }
}
