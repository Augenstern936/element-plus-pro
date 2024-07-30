/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-06-27 20:57:53
 * @LastEditTime: 2024-07-13 22:56:15
 * @FilePath: \element-plus-pro\packages\form\src\core\HOC\createField.tsx
 */
import { ProFieldType } from "@element-plus-pro/field";
import { useVModel } from "@vueuse/core";
import { DefineComponent, FunctionalComponent, SetupContext } from "vue-demi";
import { ProFormItem } from "../FormItem";

type RenderProps = {
  modelValue?: string | number | boolean | Date | [Date, Date] | [string, string];
  type?: ProFieldType;
  readonly?: boolean;
  placeholder?: string | [string, string];
  fieldProps?: Record<string, any>;
};

function createField<T>(FieldComponent: DefineComponent<T> | FunctionalComponent<T>, config?: Record<string, any>) {
  const render = (props: RenderProps, ctx: SetupContext) => {
    const model = useVModel(props, "modelValue", ctx.emit);
    return (
      <ProFormItem {...(props as any)}>
        <FieldComponent
          type={props.type}
          mode={props.readonly === true ? "read" : "edit"}
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
