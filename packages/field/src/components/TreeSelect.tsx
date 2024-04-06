/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-04-04 23:46:44
 * @FilePath: \element-plus-pro\packages\field\src\components\TreeSelect.tsx
 */
import 'element-plus/theme-chalk/src/tree-select.scss';
import { ElTreeSelect } from 'element-plus';
import type { ISelectProps } from 'element-plus';
import { CSSProperties, FunctionalComponent, computed, defineComponent } from 'vue';

export interface ProFieldTreeSelectProps extends Omit<ISelectProps, 'options'> {
	options?: { label?: string; value: string | number | boolean | Record<string, any>; [x: string]: any }[];
	style?: CSSProperties;
}

const ProFieldTreeSelect = defineComponent<ProFieldTreeSelectProps>(
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
		name: 'ProFieldTreeSelect',
	}
) as FunctionalComponent<ProFieldTreeSelectProps>;

export default ProFieldTreeSelect;
