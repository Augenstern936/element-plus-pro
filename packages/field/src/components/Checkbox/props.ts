/*
 * @Description:
 * @Date: 2024-04-15 09:39:26
 * @LastEditTime: 2024-05-25 14:33:29
 */
import { checkboxProps } from 'element-plus';
import { CSSProperties, ExtractPropTypes, PropType } from 'vue';
import type { Option } from '@element-plus/pro-types';

export const proFieldCheckboxProps = {
	...checkboxProps,
	type: {
		type: String as PropType<'checkbox' | 'checkboxButton'>,
		default: 'checkbox',
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

export type ProFieldCheckboxProps = ExtractPropTypes<typeof proFieldCheckboxProps>;
