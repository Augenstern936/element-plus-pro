/*
 * @Description:
 * @Date: 2024-04-15 10:48:08
 * @LastEditTime: 2024-07-09 17:01:26
 */
import { imageProps } from "element-plus";
import { CSSProperties, ExtractPropTypes, PropType } from "vue-demi";
import { ProFieldMode } from "../../typing";

export const proFieldImageProps = {
	...imageProps,
	mode: {
		type: String as PropType<ProFieldMode>,
		default: "edit",
	},
	src: {
		type: [String, Array] as PropType<string | string[]>,
	},
	style: {
		type: Object as PropType<CSSProperties>,
		default: {},
	},
};

export type ProFieldImageProps = Partial<ExtractPropTypes<typeof proFieldImageProps>>;
