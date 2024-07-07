/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-07-07 11:43:44
 * @FilePath: \element-plus-pro\packages\field\src\components\Select\index.tsx
 */
import { useVModel } from '@vueuse/core';
import { ElOption, ElSelect } from 'element-plus';
import 'element-plus/theme-chalk/src/option.scss';
import 'element-plus/theme-chalk/src/select.scss';
import { DefineComponent, defineComponent, computed } from 'vue';
import { proFieldSelectProps, ProFieldSelectProps } from './props';
import { enumTransformOptions, getValueOptionConfigs } from '@element-plus/pro-utils';
import { ReadOptions } from '../widgets';

const ProFieldSelect = defineComponent<ProFieldSelectProps>(
	(props, ctx) => {
		const model = useVModel(props, 'modelValue', ctx.emit);
		const options = computed(() => {
			return props?.valueOptions?.length ? props.valueOptions : enumTransformOptions(props.valueEnum ?? {});
		});
		return () => (
			<>
				{props.mode === 'read' ? (
					<ReadOptions
						markShape={props.markShape}
						value={getValueOptionConfigs(model.value ?? [], options.value)}
					/>
				) : (
					<ElSelect v-model={model.value}>
						{options.value?.map((option) => <ElOption {...option} key={option.label} />)}
					</ElSelect>
				)}
			</>
		);
	},
	{
		name: 'ProFieldSelect',
	}
) as DefineComponent<ProFieldSelectProps>;

ProFieldSelect.props = proFieldSelectProps as any;

export * from './props';

export { ProFieldSelect };

export default ProFieldSelect;
