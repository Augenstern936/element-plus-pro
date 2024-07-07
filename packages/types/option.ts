/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-06-26 21:22:42
 * @LastEditTime: 2024-07-07 12:00:09
 * @FilePath: \element-plus-pro\packages\types\option.ts
 */
export type MarkShape = 'disc' | 'circle' | 'square' | 'disclosure-open' | 'disclosure-closed';

export type VModelOptionValue = string | number | boolean | (string | number | boolean)[];

export type ValueOption<T = Record<string, any>> = {
	label: string;
	value: string | number | boolean;
	color?: string;
	status?: 'success' | 'error' | 'processing' | 'warning' | 'default';
} & T;

export type ValueEnum<T = Record<string, any>> = Record<string, string | (Omit<ValueOption, 'value'> & T)>;
