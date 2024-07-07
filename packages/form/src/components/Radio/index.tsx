/*
 * @Description:
 * @Date: 2024-07-01 09:06:21
 * @LastEditTime: 2024-07-07 17:51:46
 */
import { DefineComponent, defineComponent } from 'vue';
import { withInstall } from '@element-plus/pro-utils';
import { ProFormField } from '../../core';
import { FormFieldProps } from '../../typing';
import type { RadioProps, RadioButtonProps } from 'element-plus';

export type ProFormRadioProps = FormFieldProps<RadioProps> & {
	modelValue?: string | number | boolean;
};
export type ProFormRadioButtonProps = FormFieldProps<RadioButtonProps> & {
	modelValue?: string | number | boolean;
};

const FormRadio = defineComponent<ProFormRadioProps>(
	(props) => {
		return () => <ProFormField {...props} type={'radio'} />;
	},
	{
		name: 'ProFormRadio',
	}
) as DefineComponent<ProFormRadioProps>;

const FormRadioButton = defineComponent<ProFormRadioButtonProps>(
	(props) => {
		return () => <ProFormField {...props} type={'radioButton'} />;
	},
	{
		name: 'ProFormRadioButton',
	}
) as DefineComponent<ProFormRadioButtonProps>;

export const ProFormRadio = withInstall(FormRadio);

export const ProFormRadioButton = withInstall(FormRadioButton);
