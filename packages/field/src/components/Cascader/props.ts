/*
 * @Description:
 * @Date: 2024-04-15 10:47:56
 * @LastEditTime: 2024-07-09 16:58:41
 */
import { cascaderProps } from "element-plus";
import { CSSProperties, ExtractPropTypes, PropType } from "vue-demi";
import { ProFieldMode } from "../../typing";

export const proFieldCascaderProps = {
	...cascaderProps,
	mode: {
		type: String as PropType<ProFieldMode>,
		default: "edit",
	},
	style: {
		type: Object as PropType<CSSProperties>,
		default: {},
	},
};

export type ProFieldCascaderProps = Partial<ExtractPropTypes<typeof proFieldCascaderProps>>;
