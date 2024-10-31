/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:40:06
 * @LastEditTime: 2024-10-30 10:38:41
 * @FilePath: \element-plus-pro\packages\form\src\layouts\Form\index.tsx
 */
import { ToUppercaseFirst } from "@element-plus-ui/pro-types";
import { omitObjectProperty, withInstall } from "@element-plus-ui/pro-utils";
import { useVModel } from "@vueuse/core";
import { computed, defineComponent, ref } from "vue-demi";
import components from "../../components";
import { GenerateForm } from "../../core";
import { ProFormFieldType } from "../../typing";
import { proFormProps, ProFormProps, ProFormSuperProps } from "./typing";
import { ProSearchBar } from "../SearchBar";
import { ProStepForm, ProStepsForm } from "../StepsForm";
import { ProDialogForm } from "../DialogForm";
import { ProDrawerForm } from "../DrawerForm";

const ProForm = defineComponent<ProFormProps>(
  (props, ctx) => {
    const formRef = ref();

    const model = props?.modelValue ? useVModel(props, "modelValue", ctx.emit) : ref({});

    const RenderTypeComponent = computed(() => {
      const Type = {
        SearchBar: ProSearchBar,
        StepsForm: ProStepsForm,
        DialogForm: ProDialogForm,
        DrawerForm: ProDrawerForm
      };
      return props.type && props.type != "Form" ? Type[props.type] : null;
    });

    ctx.expose({
      validate: () => formRef.value?.validate(),
      validateField: () => formRef.value?.validateField(),
      resetFields: () => formRef.value?.resetFields(),
      scrollToField: () => formRef.value?.scrollToField(),
      clearValidate: () => formRef.value?.clearValidate(),
      fields: () => formRef.value?.fields()
    });

    return () => {
      // if (RenderTypeComponent.value) {
      //   return <RenderTypeComponent.value {...omitObjectProperty(props, ["type"])} v-model={model.value} v-slots={ctx.slots} />;
      // }
      return (
        <GenerateForm
          {...props}
          {...ctx.attrs}
          ref={formRef}
          labelPosition={props.layout === "vertical" ? "top" : "right"}
          inline={props.layout === "inline"}
          v-model={model.value}
          v-slots={ctx.slots}
        />
      );
    };
  },
  {
    name: "ProForm"
  }
) as ProFormSuperProps;

ProForm.props = proFormProps;

ProForm["StepForm"] = ProStepForm;
ProForm["StepsForm"] = ProStepsForm;
ProForm["SearchBar"] = ProSearchBar;
ProForm["DialogForm"] = ProDialogForm;
ProForm["DrawerForm"] = ProDrawerForm;

for (const key in components) {
  const ComName = (key.charAt(0).toUpperCase() + key.slice(1)) as ToUppercaseFirst<ProFormFieldType>;
  const FieldComponent = components[key as ProFormFieldType];
  ProForm[ComName] = FieldComponent;
}

export * from "./typing";

export default withInstall(ProForm);
