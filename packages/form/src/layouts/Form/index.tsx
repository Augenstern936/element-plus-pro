/*
 * @Description:
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2024-03-27 22:40:06
 * @LastEditTime: 2024-11-14 17:22:28
 */
import { ToUppercaseFirst } from "@element-plus-ui/pro-types";
import { omitObjectProperty, withInstall } from "@element-plus-ui/pro-utils";
import { isObject, useVModel } from "@vueuse/core";
import { computed, DefineComponent, defineComponent, ref } from "vue-demi";
import components from "../../components";
import { CreateForm } from "../../core";
import { ProFormFieldType } from "../../typing";
import { proFormProps, ProFormProps, ProFormSuperProps } from "./typing";
import { ProSearchBar, ProSearchBarProps } from "../SearchBar";
import { ProStepForm, ProStepsForm, ProStepsFormProps } from "../StepsForm";
import { ProDialogForm, ProDialogFormProps } from "../DialogForm";
import { ProDrawerForm, ProDrawerFormProps } from "../DrawerForm";
import { getFormRefExpose } from "../../core/utils";

type Variant = DefineComponent<ProSearchBarProps | ProStepsFormProps | ProDialogFormProps | ProDrawerFormProps>;

const ProForm = defineComponent<ProFormProps>(
  (props, ctx) => {
    const formRef = ref();

    const model = isObject(props?.modelValue) ? useVModel(props, "modelValue", ctx.emit) : ref({});

    const variant = computed(() => {
      const components = {
        SearchBar: ProSearchBar,
        StepsForm: ProStepsForm,
        DialogForm: ProDialogForm,
        DrawerForm: ProDrawerForm
      };
      return props.variant && props.variant != "Form" ? (components[props.variant] as Variant) : null;
    });

    ctx.expose({
      ...getFormRefExpose(formRef.value)
    });

    return () => {
      return variant.value ? (
        <variant.value {...omitObjectProperty(props, ["variant"])} v-model={model.value} v-slots={ctx.slots} />
      ) : (
        <CreateForm
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

export type ProFormInstance = InstanceType<typeof ProForm>;

export default withInstall(ProForm);
