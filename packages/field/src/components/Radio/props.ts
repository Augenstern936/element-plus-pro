/*
 * @Description:
 * @Date: 2024-04-15 10:48:08
 * @LastEditTime: 2024-06-01 21:20:00
 */
import type { ValueOption, ValueEnum, MarkShape } from '@element-plus/pro-types';
import { radioGroupProps } from 'element-plus';
import type { RadioProps, RadioButtonProps } from 'element-plus';
import { CSSProperties, ExtractPropTypes, PropType } from 'vue';
import { ProFieldMode } from '../../typing';

const commomRadioProps = {
	...radioGroupProps,
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

export const proFieldRadioProps = {
	...commomRadioProps,
	valueOptions: {
		type: Array as PropType<ProFieldRadioOption[]>,
		default: [],
	},
	valueEnum: {
		type: Object as PropType<ProFieldRadioEnum>,
	},
};

export const proFieldRadioButtonProps = {
	...commomRadioProps,
	valueOptions: {
		type: Array as PropType<ProFieldRadioButtonOption[]>,
		default: [],
	},
	valueEnum: {
		type: Object as PropType<ProFieldRadioButtonEnum>,
	},
};

export type ProFieldRadioOption = ValueOption & Partial<Omit<RadioProps, 'label' | 'modelValue'>>;

export type ProFieldRadioEnum = ValueEnum<Omit<ProFieldRadioOption, 'value'>>;

export type ProFieldRadioButtonOption = ValueOption & Partial<Omit<RadioButtonProps, 'label' | 'modelValue'>>;

export type ProFieldRadioButtonEnum = ValueEnum<Omit<ProFieldRadioButtonOption, 'value'>>;

export type ProFieldRadioProps = Partial<ExtractPropTypes<typeof proFieldRadioProps>>;

export type ProFieldRadioButtonProps = Partial<ExtractPropTypes<typeof proFieldRadioButtonProps>>;
