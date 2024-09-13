/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-09-13 15:06:06
 * @FilePath: \element-plus-pro\packages\field\src\components\Checkbox\CheckboxButton.tsx
 */
import { useVModel } from "@vueuse/core";
// import "element-plus/theme-chalk/src/checkbox-button.scss";
// import "element-plus/theme-chalk/src/checkbox-group.scss";
import { DefineComponent, defineComponent } from "vue-demi";
import { ProFieldCheckboxButtonProps, proFieldCheckboxButtonProps } from "./typing";
import useRender from "./useRender";

export const ProFieldCheckboxButton = defineComponent<ProFieldCheckboxButtonProps>((props, ctx) => {
	const model = useVModel(props, "modelValue", ctx.emit);

	return useRender("checkbox-button", props, model);
}) as DefineComponent<ProFieldCheckboxButtonProps>;

ProFieldCheckboxButton.props = proFieldCheckboxButtonProps;
