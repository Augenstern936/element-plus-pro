/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-05-30 22:48:17
 * @FilePath: \element-plus-pro\packages\field\src\components\Avatar\index.tsx
 */
import { UserFilled } from '@element-plus/icons-vue';
import { ElAvatar, ElIcon } from 'element-plus';
import 'element-plus/theme-chalk/src/avatar.scss';
import { ProFieldAvatarProps } from './props';

const ProFieldAvatar = (props: ProFieldAvatarProps) => {
	const iconSize = props.size && !Number.isNaN(props.size) ? +props.size / 2 : void 0;

	return (
		<ElAvatar {...props}>
			<ElIcon size={iconSize}>
				<UserFilled />
			</ElIcon>
		</ElAvatar>
	);
};

export * from './props';

export { ProFieldAvatar };

export default ProFieldAvatar;
