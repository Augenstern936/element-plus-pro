/*
 * @Description:
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2024-07-07 12:15:18
 * @LastEditTime: 2024-11-15 14:38:49
 */
import { enumTransformOptions, getVModelSelectedOptions } from "@element-plus-ui/pro-utils";
import { ElCheckbox, ElCheckboxButton, ElCheckboxGroup, ElText } from "element-plus";
import { useFetchData } from "@element-plus-ui/pro-hooks";
import { ValueEnum } from "@element-plus-ui/pro-types";
import { Ref, SetupContext, computed } from "vue-demi";
import { ReadOptions, Skeleton } from "../widgets";
import { ProFieldCheckboxButtonProps, ProFieldCheckboxProps } from "./typing";

function useRender(
  type: "checkbox" | "checkbox-button",
  props: ProFieldCheckboxProps | ProFieldCheckboxButtonProps,
  model: Ref,
  ctx: SetupContext
) {
  const RenderElement = type === "checkbox" ? ElCheckbox : ElCheckboxButton;

  const { loading, data } = useFetchData<ValueEnum>({
    params: {},
    request: props?.request
  });

  const options = computed(() => {
    if (typeof props.request === "function") {
      return enumTransformOptions(data.value, props.mappingEnumValue);
    }
    return enumTransformOptions(props.valueEnum, props.mappingEnumValue);
  });

  const element = computed(() => {
    if (props.mode === "read") {
      const selectedOptions = getVModelSelectedOptions(props.modelValue ?? [], options.value);
      return selectedOptions.length ? (
        <ReadOptions value={selectedOptions} marker={props.marker} separator={props.separator} />
      ) : (
        <ElText>{props.emptyText}</ElText>
      );
    }
    if (props.mode === "edit") {
      const Element = (
        <ElCheckboxGroup {...props?.fieldProps} v-model={model.value}>
          {options.value?.map(option => {
            return (
              <RenderElement {...option} label={option.value} data-key={option.label} v-slots={ctx?.slots}>
                {option.label}
              </RenderElement>
            );
          })}
        </ElCheckboxGroup>
      );
      return typeof props.request === "function" ? (
        <Skeleton loading={loading.value} columns={4} wSize={60} hSize={18} gap={30}>
          {Element}
        </Skeleton>
      ) : (
        Element
      );
    }
    return "";
  });

  return () => <div style={{ width: "100%" }}>{element.value}</div>;
}

export default useRender;
