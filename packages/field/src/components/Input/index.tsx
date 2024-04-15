/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-04-10 18:22:42
 * @FilePath: \element-plus-pro\packages\field\src\components\Input\index.tsx
 */
import { ElInput, inputProps } from "element-plus";
import "element-plus/theme-chalk/src/input.scss";
import { FunctionalComponent, PropType, computed, defineComponent } from "vue";
import { ProFieldInputProps, ProFieldPasswordProps, ProFieldTextProps, ProFieldTextareaProps } from "./typing";

const ProFieldInput = defineComponent<ProFieldInputProps>((props, ctx) => {
	const state = computed({
		get: () => {
			return props.modelValue;
		},
		set: (value) => {
			ctx.emit("update:modelValue", value);
		},
	});

	return () => <ElInput v-model={state.value} {...props} />;
}) as unknown as FunctionalComponent<ProFieldInputProps>;

ProFieldInput.props = {
	...inputProps,
	type: {
		type: String as PropType<"text" | "password" | "textarea">,
		default: "text",
	},
};

export const ProFieldText = (props: ProFieldTextProps) => {
	return <ProFieldInput {...props} type="text" />;
};

export const ProFieldPassword = (props: ProFieldPasswordProps) => {
	return <ProFieldInput {...props} type="password" />;
};

export const ProFieldTextarea = (props: ProFieldTextareaProps) => {
	return <ProFieldInput {...props} type="textarea" />;
};