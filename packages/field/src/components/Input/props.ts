/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-04-10 00:07:29
 * @LastEditTime: 2024-07-09 17:01:44
 * @FilePath: \element-plus-pro\packages\field\src\components\Input\props.ts
 */
import { inputNumberProps, inputProps } from "element-plus";
import type { CSSProperties, ExtractPropTypes, PropType } from "vue-demi";
import { ProFieldMode } from "../../typing";

const commonProps = {
	mode: {
		type: String as PropType<ProFieldMode>,
		default: "edit",
	},
	style: {
		type: Object as PropType<CSSProperties>,
		default: {},
	},
};

export const baseInputProps = {
	...inputProps,
	...commonProps,
	type: {
		type: String as PropType<"text" | "password" | "textarea">,
		default: "text",
	},
};

export const proInputNumberProps = {
	...inputNumberProps,
	...commonProps,
};

export type BaseInputProps = Partial<ExtractPropTypes<typeof baseInputProps>>;

export type ProFieldInputNumberProps = Partial<ExtractPropTypes<typeof proInputNumberProps>>;

export type ProFieldTextProps = Omit<BaseInputProps, "type">;

export type ProFieldNumberProps = Omit<BaseInputProps, "type">;

export type ProFieldPasswordProps = Omit<BaseInputProps, "type">;

export type ProFieldTextareaProps = Omit<BaseInputProps, "type">;
