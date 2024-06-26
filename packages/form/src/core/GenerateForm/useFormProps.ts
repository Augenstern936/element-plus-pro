/*
 * @Description:
 * @Date: 2024-06-25 09:54:28
 * @LastEditTime: 2024-06-26 14:44:21
 */
import { computed } from "vue";
import { GenerateFormProps, ProFormItem } from "./typing";

const useFormProps = (props: GenerateFormProps) => {
	const items = computed(() => {
		if (!props.items || !Array.isArray(props.items)) {
			return [];
		}

		return props.items?.filter((item) => {
			const hide = typeof item.hide === "function" ? item.hide({}, props.items as ProFormItem[]) : item.hide;
			return hide !== false;
		});
	});

	return {
		items: items.value,
	};
};

export default useFormProps;
