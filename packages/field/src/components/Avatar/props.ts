/*
 * @Description:
 * @Date: 2024-04-15 10:48:02
 * @LastEditTime: 2024-06-22 19:43:31
 */
import { avatarProps } from 'element-plus';
import { CSSProperties, ExtractPropTypes, PropType } from 'vue';
import { ProFieldMode } from '../../typing';

export const proFieldAvatar = {
	...avatarProps,
	mode: {
		type: String as PropType<ProFieldMode>,
		default: 'edit',
	},
	style: {
		type: Object as PropType<CSSProperties>,
		default: {},
	},
};

export type ProFieldAvatarProps = Partial<ExtractPropTypes<typeof proFieldAvatar>>;
