/*
 * @Description:;
 * @Author: wangbowen936926
 * @Date: 2024-04-11 22:23:41
 * @LastEditTime: 2024-07-13 23:04:18
 * @FilePath: \element-plus-pro\packages\form\src\layouts\SearchBar\index.tsx
 */
import { withInstall } from "@element-plus/pro-utils";
import { useVModel } from "@vueuse/core";
import { DefineComponent, defineComponent } from "vue-demi";
import { GenerateForm } from "../../core";
import { proSearchBarProps, ProSearchBarProps } from "./typing";

const SearchBar = defineComponent<ProSearchBarProps>(
	(props, ctx) => {
		const model = useVModel(props, "modelValue", ctx.emit);
		return () => <GenerateForm {...props} v-model={model.value} />;
	},
	{
		name: "ProSearchBar",
	}
) as DefineComponent<ProSearchBarProps>;

SearchBar.props = proSearchBarProps;

export * from "./typing";

export const ProSearchBar = withInstall(SearchBar);
