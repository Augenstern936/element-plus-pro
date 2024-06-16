/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-06-16 13:12:06
 * @FilePath: \element-plus-pro\packages\field\src\components\Switch\index.tsx
 */
import { ElSwitch, ElText } from 'element-plus';
import 'element-plus/theme-chalk/src/switch.scss';
import { FunctionalComponent, computed, defineComponent } from 'vue';
import { ProFieldSwitchProps, proFieldSwitchProps } from './props';
import { useVModel } from '@vueuse/core';

const ProFieldSwitch = defineComponent<ProFieldSwitchProps>(
	(props, ctx) => {
		const model = useVModel(props, 'modelValue', ctx.emit);

		const text = computed(() => {
			const activeText = props.activeText || '打开';
			const inactiveText = props.inactiveText || '关闭';

			const { activeValue, inactiveValue } = props;

			if (model.value === activeValue) {
				return activeText;
			}
			if (model.value === inactiveValue) {
				return inactiveText;
			}

			return model.value ? (activeValue ? inactiveText : activeText) : inactiveValue ? activeText : inactiveText;
		});

		const render = () => {
			if (props.mode === 'read') {
				return <ElText>{text.value}</ElText>;
			}
			return <ElSwitch {...props} v-model={model.value} />;
		};

		return render;
	},
	{
		name: 'ProFieldSwitch',
	}
) as unknown as FunctionalComponent<ProFieldSwitchProps>;

ProFieldSwitch.props = proFieldSwitchProps as any;

export * from './props';

export { ProFieldSwitch };

export default ProFieldSwitch;
