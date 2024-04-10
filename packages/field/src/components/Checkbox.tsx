/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-04-10 18:24:45
 * @FilePath: \element-plus-pro\packages\field\src\components\Checkbox.tsx
 */
import type { CheckboxProps } from "element-plus";
import { ElCheckbox, ElCheckboxButton, ElCheckboxGroup, checkboxProps } from "element-plus";
import "element-plus/theme-chalk/src/checkbox-button.scss";
import "element-plus/theme-chalk/src/checkbox-group.scss";
import "element-plus/theme-chalk/src/checkbox.scss";
import { CSSProperties, FunctionalComponent, PropType, computed, defineComponent } from "vue";

export interface ProFieldCheckboxProps extends CheckboxProps {
	type: "checkbox" | "checkboxButton";
	options?: { label?: string; value: string | number | boolean; [x: string]: any }[];
	style?: CSSProperties;
}

const ProFieldCheckbox = defineComponent<ProFieldCheckboxProps>(
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
			<ElCheckboxGroup v-model={state.value}>
				{props.options?.map((option, i) => (
					<>
						{props.type == "checkbox" ? (
							<ElCheckbox {...option} key={i} />
						) : (
							<ElCheckboxButton {...option} key={i}>
								{option.label}
							</ElCheckboxButton>
						)}
					</>
				))}
			</ElCheckboxGroup>
		);
	},
	{
		name: "ProFieldCheckbox",
	}
) as unknown as FunctionalComponent<ProFieldCheckboxProps>;

ProFieldCheckbox.props = {
	...checkboxProps,
	type: {
		type: String as PropType<"checkbox" | "checkboxButton">,
		default: "checkbox",
	},
	options: {
		type: Array,
		default: [],
	},
};

export default ProFieldCheckbox;
