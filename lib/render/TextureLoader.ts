import * as THREE from "three";

export namespace TextureLoader {
  const loader = new THREE.TextureLoader();
  const textures = new Map<string, THREE.Texture>();

  export function getOrLoadItemTexture(url: string) {
    if (textures.has(url)) return textures.get(url);

    const texture = loader.load(url);
    texture.minFilter = THREE.NearestFilter;
    texture.magFilter = THREE.NearestFilter;
    return texture;
  }
}
