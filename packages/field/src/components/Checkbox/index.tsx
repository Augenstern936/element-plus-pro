/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-06-23 15:49:44
 * @FilePath: \element-plus-pro\packages\field\src\components\Checkbox\index.tsx
 */
import { ElCheckbox, ElCheckboxButton, ElCheckboxGroup } from 'element-plus';
import { ReadOptions } from '../widgets';
import 'element-plus/theme-chalk/src/checkbox-button.scss';
import 'element-plus/theme-chalk/src/checkbox-group.scss';
import 'element-plus/theme-chalk/src/checkbox.scss';
import { ProFieldCheckboxProps, proFieldCheckboxProps } from './props';
import { useVModel } from '@vueuse/core';
import { FunctionalComponent, PropType, computed, defineComponent } from 'vue';
import { enumTransformOptions, getValueOptionConfigs } from '@element-plus/pro-utils';

type RenderCheckboxProps = ProFieldCheckboxProps & {
	type: 'checkbox' | 'checkbox-button';
};

const RenderCheckbox = defineComponent<RenderCheckboxProps>((props, ctx) => {
	const model = useVModel(props, 'modelValue', ctx.emit);
	const options = computed(() => {
		return props?.valueOptions?.length ? props.valueOptions : enumTransformOptions(props.valueEnum ?? {});
	});

	return () => {
		if (props.mode === 'read') {
			return (
				<ReadOptions
					markShape={props.markShape}
					value={getValueOptionConfigs(props.modelValue ?? [], options.value)}
				/>
			);
		}
		if (props.mode === 'edit') {
			return (
				<ElCheckboxGroup v-model={model.value}>
					{options.value?.map((option, i) => {
						const Render = props.type === 'checkbox' ? ElCheckbox : ElCheckboxButton;
						return (
							<Render key={i} {...option} label={option.value}>
								{option.label}
							</Render>
						);
					})}
				</ElCheckboxGroup>
			);
		}
		return '';
	};
}) as unknown as FunctionalComponent<RenderCheckboxProps>;

RenderCheckbox.props = {
	...proFieldCheckboxProps,
	type: {
		type: String as PropType<'checkbox' | 'checkbox-button'>,
	},
} as any;

export * from './props';

export const ProFieldCheckbox = (props: ProFieldCheckboxProps) => <RenderCheckbox {...props} type='checkbox' />;

export const ProFieldCheckboxButton = (props: ProFieldCheckboxProps) => (
	<RenderCheckbox {...props} type='checkbox-button' />
);
