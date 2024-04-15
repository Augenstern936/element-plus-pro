/*
 * @Description:
 * @Date: 2024-04-15 10:48:08
 * @LastEditTime: 2024-04-15 16:10:26
 */
import { switchProps } from "element-plus";
import { CSSProperties, ExtractPropTypes, PropType } from "vue";

export const proFieldSwitchProps = {
	...switchProps,
	style: {
		type: Object as PropType<CSSProperties>,
		default: {},
	},
};

export type ProFieldSwitchProps = ExtractPropTypes<typeof proFieldSwitchProps>;
