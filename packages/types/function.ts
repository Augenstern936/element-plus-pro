/*
 * @Description:
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2024-06-29 23:18:22
 * @LastEditTime: 2024-07-05 13:43:53
 *
 */
export type ProRequestData<R, P = Record<string, any>> = (params: P, props?: any) => Promise<R>;

export type ProRequestOptions = ProRequestData<
  (string | number | boolean)[] | { label: string; value: string | number | boolean }[]
>;
