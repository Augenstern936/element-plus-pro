/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-04-11 22:26:41
 * @LastEditTime: 2024-07-13 23:11:48
 * @FilePath: \element-plus-pro\packages\form\src\layouts\SearchBar\typing.ts
 */
import type { ExtractPropTypes, PropType } from 'vue-demi';

export const proSearchBarProps = {
	modelValue: {
		type: Object as PropType<Record<string, any>>,
		default: {},
	},
	columns: {
		type: Array as PropType<any[]>,
		default: [],
	},
};

export type ProSearchBarColumn = {
	label?: string;
	type?: string;
};

export type ProSearchBarProps = Partial<ExtractPropTypes<typeof proSearchBarProps>>;
