/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-05-25 23:32:22
 * @LastEditTime: 2024-06-02 00:45:27
 * @FilePath: \element-plus-pro\packages\types\props.ts
 */
import type { Prop } from 'vue';
import type { IfAny } from '@vue/shared';

type RequiredKeys<T> = {
	[K in keyof T]: T[K] extends {
		required: true;
	}
		? T[K] extends {
				default: undefined | (() => undefined);
			}
			? never
			: K
		: never;
}[keyof T];

type OptionalKeys<T> = Exclude<keyof T, RequiredKeys<T>>;

type InferPropType<T> = [T] extends [null]
	? any
	: [T] extends [
				{
					type: null | true;
				},
		  ]
		? any
		: [T] extends [
					| ObjectConstructor
					| {
							type: ObjectConstructor;
					  },
			  ]
			? Record<string, any>
			: [T] extends [
						| BooleanConstructor
						| {
								type: BooleanConstructor;
						  },
				  ]
				? boolean
				: [T] extends [
							| DateConstructor
							| {
									type: DateConstructor;
							  },
					  ]
					? Date
					: [T] extends [
								| (infer U)[]
								| {
										type: (infer U)[];
								  },
						  ]
						? U extends DateConstructor
							? Date | InferPropType<U>
							: InferPropType<U>
						: [T] extends [Prop<infer V, infer D>]
							? unknown extends V
								? IfAny<V, V, D>
								: V
							: T;

export type GeneratePropTypes<O> = {
	[K in keyof Pick<O, RequiredKeys<O>>]: InferPropType<O[K]>;
} & {
	[K in keyof Pick<O, OptionalKeys<O>>]?: InferPropType<O[K]>;
};
