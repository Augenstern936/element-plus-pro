/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-06-30 21:35:16
 * @LastEditTime: 2024-07-13 15:40:52
 * @FilePath: \element-plus-pro\packages\form\src\components\Switch\index.tsx
 */
import { withInstall } from "@element-plus-ui/pro-utils";
import { useVModel } from "@vueuse/core";
import type { SwitchProps } from "element-plus";
import { DefineComponent, defineComponent } from "vue-demi";
import { ProFormField } from "../../core";
import { FormFieldProps } from "../../typing";

export type ProFormSwitchProps = FormFieldProps<SwitchProps> & {
  modelValue?: string | number | boolean;
};

const FormSwitch = defineComponent<ProFormSwitchProps>(
  (props, ctx) => {
    const model = useVModel(props, "modelValue", ctx.emit);

    return () => <ProFormField {...props} type={"switch"} v-model={model.value} />;
  },
  {
    name: "ProFormSwitch"
  }
) as DefineComponent<ProFormSwitchProps>;

export const ProFormSwitch = withInstall(FormSwitch);
