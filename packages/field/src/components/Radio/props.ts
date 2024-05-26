/*
 * @Description:
 * @Date: 2024-04-15 10:48:08
 * @LastEditTime: 2024-05-26 20:32:14
 */
import { radioProps } from 'element-plus';
import { CSSProperties, ExtractPropTypes, PropType } from 'vue';
import type { Option } from '@element-plus/pro-types';

export const proFieldRadioProps = {
	...radioProps,
	type: {
		type: String as PropType<'radio' | 'radioButton'>,
		default: 'radio',
	},
	options: {
		type: Array as PropType<Option[]>,
		default: [],
	},
	style: {
		type: Object as PropType<CSSProperties>,
		default: {},
	},
};

export type ProFieldRadioProps = ExtractPropTypes<typeof proFieldRadioProps>;
