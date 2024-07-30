import { VModelOptionValue, ValueOption } from "@element-plus-pro/types";

/**
 * 获取当前v-model选中的值配置项
 * @param value
 * @param options
 */
export function getValueOptionConfigs(value: VModelOptionValue, options: ValueOption[]) {
  if (!value || !options.length) {
    return [];
  }
  return options?.filter(option => {
    const vmodel = Array.isArray(value) ? value : [value];
    return vmodel?.some(v => v == option.value);
  });
}
