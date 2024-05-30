/*
 * @Description:
 * @Date: 2024-04-15 09:39:26
 * @LastEditTime: 2024-05-30 22:26:25
 */
import type { Option, Enum } from '@element-plus/pro-types';
import { checkboxGroupProps } from 'element-plus';
import type { CheckboxProps } from 'element-plus';
import type { CSSProperties, ExtractPropTypes, PropType } from 'vue';

export const proFieldCheckboxProps = {
	...checkboxGroupProps,
	mode: {
		type: String as PropType<'read' | 'edit'>,
		default: 'edit',
	},
	options: {
		type: Array as PropType<ProFieldCheckboxOption[]>,
		default: [],
	},
	enum: {
		type: Object as PropType<Enum>,
	},
	style: {
		type: Object as PropType<CSSProperties>,
		default: {},
	},
};

export type ProFieldCheckboxOption = Option & Partial<Omit<CheckboxProps, 'label' | 'modelValue'>>;

export type ProFieldCheckboxProps = Partial<ExtractPropTypes<typeof proFieldCheckboxProps>>;
