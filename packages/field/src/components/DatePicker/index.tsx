/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-09-13 15:06:34
 * @FilePath: \element-plus-pro\packages\field\src\components\DatePicker\index.tsx
 */
import { formatPlaceholder } from "@element-plus-ui/pro-utils";
import { useVModel } from "@vueuse/core";
import { DatePickerProps, ElDatePicker } from "element-plus";
// import "element-plus/theme-chalk/src/button.scss";
// import "element-plus/theme-chalk/src/date-picker.scss";
import { DefineComponent, computed, defineComponent } from "vue-demi";
import * as types from "./props";

const ProDatePicker = defineComponent<types.ProDatePickerProps>((props, ctx) => {
  const model = useVModel(props, "modelValue", ctx.emit);

  const placeholder = computed(() => {
    const value = props.placeholder ?? (formatPlaceholder("", (props.type as any) || "text") as string | [string, string]);

    if (Array.isArray(value) && value.length > 1) {
      return {
        startPlaceholder: value[0],
        endPlaceholder: value[1]
      };
    }

    return {
      placeholder: Array.isArray(value) ? value[0] : value
    };
  });

  return () => {
    if (props.mode === "read") {
      return model.value;
    }
    if (props.mode === "edit") {
      return <ElDatePicker {...(props as DatePickerProps)} {...placeholder.value} v-model={model.value} />;
    }
    return <></>;
  };
}) as DefineComponent<types.ProDatePickerProps>;

ProDatePicker.props = types.proDatePickerProps as any;

export * from "./props";

export const ProFieldDate = (props: types.ProFieldDateProps) => <ProDatePicker {...props} type="date" />;

export const ProFieldDates = (props: types.ProFieldDatesProps) => <ProDatePicker {...props} type="dates" />;

export const ProFieldDateTime = (props: types.ProFieldDateTimeProps) => <ProDatePicker {...props} type="datetime" />;

export const ProFieldDateWeek = (props: types.ProFieldDateWeekProps) => <ProDatePicker {...props} type="week" />;

export const ProFieldDateMonth = (props: types.ProFieldDateMonthProps) => <ProDatePicker {...props} type="month" />;

export const ProFieldDateYear = (props: types.ProFieldDateYearProps) => <ProDatePicker {...props} type="year" />;

export const ProFieldDateRange = (props: types.ProFieldDateRangeProps) => <ProDatePicker {...props} type="daterange" />;

export const ProFieldDateTimeRange = (props: types.ProFieldDateTimeRangeProps) => (
  <ProDatePicker {...props} type="datetimerange" />
);

export const ProFieldDateMonthRange = (props: types.ProFieldDateMonthRangeProps) => (
  <ProDatePicker {...props} type="monthrange" />
);
