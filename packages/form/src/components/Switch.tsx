/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-04-02 22:53:18
 * @FilePath: \element-plus-pro\packages\form\src\components\Switch.tsx
 */
import { switchProps, ElSwitch } from 'element-plus';
import type { SwitchProps } from 'element-plus';
import { CSSProperties, FunctionalComponent, computed, defineComponent } from 'vue';
import 'element-plus/theme-chalk/src/switch.scss';

export interface ProFormSwitchProps extends SwitchProps {
	style?: CSSProperties;
}

const ProFormSwitch = defineComponent<ProFormSwitchProps>(
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
		name: 'ProFormSwitch',
	}
) as FunctionalComponent<ProFormSwitchProps>;

ProFormSwitch.props = switchProps;

export default ProFormSwitch;
