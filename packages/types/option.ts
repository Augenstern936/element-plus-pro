/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-06-26 21:22:42
 * @LastEditTime: 2024-10-15 20:53:28
 * @FilePath: \element-plus-pro\packages\types\option.ts
 */
export type Marker = "disc" | "circle" | "square" | "disclosure-open" | "disclosure-closed";

export type VModelOptionValue = string | number | boolean | (string | number | boolean)[];

export type ValueOption<T extends Record<string, any> = Record<string, any>> = {
  label?: string | number | boolean;
  value?: string | number | boolean;
  color?: string;
  status?: "success" | "error" | "processing" | "warning" | "default";
} & T;

export type ValueEnum<T extends Record<string, any> = Record<string, any>> =
  | Array<string | number | boolean | ValueOption<T>>
  | Record<string, string | Omit<ValueOption<T>, "value">>;

export type Request<T extends Record<string, any>> = (params: Record<string, any>, props?: any) => Promise<ValueEnum<T>>;
