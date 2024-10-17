/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-10-16 21:41:40
 * @FilePath: \element-plus-pro\packages\field\src\components\TreeSelect\TreeSelect.tsx
 */
import { useVModel } from "@vueuse/core";
import { ElText, ElTreeSelect } from "element-plus";
import { useFetchData } from "@element-plus-ui/pro-hooks";
import { computed, DefineComponent, defineComponent } from "vue-demi";
import { proFieldTreeSelectProps, ProFieldTreeSelectProps, ProFieldTreeSelectValueEnum } from "./props";
import { formatPlaceholder, enumTransformOptions, getVModelSelectedOptions } from "@element-plus-ui/pro-utils";
import Loading from "../widgets/Loading";
import { ReadOptions } from "../widgets";

const ProFieldTreeSelect = defineComponent<ProFieldTreeSelectProps>(
  (props, ctx) => {
    const model = useVModel(props, "modelValue", ctx.emit);

    const { loading, data } = useFetchData<ProFieldTreeSelectValueEnum>({
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

      return fieldPropsPlaceholder ?? props.placeholder ?? formatPlaceholder("", "treeSelect");
    });

    const render = () => {
      if (props.mode === "read") {
        const selectedOptions = model.value ? getVModelSelectedOptions(model.value, options.value) : [];
        return selectedOptions.length ? (
          <ReadOptions value={selectedOptions} separator={props.separator} />
        ) : (
          <ElText>{props.emptyText}</ElText>
        );
      }
      if (props.mode === "edit") {
        return (
          <ElTreeSelect
            loading={loading.value}
            data={options.value}
            {...props?.fieldProps}
            placeholder={placeholder.value}
            v-model={model.value}
            v-slots={{
              loading: () => (
                <div style={{ height: "100px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Loading />
                </div>
              ),
              ...ctx.slots
            }}
          />
        );
      }
      return <></>;
    };

    return () => <div style={{ width: "100%" }}>{render()}</div>;
  },
  {
    name: "ProFieldTreeSelect"
  }
) as DefineComponent<ProFieldTreeSelectProps>;

ProFieldTreeSelect.props = proFieldTreeSelectProps;

export default ProFieldTreeSelect;
