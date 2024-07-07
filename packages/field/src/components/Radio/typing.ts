/*
 * @Description:
 * @Date: 2024-04-15 10:48:08
 * @LastEditTime: 2024-07-07 13:57:18
 */
import type { ValueOption, ValueEnum, MarkShape } from '@element-plus/pro-types';
import { radioGroupProps } from 'element-plus';
import type { RadioProps, RadioButtonProps } from 'element-plus';
import { CSSProperties, ExtractPropTypes, PropType } from 'vue';
import { ProFieldMode } from '../../typing';

const commomProps = {
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
	...commomProps,
	valueOptions: {
		type: Array as PropType<ProFieldRadioValueOption[]>,
		default: [],
	},
	valueEnum: {
		type: Object as PropType<ProFieldRadioValueEnum>,
	},
};

export const proFieldRadioButtonProps = {
	...commomProps,
	valueOptions: {
		type: Array as PropType<ProFieldRadioButtonValueOption[]>,
		default: [],
	},
	valueEnum: {
		type: Object as PropType<ProFieldRadioButtonValueEnum>,
	},
};

type BaseRadioProps = Partial<Omit<RadioProps, 'label' | 'value' | 'modelValue'>>;

type BaseRadioButtonProps = Partial<Omit<RadioButtonProps, 'label' | 'value'>>;

export type ProFieldRadioValueOption = ValueOption<BaseRadioProps>;

export type ProFieldRadioValueEnum = ValueEnum<BaseRadioProps>;

export type ProFieldRadioButtonValueOption = ValueOption<BaseRadioButtonProps>;

export type ProFieldRadioButtonValueEnum = ValueEnum<BaseRadioButtonProps>;

export type ProFieldRadioProps = Partial<ExtractPropTypes<typeof proFieldRadioProps>>;

export type ProFieldRadioButtonProps = Partial<ExtractPropTypes<typeof proFieldRadioButtonProps>>;
