/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-04-02 21:24:49
 * @FilePath: \element-plus-pro\packages\form\src\components\Select.tsx
 */
import { ElSelect, ElOption } from 'element-plus';
import type { ISelectProps } from 'element-plus';
import { CSSProperties, FunctionalComponent, computed, defineComponent } from 'vue';
import { formatPlaceholder } from '@element-plus/pro-utils';
import 'element-plus/theme-chalk/src/select.scss';
import 'element-plus/theme-chalk/src/option.scss';

export interface ProSelectProps extends Omit<ISelectProps, 'options'> {
	label?: string;
	options?: { label?: string; value: string | number | boolean | Record<string, any>; [x: string]: any }[];
	style?: CSSProperties;
}

const ProFormSelect = defineComponent<ProSelectProps>(
	(props, ctx) => {
		const state = computed({
			get: () => {
				return props.modelValue;
			},
			set: (value) => {
				ctx.emit('update:modelValue', value);
			},
		});

		return () => (
			<ElSelect v-model={state.value} placeholder={formatPlaceholder(props.label, 'select') as string}>
				{props.options?.map((option, index) => (
					<ElOption {...option} key={index}>
						{option.label}
					</ElOption>
				))}
			</ElSelect>
		);
	},
	{
		name: 'ProFormSelect',
	}
) as FunctionalComponent<ProSelectProps>;

export default ProFormSelect;
