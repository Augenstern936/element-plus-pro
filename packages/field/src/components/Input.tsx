/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-04-04 21:21:19
 * @FilePath: \element-plus-pro\packages\field\src\components\Input.tsx
 */
import 'element-plus/theme-chalk/src/input.scss';
import { ElInput, InputProps, inputProps } from 'element-plus';
import { FunctionalComponent, PropType, defineComponent, computed, CSSProperties } from 'vue';

export interface ProFieldInputProps extends InputProps {
	type: 'text' | 'password' | 'textarea';
	style?: CSSProperties;
}

const ProFieldInput = defineComponent<ProFieldInputProps>(
	(props, ctx) => {
		const state = computed({
			get: () => {
				return props.modelValue;
			},
			set: (value) => {
				ctx.emit('update:modelValue', value);
			},
		});

		return () => <ElInput v-model={state.value} {...props} />;
	},
	{
		name: 'ProFieldInput',
	}
) as FunctionalComponent<ProFieldInputProps>;

ProFieldInput.props = {
	...inputProps,
	type: {
		type: String as PropType<'text' | 'password' | 'textarea'>,
		default: 'text',
	},
};

export default ProFieldInput;
