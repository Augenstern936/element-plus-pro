/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-11-10 17:45:51
 * @FilePath: \element-plus-pro\packages\field\src\components\TimePicker\TimePicker.tsx
 */
import { useVModel } from "@vueuse/core";
import { ElText, ElTimePicker } from "element-plus";
import { computed, DefineComponent, defineComponent } from "vue-demi";
import { proFieldTimeProps, ProFieldTimeProps, proFieldTimeRangeProps, ProFieldTimeRangeProps } from "./props";
import { formatPlaceholder } from "@element-plus-ui/pro-utils";

export const FieldTime = defineComponent<ProFieldTimeProps>(
  (props, ctx) => {
    const model = useVModel(props, "modelValue", ctx.emit);
    const placeholder = computed(() => {
      const value = props.placeholder ?? formatPlaceholder("", "time");
      const { placeholder } = props?.fieldProps ?? {};
      return {
        placeholder: placeholder ?? value
      };
    });
    const render = () => {
      if (props.mode === "read") {
        return <ElText>{props.modelValue || props.emptyText}</ElText>;
      }
      if (props.mode === "edit") {
        return (
          <ElTimePicker
            style={{ width: "100%" }}
            onChange={(v: any) => props?.onChange?.(v)}
            {...props?.fieldProps}
            {...placeholder.value}
            isRange={false}
            v-model={model.value}
          />
        );
      }
      return <></>;
    };
    return () => <div style={{ width: "100%" }}>{render()}</div>;
  },
  {
    name: "ProFieldTime"
  }
) as DefineComponent<ProFieldTimeProps>;

FieldTime.props = proFieldTimeProps;

export const FieldTimeRange = defineComponent<ProFieldTimeRangeProps>(
  (props, ctx) => {
    const model = useVModel(props, "modelValue", ctx.emit);
    const placeholder = computed(() => {
      const value = props.placeholder ?? formatPlaceholder("", "timeRange");
      const { startPlaceholder, endPlaceholder, placeholder } = props?.fieldProps ?? {};
      return {
        startPlaceholder: startPlaceholder ?? placeholder ?? (Array.isArray(value) ? value[0] : value),
        endPlaceholder: endPlaceholder ?? placeholder ?? (Array.isArray(value) ? value[1] || value[0] : value)
      };
    });
    return () => {
      if (props.mode === "read" && Array.isArray(props.modelValue) && props.modelValue.length) {
        const { rangeSeparator } = props?.fieldProps || {};
        return (
          <ElText>
            {props.modelValue[0]} ${rangeSeparator || props?.separator} {props.modelValue[1] ?? props.modelValue[0]}
          </ElText>
        );
      }
      if (
        props.mode === "read" &&
        (!Array.isArray(props.modelValue) || (Array.isArray(props.modelValue) && !props.modelValue.length))
      ) {
        return <ElText>{props.emptyText}</ElText>;
      }
      if (props.mode === "edit") {
        return (
          <ElTimePicker
            rangeSeparator={props.separator}
            {...props?.fieldProps}
            {...placeholder.value}
            isRange={true}
            v-model={model.value}
          />
        );
      }
      return <></>;
    };
  },
  {
    name: "ProFieldTimeRange"
  }
) as DefineComponent<ProFieldTimeRangeProps>;

FieldTimeRange.props = proFieldTimeRangeProps;
