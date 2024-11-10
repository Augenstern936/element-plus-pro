/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-06-28 23:26:26
 * @LastEditTime: 2024-11-09 18:21:03
 * @FilePath: \element-plus-pro\packages\hooks\useFetchData\index.ts
 */
import { ProRequestData } from "@element-plus-ui/pro-types";
import { ref, watch } from "vue-demi";
import { useRequest } from "vue-request";
import type { Options } from "vue-request";

export function useFetchData<R, P = Record<string, any>>(
  service: { params?: P; request?: ProRequestData<R, P> },
  config?: Options<R, []>
) {
  const abortRef = ref<AbortController | null>(null);

  const fetchData = async () => {
    abortRef.value?.abort?.();
    abortRef.value = new AbortController();
    const data = await Promise.race([
      service.request?.(service.params as P, service),
      new Promise((_, reject) => {
        abortRef.value?.signal?.addEventListener("abort", () => {
          reject(new Error("aborted"));
        });
      })
    ]);
    return data as R;
  };

  const res = useRequest(fetchData, config);

  watch(() => service.params, res.refresh, { deep: true });

  return res;
}
