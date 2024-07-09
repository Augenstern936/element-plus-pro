/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-07-07 12:15:18
 * @LastEditTime: 2024-07-09 16:59:01
 * @FilePath: \element-plus-pro\packages\field\src\components\Checkbox\useRender.tsx
 */
import { enumTransformOptions, getValueOptionConfigs } from "@element-plus/pro-utils";
import { ElCheckbox, ElCheckboxButton, ElCheckboxGroup } from "element-plus";
import { Ref, computed } from "vue-demi";
import { ReadOptions } from "../widgets";
import { ProFieldCheckboxButtonProps, ProFieldCheckboxProps } from "./typing";

function useRender(
	type: "checkbox" | "checkbox-button",
	props: ProFieldCheckboxProps | ProFieldCheckboxButtonProps,
	model: Ref
) {
	const RenderElement = type === "checkbox" ? ElCheckbox : ElCheckboxButton;

	const options = computed(() => {
		return props?.valueOptions?.length ? props.valueOptions : enumTransformOptions(props.valueEnum ?? {});
	});

	const element = computed(() => {
		if (props.mode === "read") {
			return (
				<ReadOptions
					markShape={props.markShape}
					value={getValueOptionConfigs(props.modelValue ?? [], options.value)}
				/>
			);
		}
		if (props.mode === "edit") {
			return (
				<ElCheckboxGroup v-model={model.value}>
					{options.value?.map((option) => {
						return (
							<RenderElement {...option} label={option.value} key={option.label}>
								{option.label}
							</RenderElement>
						);
					})}
				</ElCheckboxGroup>
			);
		}
		return "";
	});

	return () => element.value;
}

export default useRender;
