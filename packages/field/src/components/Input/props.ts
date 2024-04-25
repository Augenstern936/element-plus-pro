/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-04-10 00:07:29
 * @LastEditTime: 2024-04-25 14:06:04
 * @FilePath: \element-plus-pro\packages\field\src\components\Input\typing.ts
 */
import type { InputProps } from "element-plus";
import { inputProps } from "element-plus";
import type { CSSProperties, PropType } from "vue";

export const proInputProps = {
	...inputProps,
	type: {
		type: String as PropType<"text" | "password" | "textarea">,
		default: "text",
	},
};

export interface ProFieldInputProps extends InputProps {
	type: "text" | "password" | "textarea";
	style?: CSSProperties;
}

export type ProFieldTextProps = Omit<ProFieldInputProps, "type">;

export type ProFieldPasswordProps = Omit<ProFieldInputProps, "type">;

export type ProFieldTextareaProps = Omit<ProFieldInputProps, "type">;
