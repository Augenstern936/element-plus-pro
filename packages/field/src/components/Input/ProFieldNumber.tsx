/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-06-22 19:04:01
 * @LastEditTime: 2024-06-23 15:48:13
 * @FilePath: \element-plus-pro\packages\field\src\components\Input\ProFieldNumber.tsx
 */
import { FunctionalComponent, defineComponent } from 'vue';
import { ElInputNumber } from 'element-plus';
import { proInputNumberProps, ProFieldNumberProps } from './props';
import { useVModel } from '@vueuse/core';

export const ProFieldNumber = defineComponent<ProFieldNumberProps>((props, ctx) => {
	const model = useVModel(props, 'modelValue', ctx.emit);
	return () => {
		if (props.mode === 'read') {
			return <el-text>{model.value ?? 0}</el-text>;
		}
		if (props.mode === 'edit') {
			return <ElInputNumber {...props} v-model={model.value} />;
		}
		return '';
	};
}) as unknown as FunctionalComponent<ProFieldNumberProps>;

ProFieldNumber.props = proInputNumberProps as any;
