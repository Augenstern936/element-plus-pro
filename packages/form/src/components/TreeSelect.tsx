/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-04-02 22:54:38
 * @FilePath: \element-plus-pro\packages\form\src\components\TreeSelect.tsx
 */
import { ElTreeSelect } from 'element-plus';
import type { ISelectProps } from 'element-plus';
import { CSSProperties, FunctionalComponent, computed, defineComponent } from 'vue';
import 'element-plus/theme-chalk/src/tree-select.scss';

export interface ProFormTreeSelectProps extends Omit<ISelectProps, 'options'> {
	label?: string;
	options?: { label?: string; value: string | number | boolean | Record<string, any>; [x: string]: any }[];
	style?: CSSProperties;
}

const ProFormTreeSelect = defineComponent<ProFormTreeSelectProps>(
	(props, ctx) => {
		const state = computed({
			get: () => {
				return props.modelValue;
			},
			set: (value) => {
				ctx.emit('update:modelValue', value);
			},
		});

		return () => <ElTreeSelect v-model={state.value} {...props} />;
	},
	{
		name: 'ProFormTreeSelect',
	}
) as FunctionalComponent<ProFormTreeSelectProps>;

export default ProFormTreeSelect;
