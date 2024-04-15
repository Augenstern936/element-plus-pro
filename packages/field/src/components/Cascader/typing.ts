/*
 * @Description:
 * @Date: 2024-04-15 10:47:56
 * @LastEditTime: 2024-04-15 14:51:13
 */
import { calendarProps } from "element-plus";
import { CSSProperties, ExtractPropTypes, PropType } from "vue";

export const proFieldCascaderProps = {
	...calendarProps,
	style: {
		type: Object as PropType<CSSProperties>,
		default: {},
	},
};

export type ProFieldCascaderProps = ExtractPropTypes<typeof proFieldCascaderProps>;
