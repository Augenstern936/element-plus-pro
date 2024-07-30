/*
 * @Description:;
 * @Author: wangbowen936926
 * @Date: 2024-04-11 22:23:41
 * @LastEditTime: 2024-07-27 19:15:19
 * @FilePath: \element-plus-pro\packages\form\src\layouts\SearchBar\index.tsx
 */
import { ProButtonProps } from "@element-plus-pro/button";
import { withInstall } from "@element-plus-pro/utils";
import { MoreFilled } from "@element-plus/icons-vue";
import { isObject } from "@vue/shared";
import { useVModel } from "@vueuse/core";
import { ColProps, ElButton, ElFormItem } from "element-plus";
import { computed, DefineComponent, defineComponent, FunctionalComponent, ref, toRaw, watch } from "vue-demi";
import { GenerateForm } from "../../core";
import Actions from "./Actions";
import Options from "./Options";
import "./style.scss";
import { proSearchBarProps, ProSearchBarProps } from "./typing";

const SearchBar = defineComponent<ProSearchBarProps>(
  (props, ctx) => {
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
      if (collapsed.value === true) {
        return props.columns;
      }

      const colSpan = isObject(span.value) ? span.value?.span : span.value;

      return props.columns?.slice(0, 24 / colSpan - 1);
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

    watch(
      () => props,
      () => {
        collapsed.value = props.collapsed ?? collapsed.value;
      }
    );

    return () => (
      <div class={"pro-search-bar"}>
        <GenerateForm
          colProps={colProps.value as ColProps}
          rowProps={{ gutter: 24 }}
          {...props}
          columns={columns.value}
          grid={true}
          labelPosition={props.layout === "vertical" ? "top" : "right"}
          v-model={model.value}
          v-slots={{
            submitter: (model: Record<string, any>, ColWrapper: FunctionalComponent<ColProps>) => {
              return (
                <ColWrapper {...(colProps.value as ColProps)} span={lastItemColSpan.value}>
                  <ElFormItem
                    class={"submitter-form-item"}
                    style={{
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
