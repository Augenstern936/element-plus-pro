/*
 * @Description:;
 * @Author: wangbowen936926
 * @Date: 2024-04-11 22:23:41
 * @LastEditTime: 2024-10-27 18:04:40
 * @FilePath: \element-plus-pro\packages\form\src\layouts\SearchBar\index.tsx
 */
import { ProButtonProps } from "@element-plus-ui/pro-button";
import { omitObjectProperty, withInstall } from "@element-plus-ui/pro-utils";
import { MoreFilled } from "@element-plus/icons-vue";
import { useVModel, isObject } from "@vueuse/core";
import { ColProps, ElButton, ElFormItem } from "element-plus";
import { computed, CSSProperties, DefineComponent, defineComponent, FunctionalComponent, ref, toRaw, watch } from "vue-demi";
import { GenerateForm } from "../../core";
import Actions from "./Actions";
import Options from "./Options";
import "./style.scss";
import { proSearchBarProps, ProSearchBarProps } from "./typing";

const SearchBar = defineComponent<ProSearchBarProps>(
  (props, ctx) => {
    const formRef = ref();

    const model = useVModel(props, "modelValue", ctx.emit);

    const defaultSpan = ref(8);

    const collapsed = ref<boolean>(props.collapsed ?? props.defaultCollapsed ?? false);

    const span = computed(() => props.colSpan ?? defaultSpan.value);

    const colProps = computed(() => {
      if (isObject(span.value)) {
        return span.value;
      }
      return {
        span: span.value
      };
    });

    const columns = computed(() => {
      const slots = (ctx.slots?.default?.() ?? [])?.map((item: any) => {
        item["is"] = "element";
        return item;
      });

      const columnsConfig = props?.columns ?? [];

      if (collapsed.value === true) {
        return [...slots, ...columnsConfig];
      }
      const colSpan = isObject(span.value) ? span.value?.span : span.value;

      return [...slots, ...columnsConfig]?.slice(0, 24 / colSpan - 1);
    });

    const isOptions = computed(() => {
      return props.extraTools?.length || ctx.slots?.extraTools ? true : false;
    });

    const lastItemColSpan = computed(() => {
      // 一行所占多少个cols
      const rowColsNumber = 24 / (colProps.value ?? {})?.span;
      const totalCols = (columns.value ?? [])?.length;
      const lastRowColsNumber = totalCols % rowColsNumber;
      return 24 - lastRowColsNumber * colProps.value.span;
    });

    const onSubmitter = (name: "search" | "reset", buttonProps: ProButtonProps & { onClick?: Function }) => {
      let entity = toRaw(model.value) ?? {};
      if (typeof props.searchBefore === "function") {
        entity = props.searchBefore(entity);
      }
      if (typeof buttonProps.onClick === "function") {
        return buttonProps.onClick(entity);
      }
      ctx.emit(name, entity);
    };

    const onCollapse = (v: boolean) => {
      if (props.collapsed === void 0) {
        collapsed.value = v;
      } else {
        ctx.emit("update:collapsed", v);
        ctx.emit("collapse", v);
      }
    };

    ctx.expose({
      validate: () => formRef.value?.validate(),
      validateField: () => formRef.value?.validateField(),
      resetFields: () => formRef.value?.resetFields(),
      scrollToField: () => formRef.value?.scrollToField(),
      clearValidate: () => formRef.value?.clearValidate(),
      fields: () => formRef.value?.fields()
    });

    watch(
      () => props,
      () => {
        collapsed.value = props.collapsed ?? collapsed.value;
      }
    );

    return () => (
      <div class={"pro-search-bar"}>
        <GenerateForm
          ref={formRef}
          colProps={colProps.value as ColProps}
          rowProps={{ gutter: 24 }}
          {...omitObjectProperty(props, ["submitter"])}
          columns={columns.value}
          grid={true}
          labelPosition={props.layout === "vertical" ? "top" : "right"}
          v-model={model.value}
          v-slots={{
            submitter: (model: Record<string, any>, ColWrapper: FunctionalComponent<ColProps & { style?: CSSProperties }>) => {
              return (
                <ColWrapper
                  {...(colProps.value as ColProps)}
                  span={lastItemColSpan.value}
                  style={{ display: "flex", alignItems: props.layout === "vertical" ? "end" : "unset" }}
                >
                  <ElFormItem
                    class={"submitter-form-item"}
                    label={lastItemColSpan.value === 24 ? " " : ""}
                    style={{
                      paddingLeft: lastItemColSpan.value === 24 ? "12px" : 0,
                      "--justify-content": isOptions.value ? "space-between" : "end"
                    }}
                  >
                    <Actions
                      {...props}
                      collapsed={collapsed.value}
                      onSubmit={config => onSubmitter("search", config)}
                      onReset={config => onSubmitter("reset", config)}
                      onCollapse={onCollapse}
                      v-slots={{
                        submitter: () => ctx.slots?.submitter?.(model.value)
                      }}
                    />
                    <Options
                      buttons={props.extraTools ?? []}
                      v-slots={{ default: () => ctx.slots?.extraTools?.() }}
                      trigger={ctx.slots["extra-tools-trigger"]?.() || <ElButton icon={MoreFilled} circle />}
                    />
                  </ElFormItem>
                </ColWrapper>
              );
            }
          }}
        />
      </div>
    );
  },
  {
    name: "ProSearchBar"
  }
) as DefineComponent<ProSearchBarProps>;

SearchBar.props = proSearchBarProps;

export * from "./typing";

export const ProSearchBar = withInstall(SearchBar);
