/*
 * @Description:
 * @Date: 2024-04-15 10:48:08
 * @LastEditTime: 2024-04-25 13:46:38
 */
import { colorPickerProps } from "element-plus";
import { CSSProperties, ExtractPropTypes, PropType } from "vue";

export const proFieldColor = {
	...colorPickerProps,
	style: {
		type: Object as PropType<CSSProperties>,
		default: {},
	},
};

export type ProFieldColorProps = ExtractPropTypes<typeof proFieldColor>;
