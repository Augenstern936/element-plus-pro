/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-07-25 21:10:33
 * @FilePath: \element-plus-pro\packages\field\src\components\Input\BaseInput.tsx
 */
import { excludeObjectProperty } from "@element-plus-pro/utils";
import { useVModel } from "@vueuse/core";
import { ElInput } from "element-plus";
import { DefineComponent, defineComponent } from "vue-demi";
import { BaseInputProps, baseInputProps } from "./props";

const BaseInput = defineComponent<BaseInputProps>((props, ctx) => {
  const model = useVModel(props, "modelValue", ctx.emit);

  return () => {
    if (props.mode === "read") {
      return model.value;
    }
    if (props.mode === "edit") {
      return <ElInput {...excludeObjectProperty(props, ["label"])} v-model={model.value} />;
    }
    return "";
  };
}) as DefineComponent<BaseInputProps>;

BaseInput.props = baseInputProps as any;

export default BaseInput;
