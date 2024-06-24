import { computed } from 'vue';
import { FormColumn, GenerateFormProps } from './typing';

const useFormProps = (props: GenerateFormProps) => {
	const rules = computed(() => {
		// return props.items?.filter((item: FormColumn) => {
		//     const { rules = {}, required } = item;
		//     return Object.keys(rules) && (rules?.required === true)
		// })
		return [];
	});

	return {
		rules: rules.value,
	};
};

export default useFormProps;
