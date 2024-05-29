/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-06 21:50:46
 * @LastEditTime: 2024-05-29 23:38:23
 * @FilePath: \element-plus-pro\packages\field\src\components\Radio\index.tsx
 */
import { ElRadio, ElRadioButton, ElRadioGroup } from 'element-plus';
import 'element-plus/theme-chalk/src/radio-button.scss';
import 'element-plus/theme-chalk/src/radio-group.scss';
import 'element-plus/theme-chalk/src/radio.scss';
import { FunctionalComponent, computed, defineComponent } from 'vue';
import { ProFieldRadioProps, proFieldRadioProps } from './props';

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
						{props.type == 'radio' ? (
							<ElRadio key={i} {...option} />
						) : (
							<ElRadioButton key={i} {...option} />
						)}
					</>
				))}
			</ElRadioGroup>
		);
	},
	{
		name: 'ProFieldRadio',
	}
) as unknown as FunctionalComponent<ProFieldRadioProps>;

ProFieldRadio.props = proFieldRadioProps as any;

export * from './props';

export { ProFieldRadio };

export default ProFieldRadio;
