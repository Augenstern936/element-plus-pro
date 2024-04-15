/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-04-14 20:52:18
 * @FilePath: \element-plus-pro\packages\field\src\components\Checkbox\index.tsx
 */
import { ElCheckbox, ElCheckboxButton, ElCheckboxGroup } from "element-plus";
import "element-plus/theme-chalk/src/checkbox-button.scss";
import "element-plus/theme-chalk/src/checkbox-group.scss";
import "element-plus/theme-chalk/src/checkbox.scss";
import { FunctionalComponent, computed, defineComponent } from "vue";
import { ProFieldCheckboxProps, proFieldCheckboxProps } from "./typing";

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

ProFieldCheckbox.props = proFieldCheckboxProps as any;

export * from "./typing";

export { ProFieldCheckbox };

export default ProFieldCheckbox;
