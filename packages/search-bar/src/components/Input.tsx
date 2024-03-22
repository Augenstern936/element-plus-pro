import { ElInput } from 'element-plus';
import { FunctionalComponent, defineComponent, inject, ref } from 'vue';
import { formatPlaceholder } from '@element-plus/pro-utils';

const Render = defineComponent(({ type }: { type: 'text' | 'password' | 'textarea' }) => {
	const props = inject(type, {}) as any;

	const data = ref('');

	return () => (
		<ElInput
			v-model={data.value}
			placeholder={formatPlaceholder(props.formItem.label, type) as string}
			clearable
			type={type}
			onInput={(v) => props.emitter.emit('value-change', { field: props.formItem.dataField, value: v })}
		/>
	);
}) as FunctionalComponent<any>;

Render.props = {
	type: {
		type: String,
		default: 'text',
	},
};

export default {
	Text: () => <Render type='text' />,
	Password: () => <Render type='password' />,
	Textarea: () => <Render type='textarea' />,
};
