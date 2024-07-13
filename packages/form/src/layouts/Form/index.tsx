/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:40:06
 * @LastEditTime: 2024-07-13 23:03:00
 * @FilePath: \element-plus-pro\packages\form\src\layouts\Form\index.tsx
 */
import components from '../../components';
import { ToUppercaseFirst } from '@element-plus/pro-types';
import { withInstall } from '@element-plus/pro-utils';
import { useVModel } from '@vueuse/core';
import { defineComponent } from 'vue-demi';
import { GenerateForm, generateFormProps, GenerateFormProps } from '../../core';
import { ProFormFieldType } from '../../typing';
import { ProFormSuperProps } from './typing';

const ProForm = defineComponent<GenerateFormProps>(
	(props, ctx) => {
		const model = useVModel(props, 'modelValue', ctx.emit);

		return () => (
			<GenerateForm {...props} v-model={model.value} v-slots={{ default: () => ctx.slots?.default?.() }} />
		);
	},
	{
		name: 'ProForm',
	}
) as ProFormSuperProps<GenerateFormProps>;

ProForm.props = generateFormProps as any;

for (const key in components) {
	const ComName = (key.charAt(0).toUpperCase() + key.slice(1)) as ToUppercaseFirst<ProFormFieldType>;
	const FieldComponent = components[key as ProFormFieldType];
	ProForm[ComName] = FieldComponent;
}

export * from './typing';

export default withInstall(ProForm);
