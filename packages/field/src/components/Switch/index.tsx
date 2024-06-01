/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-06-01 00:42:17
 * @FilePath: \element-plus-pro\packages\field\src\components\Switch\index.tsx
 */
import { ElSwitch } from 'element-plus';
import 'element-plus/theme-chalk/src/switch.scss';
import { FunctionalComponent, defineComponent } from 'vue';
import { ProFieldSwitchProps, proFieldSwitchProps } from './props';
import { useVModel } from '@vueuse/core';

const ProFieldSwitch = defineComponent<ProFieldSwitchProps>(
	(props, ctx) => {
		const model = useVModel(props, 'modelValue', ctx.emit);

		return () => <ElSwitch {...props} v-model={model.value} />;
	},
	{
		name: 'ProFieldSwitch',
	}
) as unknown as FunctionalComponent<ProFieldSwitchProps>;

ProFieldSwitch.props = proFieldSwitchProps as any;

export * from './props';

export { ProFieldSwitch };

export default ProFieldSwitch;
