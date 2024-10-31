/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-10-10 22:14:25
 * @LastEditTime: 2024-10-16 21:45:47
 * @FilePath: \element-plus-pro\packages\field\src\components\Input\ProFieldText.tsx
 */
import { useVModel } from "@vueuse/core";
import { DefineComponent, defineComponent } from "vue";
import BaseInput from "./BaseInput";
import { baseInputProps, ProFieldTextProps } from "./props";
import { omitObjectProperty } from "@element-plus-ui/pro-utils";
import { ElText } from "element-plus";

const ProFieldText = defineComponent<ProFieldTextProps>(
  (props, ctx) => {
    const model = useVModel(props, "modelValue", ctx.emit);
    const render = () => {
      if (props.mode === "read") {
        return <ElText>{model.value || props.emptyText}</ElText>;
      }
      if (props.mode === "edit") {
        return <BaseInput {...props?.fieldProps} type="text" v-model={model.value} v-slots={ctx.slots} />;
      }
      return <></>;
    };
    return () => <div style={{ width: "100%" }}>{render()}</div>;
  },
  {
    name: "ProFieldText"
  }
) as DefineComponent<ProFieldTextProps>;

ProFieldText.props = omitObjectProperty(baseInputProps, ["type"]);

export default ProFieldText;
