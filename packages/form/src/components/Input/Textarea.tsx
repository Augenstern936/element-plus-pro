/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-06-30 21:35:16
 * @LastEditTime: 2024-10-22 20:59:59
 * @FilePath: \element-plus-pro\packages\form\src\components\Input\Textarea.tsx
 */
import { withInstall } from "@element-plus-ui/pro-utils";
import type { ProFieldTextareaProps } from "@element-plus-ui/pro-field";
import { DefineComponent, defineComponent } from "vue-demi";
import { ProFormField } from "../../core";
import { FormFieldCommonProps } from "../../typing";
import { useVModel } from "@vueuse/core";

export interface ProFormTextareaProps extends FormFieldCommonProps, ProFieldTextareaProps {}

const FormTextarea = defineComponent<ProFormTextareaProps>(
  (props, ctx) => {
    const model = useVModel(props, "modelValue", ctx.emit);
    return () => <ProFormField {...props} type={"textarea"} v-model={model.value} />;
  },
  {
    name: "ProFormTextarea"
  }
) as DefineComponent<ProFormTextareaProps>;

export const ProFormTextarea = withInstall(FormTextarea);
