/*
 * @Description:
 * @Date: 2024-07-01 09:06:21
 * @LastEditTime: 2024-07-07 20:52:46
 */
import { DefineComponent, defineComponent } from 'vue';
import { withInstall } from '@element-plus/pro-utils';
import { ProFormField } from '../../core';
import type { ProFieldSelectProps } from '@element-plus/pro-field';
import { FormFieldProps } from '../../typing';

export type ProFormSelectProps = FormFieldProps<ProFieldSelectProps> & {
	modelValue?: string | number | boolean | (string | number | boolean)[];
	placeholder?: string;
};

const FormSelect = defineComponent<ProFormSelectProps>(
	(props) => {
		return () => <ProFormField {...props} type={'select'} />;
	},
	{
		name: 'ProFormSelect',
	}
) as DefineComponent<ProFormSelectProps>;

export const ProFormSelect = withInstall(FormSelect);
