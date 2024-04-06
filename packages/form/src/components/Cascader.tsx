/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-04-02 22:48:36
 * @FilePath: \element-plus-pro\packages\form\src\components\Cascader.tsx
 */
import { cascaderProps, ElCascader } from 'element-plus';
import type { CascaderProps } from 'element-plus';
import { CSSProperties, FunctionalComponent, computed, defineComponent } from 'vue';
import 'element-plus/theme-chalk/src/cascader.scss';

export interface ProFormCascaderProps extends CascaderProps {
	modelValue?: string | number;
	style?: CSSProperties;
}

const ProFormCascader = defineComponent<ProFormCascaderProps>(
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
		name: 'ProFormCascader',
	}
) as FunctionalComponent<ProFormCascaderProps>;

ProFormCascader.props = {
	...cascaderProps,
	modelValue: {
		type: [String, Number],
	},
} as any;

export default ProFormCascader;
