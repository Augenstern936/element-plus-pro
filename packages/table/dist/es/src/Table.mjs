import { defineComponent, ref, computed, provide, watch, createVNode, withDirectives, vShow, Fragment, createTextVNode, KeepAlive } from "vue";
import ProSearchBar from "@element-plus/pro-search-bar";
import { withInstall, toOptions } from "@element-plus/pro-utils";
import { ElAlert, ElMessage, ElTable, ElPagination } from "element-plus";
import "./style/index.scss.mjs";
import { proTableProps } from "./typing.mjs";
import v4 from "../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.mjs";
import Card from "./components/Card/index.mjs";
import ToolBar from "./components/ToolBar/index.mjs";
import TableColumn from "./components/TableColumn/index.mjs";
const ProTable = /* @__PURE__ */ defineComponent((props, ctx) => {
  const {
    loading: propsLoading,
    search: globalSearch,
    keepAlive,
    columns,
    params: propsParams,
    defaultSize: propsDefaultSize,
    pagination: propsPagination,
    dataSource,
    request: getDataSource
  } = props;
  const loading = ref(propsLoading);
  const isFullScreening = ref(false);
  const searchForm = ref({});
  const searchBarRef = ref();
  const multipleTableRef = ref();
  const multipleSelection = ref([]);
  const searchDisplay = ref("block");
  const data = ref({
    data: [],
    total: 0
  });
  const params = ref({
    current: 1,
    pageSize: propsDefaultSize || 10
  });
  const settingTableColumns = ref([]);
  const isColumnsSettingChange = ref(false);
  const searchBarTools = computed(() => {
    var _a;
    return typeof props.search == "object" ? ((_a = props.search) == null ? void 0 : _a.rightTools) || [] : void 0;
  });
  const toolbarTitleRender = computed(() => {
    return ctx.slots.title || ctx.slots["title"];
  });
  const tableColumns = computed(() => {
    var _a;
    const filterColumns = (_a = props.columns) == null ? void 0 : _a.filter((item) => !item.hideInTable);
    return filterColumns.map((item) => ({
      ...item,
      id: v4(),
      name: item.dataField
    }));
  });
  const renderTableColumns = computed(() => {
    return isColumnsSettingChange.value ? settingTableColumns.value : tableColumns.value;
  });
  const paginationAlignStyle = computed(() => {
    var _a;
    const align = typeof (props == null ? void 0 : props.pagination) === "object" ? (_a = props == null ? void 0 : props.pagination) == null ? void 0 : _a.align : "right";
    return {
      display: "flex",
      justifyContent: align || "right"
    };
  });
  const searchFormItems = computed(() => {
    const isShowUndefinedItem = globalSearch || globalSearch === void 0 ? void 0 : true;
    return columns.map((item) => {
      const {
        valueType,
        search
      } = item;
      const exclude = valueType != "index" && valueType != "image" && valueType != "avatar" && valueType != "tag" && valueType != "action";
      if (exclude && (search || search === isShowUndefinedItem)) {
        return formatSearchFormItemsConfig(item);
      }
    }).filter((item) => item);
  });
  const toOrdinaryObj = (proxyObj) => Object.fromEntries(Object.entries(proxyObj));
  const formatSearchFormItemsConfig = (tableColumn) => {
    const {
      dataField = "",
      title,
      valueType,
      valueEnum
    } = tableColumn;
    const columnSearchConfig = typeof tableColumn.search === "object" ? tableColumn.search : {};
    const globalSearchConfig = typeof globalSearch === "object" ? globalSearch : {};
    return {
      label: title,
      dataField,
      valueType,
      valueOptions: valueEnum ? toOptions(valueEnum) : void 0,
      ...globalSearchConfig,
      ...columnSearchConfig
    };
  };
  const mergePaginationParams = (defaultPage, ...pages) => {
    let params2 = {
      ...defaultPage
    };
    if (pages.length) {
      pages.forEach((item) => {
        if (typeof item === "object" && (item.current || item.pageSize)) {
          params2 = {
            ...params2,
            ...item
          };
        }
      });
    }
    return {
      current: params2.current,
      pageSize: params2.pageSize
    };
  };
  const sendRequest = async (otherFilterParams = {}) => {
    if (getDataSource && typeof getDataSource === "function" && !loading.value) {
      try {
        loading.value = true;
        const pageParams = mergePaginationParams(params.value);
        const filterParams = {
          ...params.value
        };
        delete filterParams.current;
        delete filterParams.pageSize;
        data.value = await getDataSource(pageParams, {
          ...searchForm.value,
          ...filterParams,
          ...otherFilterParams
        });
      } catch (err) {
        console.warn(err);
      } finally {
        loading.value = false;
      }
    }
  };
  const refresh = (otherParams = {}) => {
    const {
      current,
      pageSize
    } = mergePaginationParams(params.value, propsParams, propsPagination);
    if (current == params.value.current && params.value.pageSize == pageSize) {
      return sendRequest(otherParams);
    }
    params.value.current = current;
    params.value.pageSize = pageSize;
  };
  const reload = (otherParams = {}) => {
    if (!dataSource) {
      sendRequest(otherParams);
    }
  };
  const clearSelected = () => {
    multipleTableRef.value.clearSelection();
  };
  const isEmptyObj = (obj = {}) => {
    const keys = Object.keys(obj);
    if (!keys.length)
      return true;
    let count = 0;
    keys.forEach((key) => {
      if (!obj[key])
        ++count;
    });
    return keys.length === count;
  };
  const onSearch = () => {
    console.log(searchForm.value, "searchForm.value");
    const isEmpty = isEmptyObj(searchForm.value);
    if (isEmpty) {
      return ElMessage.warning("筛选栏表单信息为空");
    }
    sendRequest();
  };
  const onSearchDisplay = () => {
    if (searchFormItems.value.length) {
      searchDisplay.value = searchDisplay.value === "block" ? "none" : "block";
    }
  };
  const onColumnsSettingChange = (ids) => {
    settingTableColumns.value = tableColumns.value.filter((column) => ids.includes(column.id) || column.type == "selection");
    isColumnsSettingChange.value = true;
  };
  const onColumnsSettingReset = () => {
    settingTableColumns.value = [];
    isColumnsSettingChange.value = false;
  };
  const onSelectionChange = (vals) => {
    multipleSelection.value = vals;
  };
  const onPageChange = (name, value) => {
    const pageParams = mergePaginationParams(params.value);
    if (dataSource) {
      return ctx.emit("pageChange", {
        ...pageParams,
        [name]: value
      });
    }
    params.value[name] = value;
  };
  const resetSearchFields = () => {
    var _a;
    return (_a = searchBarRef.value) == null ? void 0 : _a.resetFields();
  };
  const RenderTable = () => createVNode("div", {
    "style": {
      border: "1px solid transparent"
    }
  }, [createVNode(ElTable, {
    "ref": multipleTableRef,
    "data": data.value.data,
    "header-cell-style": {
      color: "#333",
      fontWeight: 600,
      background: "#f5f7fa",
      ...props.headerCellStyle
    },
    "onSelection-change": onSelectionChange
  }, {
    default: () => [createVNode(TableColumn, {
      "columns": renderTableColumns.value
    }, null)]
  }), propsPagination !== false && data.value.total > 0 && createVNode("div", {
    "class": "pagination-container",
    "style": paginationAlignStyle.value
  }, [createVNode(ElPagination, {
    "current-page": params.value.current,
    "onUpdate:current-page": [($event) => params.value.current = $event, (e) => onPageChange("current", e)],
    "background": true,
    "total": data.value.total,
    "page-size": params.value.pageSize,
    "page-sizes": [10, 30, 50, 100, 200],
    "layout": "total, sizes, prev, pager, next, jumper",
    "onUpdate:page-size": (e) => onPageChange("pageSize", e)
  }, null)])]);
  const loadData = () => {
    if (dataSource && Array.isArray(dataSource)) {
      data.value.data = [...dataSource];
    } else {
      sendRequest();
    }
  };
  provide("tableProps", {
    ctx,
    ...props,
    columns: renderTableColumns.value
  });
  provide("toolbar", {
    title: props.title,
    options: props.options,
    columns: tableColumns.value,
    showSearchOption: searchFormItems.value.length ? true : false,
    config: props.toolbar
  });
  watch(() => props.loading, (newVal) => {
    loading.value = newVal;
  });
  watch(() => [props.defaultSize, props.params, props.pagination], (newVals) => {
    params.value = mergePaginationParams({
      ...params.value,
      pageSize: newVals[0]
    }, newVals[1], newVals[2]);
  }, {
    deep: true,
    immediate: true
  });
  watch(() => [params.value, props.dataSource], () => {
    loadData();
  }, {
    deep: true,
    immediate: true
  });
  ctx.expose({
    loading,
    refresh,
    reload,
    clearSelected,
    resetSearchFields
  });
  return () => createVNode("div", {
    "id": "pro-table",
    "class": "pro-table",
    "style": isFullScreening.value ? {
      height: "100vh",
      background: "#fff"
    } : {}
  }, [withDirectives(createVNode(Card, {
    "ghost": props.ghost || false,
    "style": {
      paddingBottom: 0,
      marginBottom: "20px"
    }
  }, {
    default: () => [createVNode(ProSearchBar, {
      "ref": searchBarRef,
      "modelValue": searchForm.value,
      "onUpdate:modelValue": ($event) => searchForm.value = $event,
      "items": searchFormItems.value,
      "rightTools": searchBarTools.value,
      "inline": typeof globalSearch === "object" ? (globalSearch == null ? void 0 : globalSearch.inline) === void 0 ? true : globalSearch.inline : true,
      "onSearch": onSearch,
      "onTools": (i) => ctx.emit("tools", i)
    }, {
      "right-tools": () => {
        var _a, _b;
        return (_b = (_a = ctx.slots)["search-bar-right-tools"]) == null ? void 0 : _b.call(_a, {
          ...searchForm.value
        });
      }
    })]
  }), [[vShow, searchDisplay.value === "block"]]), createVNode(Card, {
    "ghost": props.ghost || false
  }, {
    default: () => [createVNode(ToolBar, {
      "onSearchDisplay": onSearchDisplay,
      "onColumnsSettingChange": onColumnsSettingChange,
      "onColumnsSettingReset": onColumnsSettingReset,
      "onFullScreenChange": (v) => {
        isFullScreening.value = v;
      }
    }, {
      title: () => {
        var _a;
        return (_a = toolbarTitleRender.value) == null ? void 0 : _a.call(toolbarTitleRender, {
          selection: toOrdinaryObj(multipleSelection.value)
        });
      },
      actions: () => {
        var _a, _b;
        return (_b = (_a = ctx.slots).toolbar) == null ? void 0 : _b.call(_a, {
          selection: toOrdinaryObj(multipleSelection.value)
        });
      }
    }), multipleSelection.value.length > 0 && createVNode(ElAlert, {
      "type": "info",
      "close-text": "取消选择",
      "style": {
        marginBottom: "20px",
        backgroundColor: "#f5f7fa"
      },
      "onClose": clearSelected
    }, {
      title: () => createVNode(Fragment, null, [createTextVNode("已选择 "), createVNode("span", {
        "class": "alert-count"
      }, [multipleSelection.value.length]), createTextVNode(" 项")])
    }), !keepAlive ? RenderTable() : createVNode(KeepAlive, null, [RenderTable()])]
  })]);
}, {
  name: "ProTable"
});
ProTable.props = proTableProps;
const ProTable$1 = withInstall(ProTable);
export {
  ProTable$1 as default
};
