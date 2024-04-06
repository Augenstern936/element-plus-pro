/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-04-04 23:41:23
 * @FilePath: \element-plus-pro\packages\field\src\components\Cascader.tsx
 */
import 'element-plus/theme-chalk/src/cascader.scss';
import { cascaderProps, ElCascader } from 'element-plus';
import type { CascaderProps } from 'element-plus';
import { CSSProperties, FunctionalComponent, computed, defineComponent } from 'vue';

export interface ProFieldCascaderProps extends CascaderProps {
	modelValue?: string | number;
	style?: CSSProperties;
}

const ProFieldCascader = defineComponent<ProFieldCascaderProps>(
	(props, ctx) => {
		const state = computed({
			get: () => {
				return props.modelValue;
			},
			set: (value) => {
				ctx.emit('update:modelValue', value);
			},
		});

		return () => <ElCascader v-model={state.value} {...props} />;
	},
	{
		name: 'ProFieldCascader',
	}
) as FunctionalComponent<ProFieldCascaderProps>;

ProFieldCascader.props = {
	...cascaderProps,
	modelValue: {
		type: [String, Number],
	},
} as any;

export default ProFieldCascader;
