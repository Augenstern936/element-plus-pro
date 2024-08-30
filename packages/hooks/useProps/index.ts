/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-07-13 16:14:11
 * @LastEditTime: 2024-07-13 17:19:41
 * @FilePath: \element-plus-pro\packages\hooks\useProps\index.ts
 */
import { isObject } from "@vue/shared";
import { computed } from "vue";

export function useProps(entity: Record<string, any>, props: Record<string, any>, exclude: string[] = []) {
  const filterProps = computed(() => {
    let data: Record<string, any> = {};
    if (isObject(entity) && Object.keys(entity).length && isObject(props) && Object.keys(props).length) {
      Object.keys(entity).forEach(key => {
        if (props[key] !== void 0 && !exclude.includes(key)) {
          data[key] = props[key];
        }
      });
    }
    return data;
  });

  return filterProps.value;
}
