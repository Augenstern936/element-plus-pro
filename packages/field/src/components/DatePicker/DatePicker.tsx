/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-11-02 14:16:05
 * @FilePath: \element-plus-pro\packages\field\src\components\DatePicker\DatePicker.tsx
 */
import { formatPlaceholder } from "@element-plus-ui/pro-utils";
import { useVModel } from "@vueuse/core";
import { ElDatePicker, ElText } from "element-plus";
import { DefineComponent, computed, defineComponent } from "vue-demi";
import * as types from "./props";
import { ReadOptions } from "../widgets";

interface ProDatePickerProps extends types.ProDatePickerProps {
  separator?: string;
}

const ProDatePicker = defineComponent<ProDatePickerProps>((props, ctx) => {
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

  const render = () => {
    if (props.mode === "read") {
      if (props.type === "dates" || props.type === "years" || props.type === "months") {
        return model.value ? (
          <ReadOptions value={Array.isArray(model.value) ? model.value : [model.value]} separator={props.separator} />
        ) : (
          <ElText>{props.emptyText}</ElText>
        );
      }
      if (props.type === "daterange" || props.type === "monthrange" || props.type === "datetimerange") {
        const { rangeSeparator } = props?.fieldProps || {};
        return (
          <ElText>
            {Array.isArray(model.value) && model.value.length
              ? `${model.value[0]} ${rangeSeparator || props?.separator} ${model.value[1] ?? model.value[0]}`
              : props.emptyText}
          </ElText>
        );
      }
      return <ElText>{model.value || props.emptyText}</ElText>;
    }
    if (props.mode === "edit") {
      return (
        <ElDatePicker
          style={{ width: "100%", boxSizing: "border-box" }}
          rangeSeparator={props.separator}
          {...props?.fieldProps}
          {...placeholder.value}
          type={props.type}
          v-model={model.value}
        />
      );
    }
    return "";
  };

  return () => <div style={{ width: "100%" }}>{render()}</div>;
}) as DefineComponent<ProDatePickerProps>;

ProDatePicker.props = {
  ...types.proDatePickerProps,
  separator: {
    type: String,
    default: "-"
  }
};

export const FieldDate = defineComponent<types.ProFieldDateProps>(
  (props, ctx) => {
    const model = useVModel(props, "modelValue", ctx.emit);
    return () => <ProDatePicker placeholder={props.placeholder} {...props} type="date" v-model={model.value} />;
  },
  {
    name: "ProFieldDate"
  }
) as DefineComponent<types.ProFieldDateProps>;

FieldDate.props = types.proFieldDateProps;

export const FieldDates = defineComponent<types.ProFieldDatesProps>(
  (props, ctx) => {
    const model = useVModel(props, "modelValue", ctx.emit);
    return () => <ProDatePicker {...props} type="dates" v-model={model.value} />;
  },
  {
    name: "ProFieldDates"
  }
) as DefineComponent<types.ProFieldDatesProps>;

FieldDates.props = types.proFieldDatesProps;

export const FieldDateTime = defineComponent<types.ProFieldDateTimeProps>(
  (props, ctx) => {
    const model = useVModel(props, "modelValue", ctx.emit);
    return () => <ProDatePicker {...props} type="datetime" v-model={model.value} />;
  },
  {
    name: "ProFieldDateTime"
  }
) as DefineComponent<types.ProFieldDateTimeProps>;

FieldDateTime.props = types.proFieldDateTimeProps;

export const FieldDateWeek = defineComponent<types.ProFieldDateWeekProps>(
  (props, ctx) => {
    const model = useVModel(props, "modelValue", ctx.emit);
    return () => <ProDatePicker {...props} type="week" v-model={model.value} />;
  },
  {
    name: "ProFieldDateWeek"
  }
) as DefineComponent<types.ProFieldDateWeekProps>;

FieldDateWeek.props = types.proFieldDateWeekProps;

export const FieldDateMonth = defineComponent<types.ProFieldDateMonthProps>(
  (props, ctx) => {
    const model = useVModel(props, "modelValue", ctx.emit);
    return () => <ProDatePicker {...props} type="month" v-model={model.value} />;
  },
  {
    name: "ProFieldDateMonth"
  }
) as DefineComponent<types.ProFieldDateMonthProps>;

FieldDateMonth.props = types.proFieldDateMonthProps;

export const FieldDateMonths = defineComponent<types.ProFieldDateMonthProps>(
  (props, ctx) => {
    const model = useVModel(props, "modelValue", ctx.emit);
    return () => <ProDatePicker {...props} type="months" v-model={model.value} />;
  },
  {
    name: "ProFieldDateMonths"
  }
) as DefineComponent<types.ProFieldDateMonthsProps>;

FieldDateMonths.props = types.proFieldDateMonthsProps;

export const FieldDateYear = defineComponent<types.ProFieldDateYearProps>(
  (props, ctx) => {
    const model = useVModel(props, "modelValue", ctx.emit);
    return () => <ProDatePicker {...props} type="year" v-model={model.value} />;
  },
  {
    name: "ProFieldDateYear"
  }
) as DefineComponent<types.ProFieldDateYearProps>;

FieldDateYear.props = types.proFieldDateYearProps;

export const FieldDateYears = defineComponent<types.ProFieldDateYearProps>(
  (props, ctx) => {
    const model = useVModel(props, "modelValue", ctx.emit);
    return () => <ProDatePicker {...props} type="years" v-model={model.value} />;
  },
  {
    name: "ProFieldDateYears"
  }
) as DefineComponent<types.ProFieldDateYearsProps>;

FieldDateYears.props = types.proFieldDateYearsProps;

export const FieldDateRange = defineComponent<types.ProFieldDateRangeProps>(
  (props, ctx) => {
    const model = useVModel(props, "modelValue", ctx.emit);
    return () => <ProDatePicker {...props} type="daterange" v-model={model.value} />;
  },
  {
    name: "ProFieldDateRange"
  }
) as DefineComponent<types.ProFieldDateRangeProps>;

FieldDateRange.props = types.proFieldDateRangeProps;

export const FieldDateTimeRange = defineComponent<types.ProFieldDateTimeRangeProps>(
  (props, ctx) => {
    const model = useVModel(props, "modelValue", ctx.emit);
    return () => <ProDatePicker {...props} type="datetimerange" v-model={model.value} />;
  },
  {
    name: "ProFieldDateTimeRange"
  }
) as DefineComponent<types.ProFieldDateTimeRangeProps>;

FieldDateTimeRange.props = types.proFieldDateTimeRangeProps;

export const FieldDateMonthRange = defineComponent<types.ProFieldDateMonthRangeProps>(
  (props, ctx) => {
    const model = useVModel(props, "modelValue", ctx.emit);
    return () => <ProDatePicker {...props} type="monthrange" v-model={model.value} />;
  },
  {
    name: "ProFieldDateMonthRange"
  }
) as DefineComponent<types.ProFieldDateMonthRangeProps>;

FieldDateMonthRange.props = types.proFieldDateMonthRangeProps;
