/*
 * @Description:
 * @Date: 2024-04-15 09:39:26
 * @LastEditTime: 2024-05-29 14:39:12
 */
import type { Option } from "@element-plus/pro-types";
import { checkboxProps } from "element-plus";
import { CSSProperties, ExtractPropTypes, PropType } from "vue";

export const proFieldCheckboxProps = {
	...checkboxProps,
	type: {
		type: String as PropType<"checkbox" | "checkboxButton">,
		default: "checkbox",
	},
	mode: {
		type: String as PropType<"read" | "edit">,
		default: "edit",
	},
	options: {
		type: Array as PropType<Option[]>,
		default: [],
	},
	style: {
		type: Object as PropType<CSSProperties>,
		default: {},
	},
};

export type ProFieldCheckboxProps = Partial<ExtractPropTypes<typeof proFieldCheckboxProps>>;
