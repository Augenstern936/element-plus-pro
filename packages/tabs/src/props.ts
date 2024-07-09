import type { Component, PropType } from "vue-demi";
import type { TabsPane } from "./typing";

export default {
	modelValue: {
		type: [String, Number],
	},
	tabsProps: {
		type: Object as PropType<{ [x: string]: any }>,
	},
	panes: {
		type: Array as PropType<TabsPane[]>,
		default: [],
	},
	empty: {
		type: [Boolean, String, Number, Object as PropType<JSX.Element | Component>],
		default: true,
	},
	beforeChange: {
		type: Function as PropType<() => boolean>,
		default: () => true,
	},
};
