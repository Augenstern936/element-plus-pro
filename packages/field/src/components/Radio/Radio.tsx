/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-07-09 17:01:54
 * @FilePath: \element-plus-pro\packages\field\src\components\Radio\Radio.tsx
 */
import { useVModel } from "@vueuse/core";
import "element-plus/theme-chalk/src/radio-group.scss";
import "element-plus/theme-chalk/src/radio.scss";
import { DefineComponent, defineComponent } from "vue-demi";
import { ProFieldRadioProps, proFieldRadioProps } from "./typing";
import useRender from "./useRender";

export const ProFieldCheckbox = defineComponent<ProFieldRadioProps>((props, ctx) => {
	const model = useVModel(props, "modelValue", ctx.emit);

	return useRender("radio", props, model);
}) as DefineComponent<ProFieldRadioProps>;

ProFieldCheckbox.props = proFieldRadioProps;
