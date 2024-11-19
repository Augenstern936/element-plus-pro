/*
 * @Description:
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2024-09-13 21:28:34
 * @LastEditTime: 2024-10-10 11:49:27
 *
 */
/**
 * 校验值是否是一个组件
 * @param value
 * @returns
 */
export function checkValueIsComponent(v: Record<string, Function>): boolean {
  if (typeof v === "object" && typeof v != null && (typeof v.render === "function" || typeof v.setup === "function")) {
    return true;
  }
  return false;
}

export function isOnlySymbols(str: string): boolean {
  return /[\s~`!@#$%^&*()\-_=+[\]{}|;；:：'",，。、【‘’】<.>/?？]/.test(str);
}

/**
 * 验证是否为Url
 * @param str
 * @returns
 */
export function isUrl(str: string) {
  return /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/.test(str);
}
