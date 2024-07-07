/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-06-30 21:35:16
 * @LastEditTime: 2024-07-07 20:51:21
 * @FilePath: \element-plus-pro\packages\form\src\components\Input\Text.tsx
 */
import { DefineComponent, defineComponent } from 'vue';
import { withInstall } from '@element-plus/pro-utils';
import { ProFormField } from '../../core';
import { FormFieldProps } from '../../typing';
import type { InputProps } from 'element-plus';

export type ProFormTextProps = FormFieldProps<Omit<InputProps, 'type'>> & {
	modelValue?: string | number;
	placeholder?: string;
};

const FormText = defineComponent<ProFormTextProps>(
	(props) => {
		return () => <ProFormField {...props} type={'text'} />;
	},
	{
		name: 'ProFormText',
	}
) as DefineComponent<ProFormTextProps>;

export const ProFormText = withInstall(FormText);
