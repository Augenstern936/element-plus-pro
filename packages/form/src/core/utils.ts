/*
 * @Description:
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2024-11-01 16:58:17
 * @LastEditTime: 2024-11-17 21:29:41
 *
 */
import { FormValidateCallback } from "element-plus";

export function getFormRefExpose(ref?: Record<string, any>) {
  if (!ref) return {};
  return {
    validate: (callback: FormValidateCallback) => ref.value?.validate(callback),
    validateField: () => ref.value?.validateField(),
    resetFields: () => ref.value?.resetFields(),
    scrollToField: () => ref.value?.scrollToField(),
    clearValidate: () => ref.value?.clearValidate(),
    fields: () => ref.value?.fields()
  };
}

/**
 * 深度设置对象值
 * @param obj
 * @param keys
 * @param value
 * @returns
 */
export function setObjectDeepValue(obj: Record<string, any>, keys: string | Array<string>, value: any) {
  keys = typeof keys === "string" ? keys.split(".") : keys;
  if (!Array.isArray(keys) || !keys.length || value === void 0) {
    return;
  }
  const findValue = getObjectDeepValue(obj, keys);
  if (findValue === value) return;
  const lastKey = keys.pop() as string;
  keys.reduce((item, key) => (item[key] = item[key] ?? {}), obj)[lastKey] = value;
}

/**
 * 深度获取对象属性值
 * @param obj
 * @param keys
 * @returns
 */
export function getObjectDeepValue(obj: Record<string, any>, keys: string | Array<string>) {
  keys = typeof keys === "string" ? keys.split(".") : keys;
  if (!Array.isArray(keys) || !keys.length) {
    return null;
  }
  return keys.reduce((o: Record<string, any>, k: string) => o && o[k], obj);
}
