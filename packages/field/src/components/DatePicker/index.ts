/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-09-13 21:28:34
 * @LastEditTime: 2024-10-14 15:43:04
 * @FilePath: \element-plus-pro\packages\field\src\components\DatePicker\index.ts
 */
import { withInstall } from "@element-plus-ui/pro-utils";
import {
  FieldDate,
  FieldDates,
  FieldDateTime,
  FieldDateWeek,
  FieldDateMonth,
  FieldDateYear,
  FieldDateRange,
  FieldDateTimeRange,
  FieldDateMonthRange,
  FieldDateMonths,
  FieldDateYears
} from "./DatePicker";

export * from "./props";

export const ProFieldDate = withInstall(FieldDate);

export const ProFieldDates = withInstall(FieldDates);

export const ProFieldDateTime = withInstall(FieldDateTime);

export const ProFieldDateWeek = withInstall(FieldDateWeek);

export const ProFieldDateMonth = withInstall(FieldDateMonth);

export const ProFieldDateMonths = withInstall(FieldDateMonths);

export const ProFieldDateYear = withInstall(FieldDateYear);

export const ProFieldDateYears = withInstall(FieldDateYears);

export const ProFieldDateRange = withInstall(FieldDateRange);

export const ProFieldDateTimeRange = withInstall(FieldDateTimeRange);

export const ProFieldDateMonthRange = withInstall(FieldDateMonthRange);
