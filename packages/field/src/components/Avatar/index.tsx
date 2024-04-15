/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-04-15 14:31:57
 * @FilePath: \element-plus-pro\packages\field\src\components\Avatar.tsx
 */
import { ElAvatar } from "element-plus";
import "element-plus/theme-chalk/src/avatar.scss";
import { defineComponent, FunctionalComponent } from "vue";
import { proFieldAvatar, ProFieldAvatarProps } from "./typing";

const ProFieldAvatar = defineComponent<ProFieldAvatarProps>(
	(props) => {
		return () => <ElAvatar {...props} />;
	},
	{
		name: "ProFieldAvatar",
	}
) as unknown as FunctionalComponent<ProFieldAvatarProps>;

ProFieldAvatar.props = proFieldAvatar;

export * from "./typing";

export { ProFieldAvatar };

export default ProFieldAvatar;
