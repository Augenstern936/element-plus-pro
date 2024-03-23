import { ElSelect, ElOption } from 'element-plus';
import { FunctionalComponent, defineComponent, inject, ref } from 'vue';
import { formatPlaceholder } from '@element-plus/pro-utils';
import type { SearchBarFormItem } from '../typing';

const Select = defineComponent(() => {
	const props = inject('select', {}) as { formItem: SearchBarFormItem; emitter: Record<string, any> };

	const data = ref('');

	return () => (
		<ElSelect
			v-model={data.value}
			placeholder={formatPlaceholder(props.formItem.label, 'select') as string}
			clearable
			onChange={(v) => props.emitter.emit('value-change', { field: props.formItem.dataField, value: v })}
		>
			{props.formItem.valueOptions?.map((optionProps, index) => (
				<ElOption {...optionProps} key={index} />
			))}
		</ElSelect>
	);
}) as FunctionalComponent<any>;

export default Select;
