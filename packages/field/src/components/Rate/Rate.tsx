/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-04-10 18:26:39
 * @FilePath: \element-plus-pro\packages\field\src\components\Rate.tsx
 */
import type { RateProps } from "element-plus";
import { ElRate, radioProps } from "element-plus";
import "element-plus/theme-chalk/src/rate.scss";
import { CSSProperties, FunctionalComponent, computed, defineComponent } from "vue";

export interface ProFieldRateProps extends RateProps {
	style?: CSSProperties;
}

const ProFieldRate = defineComponent<ProFieldRateProps>(
	(props, ctx) => {
		const state = computed({
			get: () => {
				return props.modelValue;
			},
			set: (value) => {
				ctx.emit("update:modelValue", value);
			},
		});

		return () => <ElRate v-model={state.value} {...props} />;
	},
	{
		name: "ProFieldRate",
	}
) as unknown as FunctionalComponent<ProFieldRateProps>;

ProFieldRate.props = radioProps as any;

export default ProFieldRate;
