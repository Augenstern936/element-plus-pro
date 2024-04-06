/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-06 21:50:46
 * @LastEditTime: 2024-04-04 14:58:11
 * @FilePath: \element-plus-pro\packages\field\src\components\Radio.tsx
 */
import 'element-plus/theme-chalk/src/radio.scss';
import 'element-plus/theme-chalk/src/radio-button.scss';
import 'element-plus/theme-chalk/src/radio-group.scss';
import { radioProps, ElRadio, ElRadioButton, ElRadioGroup } from 'element-plus';
import type { RadioProps } from 'element-plus';
import { FunctionalComponent, PropType, defineComponent, computed, CSSProperties } from 'vue';

export interface ProFieldRadioProps extends RadioProps {
	type: 'radio' | 'radioButton';
	options?: { label?: string; value: string | number | boolean; [x: string]: any }[];
	style?: CSSProperties;
}

const ProFieldRadio = defineComponent<ProFieldRadioProps>(
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
			<ElRadioGroup v-model={state.value}>
				{props.options?.map((option, i) => (
					<>
						{option.type == 'radio' ? (
							<ElRadio {...option} key={i}>
								{option.label}
							</ElRadio>
						) : (
							<ElRadioButton label={option.value} key={i}>
								{option.label}
							</ElRadioButton>
						)}
					</>
				))}
			</ElRadioGroup>
		);
	},
	{
		name: 'ProFieldRadio',
	}
) as FunctionalComponent<ProFieldRadioProps>;

ProFieldRadio.props = {
	...radioProps,
	type: {
		type: String as PropType<'radio' | 'radioButton'>,
		default: 'radio',
	},
	options: {
		type: Array,
		default: [],
	},
};

export default ProFieldRadio;
