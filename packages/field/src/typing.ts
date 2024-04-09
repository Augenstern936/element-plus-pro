/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-04-04 22:59:48
 * @LastEditTime: 2024-04-10 03:14:12
 * @FilePath: \element-plus-pro\packages\field\src\typing.ts
 */
import components from './components';
import type { ExtractPropTypes, PropType } from 'vue';

export const proFieldProps = {
	modelValue: {
		type: [String, Number, Boolean, Array],
		default: '',
	},
	mode: {
		type: String as PropType<'read' | 'edit'>,
		default: 'edit',
	},
	valueType: {
		type: String as PropType<ValueType>,
		default: 'text',
	},
	placeholder: {
		type: [String, Array as unknown as PropType<[string] | [string, string]>],
	},
	fieldProps: {
		type: Object as PropType<Record<string, unknown>>,
		default: {},
	},
};

export type ValueType = keyof typeof components;

export type ProFieldProps = Partial<ExtractPropTypes<typeof proFieldProps>>;
