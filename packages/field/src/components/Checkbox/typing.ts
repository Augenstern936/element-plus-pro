/*
 * @Description:
 * @Date: 2024-04-15 09:39:26
 * @LastEditTime: 2024-07-07 12:44:19
 */
import type { ValueOption, ValueEnum, MarkShape } from '@element-plus/pro-types';
import { checkboxGroupProps } from 'element-plus';
import type { CheckboxProps } from 'element-plus';
import type { CSSProperties, ExtractPropTypes, PropType } from 'vue';
import { ProFieldMode } from '../../typing';

const commonProps = {
	...checkboxGroupProps,
	mode: {
		type: String as PropType<ProFieldMode>,
		default: 'edit',
	},
	markShape: {
		type: String as PropType<MarkShape>,
	},
	style: {
		type: Object as PropType<CSSProperties>,
		default: {},
	},
};

export const proFieldCheckboxProps = {
	...commonProps,
	valueOptions: {
		type: Array as PropType<ProFieldCheckboxValueOption[]>,
		default: [],
	},
	valueEnum: {
		type: Object as PropType<ProFieldCheckboxValueEnum>,
	},
};

export const proFieldCheckboxButtonProps = {
	...commonProps,
	valueOptions: {
		type: Array as PropType<ProFieldCheckboxButtonValueOption[]>,
		default: [],
	},
	valueEnum: {
		type: Object as PropType<ProFieldCheckboxButtonValueEnum>,
	},
};

type BaseCheckboxProps = Partial<Omit<CheckboxProps, 'label' | 'value' | 'modelValue'>>;

type BaseCheckboxButtonProps = Partial<
	Omit<
		CheckboxProps,
		| 'label'
		| 'value'
		| 'modelValue'
		| 'border'
		| 'size'
		| 'indeterminate'
		| 'validate-event'
		| 'tabindex'
		| 'id'
		| 'controls'
		| 'aria-controls'
	>
>;

export type ProFieldCheckboxValueOption = ValueOption<BaseCheckboxProps>;

export type ProFieldCheckboxValueEnum = ValueEnum<BaseCheckboxProps>;

export type ProFieldCheckboxButtonValueOption = ValueOption<BaseCheckboxButtonProps>;

export type ProFieldCheckboxButtonValueEnum = ValueEnum<BaseCheckboxButtonProps>;

export type ProFieldCheckboxProps = Partial<ExtractPropTypes<typeof proFieldCheckboxProps>>;

export type ProFieldCheckboxButtonProps = Partial<ExtractPropTypes<typeof proFieldCheckboxButtonProps>>;
