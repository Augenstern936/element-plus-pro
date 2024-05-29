/*
 * @Description:
 * @Date: 2024-04-15 10:48:08
 * @LastEditTime: 2024-05-29 15:03:32
 */
import { switchProps } from "element-plus";
import { CSSProperties, ExtractPropTypes, PropType } from "vue";

export const proFieldSwitchProps = {
	...switchProps,
	mode: {
		type: String as PropType<"read" | "edit">,
		default: "edit",
	},
	style: {
		type: Object as PropType<CSSProperties>,
		default: {},
	},
};

export type ProFieldSwitchProps = Partial<ExtractPropTypes<typeof proFieldSwitchProps>>;
