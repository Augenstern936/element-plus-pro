/*
 * @Description:
 * @Date: 2024-04-15 10:48:02
 * @LastEditTime: 2024-04-15 14:28:59
 */
import { avatarProps } from "element-plus";
import { CSSProperties, ExtractPropTypes, PropType } from "vue";

export const proFieldAvatar = {
	...avatarProps,
	style: {
		type: Object as PropType<CSSProperties>,
		default: {},
	},
};

export type ProFieldAvatarProps = ExtractPropTypes<typeof proFieldAvatar>;
