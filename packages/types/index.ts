export * from './enum';
export * from './props';

export type ToUppercaseFirst<S extends string> = S extends `${infer First}${infer Rest}`
	? `${Uppercase<First>}${Rest}`
	: S;

export type Option = {
	label?: string;
	value: string | number | boolean;
	[x: string]: any;
};
