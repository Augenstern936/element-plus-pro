import { defineComponent, inject, ref, computed, createVNode, watch, createTextVNode, isVNode } from "vue";
import { ElInput, ElButton, ElTooltip, ElPopover, ElCheckbox, ElCheckboxGroup } from "element-plus";
import { RefreshRight, Search, Setting, FullScreen } from "@element-plus/icons-vue";
import screenfull from "../../../node_modules/.pnpm/screenfull@6.0.2/node_modules/screenfull/index.mjs";
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
const ToolBar = /* @__PURE__ */ defineComponent((props, ctx) => {
  const toolbar = inject("toolbar", {});
  const isScreenfull = ref(false);
  const searchKeywords = ref("");
  const allSelected = ref(true);
  const selectedColumns = ref([]);
  const title = computed(() => {
    var _a, _b;
    const content = (_b = (_a = ctx.slots) == null ? void 0 : _a.title) == null ? void 0 : _b.call(_a);
    return content[0].children ? content : toolbar.title ? createVNode("h3", null, [toolbar.title]) : "";
  });
  const searchRender = computed(() => {
    var _a;
    const search = (_a = toolbar.config) == null ? void 0 : _a.search;
    const {
      placeholder = "请输入关键字",
      showAction = true,
      actionText = "",
      actionStyle = {},
      onChange = null,
      onAction = null
    } = typeof search === "object" ? search : {};
    const actionElementRender = () => {
      return showAction === true ? createVNode(ElButton, {
        "icon": actionText ? void 0 : Search,
        "style": {
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          ...actionStyle
        },
        "onClick": () => onAction == null ? void 0 : onAction(searchKeywords.value)
      }, _isSlot(actionText) ? actionText : {
        default: () => [actionText]
      }) : void 0;
    };
    const ComElement = createVNode(ElInput, {
      "modelValue": searchKeywords.value,
      "onUpdate:modelValue": ($event) => searchKeywords.value = $event,
      "placeholder": placeholder,
      "clearable": true,
      "style": {
        width: "200px"
      },
      "onInput": (v) => onChange == null ? void 0 : onChange(v)
    }, {
      append: actionElementRender
    });
    return search ? ComElement : "";
  });
  const actionsRender = computed(() => {
    var _a, _b;
    const {
      actions
    } = toolbar.config || {};
    if (typeof actions === "object" && actions != null) {
      if (actions == null ? void 0 : actions.__v_isVNode) {
        return actions;
      }
      if (Array.isArray(actions) && actions.length) {
        return actions.map((item) => {
          return item.__v_isVNode ? item : createVNode(ElButton, item, {
            default: () => [item.content]
          });
        });
      }
      return createVNode(ElButton, actions, {
        default: () => [actions.content]
      });
    }
    return (_b = (_a = ctx.slots).actions) == null ? void 0 : _b.call(_a);
  });
  const columns = computed(() => {
    return toolbar.columns.filter(({
      title: title2
    }) => title2);
  });
  const onColumnsSettingChange = (ids) => {
    ctx.emit("columnsSettingChange", ids);
  };
  const initSelectedStatus = () => {
    allSelected.value = true;
    selectedColumns.value = columns.value.map(({
      id
    }) => id);
    ctx.emit("columnsSettingReset");
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
      ctx.emit("fullScreenChange", isScreenfull.value);
    }
  };
  watch(() => allSelected.value, (v) => {
    if (v) {
      return initSelectedStatus();
    }
    selectedColumns.value = [];
    ctx.emit("columnsSettingChange", []);
  }, {
    immediate: true
  });
  return () => {
    let _slot;
    return createVNode("div", {
      "class": "toolbar-container"
    }, [createVNode("div", {
      "class": "left"
    }, [title.value ? title.value : searchRender.value]), createVNode("div", {
      "class": "right"
    }, [title.value && searchRender.value, createVNode("div", {
      "class": "actions"
    }, [actionsRender.value]), toolbar.options && createVNode("div", {
      "class": "options"
    }, [createVNode(ElTooltip, {
      "content": "刷新",
      "placement": "top"
    }, {
      default: () => [createVNode(ElButton, {
        "class": "icon",
        "icon": RefreshRight,
        "circle": true,
        "onClick": () => ctx.emit("refresh")
      }, null)]
    }), toolbar.showSearchOption && createVNode(ElTooltip, {
      "content": "搜索栏显隐",
      "placement": "top"
    }, {
      default: () => [createVNode(ElButton, {
        "class": "icon",
        "icon": Search,
        "circle": true,
        "onClick": () => ctx.emit("searchDisplay")
      }, null)]
    }), createVNode(ElPopover, {
      "placement": "bottom",
      "width": 200,
      "trigger": "click",
      "popper-class": "columns-setting-popover",
      "popper-style": {
        padding: 0
      }
    }, {
      default: () => [createVNode("div", {
        "class": "columns-setting-popover-content"
      }, [createVNode("div", {
        "class": "head"
      }, [createVNode(ElCheckbox, {
        "modelValue": allSelected.value,
        "onUpdate:modelValue": ($event) => allSelected.value = $event
      }, {
        default: () => [createTextVNode("列展示")]
      }), createVNode("span", {
        "class": "reset-btn",
        "onClick": initSelectedStatus
      }, [createTextVNode("重置")])]), createVNode("div", {
        "class": "body"
      }, [createVNode(ElCheckboxGroup, {
        "modelValue": selectedColumns.value,
        "onUpdate:modelValue": ($event) => selectedColumns.value = $event,
        "onChange": onColumnsSettingChange
      }, _isSlot(_slot = columns.value.map((item, index) => createVNode("p", {
        "key": index
      }, [createVNode(ElCheckbox, {
        "label": item.id
      }, {
        default: () => [item.title]
      })]))) ? _slot : {
        default: () => [_slot]
      })])])],
      reference: () => createVNode("div", {
        "class": "icon",
        "style": "display: flex; align-items: center"
      }, [createVNode(ElTooltip, {
        "content": "列设置",
        "placement": "top"
      }, {
        default: () => [createVNode(ElButton, {
          "icon": Setting,
          "circle": true
        }, null)]
      })])
    }), createVNode(ElTooltip, {
      "content": isScreenfull.value ? "退出全屏" : "全屏",
      "placement": "top"
    }, {
      default: () => [createVNode(ElButton, {
        "class": "icon",
        "icon": FullScreen,
        "circle": true,
        "onClick": onFullScreen
      }, null)]
    })])])]);
  };
});
const ToolBar$1 = ToolBar;
export {
  ToolBar$1 as default
};
