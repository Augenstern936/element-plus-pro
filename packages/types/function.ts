/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-06-29 23:18:22
 * @LastEditTime: 2024-06-29 23:18:28
 * @FilePath: \element-plus-pro\packages\types\function.ts
 */
export type ProRequestData<R, P = Record<string, any>> = (params: P, props: any) => Promise<R>;
