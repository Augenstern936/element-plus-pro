/*
 * @Description:
 * @Date: 2024-06-25 09:54:28
 * @LastEditTime: 2024-07-09 17:06:14
 */
import { isObject } from "@vueuse/core";
import { computed } from "vue-demi";
import * as components from "../../components";
import { GenerateFormProps } from "./typing";

const useFormProps = (
	props: GenerateFormProps,
	slots: { type: string | { name: string }; props: Record<string, any> }[]
) => {
	const columns = computed(() => {
		const proFormFieldSlots = slots.filter((slot) => {
			return isObject(slot.type) && components[slot.type.name as keyof typeof components];
		});

		let data: any[] =
			props?.columns?.filter((item) => {
				const hide = typeof item.hide === "function" ? item.hide({}, props.columns as any[]) : item.hide;
				return hide !== false;
			}) ?? [];

		proFormFieldSlots.forEach((slot) => {
			const order = slot?.props?.order;
			if (typeof order === "number") {
				data = data.toSpliced(order, order, { ...slot, is: "slot" });
			} else {
				data.push({ ...slot, is: "slot" });
			}
		});

		console.log(data, "data");

		return data;
	});

	return {
		columns: columns.value,
	};
};

export default useFormProps;
