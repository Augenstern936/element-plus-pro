/*
 * @Description:
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-11-11 20:31:56
 *
 */
import { useVModel } from "@vueuse/core";
import { ElText, ElTimeSelect } from "element-plus";
import type { DefineComponent } from "vue-demi";
import { computed, defineComponent } from "vue-demi";
import { ProFieldTimeSelectProps, proFieldTimeSelectProps } from "./props";
import { formatPlaceholder } from "@element-plus-ui/pro-utils";

const ProFieldTimeSelect = defineComponent<ProFieldTimeSelectProps>(
  (props, ctx) => {
    const model = useVModel(props, "modelValue", ctx.emit);

    const placeholder = computed(() => {
      const { placeholder: fieldPropsPlaceholder } = props?.fieldProps || {};

      return fieldPropsPlaceholder ?? props.placeholder ?? formatPlaceholder("", "timeSelect");
    });
    const render = () => {
      if (props.mode === "read") {
        return <ElText>{model.value || props.emptyText}</ElText>;
      }
      if (props.mode === "edit") {
        return <ElTimeSelect {...props?.fieldProps} placeholder={placeholder.value as string} v-model={model.value} />;
      }
      return <></>;
    };
    return () => <div style={{ width: "100%" }}>{render()}</div>;
  },
  {
    name: "ProFieldTimeSelect"
  }
) as DefineComponent<ProFieldTimeSelectProps>;

ProFieldTimeSelect.props = proFieldTimeSelectProps;

export default ProFieldTimeSelect;
