/*
 * @Description:
 * @Date: 2024-04-15 10:48:02
 * @LastEditTime: 2024-05-29 14:38:50
 */
import { avatarProps } from "element-plus";
import { CSSProperties, ExtractPropTypes, PropType } from "vue";

export const proFieldAvatar = {
	...avatarProps,
	mode: {
		type: String as PropType<"read" | "edit">,
		default: "edit",
	},
	style: {
		type: Object as PropType<CSSProperties>,
		default: {},
	},
};

export type ProFieldAvatarProps = Partial<ExtractPropTypes<typeof proFieldAvatar>>;
