/*
 * @Description:
 * @Date: 2024-04-15 10:48:08
 * @LastEditTime: 2024-04-15 15:49:53
 */
import { progressProps } from "element-plus";
import { CSSProperties, ExtractPropTypes, PropType } from "vue";

export const proFieldProgressProps = {
	...progressProps,
	style: {
		type: Object as PropType<CSSProperties>,
		default: {},
	},
};

export type ProFieldProgressProps = ExtractPropTypes<typeof proFieldProgressProps>;
