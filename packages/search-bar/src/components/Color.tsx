import { ElColorPicker } from "element-plus";
import { FunctionalComponent, defineComponent, inject, ref } from "vue-demi";

const Color = defineComponent(() => {
	const props = inject("color", {}) as any;

	const data = ref("");

	return () => (
		<ElColorPicker
			v-model={data.value}
			onChange={(v) => props.emitter.emit("value-change", { field: props.formItem.dataField, value: v })}
		/>
	);
}) as FunctionalComponent<any>;

export default Color;
