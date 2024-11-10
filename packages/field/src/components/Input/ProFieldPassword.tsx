/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-06-22 19:11:22
 * @LastEditTime: 2024-11-10 17:41:29
 * @FilePath: \element-plus-pro\packages\field\src\components\Input\ProFieldPassword.tsx
 */
import { useVModel } from "@vueuse/core";
import { ElSpace, ElText } from "element-plus";
import { defineComponent, DefineComponent, ref } from "vue-demi";
import BaseInput from "./BaseInput";
import { baseInputProps, ProFieldPasswordProps } from "./props";
import ProIcon from "@element-plus-ui/pro-icon";
import { omitObjectProperty } from "@element-plus-ui/pro-utils";

const ProFieldPassword = defineComponent<ProFieldPasswordProps>((props, ctx) => {
  const isView = ref(false);
  const model = useVModel(props, "modelValue", ctx.emit);

  const render = () => {
    if (props.mode === "read" && props.modelValue) {
      return props.modelValue ? (
        <ElSpace>
          <ElText class="pro-field-password__read-status-text" style={{ height: isView.value ? "unset" : "1px" }}>
            {isView.value ? props.modelValue : "********"}
          </ElText>
          <ElText
            class="pro-field-password__view-hide-switch"
            type="primary"
            style={{ height: isView.value ? "unset" : "1px" }}
            onClick={() => (isView.value = !isView.value)}
          >
            <ProIcon name={isView.value ? "View" : "Hide"} />
          </ElText>
        </ElSpace>
      ) : (
        <ElText>{props.emptyText}</ElText>
      );
    }
    if (props.mode === "edit") {
      return (
        <BaseInput
          onChange={v => props?.onChange?.(v)}
          {...props?.fieldProps}
          type="password"
          v-model={model.value}
          v-slots={ctx.slots}
        />
      );
    }
    return <></>;
  };

  return () => <div style={{ width: "100%" }}>{render()}</div>;
}) as DefineComponent<ProFieldPasswordProps>;

ProFieldPassword.props = omitObjectProperty(baseInputProps, ["type"]);

export default ProFieldPassword;
