/*
 * @Description:
 * @Date: 2024-04-10 17:50:45
 * @LastEditTime: 2024-06-22 19:47:17
 */
import { CircleClose, Clock } from '@element-plus/icons-vue';
import { useSizeProp } from 'element-plus';
import type { CSSProperties, Component, ExtractPropTypes, PropType } from 'vue';
import { ProFieldMode } from '../../typing';

export const proFieldTimeSelectProps = {
	mode: {
		type: String as PropType<ProFieldMode>,
		default: 'edit',
	},
	format: {
		type: String,
		default: 'HH:mm',
	},
	modelValue: String,
	disabled: Boolean,
	editable: {
		type: Boolean,
		default: true,
	},
	effect: {
		type: String as PropType<'light' | 'dark' | string>,
		default: 'light',
	},
	clearable: {
		type: Boolean,
		default: true,
	},
	size: useSizeProp,
	placeholder: String,
	start: {
		type: String,
		default: '09:00',
	},
	end: {
		type: String,
		default: '18:00',
	},
	step: {
		type: String,
		default: '00:30',
	},
	minTime: String,
	maxTime: String,
	name: String,
	prefixIcon: {
		type: [String, Object as PropType<Component>],
		default: () => Clock,
	},
	clearIcon: {
		type: [String, Object as PropType<Component>],
		default: () => CircleClose,
	},
	style: {
		type: Object as PropType<CSSProperties>,
		default: {},
	},
};

export type ProFieldTimeSelectProps = Partial<ExtractPropTypes<typeof proFieldTimeSelectProps>>;
