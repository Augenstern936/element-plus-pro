/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-06-22 19:04:01
 * @LastEditTime: 2024-10-16 21:45:28
 * @FilePath: \element-plus-pro\packages\field\src\components\Input\ProFieldNumber.tsx
 */
import { useVModel } from "@vueuse/core";
import { ElInputNumber, ElText } from "element-plus";
import { DefineComponent, defineComponent } from "vue-demi";
import { ProFieldNumberProps, proInputNumberProps } from "./props";

const ProFieldNumber = defineComponent<ProFieldNumberProps>(
  (props, ctx) => {
    const model = useVModel(props, "modelValue", ctx.emit);
    const render = () => {
      if (props.mode === "read") {
        return <ElText>{model.value ?? 0}</ElText>;
      }
      if (props.mode === "edit") {
        return <ElInputNumber style={{ width: "100%" }} {...props?.fieldProps} v-model={model.value} v-slots={ctx.slots} />;
      }
      return <></>;
    };
    return () => <div style={{ width: "100%" }}>{render()}</div>;
  },
  {
    name: "ProFieldNumber"
  }
) as DefineComponent<ProFieldNumberProps>;

ProFieldNumber.props = proInputNumberProps;

export default ProFieldNumber;
