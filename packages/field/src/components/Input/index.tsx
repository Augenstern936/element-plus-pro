/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-05-16 13:44:09
 * @FilePath: \element-plus-pro\packages\field\src\components\Input\index.tsx
 */
import { ElInput } from "element-plus";
import "element-plus/theme-chalk/src/input.scss";
import { FunctionalComponent, computed, defineComponent } from "vue";
import {
	ProFieldInputProps,
	ProFieldPasswordProps,
	ProFieldTextProps,
	ProFieldTextareaProps,
	proInputProps,
} from "./props";

const ProFieldInput = defineComponent<ProFieldInputProps>(
	(props, ctx) => {
		const state = computed({
			get: () => {
				return props.modelValue;
			},
			set: (value) => {
				ctx.emit("update:modelValue", value);
			},
		});

		return () => <ElInput v-model={state.value} {...props} />;
	},
	{
		name: "ProFieldInput",
	}
) as unknown as FunctionalComponent<ProFieldInputProps>;

ProFieldInput.props = proInputProps as any;

export * from "./props";

export const ProFieldText = (props: ProFieldTextProps) => <ProFieldInput {...props} type="text" />;

export const ProFieldPassword = (props: ProFieldPasswordProps) => <ProFieldInput {...props} type="password" />;

export const ProFieldTextarea = (props: ProFieldTextareaProps) => <ProFieldInput {...props} type="textarea" />;
