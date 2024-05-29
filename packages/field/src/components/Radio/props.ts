/*
 * @Description:
 * @Date: 2024-04-15 10:48:08
 * @LastEditTime: 2024-05-29 15:03:07
 */
import type { Option } from "@element-plus/pro-types";
import { radioProps } from "element-plus";
import { CSSProperties, ExtractPropTypes, PropType } from "vue";

export const proFieldRadioProps = {
	...radioProps,
	type: {
		type: String as PropType<"radio" | "radioButton">,
		default: "radio",
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

export type ProFieldRadioProps = Partial<ExtractPropTypes<typeof proFieldRadioProps>>;
