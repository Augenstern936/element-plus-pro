/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-06-01 00:39:39
 * @FilePath: \element-plus-pro\packages\field\src\components\Rate\index.tsx
 */
import { ElRate } from 'element-plus';
import 'element-plus/theme-chalk/src/rate.scss';
import { FunctionalComponent, defineComponent } from 'vue';
import { ProFieldRateProps, proFieldRateProps } from './props';
import { useVModel } from '@vueuse/core';

const ProFieldRate = defineComponent<ProFieldRateProps>(
	(props, ctx) => {
		const model = useVModel(props, 'modelValue', ctx.emit);

		return () => <ElRate {...props} v-model={model.value} />;
	},
	{
		name: 'ProFieldRate',
	}
) as unknown as FunctionalComponent<ProFieldRateProps>;

ProFieldRate.props = proFieldRateProps as any;

export * from './props';

export { ProFieldRate };

export default ProFieldRate;
