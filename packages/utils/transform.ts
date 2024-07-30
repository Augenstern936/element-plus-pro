/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-05-17 19:46:42
 * @LastEditTime: 2024-06-02 12:25:39
 * @FilePath: \element-plus-pro\packages\utils\transform.ts
 */
import { CssUnitEnum, ValueEnum } from "@element-plus-pro/types";
import { isObject } from "@vueuse/core";

/**
 *
 * @param val
 * @param cssUnit
 * @returns
 */
export function toCssUnitValue(val: number | string, unit: keyof typeof CssUnitEnum = "px"): string {
  const strVal = String(val || 0);
  const newVal = strVal[0] == "0" ? "0" : strVal.slice(0, 2) == "-0" ? "-0" : strVal;
  const typeErrorTip = "The first parameter type of the function toCssUnitValue is not a string number";
  const isHasUnit = Object.keys(CssUnitEnum)
    .filter(v => Number.isNaN(Number(v)))
    .some(cssUnit => {
      const valUnit = newVal.slice(newVal.length - cssUnit.length);
      const value = newVal.slice(0, newVal.length - cssUnit.length);
      if (valUnit === cssUnit && (!value || Number.isNaN(Number(value)))) {
        throw new TypeError(typeErrorTip);
      }
      return valUnit === cssUnit;
    });
  if (!isHasUnit) {
    if (Number.isNaN(Number(newVal))) {
      throw new TypeError(typeErrorTip);
    }
    return `${newVal}${unit}`;
  }

  return newVal;
}

export function enumTransformOptions(valueEnum: ValueEnum<{ [x: string]: any }>) {
  const options = Object.keys(valueEnum).map(key => {
    const item = valueEnum[key];
    const baseOption = {
      label: isObject(item) ? (item as Record<string, any>).label : item,
      value: key
    };
    return !isObject(item) ? baseOption : { ...(item as any), ...baseOption };
  });
  return options ?? [];
}

export function toEnum(options: { label: string; value: string | number | boolean }[]) {
  return options.reduce((acc: Record<string, any>, cur: any) => {
    acc[cur.value] = cur.label;
    return acc;
  }, {});
}
