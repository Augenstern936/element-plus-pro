/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-04-02 22:55:12
 * @FilePath: \element-plus-pro\packages\form\src\components\Input.tsx
 */
import { ElInput, InputProps, inputProps } from 'element-plus';
import { FunctionalComponent, PropType, defineComponent, computed, CSSProperties } from 'vue';
import { formatPlaceholder } from '@element-plus/pro-utils';
import 'element-plus/theme-chalk/src/input.scss';

export interface ProFormInputProps extends InputProps {
	type: 'text' | 'password' | 'textarea';
	label?: string;
	style?: CSSProperties;
}

const ProFormInput = defineComponent<ProFormInputProps>(
	(props, ctx) => {
		const state = computed({
			get: () => {
				return props.modelValue;
			},
			set: (value) => {
				ctx.emit('update:modelValue', value);
			},
		});

		return () => (
			<ElInput
				v-model={state.value}
				placeholder={formatPlaceholder(props.label, props.type) as string}
				{...props}
			/>
		);
	},
	{
		name: 'ProFormInput',
	}
) as FunctionalComponent<ProFormInputProps>;

ProFormInput.props = {
	...inputProps,
	type: {
		type: String as PropType<'text' | 'password' | 'textarea'>,
		default: 'text',
	},
	label: {
		type: String,
		default: '',
	},
};

export default ProFormInput;
