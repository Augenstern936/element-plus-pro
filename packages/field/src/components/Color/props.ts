/*
 * @Description:
 * @Date: 2024-04-15 10:48:08
 * @LastEditTime: 2024-05-29 14:39:19
 */
import { colorPickerProps } from "element-plus";
import { CSSProperties, ExtractPropTypes, PropType } from "vue";

export const proFieldColor = {
	...colorPickerProps,
	mode: {
		type: String as PropType<"read" | "edit">,
		default: "edit",
	},
	style: {
		type: Object as PropType<CSSProperties>,
		default: {},
	},
};

export type ProFieldColorProps = Partial<ExtractPropTypes<typeof proFieldColor>>;
