/*
 * @Description:
 * @Date: 2024-07-15 16:43:09
 * @LastEditTime: 2024-10-21 23:41:03
 */
export function excludeObjectProperty<T extends Record<string, any>, K extends Array<keyof T>>(entity: T, keys: K) {
  const keysToExclude = new Set(keys);
  const obj = Object.keys(entity).reduce((acc: Record<string, any>, key) => {
    if (!keysToExclude.has(key)) {
      acc[key] = entity[key];
    }
    return acc;
  }, {});
  return obj as {
    [k in Exclude<keyof T, (typeof keys)[number]>]: T[k];
  };
}
