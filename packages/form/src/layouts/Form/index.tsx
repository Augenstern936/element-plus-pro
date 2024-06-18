/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:40:06
 * @LastEditTime: 2024-06-18 17:10:07
 * @FilePath: \element-plus-pro\packages\form\src\layouts\Form\index.tsx
 */
import { withInstall } from "@element-plus/pro-utils";
import { defineComponent, FunctionalComponent } from "vue";
import { GenerateForm } from "../../core";

const Form = defineComponent<any>(
	(props) => {
		return () => <GenerateForm {...props} />;
	},
	{
		name: "ProForm",
	}
) as unknown as FunctionalComponent<any>;

export * from "./typing";

export const ProForm = withInstall(Form);
