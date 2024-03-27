/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-03-27 23:50:33
 * @FilePath: \element-plus-pro\packages\form\src\components\Input.tsx
 */
import { ElInput } from 'element-plus';
import { FunctionalComponent, PropType, defineComponent, computed } from 'vue';
import { formatPlaceholder } from '@element-plus/pro-utils';

interface ProInputProps {
	modelValue?: string;
	type: 'text' | 'password' | 'textarea';
	label: string;
}

const ProInput = defineComponent<ProInputProps>(
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
		name: 'ProInput',
	}
) as FunctionalComponent<ProInputProps>;

ProInput.props = {
	modelValue: {
		type: String,
		default: '',
	},
	type: {
		type: String as PropType<'text' | 'password' | 'textarea'>,
		default: 'text',
	},
	label: {
		type: String,
		default: '',
	},
};

export default ProInput;
