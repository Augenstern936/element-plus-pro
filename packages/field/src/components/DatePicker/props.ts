/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-04-10 00:18:39
 * @LastEditTime: 2024-10-21 23:27:43
 * @FilePath: \element-plus-pro\packages\field\src\components\DatePicker\props.ts
 */
import { DatePickerProps, DatePickType } from "element-plus";
import { excludeObjectProperty } from "@element-plus-ui/pro-utils";
import { GeneratePropTypes } from "@element-plus-ui/pro-types";
import type { ExtractPropTypes, PropType } from "vue-demi";
import { commomFieldProps } from "../../props";

export const proDatePickerProps = {
  ...commomFieldProps,
  modelValue: {
    type: [String, Number, Array as PropType<(string | number)[]>],
    default: void 0
  },
  type: {
    type: String as PropType<DatePickType>
  },
  placeholder: {
    type: [String, Array as unknown as PropType<[string] | [string, string]>],
    default: void 0
  },
  fieldProps: {
    type: Object as PropType<Partial<Omit<DatePickerProps, "modelValue">>>
  }
};

const commomPropsEntity = excludeObjectProperty(proDatePickerProps, ["type"]);

export const proFieldDateProps = commomPropsEntity;

export const proFieldDatesProps = {
  ...commomPropsEntity,
  modelValue: {
    type: Array as PropType<Array<string | number>>,
    default: []
  },
  separator: {
    type: String,
    default: "、"
  }
};

export const proFieldDateTimeProps = commomPropsEntity;

export const proFieldDateWeekProps = commomPropsEntity;

export const proFieldDateMonthProps = commomPropsEntity;

export const proFieldDateMonthsProps = {
  ...proDatePickerProps,
  modelValue: {
    type: Array as PropType<Array<string | number>>,
    default: []
  },
  separator: {
    type: String,
    default: "、"
  }
};

export const proFieldDateYearProps = commomPropsEntity;

export const proFieldDateYearsProps = {
  ...commomPropsEntity,
  modelValue: {
    type: Array as PropType<Array<string | number>>,
    default: []
  },
  separator: {
    type: String,
    default: "、"
  }
};

export const proFieldDateRangeProps = {
  ...commomPropsEntity,
  modelValue: {
    type: Array as PropType<Array<string | number>>,
    default: []
  },
  separator: {
    type: String,
    default: "-"
  }
};

export const proFieldDateTimeRangeProps = {
  ...commomPropsEntity,
  modelValue: {
    type: Array as PropType<Array<string | number>>,
    default: []
  },
  separator: {
    type: String,
    default: "-"
  }
};

export const proFieldDateMonthRangeProps = {
  ...commomPropsEntity,
  modelValue: {
    type: Array as PropType<Array<string | number>>,
    default: []
  },
  separator: {
    type: String,
    default: "-"
  }
};

export type ProDatePickerProps = GeneratePropTypes<typeof proDatePickerProps>;

export type ProFieldDateProps = Partial<ExtractPropTypes<typeof proFieldDateProps>>;

export type ProFieldDatesProps = Partial<ExtractPropTypes<typeof proFieldDatesProps>>;

export type ProFieldDateTimeProps = Partial<ExtractPropTypes<typeof proFieldDateTimeProps>>;

export type ProFieldDateWeekProps = Partial<ExtractPropTypes<typeof proFieldDateWeekProps>>;

export type ProFieldDateMonthProps = Partial<ExtractPropTypes<typeof proFieldDateMonthProps>>;

export type ProFieldDateMonthsProps = Partial<ExtractPropTypes<typeof proFieldDateMonthsProps>>;

export type ProFieldDateYearProps = Partial<ExtractPropTypes<typeof proFieldDateYearProps>>;

export type ProFieldDateYearsProps = Partial<ExtractPropTypes<typeof proFieldDateYearsProps>>;

export type ProFieldDateRangeProps = Partial<ExtractPropTypes<typeof proFieldDateRangeProps>>;

export type ProFieldDateTimeRangeProps = Partial<ExtractPropTypes<typeof proFieldDateTimeRangeProps>>;

export type ProFieldDateMonthRangeProps = Partial<ExtractPropTypes<typeof proFieldDateMonthRangeProps>>;
