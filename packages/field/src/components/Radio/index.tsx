/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-06 21:50:46
 * @LastEditTime: 2024-06-23 16:12:53
 * @FilePath: \element-plus-pro\packages\field\src\components\Radio\index.tsx
 */
import { ElRadio, ElRadioButton, ElRadioGroup } from 'element-plus';
import 'element-plus/theme-chalk/src/radio-button.scss';
import 'element-plus/theme-chalk/src/radio-group.scss';
import 'element-plus/theme-chalk/src/radio.scss';
import { useVModel } from '@vueuse/core';
import { ProFieldRadioProps, ProFieldRadioButtonProps, proFieldRadioProps } from './props';
import { enumTransformOptions, getValueOptionConfigs } from '@element-plus/pro-utils';
import { defineComponent, computed, FunctionalComponent, PropType } from 'vue';
import { ReadOptions } from '../widgets';

type RenderRadioProps = ProFieldRadioProps & {
	type: 'radio' | 'radio-button';
};

const RenderRadio = defineComponent<RenderRadioProps>((props, ctx) => {
	const model = useVModel(props, 'modelValue', ctx.emit);
	const options = computed(() => {
		return props?.valueOptions?.length ? props.valueOptions : enumTransformOptions(props.valueEnum ?? {});
	});

	return () => {
		if (props.mode === 'read') {
			const value = getValueOptionConfigs(model.value ?? [], options.value);
			return !value?.length ? model.value : <ReadOptions markShape={props.markShape} value={value} />;
		}
		if (props.mode === 'edit') {
			return (
				<ElRadioGroup v-model={model.value}>
					{options.value?.map((option, i) => {
						const Render = props.type === 'radio' ? ElRadio : ElRadioButton;
						return (
							<Render key={i} {...option} label={option.value}>
								{option.label}
							</Render>
						);
					})}
				</ElRadioGroup>
			);
		}
		return '';
	};
}) as unknown as FunctionalComponent<RenderRadioProps>;

RenderRadio.props = proFieldRadioProps as any;

export * from './props';

export const ProFieldRadio = (props: ProFieldRadioProps) => <RenderRadio {...props} type='radio' />;

export const ProFieldRadioButton = (props: ProFieldRadioButtonProps) => <RenderRadio {...props} type='radio-button' />;
