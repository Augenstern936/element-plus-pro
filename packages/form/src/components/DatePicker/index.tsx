/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-07-02 22:22:28
 * @LastEditTime: 2024-10-22 20:58:13
 * @FilePath: \element-plus-pro\packages\form\src\components\DatePicker\index.tsx
 */
import type * as Types from "@element-plus-ui/pro-field";
import { withInstall } from "@element-plus-ui/pro-utils";
import { DefineComponent, defineComponent } from "vue-demi";
import { ProFormField } from "../../core";
import { FormFieldCommonProps } from "../../typing";
import { useVModel } from "@vueuse/core";

/**
 * 日期
 */
const FormDate = defineComponent<ProFormDateProps>(
  (props, ctx) => {
    const model = useVModel(props, "modelValue", ctx.emit);
    return () => <ProFormField {...props} type={"date"} v-model={model.value} />;
  },
  {
    name: "ProFormDate"
  }
) as DefineComponent<ProFormDateProps>;

/**
 * 分段日期
 */
const FormDateRange = defineComponent<ProFormDateRangeProps>(
  (props, ctx) => {
    const model = useVModel(props, "modelValue", ctx.emit);
    return () => <ProFormField {...props} type={"dateRange"} v-model={model.value} />;
  },
  {
    name: "ProFormDateRange"
  }
) as DefineComponent<ProFormDateRangeProps>;

const FormDates = defineComponent<ProFormDatesProps>(
  (props, ctx) => {
    const model = useVModel(props, "modelValue", ctx.emit);
    return () => <ProFormField {...props} type={"dates"} v-model={model.value} />;
  },
  {
    name: "ProFormDates"
  }
) as DefineComponent<ProFormDatesProps>;

/**
 * 日期时间
 */
const FormDateTime = defineComponent<ProFormDateTimeProps>(
  (props, ctx) => {
    const model = useVModel(props, "modelValue", ctx.emit);
    return () => <ProFormField {...props} type={"dateTime"} v-model={model.value} />;
  },
  {
    name: "ProFormDateTime"
  }
) as DefineComponent<ProFormDateTimeProps>;

/**
 * 分段日期时间
 */
const FormDateTimeRange = defineComponent<ProFormDateTimeRangeProps>(
  (props, ctx) => {
    const model = useVModel(props, "modelValue", ctx.emit);
    return () => <ProFormField {...props} type={"dateTimeRange"} v-model={model.value} />;
  },
  {
    name: "ProFormDateTimeRange"
  }
) as DefineComponent<ProFormDateTimeRangeProps>;

/**
 * 周
 */
const FormDateWeek = defineComponent<ProFormDateWeekProps>(
  (props, ctx) => {
    const model = useVModel(props, "modelValue", ctx.emit);
    return () => <ProFormField {...props} type={"dateWeek"} v-model={model.value} />;
  },
  {
    name: "ProFormDateWeek"
  }
) as DefineComponent<ProFormDateWeekProps>;

/**
 * 月
 */
const FormDateMonth = defineComponent<ProFormDateMonthProps>(
  (props, ctx) => {
    const model = useVModel(props, "modelValue", ctx.emit);
    return () => <ProFormField {...props} type={"dateMonth"} v-model={model.value} />;
  },
  {
    name: "ProFormDateMonth"
  }
) as DefineComponent<ProFormDateMonthProps>;

/**
 * 多选-月
 */
const FormDateMonths = defineComponent<ProFormDateMonthProps>(
  (props, ctx) => {
    const model = useVModel(props, "modelValue", ctx.emit);
    return () => <ProFormField {...props} type={"dateMonths"} v-model={model.value} />;
  },
  {
    name: "ProFormDateMonths"
  }
) as DefineComponent<ProFormDateMonthsProps>;

/**
 * 分段月
 */
const FormDateMonthRange = defineComponent<ProFormDateMonthRangeProps>(
  (props, ctx) => {
    const model = useVModel(props, "modelValue", ctx.emit);
    return () => <ProFormField {...props} type={"dateMonthRange"} v-model={model.value} />;
  },
  {
    name: "ProFormDateMonthRange"
  }
) as DefineComponent<ProFormDateMonthRangeProps>;

/**
 * 年
 */
const FormDateYear = defineComponent<ProFormDateYearProps>(
  (props, ctx) => {
    const model = useVModel(props, "modelValue", ctx.emit);
    return () => <ProFormField {...props} type={"dateYear"} v-model={model.value} />;
  },
  {
    name: "ProFormDateYear"
  }
) as DefineComponent<ProFormDateYearProps>;

/**
 * 多选-年
 */
const FormDateYears = defineComponent<ProFormDateYearProps>(
  (props, ctx) => {
    const model = useVModel(props, "modelValue", ctx.emit);
    return () => <ProFormField {...props} type={"dateYears"} v-model={model.value} />;
  },
  {
    name: "ProFormDateYears"
  }
) as DefineComponent<ProFormDateYearsProps>;

export interface ProFormDateProps extends FormFieldCommonProps, Types.ProFieldDateProps {}
export interface ProFormDatesProps extends FormFieldCommonProps, Types.ProFieldDatesProps {}
export interface ProFormDateRangeProps extends FormFieldCommonProps, Types.ProFieldDateRangeProps {}
export interface ProFormDateTimeProps extends FormFieldCommonProps, Types.ProFieldDateTimeProps {}
export interface ProFormDateTimeRangeProps extends FormFieldCommonProps, Types.ProFieldDateTimeRangeProps {}
export interface ProFormDateWeekProps extends FormFieldCommonProps, Types.ProFieldDateWeekProps {}
export interface ProFormDateMonthProps extends FormFieldCommonProps, Types.ProFieldDateMonthProps {}
export interface ProFormDateMonthsProps extends FormFieldCommonProps, Types.ProFieldDateMonthsProps {}
export interface ProFormDateMonthRangeProps extends FormFieldCommonProps, Types.ProFieldDateMonthRangeProps {}
export interface ProFormDateYearProps extends FormFieldCommonProps, Types.ProFieldDateYearProps {}
export interface ProFormDateYearsProps extends FormFieldCommonProps, Types.ProFieldDateYearsProps {}

export const ProFormDate = withInstall(FormDate);
export const ProFormDates = withInstall(FormDates);
export const ProFormDateRange = withInstall(FormDateRange);
export const ProFormDateTime = withInstall(FormDateTime);
export const ProFormDateTimeRange = withInstall(FormDateTimeRange);
export const ProFormDateWeek = withInstall(FormDateWeek);
export const ProFormDateMonth = withInstall(FormDateMonth);
export const ProFormDateMonths = withInstall(FormDateMonths);
export const ProFormDateMonthRange = withInstall(FormDateMonthRange);
export const ProFormDateYear = withInstall(FormDateYear);
export const ProFormDateYears = withInstall(FormDateYears);
