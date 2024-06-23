/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-06-23 15:48:04
 * @FilePath: \element-plus-pro\packages\field\src\components\Input\BaseInput.tsx
 */
import { ElInput } from 'element-plus';
import { FunctionalComponent, defineComponent } from 'vue';
import { BaseInputProps, baseInputProps } from './props';
import { useVModel } from '@vueuse/core';

const BaseInput = defineComponent<BaseInputProps>((props, ctx) => {
	const model = useVModel(props, 'modelValue', ctx.emit);

	return () => {
		if (props.mode === 'read') {
			return model.value;
		}
		if (props.mode === 'edit') {
			return <ElInput {...props} v-model={model.value} />;
		}
		return '';
	};
}) as unknown as FunctionalComponent<BaseInputProps>;

BaseInput.props = baseInputProps as any;

export default BaseInput;
