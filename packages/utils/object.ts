/*
 * @Description:
 * @Date: 2024-07-15 16:43:09
 * @LastEditTime: 2024-10-20 13:46:06
 */
export function excludeObjectProperty<T extends Record<string, any>>(entity: T, keys: (keyof T)[]) {
  const keysToExclude = new Set(keys);
  return Object.keys(entity).reduce((acc: Record<string, any>, key) => {
    if (!keysToExclude.has(key)) {
      acc[key] = entity[key];
    }
    return acc;
  }, {});
}
