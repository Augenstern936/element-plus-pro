/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-06-30 21:35:16
 * @LastEditTime: 2024-10-22 21:03:01
 * @FilePath: \element-plus-pro\packages\form\src\components\TimePicker\index.tsx
 */
import type { ProFieldTimeProps, ProFieldTimeRangeProps } from "@element-plus-ui/pro-field";
import { withInstall } from "@element-plus-ui/pro-utils";
import { DefineComponent, defineComponent } from "vue-demi";
import { ProFormField } from "../../core";
import { FormFieldCommonProps } from "../../typing";
import { useVModel } from "@vueuse/core";

export interface ProFormTimeProps extends FormFieldCommonProps, ProFieldTimeProps {}
export interface ProFormTimeRangeProps extends FormFieldCommonProps, ProFieldTimeRangeProps {}

const FormTime = defineComponent<ProFormTimeProps>(
  (props, ctx) => {
    const model = useVModel(props, "modelValue", ctx.emit);
    return () => <ProFormField {...props} type={"time"} v-model={model.value} />;
  },
  {
    name: "ProFormTime"
  }
) as DefineComponent<ProFormTimeProps>;

const FormTimeRange = defineComponent<ProFormTimeRangeProps>(
  (props, ctx) => {
    const model = useVModel(props, "modelValue", ctx.emit);
    return () => <ProFormField {...props} type={"timeRange"} v-model={model.value} />;
  },
  {
    name: "ProFormTimeRange"
  }
) as DefineComponent<ProFormTimeRangeProps>;

export const ProFormTime = withInstall(FormTime);
export const ProFormTimeRange = withInstall(FormTimeRange);
