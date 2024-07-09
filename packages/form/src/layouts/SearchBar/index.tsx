/*
 * @Description:;
 * @Author: wangbowen936926
 * @Date: 2024-04-11 22:23:41
 * @LastEditTime: 2024-07-09 17:06:47
 * @FilePath: \element-plus-pro\packages\form\src\layouts\SearchBar\index.tsx
 */
import { withInstall } from "@element-plus/pro-utils";
import { defineComponent, FunctionalComponent } from "vue-demi";
import { proSearchBarProps, ProSearchBarProps } from "./typing";

const SearchBar = defineComponent<ProSearchBarProps>(
	(props, ctx) => {
		return () => <div>111</div>;
	},
	{
		name: "ProSearchBar",
	}
) as FunctionalComponent<ProSearchBarProps>;

SearchBar.props = proSearchBarProps;

export * from "./typing";

export const ProSearchBar = withInstall(SearchBar);
