/*
 * @Description:
 * @Date: 2024-04-15 10:47:56
 * @LastEditTime: 2024-04-25 13:47:10
 */
import { cascaderProps } from "element-plus";
import { CSSProperties, ExtractPropTypes, PropType } from "vue";

export const proFieldCascaderProps = {
	...cascaderProps,
	style: {
		type: Object as PropType<CSSProperties>,
		default: {},
	},
};

export type ProFieldCascaderProps = ExtractPropTypes<typeof proFieldCascaderProps>;
