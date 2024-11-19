/*
 * @Description:
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2024-03-22 22:45:28
 * @LastEditTime: 2024-10-28 17:52:27
 *
 */
import { FormValueTypeEnum, ToLowercase } from "@element-plus-ui/pro-types";
import { isOnlySymbols } from "./check";

/**
 * 格式化表单Placeholder
 * @param label
 * @param type
 * @returns
 */
type Type =
  | string
  | "year"
  | "years"
  | "month"
  | "months"
  | "week"
  | "monthrange"
  | keyof typeof FormValueTypeEnum
  | ToLowercase<keyof typeof FormValueTypeEnum>;

export function formatPlaceholder(label: string, type: Type): string | [string, string] {
  const formatLabel = label && isOnlySymbols(label.slice(-1)) ? label.slice(0, -1) : label;
  switch (type) {
    case "text":
      return `请输入${formatLabel || "内容"}`;
    case "password":
      return `请输入${formatLabel || "密码"}`;
    case "textarea":
      return `请输入${formatLabel || "内容"}`;
    case "date":
    case "dates":
      return "请选择日期";
    case "daterange":
    case "dateRange":
      return ["请选择开始日期", "请选择结束日期"];
    case "year":
    case "years":
    case "dateYear":
    case "dateYears":
      return "请选择年份";
    case "month":
    case "months":
    case "dateMonth":
    case "dateMonths":
      return "请选择月份";
    case "monthrange":
    case "dateMonthRange":
      return ["请选择开始月份", "请选择结束月份"];
    case "week":
    case "dateWeek":
      return "请选择周期";
    case "datetime":
    case "dateTime":
      return "请选择日期时间";
    case "datetimerange":
    case "dateTimeRange":
      return ["请选择开始日期", "请选择结束日期"];
    case "time":
      return "请选择时间";
    case "timeRange":
      return ["请选择开始时间", "请选择结束时间"];
    case "timeSelect":
      return "请选择时间";
    case "select":
    case "cascader":
    case "treeSelect":
    case "virtualizedSelect":
      return `请选择${formatLabel}`;
    default:
      return formatLabel;
  }
}
