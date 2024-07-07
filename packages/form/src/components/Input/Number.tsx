/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-06-30 21:35:16
 * @LastEditTime: 2024-07-07 18:10:08
 * @FilePath: \element-plus-pro\packages\form\src\components\Input\Number.tsx
 */
import { DefineComponent, defineComponent } from 'vue';
import { withInstall } from '@element-plus/pro-utils';
import { ProFormField } from '../../core';
import type { ProFieldNumberProps } from '@element-plus/pro-field';
import { FormFieldProps } from '../../typing';

export type ProFormNumberProps = FormFieldProps<ProFieldNumberProps> & {
	modelValue?: number;
	placeholder?: string;
};

const FormNumber = defineComponent<ProFormNumberProps>(
	(props) => {
		return () => <ProFormField {...props} type={'number'} />;
	},
	{
		name: 'ProFormNumber',
	}
) as DefineComponent<ProFormNumberProps>;

export const ProFormNumber = withInstall(FormNumber);
