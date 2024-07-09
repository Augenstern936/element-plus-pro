/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-07-07 12:15:18
 * @LastEditTime: 2024-07-09 17:02:08
 * @FilePath: \element-plus-pro\packages\field\src\components\Radio\useRender.tsx
 */
import { enumTransformOptions, getValueOptionConfigs } from "@element-plus/pro-utils";
import { ElRadio, ElRadioButton, ElRadioGroup } from "element-plus";
import { Ref, computed } from "vue-demi";
import { ReadOptions } from "../widgets";
import { ProFieldRadioButtonProps, ProFieldRadioProps } from "./typing";

function useRender(type: "radio" | "radio-button", props: ProFieldRadioProps | ProFieldRadioButtonProps, model: Ref) {
	const RenderElement = type === "radio" ? ElRadio : ElRadioButton;

	const options = computed(() => {
		return props?.valueOptions?.length ? props.valueOptions : enumTransformOptions(props.valueEnum ?? {});
	});

	const element = computed(() => {
		if (props.mode === "read") {
			const value = getValueOptionConfigs(model.value ?? [], options.value);
			return !value?.length ? model.value : <ReadOptions markShape={props.markShape} value={value} />;
		}
		if (props.mode === "edit") {
			return (
				<ElRadioGroup v-model={model.value}>
					{options.value?.map((option) => (
						<RenderElement {...option} label={option.value} key={option.label}>
							{option.label}
						</RenderElement>
					))}
				</ElRadioGroup>
			);
		}
		return "";
	});

	return () => element.value;
}

export default useRender;
