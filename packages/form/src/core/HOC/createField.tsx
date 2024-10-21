/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-06-27 20:57:53
 * @LastEditTime: 2024-10-20 11:59:59
 * @FilePath: \element-plus-pro\packages\form\src\core\HOC\createField.tsx
 */
import { ProFieldType, ProFieldProps } from "@element-plus-ui/pro-field";
import { useVModel } from "@vueuse/core";
import { DefineComponent, FunctionalComponent, SetupContext } from "vue-demi";
import { ProFormItem } from "../FormItem";

type RenderProps = {
  modelValue?: string | number | boolean | Date | [Date, Date] | [string, string];
  type?: ProFieldType;
  readonly?: boolean;
  emptyText?: string;
  placeholder?: string | [string, string];
  fieldProps?: Record<string, any>;
};

type FieldComponentType =
  | DefineComponent<Omit<RenderProps, "readonly"> & { mode?: "read" | "edit" }>
  | FunctionalComponent<Omit<RenderProps, "readonly"> & { mode?: "read" | "edit" }>;

function createField(FieldComponent: FieldComponentType, config?: Record<string, any>) {
  const render = (props: RenderProps, ctx: SetupContext) => {
    const model = useVModel(props, "modelValue", ctx.emit);
    return (
      <ProFormItem {...(props as any)}>
        <FieldComponent
          type={props.type}
          mode={props.readonly === true ? "read" : "edit"}
          emptyText={props.emptyText}
          placeholder={props.placeholder}
          fieldProps={props.fieldProps}
          v-model={model.value}
        />
      </ProFormItem>
    );
  };

  return render;
}

export default createField;
