/*
 * @Description:
 * @Date: 2024-07-01 09:06:21
 * @LastEditTime: 2024-07-07 17:44:24
 */
import { DefineComponent, defineComponent } from 'vue';
import { withInstall } from '@element-plus/pro-utils';
import { ProFormField } from '../../core';
import { FormFieldProps } from '../../typing';
import type { ColorPickerProps } from 'element-plus';

export type ProFormColorProps = FormFieldProps<ColorPickerProps> & {
	modelValue?: string;
};

const FormColor = defineComponent<ProFormColorProps>(
	(props) => {
		return () => <ProFormField type={'color'} fieldProps={props} />;
	},
	{
		name: 'ProFormColor',
	}
) as DefineComponent<ProFormColorProps>;

export const ProFormColor = withInstall(FormColor);
