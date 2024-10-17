/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-10-16 21:44:53
 * @FilePath: \element-plus-pro\packages\field\src\components\ColorPicker\ColorPicker.tsx
 */
import { useVModel } from "@vueuse/core";
import { ElColorPicker } from "element-plus";
import { defineComponent, DefineComponent } from "vue-demi";
import { proFieldColor, ProFieldColorProps } from "./props";

const ProFieldColor = defineComponent<ProFieldColorProps>(
  (props, ctx) => {
    const model = useVModel(props, "modelValue", ctx.emit);

    return () => (
      <div>
        <ElColorPicker
          {...props?.fieldProps}
          disabled={props.mode === "read" ? true : props?.fieldProps?.disabled}
          v-model={model.value}
        />
      </div>
    );
  },
  {
    name: "ProFieldColor"
  }
) as DefineComponent<ProFieldColorProps>;

ProFieldColor.props = proFieldColor as any;

export default ProFieldColor;
