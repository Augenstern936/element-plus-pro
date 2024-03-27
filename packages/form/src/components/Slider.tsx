import { ElSlider } from 'element-plus';
import { FunctionalComponent, defineComponent, inject, ref } from 'vue';

const Slider = defineComponent(() => {
	const props = inject('slider', {}) as any;

	const data = ref(0);

	return () => (
		<ElSlider
			v-model={data.value}
			style={{ width: '100px', marginLeft: '12px' }}
			onChange={(v) => props.emitter.emit('value-change', { field: props.formItem.dataField, value: v })}
		/>
	);
}) as FunctionalComponent<any>;

export default Slider;
