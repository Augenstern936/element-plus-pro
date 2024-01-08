import type { ButtonType } from 'element-plus';
import { PropType } from 'vue';

export default {
	type: {
		type: String as PropType<ButtonType>,
	},
	size: {
		type: String,
		default: 'default',
	},
	icon: {
		type: Object as PropType<JSX.Element>,
		default: '',
	},
	link: {
		type: Boolean,
		default: false,
	},
	text: {
		type: Boolean,
		default: false,
	},
	tip: {
		type: String,
		default: '',
	},
};
