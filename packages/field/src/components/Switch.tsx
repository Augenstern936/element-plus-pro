/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-04-04 23:44:15
 * @FilePath: \element-plus-pro\packages\field\src\components\Switch.tsx
 */
import 'element-plus/theme-chalk/src/switch.scss';
import { switchProps, ElSwitch } from 'element-plus';
import type { SwitchProps } from 'element-plus';
import { CSSProperties, FunctionalComponent, computed, defineComponent } from 'vue';

export interface ProFieldSwitchProps extends SwitchProps {
	style?: CSSProperties;
}

const ProFieldSwitch = defineComponent<ProFieldSwitchProps>(
	(props, ctx) => {
		const state = computed({
			get: () => {
				return props.modelValue;
			},
			set: (value) => {
				ctx.emit('update:modelValue', value);
			},
		});

		return () => <ElSwitch v-model={state.value} {...props} />;
	},
	{
		name: 'ProFieldSwitch',
	}
) as FunctionalComponent<ProFieldSwitchProps>;

ProFieldSwitch.props = switchProps;

export default ProFieldSwitch;
