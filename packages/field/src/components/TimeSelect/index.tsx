/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-06-01 00:43:46
 * @FilePath: \element-plus-pro\packages\field\src\components\TimeSelect\index.tsx
 */
import { ElTimeSelect } from 'element-plus';
import 'element-plus/theme-chalk/src/time-select.scss';
import type { FunctionalComponent } from 'vue';
import { defineComponent } from 'vue';
import { ProFieldTimeSelectProps, proFieldTimeSelectProps } from './props';
import { useVModel } from '@vueuse/core';

const ProFieldTimeSelect = defineComponent<ProFieldTimeSelectProps>(
	(props, ctx) => {
		const model = useVModel(props, 'modelValue', ctx.emit);

		return () => <ElTimeSelect {...props} v-model={model.value} />;
	},
	{
		name: 'ProFieldTimeSelect',
	}
) as unknown as FunctionalComponent<ProFieldTimeSelectProps>;

ProFieldTimeSelect.props = proFieldTimeSelectProps as any;

export * from './props';

export { ProFieldTimeSelect };

export default ProFieldTimeSelect;
