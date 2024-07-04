/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-06-30 21:35:16
 * @LastEditTime: 2024-07-04 15:31:08
 * @FilePath: \element-plus-pro\packages\form\src\components\TreeSelect\index.tsx
 */
import { defineComponent } from "vue";
import { ProFormField } from "../../core";

export const ProFormVirtualizedSelect = defineComponent(
	(props, ctx) => {
		return () => <ProFormField type={"treeSelect"} fieldProps={props} />;
	},
	{
		name: "ProFormVirtualizedSelect",
	}
);
