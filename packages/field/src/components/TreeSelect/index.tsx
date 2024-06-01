/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-06-01 00:44:30
 * @FilePath: \element-plus-pro\packages\field\src\components\TreeSelect\index.tsx
 */
import { ElTreeSelect } from 'element-plus';
import 'element-plus/theme-chalk/src/tree-select.scss';
import { FunctionalComponent, defineComponent } from 'vue';
import { ProFieldTreeSelectProps } from './props';
import { useVModel } from '@vueuse/core';

const ProFieldTreeSelect = defineComponent<ProFieldTreeSelectProps>(
	(props, ctx) => {
		const model = useVModel(props, 'modelValue', ctx.emit);

		return () => <ElTreeSelect {...props} v-model={model.value} />;
	},
	{
		name: 'ProFieldTreeSelect',
	}
) as unknown as FunctionalComponent<ProFieldTreeSelectProps>;

export * from './props';

export { ProFieldTreeSelect };

export default ProFieldTreeSelect;
