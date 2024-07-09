/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-07-09 16:58:44
 * @FilePath: \element-plus-pro\packages\field\src\components\Checkbox\Checkbox.tsx
 */
import { useVModel } from "@vueuse/core";
import "element-plus/theme-chalk/src/checkbox-group.scss";
import "element-plus/theme-chalk/src/checkbox.scss";
import { DefineComponent, defineComponent } from "vue-demi";
import { ProFieldCheckboxProps, proFieldCheckboxProps } from "./typing";
import useRender from "./useRender";

export const ProFieldCheckbox = defineComponent<ProFieldCheckboxProps>((props, ctx) => {
	const model = useVModel(props, "modelValue", ctx.emit);

	return useRender("checkbox", props, model);
}) as DefineComponent<ProFieldCheckboxProps>;

ProFieldCheckbox.props = proFieldCheckboxProps;
