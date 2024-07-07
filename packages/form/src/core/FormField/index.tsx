/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-04-07 22:53:35
 * @LastEditTime: 2024-07-07 22:32:36
 * @FilePath: \element-plus-pro\packages\form\src\core\FormField\index.tsx
 */
import { ProField, ProFieldProps } from '@element-plus/pro-field';
import { useVModel } from '@vueuse/core';
import { SetupContext } from 'vue';
import createField from '../HOC/createField';

function BaseProFormField(props: ProFieldProps, ctx: SetupContext) {
	const model = useVModel(props, 'modelValue', ctx.emit);
	return <ProField {...props} v-model={model.value} />;
}

export const ProFormField = createField<ProFieldProps>(BaseProFormField as any);

export default ProFormField;
