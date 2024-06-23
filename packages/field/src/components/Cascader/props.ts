/*
 * @Description:
 * @Date: 2024-04-15 10:47:56
 * @LastEditTime: 2024-06-22 19:43:48
 */
import { cascaderProps } from 'element-plus';
import { CSSProperties, ExtractPropTypes, PropType } from 'vue';
import { ProFieldMode } from '../../typing';

export const proFieldCascaderProps = {
	...cascaderProps,
	mode: {
		type: String as PropType<ProFieldMode>,
		default: 'edit',
	},
	style: {
		type: Object as PropType<CSSProperties>,
		default: {},
	},
};

export type ProFieldCascaderProps = Partial<ExtractPropTypes<typeof proFieldCascaderProps>>;
