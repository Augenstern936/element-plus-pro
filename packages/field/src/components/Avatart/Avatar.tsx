/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-04-10 18:24:23
 * @FilePath: \element-plus-pro\packages\field\src\components\Avatar.tsx
 */
import type { AvatarProps } from "element-plus";
import { avatarProps, ElAvatar } from "element-plus";
import "element-plus/theme-chalk/src/avatar.scss";
import { CSSProperties, defineComponent, FunctionalComponent } from "vue";

export interface ProFieldAvatarProps extends AvatarProps {
	style?: CSSProperties;
}

const ProFieldAvatar = defineComponent<ProFieldAvatarProps>(
	(props) => {
		return () => <ElAvatar {...props} />;
	},
	{
		name: "ProFieldAvatar",
	}
) as unknown as FunctionalComponent<ProFieldAvatarProps>;

ProFieldAvatar.props = avatarProps;

export default ProFieldAvatar;
