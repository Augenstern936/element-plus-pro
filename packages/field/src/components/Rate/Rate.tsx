/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-10-16 21:29:20
 * @FilePath: \element-plus-pro\packages\field\src\components\Rate\Rate.tsx
 */
import { useVModel } from "@vueuse/core";
import { ElRate, ElText } from "element-plus";
import { DefineComponent, defineComponent } from "vue-demi";
import { ProFieldRateProps, proFieldRateProps } from "./props";

const ProFieldRate = defineComponent<ProFieldRateProps>(
  (props, ctx) => {
    const model = useVModel(props, "modelValue", ctx.emit);
    const render = () => {
      if (props.mode === "read") {
        const { scoreTemplate } = props?.fieldProps || {};
        return (
          <ElText type={"warning"}>
            {model.value}
            {scoreTemplate?.includes("{value}") ? scoreTemplate.split("{value}")[1] : ""}
          </ElText>
        );
      }
      if (props.mode === "edit") {
        return <ElRate {...props?.fieldProps} v-model={model.value} />;
      }
      return <></>;
    };
    return () => <div style={{ width: "100%" }}>{render()}</div>;
  },
  {
    name: "ProFieldRate"
  }
) as DefineComponent<ProFieldRateProps>;

ProFieldRate.props = proFieldRateProps;

export default ProFieldRate;
