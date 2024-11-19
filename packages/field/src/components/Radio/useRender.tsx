/*
 * @Description:
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2024-07-07 12:15:18
 * @LastEditTime: 2024-11-11 20:30:02
 *
 */
import { enumTransformOptions, getVModelSelectedOptions } from "@element-plus-ui/pro-utils";
import { ElRadio, ElRadioButton, ElRadioGroup, ElText } from "element-plus";
import { Ref, computed } from "vue-demi";
import { ReadOptions, Skeleton } from "../widgets";
import { ValueEnum } from "@element-plus-ui/pro-types";
import { useFetchData } from "@element-plus-ui/pro-hooks";
import { ProFieldRadioButtonProps, ProFieldRadioProps } from "./typing";

function useRender(type: "radio" | "radio-button", props: ProFieldRadioProps | ProFieldRadioButtonProps, model: Ref) {
  const RenderElement = type === "radio" ? ElRadio : ElRadioButton;

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
      const selectedOptions = getVModelSelectedOptions(model.value ?? [], options.value);
      return selectedOptions.length ? (
        <ReadOptions value={selectedOptions} marker={props.marker} separator={props.separator} />
      ) : (
        <ElText>{props.emptyText}</ElText>
      );
    }
    if (props.mode === "edit") {
      const Element = (
        <ElRadioGroup {...props?.fieldProps} v-model={model.value}>
          {options.value?.map(option => (
            <RenderElement {...option} label={option.value} data-key={option.label}>
              {option.label}
            </RenderElement>
          ))}
        </ElRadioGroup>
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
