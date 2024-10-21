/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-06-23 13:06:56
 * @LastEditTime: 2024-07-09 17:05:38
 * @FilePath: \element-plus-pro\packages\form\src\core\FormItem\index.tsx
 */
import { ElFormItem } from "element-plus";
import { DefineComponent, computed, defineComponent } from "vue-demi";
import { ProFormColumn } from "./typing";

export const ProFormItem = defineComponent<ProFormColumn>((props, ctx) => {
  const label = computed(() => {
    return typeof props.label === "function" ? props.label() : props.label;
  });

  return () => <ElFormItem v-slots={{ label: () => label.value }}>{ctx.slots.default?.()}</ElFormItem>;
}) as DefineComponent<ProFormColumn>;
