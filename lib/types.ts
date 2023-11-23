export namespace Minecraft {
  export type Vec2 = [number, number];
  export type Vec3 = [number, number, number];
  export type Vec4 = [number, number, number, number];

  export type Axis = "x" | "y" | "z";

  export type ItemModelDisplayPosition =
    | "thirdperson_righthand"
    | "thirdperson_lefthand"
    | "firstperson_righthand"
    | "firstperson_lefthand"
    | "ground"
    | "gui"
    | "fixed"
    | "head";

  export type ItemModelFace = { uv: Vec4; texture: string };

  export type ItemModelElement = {
    name?: string;
    from: Vec3;
    to: Vec3;
    rotation?: { angle: number; axis: Axis; origin: Vec3 };
    faces: {
      up: ItemModelFace;
      down: ItemModelFace;
      north: ItemModelFace;
      east: ItemModelFace;
      south: ItemModelFace;
      west: ItemModelFace;
    };
  };

  export type ItemModelTransformation = {
    rotation?: Vec3;
    translation?: Vec3;
    scale?: Vec3;
  };

  export type ItemModel = {
    credit?: string;
    texture_size?: Vec2;
    textures: Record<string, string>;
    elements: ItemModelElement[];

    display: Partial<Record<ItemModelDisplayPosition, ItemModelTransformation>>;
    groups?: any;

    parent?: any;
    overrides?: any;
  };
}
