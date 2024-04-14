/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:40:06
 * @LastEditTime: 2024-04-14 17:33:06
 * @FilePath: \element-plus-pro\packages\form\src\layouts\Form\index.tsx
 */
import { defineComponent, FunctionalComponent } from 'vue';
import { GenerateForm } from '../../core';
import { withInstall } from '@element-plus/pro-utils';
import { ProFormProps } from './typing';

const Form = defineComponent<ProFormProps>(
	(props, ctx) => {
		return () => <GenerateForm {...props} />;
	},
	{
		name: 'ProForm',
	}
) as FunctionalComponent<ProFormProps>;

export * from './typing';

export const ProForm = withInstall(Form);
