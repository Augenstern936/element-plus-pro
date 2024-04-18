/*
 * @Description:
 * @Date: 2024-04-10 17:30:49
 * @LastEditTime: 2024-04-17 11:41:15
 */
import { INSTALLED_KEY } from "element-plus";
import type { Component, vShow } from "vue";
import { JSX as VueJsx } from "vue/jsx-runtime";

declare global {
	const process: {
		env: {
			NODE_ENV: string;
		};
	};

	export namespace JSX {
		export interface Element extends VueJsx.ElementClass {}
		export interface ElementClass extends VueJsx.ElementClass {}
		export interface IntrinsicElements extends VueJsx.IntrinsicElements {}
		export interface IntrinsicAttributes extends VueJsx.IntrinsicAttributes {}
		export interface ElementAttributesProperty extends VueJsx.ElementAttributesProperty {}
	}
}

declare module "@vue/runtime-core" {
	export interface App {
		[INSTALLED_KEY]?: boolean;
	}

	export interface GlobalComponents {
		Component: (props: { is: Component | string }) => void;
	}

	export interface ComponentCustomProperties {
		vShow: typeof vShow;
	}
}

export {};
