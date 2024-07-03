/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:40:06
 * @LastEditTime: 2024-07-03 22:57:28
 * @FilePath: \element-plus-pro\packages\form\src\layouts\Form\index.tsx
 */
import { withInstall } from '@element-plus/pro-utils';
import { defineComponent, FunctionalComponent } from 'vue';
import { GenerateForm, generateFormProps, GenerateFormProps } from '../../core';
import { useVModel } from '@vueuse/core';
import components from '../../components';
import { ToUppercaseFirst } from '@element-plus/pro-types';
import { ProFormFieldType } from '../../typing';

const Form = defineComponent<GenerateFormProps>(
	(props, ctx) => {
		const model = useVModel(props, 'modelValue', ctx.emit);

		return () => (
			<GenerateForm {...props} v-model={model.value} v-slots={{ default: () => ctx.slots?.default?.() }} />
		);
	},
	{
		name: 'ProForm',
	}
) as unknown as FunctionalComponent<GenerateFormProps>;

Form.props = generateFormProps as any;

export * from './typing';

export const ProForm = withInstall(Form);

for (const key in components) {
	const ComName = (key.charAt(0).toUpperCase() + key.slice(1)) as ToUppercaseFirst<ProFormFieldType>;
	const FieldComponent = components[key as ProFormFieldType];
	ProForm[ComName] = FieldComponent as any;
}
