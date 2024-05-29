/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-04-10 00:07:29
 * @LastEditTime: 2024-05-29 15:02:44
 * @FilePath: \element-plus-pro\packages\field\src\components\Input\typing.ts
 */
import { inputProps } from "element-plus";
import type { CSSProperties, ExtractPropTypes, PropType } from "vue";

export const proInputProps = {
	...inputProps,
	type: {
		type: String as PropType<"text" | "password" | "textarea">,
		default: "text",
	},
	mode: {
		type: String as PropType<"read" | "edit">,
		default: "edit",
	},
	style: {
		type: Object as PropType<CSSProperties>,
		default: {},
	},
};

export type ProFieldInputProps = Partial<ExtractPropTypes<typeof proInputProps>>;

export type ProFieldTextProps = Omit<ProFieldInputProps, "type">;

export type ProFieldPasswordProps = Omit<ProFieldInputProps, "type">;

export type ProFieldTextareaProps = Omit<ProFieldInputProps, "type">;
