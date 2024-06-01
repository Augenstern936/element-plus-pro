/*
 * @Description:
 * @Date: 2024-04-15 09:39:26
 * @LastEditTime: 2024-06-01 21:19:26
 */
import type { ValueOption, ValueEnum, MarkShape } from '@element-plus/pro-types';
import { checkboxGroupProps } from 'element-plus';
import type { CheckboxProps } from 'element-plus';
import type { CSSProperties, ExtractPropTypes, PropType } from 'vue';
import { ProFieldMode } from '../../typing';

export const proFieldCheckboxProps = {
	...checkboxGroupProps,
	mode: {
		type: String as PropType<ProFieldMode>,
		default: 'edit',
	},
	markShape: {
		type: String as PropType<MarkShape>,
	},
	valueOptions: {
		type: Array as PropType<ProFieldCheckboxOption[]>,
		default: [],
	},
	valueEnum: {
		type: Object as PropType<ProFieldCheckboxEnum>,
	},
	style: {
		type: Object as PropType<CSSProperties>,
		default: {},
	},
};

export type ProFieldCheckboxOption = ValueOption & Partial<Omit<CheckboxProps, 'label' | 'modelValue'>>;

export type ProFieldCheckboxEnum = ValueEnum<Omit<ProFieldCheckboxOption, 'value'>>;

export type ProFieldCheckboxProps = Partial<ExtractPropTypes<typeof proFieldCheckboxProps>>;
