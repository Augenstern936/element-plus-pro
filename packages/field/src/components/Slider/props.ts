/*
 * @Description:
 * @Date: 2024-04-15 10:48:08
 * @LastEditTime: 2024-04-15 16:03:38
 */
import { sliderProps } from "element-plus";
import { CSSProperties, ExtractPropTypes, PropType } from "vue";

export const proFieldSliderProps = {
	...sliderProps,
	style: {
		type: Object as PropType<CSSProperties>,
		default: {},
	},
};

export type ProFieldSliderProps = ExtractPropTypes<typeof proFieldSliderProps>;
