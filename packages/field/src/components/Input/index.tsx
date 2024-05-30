/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-05-30 09:03:09
 * @FilePath: \element-plus-pro\packages\field\src\components\Input\index.tsx
 */
import { Hide, View as ViewIcon } from "@element-plus/icons-vue";
import { ElIcon, ElInput, ElSpace, ElText } from "element-plus";
import "element-plus/theme-chalk/src/input.scss";
import "element-plus/theme-chalk/src/space.scss";
import "element-plus/theme-chalk/src/text.scss";
import { FunctionalComponent, computed, defineComponent, ref } from "vue";
import {
	ProFieldInputProps,
	ProFieldPasswordProps,
	ProFieldTextProps,
	ProFieldTextareaProps,
	proInputProps,
} from "./props";
import "./style.scss";

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

		return () => <ElInput {...props} v-model={state.value} />;
	},
	{
		name: "ProFieldInput",
	}
) as unknown as FunctionalComponent<ProFieldInputProps>;

ProFieldInput.props = proInputProps as any;

export * from "./props";

export const ProFieldText = (props: ProFieldTextProps) => <ProFieldInput {...props} type="text" />;

export const ProFieldPassword = (props: ProFieldPasswordProps) => {
	const isView = ref(false);

	return props.mode === "read" && props.modelValue ? (
		<ElSpace>
			<ElText class="pro-field-password__read-status-text" style={{ height: isView.value ? "unset" : "1px" }}>
				{isView.value ? props.modelValue : "********"}
			</ElText>
			<ElText
				class="pro-field-password__view-hide-switch"
				type="primary"
				style={{ height: isView.value ? "unset" : "1px" }}
				onClick={() => (isView.value = !isView.value)}
			>
				<ElIcon>{isView.value ? <ViewIcon /> : <Hide />}</ElIcon>
			</ElText>
		</ElSpace>
	) : (
		<ProFieldInput {...props} type="password" />
	);
};

export const ProFieldTextarea = (props: ProFieldTextareaProps) => <ProFieldInput {...props} type="textarea" />;
