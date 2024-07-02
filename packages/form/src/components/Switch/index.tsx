/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-06-30 21:35:16
 * @LastEditTime: 2024-07-02 17:09:47
 * @FilePath: \element-plus-pro\packages\form\src\components\Switch\index.tsx
 */
import { defineComponent } from "vue";
import { ProFormField } from "../../core";

export const ProFormSwitch = defineComponent(
	(props, ctx) => {
		return () => <ProFormField type={"cascader"} fieldProps={props} />;
	},
	{
		name: "ProFormSwitch",
	}
);
