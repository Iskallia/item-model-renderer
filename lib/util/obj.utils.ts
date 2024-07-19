export namespace ObjUtils {
  export function mapObject<TObj extends object, TMappedValues>(
    obj: TObj,
    mapper: (key: keyof TObj, value: TObj[keyof TObj]) => TMappedValues
  ) {
    return Object.entries(obj).reduce((mappedObj, entry) => {
      const key = entry[0] as keyof TObj;
      const value = entry[1] as TObj[keyof TObj];
      mappedObj[key] = mapper(key, value);
      return mappedObj;
    }, {} as Record<keyof TObj, TMappedValues>);
  }

  export function getValues<O extends object>(obj: O) {
    return Object.values(obj) as O[keyof O][];
  }
}
