/*
 * @Description:
 * @Date: 2024-04-15 10:48:08
 * @LastEditTime: 2024-05-17 20:14:18
 */
import { rateProps } from 'element-plus';
import { CSSProperties, ExtractPropTypes, PropType } from 'vue';

export const proFieldRateProps = {
	...rateProps,
	style: {
		type: Object as PropType<CSSProperties>,
		default: {},
	},
};

export type ProFieldRateProps = ExtractPropTypes<typeof proFieldRateProps>;
