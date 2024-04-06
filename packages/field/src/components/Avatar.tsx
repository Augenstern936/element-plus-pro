/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-04-04 21:50:48
 * @FilePath: \element-plus-pro\packages\field\src\components\Avatar.tsx
 */
import 'element-plus/theme-chalk/src/avatar.scss';
import { avatarProps, ElAvatar } from 'element-plus';
import type { AvatarProps } from 'element-plus';
import { CSSProperties, FunctionalComponent, defineComponent } from 'vue';

export interface ProFieldAvatarProps extends AvatarProps {
	style?: CSSProperties;
}

const ProFieldAvatar = defineComponent<ProFieldAvatarProps>(
	(props, ctx) => {
		return () => <ElAvatar {...props} />;
	},
	{
		name: 'ProFieldAvatar',
	}
) as FunctionalComponent<ProFieldAvatarProps>;

ProFieldAvatar.props = avatarProps;

export default ProFieldAvatar;
