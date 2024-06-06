/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-06-05 17:39:40
 * @FilePath: \element-plus-pro\packages\field\src\components\Rate\index.tsx
 */
import { useVModel } from '@vueuse/core';
import { ElRate } from 'element-plus';
import 'element-plus/theme-chalk/src/rate.scss';
import { FunctionalComponent, defineComponent } from 'vue';
import { ProFieldRateProps, proFieldRateProps } from './props';

const ProFieldRate = defineComponent<ProFieldRateProps>(
	(props, ctx) => {
		const model = useVModel(props, 'modelValue', ctx.emit);

		return () => (
			<ElRate {...props} disabled={props.mode == 'edit' ? props.disabled ?? false : true} v-model={model.value} />
		);
	},
	{
		name: 'ProFieldRate',
	}
) as unknown as FunctionalComponent<ProFieldRateProps>;

ProFieldRate.props = proFieldRateProps as any;

export * from './props';

export { ProFieldRate };

export default ProFieldRate;
