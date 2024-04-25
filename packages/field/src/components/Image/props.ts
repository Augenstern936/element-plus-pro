/*
 * @Description:
 * @Date: 2024-04-15 10:48:08
 * @LastEditTime: 2024-04-15 15:48:12
 */
import { imageProps } from "element-plus";
import { CSSProperties, ExtractPropTypes, PropType } from "vue";

export const proFieldImageProps = {
	...imageProps,
	style: {
		type: Object as PropType<CSSProperties>,
		default: {},
	},
};

export type ProFieldImageProps = ExtractPropTypes<typeof proFieldImageProps>;
