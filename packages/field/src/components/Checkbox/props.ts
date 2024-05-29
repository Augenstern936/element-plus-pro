/*
 * @Description:
 * @Date: 2024-04-15 09:39:26
 * @LastEditTime: 2024-05-29 22:28:44
 */
import type { Option } from '@element-plus/pro-types';
import { checkboxGroupProps } from 'element-plus';
import type { CheckboxProps } from 'element-plus';
import type { CSSProperties, ExtractPropTypes, PropType } from 'vue';

export const proFieldCheckboxProps = {
	...checkboxGroupProps,
	type: {
		type: String as PropType<'checkbox' | 'checkboxButton'>,
		default: 'checkbox',
	},
	mode: {
		type: String as PropType<'read' | 'edit'>,
		default: 'edit',
	},
	options: {
		type: Array as PropType<ProFieldCheckboxOption[]>,
		default: [],
	},
	style: {
		type: Object as PropType<CSSProperties>,
		default: {},
	},
};

export type ProFieldCheckboxOption = Option & Partial<Omit<CheckboxProps, 'label' | 'modelValue'>>;

export type ProFieldCheckboxProps = Partial<ExtractPropTypes<typeof proFieldCheckboxProps>>;
