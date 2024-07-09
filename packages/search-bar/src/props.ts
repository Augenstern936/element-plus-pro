import { PropType } from "vue-demi";
import { SearchBarActions, SearchBarItem, SearchBarRightTools } from "./typing";

export default {
	modelValue: {
		type: Object as PropType<{ [x: string]: string | number | boolean }>,
		default: () => ({}),
	},
	items: {
		type: Array as PropType<SearchBarItem[]>,
		default: [],
	},
	searchText: {
		type: String,
		default: "查询",
	},
	resetText: {
		type: String,
		default: "重置",
	},
	actions: {
		type: Array as PropType<SearchBarActions[]>,
	},
	rightTools: {
		type: Array as PropType<SearchBarRightTools[]>,
		default: [],
	},
	inline: {
		type: Boolean,
		default: true,
	},
	// 最大显示表单项，溢出隐藏
	span: {
		type: Number,
		default: 3,
	},
	onSearch: {
		type: Function,
	},
	onTools: {
		type: Function,
	},
};
