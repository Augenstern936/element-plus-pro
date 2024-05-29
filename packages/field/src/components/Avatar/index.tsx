/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-05-29 15:21:50
 * @FilePath: \element-plus-pro\packages\field\src\components\Avatar.tsx
 */
import { UserFilled } from "@element-plus/icons-vue";
import { ElAvatar } from "element-plus";
import "element-plus/theme-chalk/src/avatar.scss";
import { defineComponent, FunctionalComponent } from "vue";
import { proFieldAvatar, ProFieldAvatarProps } from "./props";

const ProFieldAvatar = defineComponent<ProFieldAvatarProps>(
	(props) => {
		return () => <ElAvatar {...props} icon={props.icon ?? UserFilled} />;
	},
	{
		name: "ProFieldAvatar",
	}
) as unknown as FunctionalComponent<ProFieldAvatarProps>;

ProFieldAvatar.props = proFieldAvatar as any;

export * from "./props";

export { ProFieldAvatar };

export default ProFieldAvatar;
