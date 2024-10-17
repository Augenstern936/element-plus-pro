/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-10-16 21:52:15
 * @FilePath: \element-plus-pro\packages\field\src\components\Cascader\Cascader.tsx
 */
import { useVModel } from "@vueuse/core";
import { useFetchData } from "@element-plus-ui/pro-hooks";
import { ElCascader, CascaderProps, ElText, CascaderOption } from "element-plus";
import { formatPlaceholder, enumTransformOptions, getVModelSelectedOptions } from "@element-plus-ui/pro-utils";
import { computed, defineComponent, DefineComponent, watch } from "vue-demi";
import { proFieldCascaderProps, ProFieldCascaderProps, ProFieldCascaderValueEnum } from "./props";
import { ReadOptions } from "../widgets";

const ProFieldCascader = defineComponent<ProFieldCascaderProps>(
  (props, ctx) => {
    const model = useVModel(props, "modelValue", ctx.emit);

    const { data } = useFetchData<ProFieldCascaderValueEnum>({
      request: props?.request
    });

    const options = computed(() => {
      if (typeof props.request === "function") {
        return enumTransformOptions(data.value);
      }
      return enumTransformOptions(props.valueEnum);
    });

    const placeholder = computed(() => {
      const { placeholder: fieldPropsPlaceholder } = props?.fieldProps || {};

      return fieldPropsPlaceholder ?? props.placeholder ?? formatPlaceholder("", "cascader");
    });

    watch(
      () => model.value,
      v => {
        console.log(v, "v");
      }
    );

    const render = () => {
      if (props.mode === "read") {
        const selectedOptions = model.value ? getVModelSelectedOptions(model.value, options.value) : [];
        return selectedOptions.length ? (
          <ReadOptions value={selectedOptions} separator={props?.fieldProps?.separator || props.separator} />
        ) : (
          <ElText>{props.emptyText}</ElText>
        );
      }
      if (props.mode === "edit") {
        return (
          <ElCascader
            style={{ width: "100%" }}
            options={options.value as CascaderOption[]}
            separator={props.separator || "/"}
            {...(props?.fieldProps as CascaderProps)}
            placeholder={placeholder.value as string}
            v-model={model.value}
            v-slots={ctx.slots}
          />
        );
      }
      return <></>;
    };

    return () => <div style={{ width: "100%" }}>{render()}</div>;
  },
  {
    name: "ProFieldCascader"
  }
) as DefineComponent<ProFieldCascaderProps>;

ProFieldCascader.props = proFieldCascaderProps;

export default ProFieldCascader;