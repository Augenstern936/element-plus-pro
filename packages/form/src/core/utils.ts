import { FormInstance, FormValidateCallback } from "element-plus";

/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-11-01 16:58:17
 * @LastEditTime: 2024-11-06 16:37:31
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
