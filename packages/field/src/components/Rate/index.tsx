/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-10-08 22:09:26
 * @FilePath: \element-plus-pro\packages\field\src\components\Rate\index.tsx
 */
import { useVModel } from "@vueuse/core";
import { ElRate, ElText } from "element-plus";
import { DefineComponent, defineComponent } from "vue-demi";
import { ProFieldRateProps, proFieldRateProps } from "./props";

const ProFieldRate = defineComponent<ProFieldRateProps>(
  (props, ctx) => {
    const model = useVModel(props, "modelValue", ctx.emit);

    return () => {
      if (props.mode === "read") {
        return (
          <ElText type={"warning"}>
            {model.value}
            {props?.scoreTemplate?.includes("{value}") ? props.scoreTemplate.split("{value}")[1] : ""}
          </ElText>
        );
      }
      if (props.mode === "edit") {
        return <ElRate {...props} v-model={model.value} />;
      }
      return "";
    };
  },
  {
    name: "ProFieldRate"
  }
) as DefineComponent<ProFieldRateProps>;

ProFieldRate.props = proFieldRateProps as any;

export * from "./props";

export { ProFieldRate };

export default ProFieldRate;
