/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-05-17 19:46:42
 * @LastEditTime: 2024-05-30 22:24:17
 * @FilePath: \element-plus-pro\packages\types\index.ts
 */
export * from './enum';
export * from './props';

export type ToUppercaseFirst<S extends string> = S extends `${infer First}${infer Rest}`
	? `${Uppercase<First>}${Rest}`
	: S;

export type Option = {
	label: string;
	value: string | number | boolean;
	key?: string | number;
	status?: 'default' | 'error' | 'success';
	color?: string;
};

export type Enum = Record<string, string | Omit<Option, 'value'>>;
