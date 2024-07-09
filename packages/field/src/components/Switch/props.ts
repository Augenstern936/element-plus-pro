/*
 * @Description:
 * @Date: 2024-04-15 10:48:08
 * @LastEditTime: 2024-07-09 17:02:57
 */
import { switchProps } from "element-plus";
import { CSSProperties, ExtractPropTypes, PropType } from "vue-demi";
import { ProFieldMode } from "../../typing";

export const proFieldSwitchProps = {
	...switchProps,
	mode: {
		type: String as PropType<ProFieldMode>,
		default: "edit",
	},
	style: {
		type: Object as PropType<CSSProperties>,
		default: {},
	},
};

export type ProFieldSwitchProps = Partial<ExtractPropTypes<typeof proFieldSwitchProps>>;
