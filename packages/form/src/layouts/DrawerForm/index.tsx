/*
 * @Description:;
 * @Author: wangbowen936926
 * @Date: 2024-04-11 22:23:41
 * @LastEditTime: 2024-07-09 17:06:23
 * @FilePath: \element-plus-pro\packages\form\src\layouts\DrawerForm\index.tsx
 */
import { withInstall } from "@element-plus/pro-utils";
import { defineComponent, FunctionalComponent } from "vue-demi";
import { proDrawerFormProps, ProDrawerFormProps } from "./typing";

const DrawerForm = defineComponent<ProDrawerFormProps>(
	(props, ctx) => {
		return () => <div>111</div>;
	},
	{
		name: "ProDrawerForm",
	}
) as FunctionalComponent<ProDrawerFormProps>;

DrawerForm.props = proDrawerFormProps;

export * from "./typing";

export const ProDrawerForm = withInstall(DrawerForm);
