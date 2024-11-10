/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-11-10 17:48:16
 * @FilePath: \element-plus-pro\packages\field\src\components\VirtualizedSelect\VirtualizedSelect.tsx
 */
import { enumTransformOptions, getVModelSelectedOptions, formatPlaceholder } from "@element-plus-ui/pro-utils";
import { useVModel } from "@vueuse/core";
import { ElSelectV2, ElText } from "element-plus";
import { useFetchData } from "@element-plus-ui/pro-hooks";
import { computed, DefineComponent, defineComponent } from "vue-demi";
import { ReadOptions } from "../widgets";
import { proFieldVirtualizedSelectProps, ProFieldVirtualizedSelectProps, ProFieldVirtualizedSelectValueEnum } from "./props";
import Loading from "../widgets/Loading";

const ProFieldVirtualizedSelect = defineComponent<ProFieldVirtualizedSelectProps>(
  (props, ctx) => {
    const model = useVModel(props, "modelValue", ctx.emit);
    const { loading, data } = useFetchData<ProFieldVirtualizedSelectValueEnum>({
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

      return fieldPropsPlaceholder ?? props.placeholder ?? formatPlaceholder("", "select");
    });

    const render = () => {
      if (props.mode === "read") {
        const selectedOptions = getVModelSelectedOptions(model.value ?? [], options.value);
        return selectedOptions.length ? (
          <ReadOptions marker={props.marker} separator={props.separator} value={selectedOptions} />
        ) : (
          <ElText>{props.emptyText}</ElText>
        );
      }
      return (
        <ElSelectV2
          loading={loading.value}
          options={options.value}
          onChange={v => props?.onChange?.(v)}
          {...props?.fieldProps}
          placeholder={placeholder.value as string}
          v-model={model.value}
          v-slots={{
            default: ({ item }: any) => {
              return <ReadOptions value={[item]} marker={props.marker} textColor={"default"} />;
            },
            loading: () => (
              <div style={{ height: "100px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Loading />
              </div>
            ),
            ...ctx.slots
          }}
        />
      );
    };

    return render;
  },
  {
    name: "ProFieldVirtualizedSelect"
  }
) as DefineComponent<ProFieldVirtualizedSelectProps>;

ProFieldVirtualizedSelect.props = proFieldVirtualizedSelectProps;

export default ProFieldVirtualizedSelect;
