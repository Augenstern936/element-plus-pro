/*
 * @Description:
 * @Date: 2024-06-25 09:54:28
 * @LastEditTime: 2024-07-20 18:13:04
 */
import { isObject } from '@vueuse/core';
import { computed } from 'vue-demi';
import * as components from '../../components';
import { GenerateFormProps } from './typing';

interface SlotConfig {
	type: string | { name: string };
	props: Record<string, any>;
}

const useFormProps = (props: GenerateFormProps, slots: SlotConfig[]) => {
	const columns = computed(() => {
		let data = [...(props?.columns ?? [])] as Record<string, any>[];

		slots?.forEach((slot, index) => {
			const order = isProFormFieldComponent(slot) ? slot?.props?.order : null;

			if (typeof order === 'number') {
				data.splice?.(order, 0, { index, is: 'slot' });
			} else {
				data.push({ index, is: 'slot' });
			}
		});
		return data;
	});

	const isProFormFieldComponent = (slot: SlotConfig) => {
		return isObject(slot.type) && components[slot.type.name as keyof typeof components];
	};

	return {
		columns: columns.value,
	};
};

export default useFormProps;
