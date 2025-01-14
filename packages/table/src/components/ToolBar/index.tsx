import { FullScreen, Warning, RefreshRight, Search, Setting, Plus } from "@element-plus/icons-vue";
import { ElButton, ElCheckbox, ElCheckboxGroup, ElIcon, ElInput, ElPopover, ElSpace, ElTooltip } from "element-plus";
import screenfull from "screenfull";
import type { DefineComponent } from "vue-demi";
import { computed, defineComponent, inject, ref, watch } from "vue-demi";
import type { CrudConfig, TableColumn } from "../../typing";
import { isObject } from "@vueuse/core";
import ProButton from "@element-plus-ui/pro-button";
import Menu from "./Menu";
import { tableToolbarProps, TableToolbarProps, ToolBarTitle } from "./typing";
import { VueDraggable } from "vue-draggable-plus";
import { DragIcon } from "../DragIcon";

export const TableToolBar = defineComponent<TableToolbarProps>(
  (props, ctx) => {
    const isScreenfull = ref(false);

    const searchKeywords = ref("");

    const allSelected = ref<boolean>(true);

    const selectedColumns = ref<any[]>([]);

    const global = inject("global", {}) as {
      title?: ToolBarTitle;
      columns: (TableColumn & { id: string })[];
      options?: boolean;
      showSearchOption?: boolean;
      config?: TableToolbarProps;
      crud?: boolean | CrudConfig;
      formColumns?: any[];
    };

    const title = computed(() => {
      const content = ctx.slots?.title?.() as any[];
      if (content && content[0].children) {
        return content;
      }
      if ((isObject(global.config?.title) && global.config?.title.text) || (isObject(global.title) && global.title.text)) {
        return (
          <ElSpace size={5}>
            <h4>{global.config?.title?.text || global?.title?.text}</h4>
            {(global.config?.title?.tooltip || global.title?.tooltip) && (
              <ElTooltip content={global.config?.title?.tooltip || global.title?.tooltip} placement="top">
                <ElIcon class={"title-tooltip-icon"} size={18}>
                  <Warning />
                </ElIcon>
              </ElTooltip>
            )}
          </ElSpace>
        );
      }
      return global.title ? <h4>{global.config?.title || global.title}</h4> : "";
    });

    const CreateButton = computed(() => {
      if (global.crud === false) return null;
      const crud = isObject(global.crud) ? global.crud : {};
      if (crud.createButton === false) return null;
      const button = isObject(crud?.createButton) ? crud.createButton : {};
      const title = button.title || crud?.texts?.[0] || "创建";
      return (
        <ProButton
          type="primary"
          icon={Plus}
          {...button}
          title={title}
          style={{ marginRight: "12px" }}
          onClick={() => ctx.emit("create")}
        />
      );
    });

    const searchRender = computed(() => {
      const search = global.config?.search;
      const { placeholder = "请输入关键字", button, onChange = null, onButton = null } = isObject(search) ? search : {};
      const getSlots = () => {
        if (search === true || button === true || typeof button === "string") {
          return {
            append: () => (
              <ElButton
                style={{
                  color: "var(--el-color-white)",
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                  borderColor: "var(--el-color-primary)",
                  backgroundColor: "var(--el-color-primary)"
                }}
                onClick={() => {
                  if (typeof onButton === "function") {
                    return onButton(searchKeywords.value);
                  }
                  ctx.emit("search", searchKeywords.value);
                }}
              >
                {typeof button === "string" ? button : "搜索"}
              </ElButton>
            )
          };
        }
        return {};
      };

      const InputSearch = (
        <ElInput
          v-model={searchKeywords.value}
          v-slots={getSlots()}
          placeholder={placeholder}
          clearable
          style={{ width: "230px", marginRight: "12px" }}
          onInput={v => onChange?.(v)}
        />
      );
      return search === true || isObject(search) ? InputSearch : "";
    });

    const actionsRender = computed(() => {
      const { actions }: any = global.config || {};

      if (typeof actions === "object" && actions != null) {
        if (actions?.__v_isVNode) {
          return actions;
        }
        if (Array.isArray(actions) && actions.length) {
          return actions.map(item => {
            return item.__v_isVNode ? item : <ProButton {...item} />;
          });
        }
        return <ElButton {...actions}>{actions.content}</ElButton>;
      }

      return ctx.slots.actions?.();
    });

    // const columns = computed(() => global.columns.filter(({ label }) => label));

    const columns = ref(global.columns);

    const isHasMenu = computed(() => {
      return isObject(props.menu) && props.menu?.items?.length;
    });

    const onSettingChange = (ids: any[]) => ctx.emit("settingChange", ids);

    const initSelectedStatus = () => {
      allSelected.value = true;
      selectedColumns.value = columns.value.map(({ id }) => id);
      ctx.emit("settingReset");
    };

    const onFullScreen = () => {
      if (screenfull.isEnabled) {
        const element = document.getElementById("pro-table");
        if (isScreenfull.value) {
          screenfull.exit();
        } else {
          screenfull.request(element);
        }
        isScreenfull.value = isScreenfull.value ? false : true;
        ctx.emit("fullScreenIcon", isScreenfull.value);
      }
    };

    watch(
      () => allSelected.value,
      v => {
        if (v) return initSelectedStatus();
        selectedColumns.value = [];
        ctx.emit("settingChange", []);
      },
      {
        immediate: true,
        deep: true
      }
    );

    return () => (
      <div class="toolbar-container">
        <div class="left title">
          {isHasMenu.value ? (
            <Menu {...(props?.menu ?? { items: [] })} />
          ) : title.value ? (
            title.value
          ) : (
            (CreateButton.value ?? searchRender.value)
          )}
        </div>
        <div class="right">
          {(isHasMenu.value || title.value || CreateButton.value) && searchRender.value}
          {(isHasMenu.value || title.value) && CreateButton.value}
          <div class="actions">{actionsRender.value}</div>
          {global.options && (
            <div class="options">
              <ElTooltip content="刷新" placement="top" teleported={false}>
                <ElButton class={"icon"} icon={RefreshRight} circle onClick={() => ctx.emit("refreshIcon")} />
              </ElTooltip>
              {global.showSearchOption && (
                <ElTooltip content="搜索栏显隐" placement="top" teleported={false}>
                  <ElButton class={"icon"} icon={Search} circle onClick={() => ctx.emit("searchIcon")} />
                </ElTooltip>
              )}
              <ElPopover
                placement="bottom"
                width={260}
                trigger="click"
                popper-class="columns-setting-popover"
                popper-style={{ padding: 0 }}
                v-slots={{
                  reference: () => (
                    <div class={"icon"} style="display: flex; align-items: center">
                      <ElTooltip content="列设置" placement="top" teleported={false}>
                        <ElButton icon={Setting} circle />
                      </ElTooltip>
                    </div>
                  )
                }}
              >
                <div class="columns-setting-popover-content">
                  <div class="head">
                    <ElCheckbox v-model={allSelected.value}>列展示</ElCheckbox>
                    <span class="reset-btn" onClick={initSelectedStatus}>
                      重置
                    </span>
                  </div>
                  <div class="body">
                    <VueDraggable
                      target="div"
                      v-model={columns.value}
                      animation={150}
                      onChange={() => onSettingChange(selectedColumns.value)}
                    >
                      <ElCheckboxGroup v-model={selectedColumns.value} onChange={onSettingChange}>
                        {columns.value.map((item, index) => (
                          <p key={index}>
                            <DragIcon style="margin-right: 20px" />
                            <ElCheckbox label={item.id}>{item.label}</ElCheckbox>
                          </p>
                        ))}
                      </ElCheckboxGroup>
                    </VueDraggable>
                  </div>
                </div>
              </ElPopover>
              <ElTooltip content={isScreenfull.value ? "退出全屏" : "全屏"} placement="top" teleported={false}>
                <ElButton class={"icon"} icon={FullScreen} circle onClick={onFullScreen} />
              </ElTooltip>
            </div>
          )}
        </div>
      </div>
    );
  },
  {
    name: "TableToolBar"
  }
) as DefineComponent<TableToolbarProps>;

TableToolBar.props = tableToolbarProps;
