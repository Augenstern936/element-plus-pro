/*
 * @Description:
 * @Date: 2024-04-15 10:48:08
 * @LastEditTime: 2024-07-09 17:02:50
 */
import { sliderProps } from "element-plus";
import { CSSProperties, ExtractPropTypes, PropType } from "vue-demi";
import { ProFieldMode } from "../../typing";

export const proFieldSliderProps = {
	...sliderProps,
	mode: {
		type: String as PropType<ProFieldMode>,
		default: "edit",
	},
	style: {
		type: Object as PropType<CSSProperties>,
		default: {},
	},
};

export type ProFieldSliderProps = Partial<ExtractPropTypes<typeof proFieldSliderProps>>;
