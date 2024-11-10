import { FormValidateCallback } from "element-plus";
import { toRaw, toRef } from "vue-demi";

/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-11-01 16:58:17
 * @LastEditTime: 2024-11-10 20:36:55
 * @FilePath: \element-plus-pro\packages\form\src\core\utils.ts
 */
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

export function getObjectDeepValue(obj: Record<string, any>, keys: string | Array<string>) {
  keys = typeof keys === "string" ? keys.split(".") : keys;
  if (!Array.isArray(keys) || !keys.length) {
    return null;
  }
  return keys.reduce((o: Record<string, any>, k: string) => o && o[k], obj);
}
