/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-04-07 22:53:35
 * @LastEditTime: 2024-06-30 21:30:24
 * @FilePath: \element-plus-pro\packages\form\src\core\FormField\index.tsx
 */
import { FunctionalComponent, defineComponent } from 'vue';
import { ProField, ProFieldProps } from '@element-plus/pro-field';
import createField from '../HOC/createField';
import { useVModel } from '@vueuse/core';

type BaseProFormFieldProps = {} & ProFieldProps;

const BaseProFormField = defineComponent<BaseProFormFieldProps>((props, ctx) => {
	const model = useVModel(props, 'modelValue', ctx.emit);

	return () => <ProField {...props} v-model={model.value} />;
}) as unknown as FunctionalComponent;

const ProFormField = createField(BaseProFormField);

export default ProFormField;
