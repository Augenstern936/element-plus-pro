/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-06 21:50:46
 * @LastEditTime: 2024-04-15 15:56:31
 * @FilePath: \element-plus-pro\packages\field\src\components\Radio.tsx
 */
import { ElRadio, ElRadioButton, ElRadioGroup } from "element-plus";
import "element-plus/theme-chalk/src/radio-button.scss";
import "element-plus/theme-chalk/src/radio-group.scss";
import "element-plus/theme-chalk/src/radio.scss";
import { FunctionalComponent, computed, defineComponent } from "vue";
import { ProFieldRadioProps, proFieldRadioProps } from "./typing";

const ProFieldRadio = defineComponent<ProFieldRadioProps>(
	(props, ctx) => {
		const state = computed({
			get: () => {
				return props.modelValue;
			},
			set: (value) => {
				ctx.emit("update:modelValue", value);
			},
		});

		return () => (
			<ElRadioGroup v-model={state.value}>
				{props.options?.map((option, i) => (
					<>
						{option.type == "radio" ? (
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
		name: "ProFieldRadio",
	}
) as unknown as FunctionalComponent<ProFieldRadioProps>;

ProFieldRadio.props = proFieldRadioProps as any;

export * from "./typing";

export { ProFieldRadio };

export default ProFieldRadio;
