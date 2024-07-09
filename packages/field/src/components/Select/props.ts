/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-05-29 21:05:37
 * @LastEditTime: 2024-07-09 17:02:28
 * @FilePath: \element-plus-pro\packages\field\src\components\Select\props.ts
 */
import { ArrowDown, CircleClose } from "@element-plus/icons-vue";
import { MarkShape, ValueEnum, ValueOption } from "@element-plus/pro-types";
import { Placement } from "@popperjs/core";
import { ComponentSize, Options, tagProps, useTooltipContentProps } from "element-plus";
import type { CSSProperties, Component, ExtractPropTypes, PropType } from "vue-demi";
import { ProFieldMode } from "../../typing";

export const proFieldSelectProps = {
	modelValue: {
		type: [String, Number, Boolean, Array] as PropType<
			string | number | boolean | Array<string | number | boolean>
		>,
	},
	name: String,
	id: String,
	autocomplete: {
		type: String,
		default: "off",
	},
	automaticDropdown: Boolean,
	size: {
		type: String as PropType<ComponentSize>,
	},
	effect: {
		type: String as PropType<"light" | "dark" | string>,
		default: "light",
	},
	disabled: Boolean,
	clearable: Boolean,
	filterable: Boolean,
	allowCreate: Boolean,
	loading: Boolean,
	popperClass: {
		type: String,
		default: "",
	},
	popperOptions: {
		type: Object as PropType<Partial<Options>>,
		default: () => ({}) as Partial<Options>,
	},
	remote: Boolean,
	loadingText: String,
	noMatchText: String,
	noDataText: String,
	remoteMethod: Function,
	filterMethod: Function,
	multiple: Boolean,
	multipleLimit: {
		type: Number,
		default: 0,
	},
	placeholder: {
		type: String,
	},
	defaultFirstOption: Boolean,
	reserveKeyword: {
		type: Boolean,
		default: true,
	},
	valueKey: {
		type: String,
		default: "value",
	},
	collapseTags: Boolean,
	collapseTagsTooltip: {
		type: Boolean,
		default: false,
	},
	maxCollapseTags: {
		type: Number,
		default: 1,
	},
	teleported: useTooltipContentProps.teleported,
	persistent: {
		type: Boolean,
		default: true,
	},
	clearIcon: {
		type: [String, Object] as PropType<string | Component>,
		default: CircleClose,
	},
	fitInputWidth: {
		type: Boolean,
		default: false,
	},
	suffixIcon: {
		type: [String, Object] as PropType<string | Component>,
		default: ArrowDown,
	},
	tagType: { ...tagProps.type, default: "info" },
	validateEvent: {
		type: Boolean,
		default: true,
	},
	remoteShowSuffix: {
		type: Boolean,
		default: false,
	},
	suffixTransition: {
		type: Boolean,
		default: true,
	},
	placement: {
		type: String as PropType<Placement>,
		default: "bottom-start",
	},
	mode: {
		type: String as PropType<ProFieldMode>,
		default: "edit",
	},
	markShape: {
		type: String as PropType<MarkShape>,
	},
	valueOptions: {
		type: Array as PropType<ProFieldSelectValueOption[]>,
		default: [],
	},
	valueEnum: {
		type: Object as PropType<ProFieldSelectValueEnum>,
	},
	style: {
		type: Object as PropType<CSSProperties>,
		default: {},
	},
};

export type ProFieldSelectValueOption = ValueOption<{
	disabled?: boolean;
}>;

export type ProFieldSelectValueEnum = ValueEnum<Omit<ProFieldSelectValueOption, "value">>;

export type ProFieldSelectProps = Partial<ExtractPropTypes<typeof proFieldSelectProps>>;
