/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-07-06 16:02:29
 * @FilePath: \element-plus-pro\packages\field\src\components\TimeSelect\index.tsx
 */
import { ElTimeSelect } from 'element-plus';
import 'element-plus/theme-chalk/src/time-select.scss';
import type { DefineComponent } from 'vue';
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
) as DefineComponent<ProFieldTimeSelectProps>;

ProFieldTimeSelect.props = proFieldTimeSelectProps as any;

export * from './props';

export { ProFieldTimeSelect };

export default ProFieldTimeSelect;
