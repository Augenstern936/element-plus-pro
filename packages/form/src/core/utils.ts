/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-11-01 16:58:17
 * @LastEditTime: 2024-11-01 17:43:59
 * @FilePath: \element-plus-pro\packages\form\src\core\utils.ts
 */
export function getFormRefExpose(ref?: Record<string, any>) {
  if (!ref) return {};
  return {
    validate: () => ref?.validate(),
    validateField: () => ref?.validateField(),
    resetFields: () => ref?.resetFields(),
    scrollToField: () => ref?.scrollToField(),
    clearValidate: () => ref?.clearValidate(),
    fields: () => ref?.fields()
  };
}
