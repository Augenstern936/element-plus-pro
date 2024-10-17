export type ToUppercaseFirst<S extends string> = S extends `${infer First}${infer Rest}` ? `${Uppercase<First>}${Rest}` : S;

/**
 * 驼峰转为小写
 */
export type ToLowercase<S extends string> = S extends `${infer First}${infer Rest}`
  ? First extends Uppercase<First>
    ? `${Lowercase<First>}${ToLowercase<Rest>}`
    : `${First}${ToLowercase<Rest>}`
  : S;
