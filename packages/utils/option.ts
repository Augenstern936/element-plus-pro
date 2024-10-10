/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-09-13 21:28:34
 * @LastEditTime: 2024-10-09 11:56:37
 * @FilePath: \element-plus-pro\packages\utils\option.ts
 */
import { VModelOptionValue, ValueOption } from "@element-plus-ui/pro-types";

/**
 * 获取当前v-model选中的值配置项
 * @param value
 * @param options
 */
export function getValueOptionConfigs(value: VModelOptionValue, options: ValueOption[]) {
  if ((!value && value !== 0) || !options.length) {
    return [];
  }
  return options?.filter(option => {
    const vmodel = Array.isArray(value) ? value : [value];
    return vmodel?.some(v => v == option.value);
  });
}
