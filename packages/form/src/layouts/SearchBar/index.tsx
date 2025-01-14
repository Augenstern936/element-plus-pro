/*
 * @Description:;
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2024-04-11 22:23:41
 * @LastEditTime: 2025-01-13 18:15:41
 *
 */
import { ProButtonProps } from "@element-plus-ui/pro-button";
import { omitObjectProperty, withInstall } from "@element-plus-ui/pro-utils";
import { useVModel, isObject } from "@vueuse/core";
import { ColProps, ElCol, ElFormItem } from "element-plus";
import { computed, DefineComponent, defineComponent, onMounted, ref, VNode, watch } from "vue-demi";
import { CreateForm } from "../../core";
import { Actions, emitter } from "./Actions";
import Options from "./Options";
import "./search-bar.scss";
import { proSearchBarProps, ProSearchBarProps } from "./typing";
import { getFormRefExpose } from "../../core/utils";
import ProIcon from "@element-plus-ui/pro-icon";
import { ProProvider } from "@element-plus-ui/pro-provider";

const SearchBar = defineComponent<ProSearchBarProps>(
  (props, ctx) => {
    const formRef = ref();

    const model: Record<string, any> = isObject(props.modelValue) ? useVModel(props, "modelValue", ctx.emit) : ref({});

    const loading = ref(false);

    const defaultSpan = ref(8);

    const collapsed = ref<boolean>(props.collapsed ?? props.defaultCollapsed ?? false);

    const span = computed(() => (props.colSpan ?? defaultSpan.value) as number | Record<string, any>);

    emitter.on("submitter-config-click", ({ onClick }: any) => onClick(model.value));

    const colProps = computed(() => {
      if (isObject(span.value)) return span.value;
      return {
        span: span.value
      };
    });

    const columns = computed(() => {
      /**
       * 过滤掉注释项，对正常项添加标记
       */
      const slots = (ctx.slots?.default?.(model.value) ?? [])
        ?.filter(({ type }) => String(type) != "Symbol(v-cmt)")
        .map((item: any) => {
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

    /**
     * 计算最后(提交器)一列所占量
     */
    const lastItemColSpan = computed(() => {
      // 一行所占多少个cols
      const rowColsNumber = 24 / (colProps.value ?? {})?.span;
      const totalCols = (columns.value ?? [])?.length;
      const lastRowColsNumber = totalCols % rowColsNumber;
      return 24 - lastRowColsNumber * colProps.value.span;
    });

    const onSubmitter = (name: "search" | "reset", buttonProps: ProButtonProps & { onClick?: Function }) => {
      if (typeof props.searchBefore === "function") {
        const newModel = props.searchBefore(model.value);
        model.value = isObject(newModel) ? newModel : model.value;
      }
      if (typeof buttonProps.onClick === "function") {
        return buttonProps.onClick?.(model.value);
      }
      ctx.emit(name, model.value);
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
      loading: loading.value,
      ...getFormRefExpose(formRef.value)
    });

    watch(
      () => props.collapsed,
      () => {
        loading.value = !loading.value;
        collapsed.value = props.collapsed ?? collapsed.value;
      }
    );

    onMounted(() => {
      window.addEventListener("resize", function () {
        console.log("视口宽度:", window.innerWidth);
      });
    });

    return () => (
      <div class={"pro-search-bar"}>
        <ProProvider value={{ submitterNotColWrapper: true }}>
          <CreateForm
            ref={formRef}
            colProps={colProps.value as ColProps}
            rowProps={{ gutter: 24 }}
            {...omitObjectProperty(props, ["submitter"])}
            columns={columns.value}
            grid={true}
            labelPosition={props.layout === "vertical" ? "top" : "right"}
            v-model={model.value}
            v-slots={{
              submitter: (_: any, doms: VNode[]) => {
                return (
                  <ElCol
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
                        loading={loading.value}
                        collapsed={collapsed.value}
                        onSubmit={config => onSubmitter("search", config)}
                        onReset={config => onSubmitter("reset", config)}
                        onCollapse={onCollapse}
                        v-slots={{
                          submitter: () => ctx.slots?.submitter?.({ porps: _, doms })
                        }}
                      />
                      <Options
                        model={model.value}
                        buttons={props.extraTools ?? []}
                        trigger={ctx.slots["extra-tools-trigger"]?.() || <ProIcon.More />}
                        v-slots={{ default: () => ctx.slots?.extraTools?.(model.value) }}
                      />
                    </ElFormItem>
                  </ElCol>
                );
              }
            }}
          />
        </ProProvider>
      </div>
    );
  },
  {
    name: "ProSearchBar"
  }
) as DefineComponent<ProSearchBarProps>;

SearchBar.props = proSearchBarProps;

export * from "./typing";

export type ProSearchBarInstance = InstanceType<typeof SearchBar>;

export const ProSearchBar = withInstall(SearchBar);
