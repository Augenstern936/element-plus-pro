import { ElSwitch } from 'element-plus';
import { FunctionalComponent, defineComponent, inject, ref } from 'vue';

const Switch = defineComponent(() => {
	const props = inject('switch', {}) as any;

	const data = ref(false);

	return () => (
		<ElSwitch
			v-model={data.value}
			onChange={(v) => props.emitter.emit('value-change', { field: props.formItem.dataField, value: v })}
		/>
	);
}) as FunctionalComponent<any>;

export default Switch;
