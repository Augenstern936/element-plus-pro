/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:40:06
 * @LastEditTime: 2024-10-20 13:32:44
 * @FilePath: \element-plus-pro\packages\form\src\layouts\Form\index.tsx
 */
import { ToUppercaseFirst } from "@element-plus-ui/pro-types";
import { withInstall } from "@element-plus-ui/pro-utils";
import { useVModel } from "@vueuse/core";
import { defineComponent, ref } from "vue-demi";
import components from "../../components";
import { GenerateForm } from "../../core";
import { ProFormFieldType } from "../../typing";
import { proFormProps, ProFormProps, ProFormSuperProps } from "./typing";

const ProForm = defineComponent<ProFormProps>(
  (props, ctx) => {
    const model = props?.modelValue ? useVModel(props, "modelValue", ctx.emit) : ref({});

    return () => (
      <GenerateForm
        {...props}
        labelPosition={props.layout === "vertical" ? "top" : "right"}
        inline={props.layout === "inline"}
        v-model={model.value}
        v-slots={{ default: () => ctx.slots?.default?.() }}
      />
    );
  },
  {
    name: "ProForm"
  }
) as ProFormSuperProps;

ProForm.props = proFormProps;

for (const key in components) {
  const ComName = (key.charAt(0).toUpperCase() + key.slice(1)) as ToUppercaseFirst<ProFormFieldType>;
  const FieldComponent = components[key as ProFormFieldType];
  ProForm[ComName] = FieldComponent;
}

export * from "./typing";

export default withInstall(ProForm);
