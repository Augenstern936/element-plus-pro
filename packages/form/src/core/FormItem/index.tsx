/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-06-23 13:06:56
 * @LastEditTime: 2024-11-10 21:14:08
 * @FilePath: \element-plus-pro\packages\form\src\core\FormItem\index.tsx
 */
import { formItemProps, ElFormItem } from "element-plus";
import { DefineComponent, computed, defineComponent } from "vue-demi";
import { pickObjectProperty, omitObjectProperty } from "@element-plus-ui/pro-utils";
import { ProFormColumn } from "../GenerateForm";

export const ProFormItem = defineComponent<ProFormColumn>((props, ctx) => {
  const itemProps = computed(() => {
    const data = pickObjectProperty(props, Object.keys(formItemProps) as any[]);
    return omitObjectProperty(data, ["label"]);
  });

  const label = computed(() => {
    return typeof props.label === "function" ? props.label?.({}, props) : props.label;
  });

  return () => (
    <ElFormItem {...itemProps.value} v-slots={{ label: () => label.value }}>
      {ctx.slots.default?.()}
    </ElFormItem>
  );
}) as DefineComponent<ProFormColumn>;
