/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-10-16 21:40:56
 * @FilePath: \element-plus-pro\packages\field\src\components\Switch\Switch.tsx
 */
import { useVModel } from "@vueuse/core";
import { ElSwitch, ElText } from "element-plus";
import { DefineComponent, computed, defineComponent } from "vue-demi";
import { ProFieldSwitchProps, proFieldSwitchProps } from "./props";

const ProFieldSwitch = defineComponent<ProFieldSwitchProps>(
  (props, ctx) => {
    const model = useVModel(props, "modelValue", ctx.emit);

    const text = computed(() => {
      const activeText = props?.fieldProps?.activeText || "打开";
      const inactiveText = props?.fieldProps?.inactiveText || "关闭";

      const { activeValue, inactiveValue } = props?.fieldProps || {};

      if (model.value === activeValue) {
        return activeText;
      }
      if (model.value === inactiveValue) {
        return inactiveText;
      }

      return model.value ? (activeValue ? inactiveText : activeText) : inactiveValue ? activeText : inactiveText;
    });

    const render = () => {
      if (props.mode === "read") {
        return <ElText>{text.value ?? props.emptyText}</ElText>;
      }
      if (props.mode === "edit") {
        return <ElSwitch {...props?.fieldProps} v-model={model.value} v-slots={ctx.slots} />;
      }
      return <></>;
    };

    return () => <div style={{ width: "100%" }}>{render()}</div>;
  },
  {
    name: "ProFieldSwitch"
  }
) as DefineComponent<ProFieldSwitchProps>;

ProFieldSwitch.props = proFieldSwitchProps;

export default ProFieldSwitch;
