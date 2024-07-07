/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-06-30 21:35:16
 * @LastEditTime: 2024-07-07 20:53:54
 * @FilePath: \element-plus-pro\packages\form\src\components\TimeSelect\index.tsx
 */
import { DefineComponent, defineComponent } from 'vue';
import { withInstall } from '@element-plus/pro-utils';
import { ProFormField } from '../../core';
import type { ProFieldTimeSelectProps } from '@element-plus/pro-field';
import { FormFieldProps } from '../../typing';

export type ProFormTimeSelectProps = FormFieldProps<ProFieldTimeSelectProps> & {
	modelValue?: string;
	placeholder?: string;
};

const FormTimeSelect = defineComponent<ProFormTimeSelectProps>(
	(props) => {
		return () => <ProFormField {...props} type={'timeSelect'} />;
	},
	{
		name: 'ProFormTimeSelect',
	}
) as DefineComponent<ProFormTimeSelectProps>;

export const ProFormTimeSelect = withInstall(FormTimeSelect);
