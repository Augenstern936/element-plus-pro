/*
 * @Description:
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2024-06-22 19:04:01
 * @LastEditTime: 2024-11-11 20:28:53
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
