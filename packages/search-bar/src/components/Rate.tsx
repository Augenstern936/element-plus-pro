import { ElRate } from "element-plus";
import { FunctionalComponent, defineComponent, inject, ref } from "vue-demi";

const Rate = defineComponent(() => {
	const props = inject("rate", {}) as any;

	const data = ref(0);

	return () => (
		<ElRate
			v-model={data.value}
			onChange={(v) => props.emitter.emit("value-change", { field: props.formItem.dataField, value: v })}
		/>
	);
}) as FunctionalComponent<any>;

export default Rate;
