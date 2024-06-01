export type ToUppercaseFirst<S extends string> = S extends `${infer First}${infer Rest}`
	? `${Uppercase<First>}${Rest}`
	: S;
