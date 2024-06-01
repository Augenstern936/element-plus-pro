/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-06-01 00:36:32
 * @FilePath: \element-plus-pro\packages\field\src\components\Cascader\index.tsx
 */
import { ElCascader } from 'element-plus';
import 'element-plus/theme-chalk/src/cascader.scss';
import { defineComponent, FunctionalComponent } from 'vue';
import { proFieldCascaderProps, ProFieldCascaderProps } from './props';
import { useVModel } from '@vueuse/core';

const ProFieldCascader = defineComponent<ProFieldCascaderProps>(
	(props, ctx) => {
		const model = useVModel(props, 'modelValue', ctx.emit);

		return () => <ElCascader {...props} v-model={model.value} />;
	},
	{
		name: 'ProFieldCascader',
	}
) as unknown as FunctionalComponent<ProFieldCascaderProps>;

ProFieldCascader.props = proFieldCascaderProps as any;

export * from './props';

export { ProFieldCascader };

export default ProFieldCascader;
