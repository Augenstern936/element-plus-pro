/*
 * @Description:
 * @Date: 2024-04-27 16:16:27
 * @LastEditTime: 2024-04-28 10:05:22
 */
import type { Component } from "vue";
import { JSX } from "vue/jsx-runtime";

export type ProTabsProps = {
	modelValue?: string | number;
	tabsProps?: Record<string, any>;
	panes: TabsPane[];
	activeColor?: string;
	inactiveColor?: string;
	empty?: Empty;
	beforeChange?: () => boolean;
};

export type TabsPane = {
	label: string;
	value: string | number;
	badge?: string | number;
	empty?: Empty;
	props?: Record<string, any>;
	render?: TabsPaneRender;
};

export type TabsPaneRender = (props?: Record<string, any>) => TabsPaneRenderResult;

export type Empty = boolean | string | number | JSX.Element | Component;

export type TabsPaneRenderResult = Exclude<Empty, boolean>;
