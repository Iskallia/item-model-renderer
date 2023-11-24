export namespace ObjUtils {
  export function mapValues<O extends object, MV>(
    obj: O,
    mapper: (key: keyof O, value: O[keyof O]) => MV
  ) {
    return Object.entries(obj).reduce((mappedObj, entry) => {
      const key = entry[0] as keyof O;
      const value = entry[1] as O[keyof O];
      mappedObj[key] = mapper(key, value);
      return mappedObj;
    }, {} as Record<keyof O, MV>);
  }
}
