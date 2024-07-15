/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-04-11 22:26:41
 * @LastEditTime: 2024-07-15 17:08:33
 * @FilePath: \element-plus-pro\packages\form\src\layouts\SearchBar\typing.ts
 */
import type { ProButtonProps } from "@element-plus/pro-button";
import type { ExtractPropTypes, PropType } from "vue-demi";
import { ProFormColumns } from "../../core";
import { ProFormLayout } from "../../typing";

export const proSearchBarProps = {
	modelValue: {
		type: Object as PropType<Record<string, string | number | boolean | (string | number)[]>>,
		default: {},
	},
	columns: {
		type: Array as PropType<ProFormColumns[]>,
		default: [],
	},
	layout: {
		type: String as PropType<ProFormLayout>,
		default: "inline",
	},
	searchButton: {
		type: [Object, Boolean] as PropType<ProButtonProps | boolean>,
		default: true,
	},
	resetButton: {
		type: [Object, Boolean] as PropType<ProButtonProps | boolean>,
		default: true,
	},
	searchButtonTitle: {
		type: String,
		default: "查询",
	},
	resetButtonTitle: {
		type: String,
		default: "重置",
	},
	submitter: {
		type: [Array, Function] as PropType<ProButtonProps[] | (() => JSX.Element)>,
		default: void 0,
	},
	defaultCollapsed: {
		type: Boolean,
	},
	defaultColsNumber: {
		type: Number,
	},
	preserve: {
		type: Boolean,
	},
	options: {
		type: [Array, Function] as PropType<ProButtonProps[] | (() => JSX.Element)>,
		default: void 0,
	},
};

export type ProSearchBarColumn = {
	label?: string;
	type?: string;
};

export type ProSearchBarProps = Partial<ExtractPropTypes<typeof proSearchBarProps>>;
