import { FullScreen, Warning, RefreshRight, Search, Setting } from "@element-plus/icons-vue";
import { ElButton, ElCheckbox, ElCheckboxGroup, ElIcon, ElInput, ElPopover, ElSpace, ElTooltip } from "element-plus";
import screenfull from "screenfull";
import type { FunctionalComponent } from "vue-demi";
import { computed, defineComponent, inject, ref, watch } from "vue-demi";
import type { ProTableTitleConfig, TableColumn, TableToolbarConfig } from "../../typing";
import { isObject } from "@vueuse/core";

interface ToolBarProps {
  onSearchIcon?: () => void;
  onSettingChange?: (ids: string[]) => void;
  onSettingReset?: () => void;
  onFullScreenIcon?: (v: boolean) => void;
}

export const ToolBar = defineComponent<ToolBarProps>((props, ctx) => {
  const toolbar = inject("toolbar", {}) as {
    title?: string | ProTableTitleConfig;
    columns: (TableColumn & { id: string })[];
    options?: boolean;
    showSearchOption?: boolean;
    config?: TableToolbarConfig;
  };

  const isScreenfull = ref(false);

  const searchKeywords = ref("");

  const allSelected = ref<boolean>(true);

  const selectedColumns = ref<any[]>([]);

  const title = computed(() => {
    const content = ctx.slots?.title?.() as any[];
    if (content && content[0].children) {
      return content;
    }
    if (isObject(toolbar.title) && toolbar.title.text) {
      return (
        <ElSpace size={5}>
          <h4>{toolbar.title.text}</h4>
          {toolbar.title.tooltip && (
            <ElTooltip content={toolbar.title.tooltip} placement="top">
              <ElIcon class={"title-tooltip-icon"} size={18}>
                <Warning />
              </ElIcon>
            </ElTooltip>
          )}
        </ElSpace>
      );
    }
    return toolbar.title ? <h4>{toolbar.title}</h4> : "";
  });

  const searchRender = computed(() => {
    const search = toolbar.config?.search;
    const {
      placeholder = "请输入关键字",
      showAction = true,
      actionText = "",
      actionStyle = {},
      onChange = null,
      onAction = null
    } = isObject(search) ? search : {};
    const actionElementRender = () => {
      return showAction === true ? (
        <ElButton
          icon={actionText ? void 0 : Search}
          style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0, ...actionStyle }}
          onClick={() => onAction?.(searchKeywords.value)}
        >
          {actionText}
        </ElButton>
      ) : (
        void 0
      );
    };

    const ComElement = (
      <ElInput
        v-model={searchKeywords.value}
        v-slots={{ append: actionElementRender }}
        placeholder={placeholder}
        clearable
        style={{ width: "200px" }}
        onInput={v => onChange?.(v)}
      />
    );
    return search ? ComElement : "";
  });

  const actionsRender = computed(() => {
    const { actions }: any = toolbar.config || {};

    if (typeof actions === "object" && actions != null) {
      if (actions?.__v_isVNode) {
        return actions;
      }

      if (Array.isArray(actions) && actions.length) {
        return actions.map(item => {
          return item.__v_isVNode ? item : <ElButton {...item}>{item.content}</ElButton>;
        });
      }

      return <ElButton {...actions}>{actions.content}</ElButton>;
    }

    return ctx.slots.actions?.();
  });

  const columns = computed(() => toolbar.columns.filter(({ label }) => label));

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
      if (v) {
        return initSelectedStatus();
      }
      selectedColumns.value = [];
      ctx.emit("columnsSettingChange", []);
    },
    {
      immediate: true
    }
  );

  return () => (
    <div class="toolbar-container">
      <div class="left title">{title.value ? title.value : searchRender.value}</div>
      <div class="right">
        {title.value && searchRender.value}
        <div class="actions">{actionsRender.value}</div>
        {toolbar.options && (
          <div class="options">
            <ElTooltip content="刷新" placement="top">
              <ElButton class={"icon"} icon={RefreshRight} circle onClick={() => ctx.emit("refreshIcon")} />
            </ElTooltip>
            {toolbar.showSearchOption && (
              <ElTooltip content="搜索栏显隐" placement="top">
                <ElButton class={"icon"} icon={Search} circle onClick={() => ctx.emit("searchIcon")} />
              </ElTooltip>
            )}
            <ElPopover
              placement="bottom"
              width={200}
              trigger="click"
              popper-class="columns-setting-popover"
              popper-style={{ padding: 0 }}
              v-slots={{
                reference: () => (
                  <div class={"icon"} style="display: flex; align-items: center">
                    <ElTooltip content="列设置" placement="top">
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
                  <ElCheckboxGroup v-model={selectedColumns.value} onChange={onSettingChange}>
                    {columns.value.map((item, index) => (
                      <p key={index}>
                        <ElCheckbox label={item.id}>{item.label}</ElCheckbox>
                      </p>
                    ))}
                  </ElCheckboxGroup>
                </div>
              </div>
            </ElPopover>
            <ElTooltip content={isScreenfull.value ? "退出全屏" : "全屏"} placement="top">
              <ElButton class={"icon"} icon={FullScreen} circle onClick={onFullScreen} />
            </ElTooltip>
          </div>
        )}
      </div>
    </div>
  );
}) as unknown as FunctionalComponent<ToolBarProps>;
