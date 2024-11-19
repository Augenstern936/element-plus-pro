/*
 * @Description:
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2024-09-13 21:28:34
 * @LastEditTime: 2024-11-10 22:21:02
 *
 */
export type ToUppercaseFirst<S extends string> = S extends `${infer First}${infer Rest}` ? `${Uppercase<First>}${Rest}` : S;

export type EventsFormat<T> = {
  [k in keyof T as `on${Capitalize<string & k>}`]?: T[k];
};

/**
 * 驼峰转为小写
 */
export type ToLowercase<S extends string> = S extends `${infer First}${infer Rest}`
  ? First extends Uppercase<First>
    ? `${Lowercase<First>}${ToLowercase<Rest>}`
    : `${First}${ToLowercase<Rest>}`
  : S;
