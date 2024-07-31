/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-06-28 23:26:26
 * @LastEditTime: 2024-07-25 21:41:33
 * @FilePath: \element-plus-pro\packages\hooks\useFetchData\index.ts
 */
import { ProRequestData } from "@element-plus-ui/pro-types";
import { ref, watch } from "vue-demi";
import { useRequest } from "vue-request";

export function useFetchData<R, P = Record<string, any>>(props: { params?: P; request?: ProRequestData<R, P> }) {
  const abortRef = ref<AbortController | null>(null);

  const fetchData = async () => {
    abortRef.value?.abort?.();
    abortRef.value = new AbortController();
    const data = await Promise.race([
      props.request?.(props.params as P, props),
      new Promise((_, reject) => {
        abortRef.value?.signal?.addEventListener("abort", () => {
          reject(new Error("aborted"));
        });
      })
    ]);
    return data as R;
  };

  const { loading, data, refresh } = useRequest(fetchData);

  watch(() => props.params, refresh, { deep: true });

  return {
    data,
    loading
  };
}
