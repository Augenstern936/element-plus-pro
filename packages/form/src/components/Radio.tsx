/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-06 21:50:46
 * @LastEditTime: 2024-03-27 00:30:30
 * @FilePath: \element-plus-pro\packages\search-bar\src\components\Radio.tsx
 */
import { ElRadio, ElRadioButton, ElRadioGroup } from 'element-plus';
import { FunctionalComponent, PropType, defineComponent, inject, computed } from 'vue';
import type { SearchBarFormItem } from '../typing';

const Radio = defineComponent((radioProps, ctx) => {
	const props = inject(radioProps.type, {}) as { formItem: SearchBarFormItem; emitter: Record<string, any> };

	const data = computed({
		get: () => radioProps.modelValue,
		set: (v) => {
			ctx.emit('update:modelValue', v);
			props.emitter.emit('value-change', { field: props.formItem.dataField, value: v });
		},
	});

	return () => (
		<ElRadioGroup v-model={data.value}>
			{props.formItem.valueOptions?.map((optionProps, i) => (
				<>
					{radioProps.type == 'radio' ? (
						<ElRadio {...optionProps} key={i}>
							{optionProps.label}
						</ElRadio>
					) : (
						<ElRadioButton label={optionProps.value} key={i}>
							{optionProps.label}
						</ElRadioButton>
					)}
				</>
			))}
		</ElRadioGroup>
	);
}) as FunctionalComponent<any>;

Radio.props = {
	modelValue: {
		type: [String, Number, Boolean],
		default: '',
	},
	type: {
		type: String as PropType<'radio' | 'radioButton'>,
		default: 'radio',
	},
};

export default {
	Default: (props: Record<string, any>) => <Radio {...props} v-model={props.modelValue} type='radio' />,
	RadioButton: () => <Radio type='radioButton' />,
};
