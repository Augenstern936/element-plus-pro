/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-10-15 21:53:26
 * @FilePath: \element-plus-pro\packages\field\src\components\Input\BaseInput.tsx
 */
import { useVModel } from "@vueuse/core";
import { ElInput } from "element-plus";
import { computed, DefineComponent, defineComponent } from "vue-demi";
import { BaseInputProps, baseInputProps } from "./props";
import { formatPlaceholder } from "@element-plus-ui/pro-utils";

const BaseInput = defineComponent<BaseInputProps>((props, ctx) => {
  const model = useVModel(props, "modelValue", ctx.emit);

  const placeholder = computed(() => {
    return props.placeholder ?? formatPlaceholder("", props.type ?? "text");
  });

  return () => <ElInput {...props} placeholder={placeholder.value as string} v-model={model.value} v-slots={ctx.slots} />;
}) as DefineComponent<BaseInputProps>;

BaseInput.props = baseInputProps;

export default BaseInput;
