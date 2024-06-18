/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:40:06
 * @LastEditTime: 2024-06-18 20:39:07
 * @FilePath: \element-plus-pro\packages\form\src\layouts\Form\index.tsx
 */
import { withInstall } from '@element-plus/pro-utils';
import { defineComponent, FunctionalComponent } from 'vue';
import { generateFormProps, GenerateForm, GenerateFormProps } from '../../core';

const Form = defineComponent<GenerateFormProps>(
	(props) => {
		return () => <GenerateForm {...props} />;
	},
	{
		name: 'ProForm',
	}
) as unknown as FunctionalComponent<GenerateFormProps>;

Form.props = generateFormProps;

export * from './typing';

export const ProForm = withInstall(Form);
