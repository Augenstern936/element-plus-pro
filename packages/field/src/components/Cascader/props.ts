/*
 * @Description:
 * @Date: 2024-04-15 10:47:56
 * @LastEditTime: 2024-05-29 14:38:59
 */
import { cascaderProps } from "element-plus";
import { CSSProperties, ExtractPropTypes, PropType } from "vue";

export const proFieldCascaderProps = {
	...cascaderProps,
	mode: {
		type: String as PropType<"read" | "edit">,
		default: "edit",
	},
	style: {
		type: Object as PropType<CSSProperties>,
		default: {},
	},
};

export type ProFieldCascaderProps = Partial<ExtractPropTypes<typeof proFieldCascaderProps>>;
