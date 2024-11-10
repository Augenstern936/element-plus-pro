/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-27 22:42:21
 * @LastEditTime: 2024-11-10 17:44:16
 * @FilePath: \element-plus-pro\packages\field\src\components\Select\Select.tsx
 */
import { formatPlaceholder, enumTransformOptions, getVModelSelectedOptions } from "@element-plus-ui/pro-utils";
import { useVModel } from "@vueuse/core";
import { ElOption, ElSelect, ElText } from "element-plus";
import { computed, DefineComponent, defineComponent } from "vue-demi";
import { ValueEnum } from "@element-plus-ui/pro-types";
import { useFetchData } from "@element-plus-ui/pro-hooks";
import { marker, ReadOptions } from "../widgets";
import { proFieldSelectProps, ProFieldSelectProps } from "./props";
import Loading from "../widgets/Loading";

const ProFieldSelect = defineComponent<ProFieldSelectProps>(
  (props, ctx) => {
    const model = useVModel(props, "modelValue", ctx.emit);

    const { loading, data } = useFetchData<ValueEnum>({
      request: props?.request
    });

    const placeholder = computed(() => {
      const { placeholder: fieldPropsPlaceholder } = props?.fieldProps || {};
      return fieldPropsPlaceholder ?? props.placeholder ?? formatPlaceholder("", "select");
    });

    const options = computed(() => {
      if (typeof props.request === "function") {
        return enumTransformOptions(data.value);
      }
      return enumTransformOptions(props.valueEnum);
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
        <ElSelect
          loading={loading.value}
          onChange={v => props?.onChange?.(v)}
          {...props?.fieldProps}
          placeholder={placeholder.value as string}
          v-model={model.value}
          v-slots={{
            loading: () => (
              <div style={{ height: "100px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Loading />
              </div>
            ),
            ...ctx.slots
          }}
        >
          {options.value?.map(option => {
            const defaultSlot = () => (
              <ReadOptions value={[option]} marker={props.marker} separator={props.separator} textColor={"default"} />
            );
            const slots = marker.includes(props.marker ?? "none") ? { default: defaultSlot } : {};
            return <ElOption {...option} key={option.label} v-slots={slots} />;
          })}
        </ElSelect>
      );
    };

    return () => <div style={{ width: "100%" }}>{render()}</div>;
  },
  {
    name: "ProFieldSelect"
  }
) as DefineComponent<ProFieldSelectProps>;

ProFieldSelect.props = proFieldSelectProps;

export default ProFieldSelect;
