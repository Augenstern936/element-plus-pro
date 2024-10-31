/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-09-13 21:28:34
 * @LastEditTime: 2024-10-30 10:04:39
 * @FilePath: \element-plus-pro\packages\utils\object.ts
 */

/**
 * 排除对象中的属性，生成一个新对象
 * @param entity
 * @param keys
 * @returns
 */
export function omitObjectProperty<T extends Record<string, any>, K extends Array<keyof T>>(entity: T, keys: K) {
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

/**
 * 抽离对象中的属性，生成一个新对象
 * @param entity
 * @param keys
 * @returns
 */
export function pickObjectProperty<T extends Record<string, any>, K extends Array<keyof T>>(entity: T, keys: K) {
  const keysToExclude = new Set(keys);
  const obj = Object.keys(entity).reduce((acc: Record<string, any>, key) => {
    if (keysToExclude.has(key)) {
      acc[key] = entity[key];
    }
    return acc;
  }, {});
  return obj as {
    [k in Extract<keyof T, (typeof keys)[number]>]: T[k];
  };
}
