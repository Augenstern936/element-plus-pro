/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-10-10 22:14:25
 * @LastEditTime: 2024-11-10 17:42:04
 * @FilePath: \element-plus-pro\packages\field\src\components\Input\ProFieldTextarea.tsx
 */
import { useVModel } from "@vueuse/core";
import { DefineComponent, defineComponent } from "vue";
import BaseInput from "./BaseInput";
import { baseInputProps, ProFieldTextareaProps } from "./props";
import { omitObjectProperty } from "@element-plus-ui/pro-utils";
import { ElText } from "element-plus";

const ProFieldTextarea = defineComponent<ProFieldTextareaProps>(
  (props, ctx) => {
    const model = useVModel(props, "modelValue", ctx.emit);
    const render = () => {
      if (props.mode === "read") {
        return <ElText>{model.value || props.emptyText}</ElText>;
      }
      if (props.mode === "edit") {
        return <BaseInput onChange={v => props?.onChange?.(v)} {...props?.fieldProps} type="textarea" v-model={model.value} />;
      }
      return <></>;
    };
    return () => <div style={{ width: "100%" }}>{render()}</div>;
  },
  {
    name: "ProFieldTextarea"
  }
) as DefineComponent<ProFieldTextareaProps>;

ProFieldTextarea.props = omitObjectProperty(baseInputProps, ["type"]);

export default ProFieldTextarea;
