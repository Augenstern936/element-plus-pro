/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-04-04 23:46:07
 * @FilePath: \element-plus-pro\packages\field\src\components\TimeSelect.tsx
 */
import 'element-plus/theme-chalk/src/time-select.scss';
import { ElTimeSelect, useSizeProp } from 'element-plus';
import { computed, defineComponent } from 'vue';
import type { FunctionalComponent, ExtractPropTypes, PropType, Component, CSSProperties } from 'vue';
import { CircleClose, Clock } from '@element-plus/icons-vue';

const proFieldTimeSelectProps = {
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

const ProFieldTimeSelect = defineComponent<ProFieldTimeSelectProps>(
	(props, ctx) => {
		const state = computed({
			get: () => {
				return props.modelValue;
			},
			set: (value) => {
				ctx.emit('upTime:modelValue', value);
			},
		});

		return () => <ElTimeSelect v-model={state.value} {...props} />;
	},
	{
		name: 'ProFieldTimeSelect',
	}
) as FunctionalComponent<ProFieldTimeSelectProps>;

ProFieldTimeSelect.props = proFieldTimeSelectProps as any;

export default ProFieldTimeSelect;
