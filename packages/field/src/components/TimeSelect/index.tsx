/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-09-13 15:18:47
 * @FilePath: \element-plus-pro\packages\field\src\components\TimeSelect\index.tsx
 */
import { useVModel } from "@vueuse/core";
import { ElTimeSelect } from "element-plus";
// import "element-plus/theme-chalk/src/time-select.scss";
import type { DefineComponent } from "vue-demi";
import { defineComponent } from "vue-demi";
import { ProFieldTimeSelectProps, proFieldTimeSelectProps } from "./props";

const ProFieldTimeSelect = defineComponent<ProFieldTimeSelectProps>(
	(props, ctx) => {
		const model = useVModel(props, "modelValue", ctx.emit);

		return () => <ElTimeSelect {...props} v-model={model.value} />;
	},
	{
		name: "ProFieldTimeSelect",
	}
) as DefineComponent<ProFieldTimeSelectProps>;

ProFieldTimeSelect.props = proFieldTimeSelectProps as any;

export * from "./props";

export { ProFieldTimeSelect };

export default ProFieldTimeSelect;
