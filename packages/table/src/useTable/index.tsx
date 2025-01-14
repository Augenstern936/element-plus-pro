import { v4 as uuidv4 } from "uuid";
import { computed, provide, ref, SetupContext, watch } from "vue-demi";
import { CrudConfig, ProTableProps, TableColumn } from "../typing";
import { isObject } from "@vueuse/core";
import { formatSearchColumnConfig, isEmptyObj, mergePaginationParams } from "./util";
import { ElMessage, ElSpace } from "element-plus";
import ProButton, { ProButtonProps } from "@element-plus-ui/pro-button";
import { ProDialogFormProps } from "@element-plus-ui/pro-form";

const elTableColumnTypes = ["index", "expand", "selection"];

export const useTable = (props: ProTableProps, ctx: SetupContext) => {
  const loading = ref(false);

  const dialogOpen = ref(false);

  const isUpdateColumns = ref(false);

  const elTableRef = ref();

  const selectedRows = ref([]);

  const searchEntity = ref({});

  const formData = ref({});

  const searchBarDisplay = ref<"none" | "block">("block");

  const action = ref<"create" | "read" | "update">("create");

  /**
   *设置框目前选中的列
   */
  const settingSelectedColumns = ref<TableColumn[]>([]);

  const data = ref<{ total: number; list: any[] }>({
    list: [],
    total: 0
  });

  const params = ref({
    current: 1,
    pageSize: 10
  });

  /**
   * 当前弹框表单模板Props
   */
  const dialogFormProps = computed(() => {
    const { create, update, read } = getCrudButtonProps(props.crud, formData.value) as Record<string, any>;
    const column = isObject(props.crud) ? props.crud : {};
    const configs = {
      create: {
        title: create.title || column?.texts?.[0] || "创建",
        columns: formColumns.value,
        dialogProps: { alignCenter: true }
      },
      update: {
        title: update.title || column?.texts?.[2] || "编辑",
        columns: formColumns.value,
        dialogProps: { alignCenter: true }
      },
      read: {
        title: read.title || column?.texts?.[1] || "查看",
        columns: descriptionsColumns.value,
        readonly: true,
        dialogProps: { minWidth: "20vw", alignCenter: true }
      }
    };
    return (configs[action.value] as ProDialogFormProps) ?? {};
  });

  /**
   * 原始列
   */
  const originColumns = computed(() => {
    const filterColumns = props.columns?.filter((item: TableColumn) => !item.hideInTable) ?? [];
    const newColumns = filterColumns.map(item => ({ ...item, id: uuidv4(), name: item.prop }));
    if (props.crud !== false) {
      const column = isObject(props.crud) ? props.crud : {};
      return [
        ...newColumns,
        {
          label: "操作",
          width: props.size === "large" ? 260 : 220,
          fixed: "right",
          hideInTable: false,
          ...column,
          id: uuidv4(),
          render: (row: Record<string, any>) => {
            const { update, read, delete: del } = getCrudButtonProps(props.crud, row) as Record<string, false | ProButtonProps>;
            if (update === false && read === false && del === false) return null;
            const size = props.size === "large" ? "default" : "small";
            return (
              <ElSpace>
                {update !== false && (
                  <ProButton
                    type="warning"
                    size={size}
                    {...update}
                    title={update.title || column?.texts?.[2] || "编辑"}
                    onClick={() => {
                      formData.value = row;
                      action.value = "update";
                      return typeof column.onUpdate === "function" ? column.onUpdate(row, { open: openDialog }) : openDialog();
                    }}
                  />
                )}
                {read !== false && (
                  <ProButton
                    type="primary"
                    size={size}
                    {...read}
                    title={read.title || column?.texts?.[1] || "查看"}
                    onClick={() => {
                      formData.value = row;
                      action.value = "read";
                      return typeof column.onRead === "function" ? column.onRead(row, { open: openDialog }) : openDialog();
                    }}
                  />
                )}
                {del !== false && (
                  <ProButton
                    type="danger"
                    size={size}
                    tip={{ mode: "popconfirm", title: "确定要删除吗?" }}
                    {...del}
                    title={del.title || column?.texts?.[3] || "删除"}
                    onClick={() => column.onDeleteConfirm?.(row)}
                  />
                )}
              </ElSpace>
            );
          }
        }
      ];
    }
    return newColumns;
  });

  /**
   * 表单列集合
   */
  const formColumns = computed(() => {
    if (!props.columns) return [];
    return props?.columns
      ?.filter((item: TableColumn) => {
        const isHas = elTableColumnTypes.includes(item.type || "none");
        return !item.hideInForm && !isHas;
      })
      .map(item => ({
        ...item,
        valueType: item.type
      }));
  });

  /**
   * 描述列集合
   */
  const descriptionsColumns = computed(() => {
    if (!props.columns) return [];
    return props?.columns?.filter(
      (item: TableColumn) => !item.hideInDescriptions && !elTableColumnTypes.includes(item.type || "none")
    );
  });

  /**
   * 当前表格列
   */
  const tableColumns = computed(() => {
    return isUpdateColumns.value ? settingSelectedColumns.value : originColumns.value;
  });

  /**
   * 筛选表单项集合
   */
  const searchColumns = computed(() => {
    if (!Array.isArray(props.columns)) return [];
    const isShowUndefinedItem = props.search || props.search === void 0 ? void 0 : true;
    return props.columns
      .map((item: any) => {
        const { type, search } = item;
        const excludeType = [...elTableColumnTypes, "uploadImage", "uploadAvatar"].includes(type || "none");
        if (!excludeType && (search || search === isShowUndefinedItem)) {
          return formatSearchColumnConfig(item, props.search);
        }
      })
      .filter(item => item);
  });

  /**
   * 分页器水平排列位置样式
   */
  const paginationAlignStyle = computed(() => {
    const align = isObject(props?.pagination) ? props.pagination.align : "right";
    return {
      display: "flex",
      justifyContent: align || "right"
    };
  });

  /**
   * 获取crud按钮配置
   * @param config
   * @param row
   * @returns
   */
  const getCrudButtonProps = (
    crud: boolean | CrudConfig = {},
    row: Record<string, any>
  ): Record<"create" | "read" | "update" | "delete", boolean | ProButtonProps> => {
    const formatConfig = (button?: boolean | ProButtonProps | Function): boolean | ProButtonProps => {
      if (button === void 0) return {};
      if (typeof button === "function") {
        const result = button(row);
        return isObject(result) || result === false ? result : {};
      }
      return isObject(button) || button === false ? button : {};
    };
    return {
      create: isObject(crud) ? formatConfig(crud.createButton) : {},
      read: isObject(crud) ? formatConfig(crud.readButton) : {},
      update: isObject(crud) ? formatConfig(crud.updateButton) : {},
      delete: isObject(crud) ? formatConfig(crud.deleteButton) : {}
    };
  };

  const onCreate = () => {
    const crud = isObject(props.crud) ? props.crud : {};
    action.value = "create";
    formData.value = {};
    if (typeof crud?.onCreate === "function") {
      return crud?.onCreate?.({ open: openDialog });
    }
    openDialog();
  };

  const openDialog = () => {
    dialogOpen.value = true;
  };

  const closeDialog = () => {
    dialogOpen.value = false;
  };

  /**
   * 发起请求获取数据
   * @param otherFilterParams
   */
  const request = async (otherFilterParams = {}) => {
    // const value = (await mockRequest()) as any;
    // data.value = value;
    if (typeof props.request === "function" && !loading.value) {
      try {
        loading.value = true;
        const pageParams = mergePaginationParams(params.value);
        const filterParams = { ...params.value } as Record<string, number>;
        delete filterParams.current;
        delete filterParams.pageSize;
        data.value = await props.request(pageParams, {
          ...searchEntity.value,
          ...filterParams,
          ...otherFilterParams
        });
      } catch (err: any) {
        console.warn(err);
      } finally {
        loading.value = false;
      }
    }
  };

  /**
   * 刷新(重置到最初状态)
   * @param otherParams
   * @returns
   */
  const refresh = (otherParams = {}) => {
    const { current, pageSize } = mergePaginationParams(params.value, props.params, props.pagination);
    if (current == params.value.current && params.value.pageSize == pageSize) {
      return request(otherParams);
    }
    params.value.current = current;
    params.value.pageSize = pageSize;
  };

  /**
   * 重新加载当前页数据
   * @param otherParams
   */
  const reload = (otherParams = {}) => {
    if (!props.data) return;
    request(otherParams);
  };

  /**
   * 加载数据(data优先级最高)
   */
  const loadData = () => {
    if (props.data && Array.isArray(props.data)) {
      data.value.list = props.data;
    } else {
      request();
    }
  };

  /**
   * 清空选中项
   */
  const clearSelected = () => elTableRef.value!.clearSelection();

  /**
   * 监听分页参数变化
   * @param current
   */
  const onPaginationStateChange = (name: "current" | "pageSize", value: number) => {
    const pageParams = mergePaginationParams(params.value);
    if (props.data) {
      return ctx.emit("pageChange", { ...pageParams, [name]: value });
    }
    params.value[name] = value;
  };

  /**
   * 监听搜索
   */
  const onSearch = () => {
    const isEmpty = isEmptyObj(searchEntity.value);
    if (isEmpty) {
      return ElMessage.warning("筛选栏表单信息为空");
    }
    if (isObject(props.search) && typeof props.search?.searchBefore === "function") {
      const params = props.search.searchBefore(searchEntity.value);
      return request(params);
    }
    request();
  };

  /**
   * 监听搜索图标事件
   * @returns
   */
  const onSearchIcon = () => {
    if (!searchColumns.value.length) return;
    searchBarDisplay.value = searchBarDisplay.value === "block" ? "none" : "block";
  };

  /**
   * 列设置变化
   * @param ids
   */
  const onSettingChange = (ids: string[]) => {
    settingSelectedColumns.value = originColumns.value.filter(
      item => ids.includes(item.id) || item?.type == "selection"
    ) as TableColumn[];
    isUpdateColumns.value = true;
  };

  /**
   * 列设置重置
   */
  const onSettingReset = () => {
    settingSelectedColumns.value = [];
    isUpdateColumns.value = false;
  };

  provide("tableProps", {
    ctx,
    ...props,
    columns: originColumns.value
  });

  provide("global", {
    loading: loading.value,
    title: props.title,
    options: props.options,
    columns: originColumns.value,
    formColumns: formColumns.value,
    showSearchOption: searchColumns.value.length ? true : false,
    config: props.toolbar,
    crud: props.crud
  });

  /**
   * 参数发生变化更新page
   */
  watch(
    () => [props.params, props.pagination],
    (newVals: any) => {
      params.value = mergePaginationParams({ ...params.value, pageSize: newVals[0] }, newVals[1], newVals[2]);
    },
    { deep: true, immediate: true }
  );

  /**
   * params, data参数发生变化重新更新数据
   */
  watch(() => [params.value, props.data], loadData, { deep: true, immediate: true });

  return {
    data,
    params,
    loading,
    formData,
    elTableRef,
    dialogOpen,
    searchEntity,
    selectedRows,
    tableColumns,
    searchColumns,
    dialogFormProps,
    searchBarDisplay,
    paginationAlignStyle,
    reload,
    refresh,
    request,
    openDialog,
    closeDialog,
    clearSelected,
    onCreate,
    onSearch,
    onSearchIcon,
    onSettingChange,
    onSettingReset,
    onPaginationStateChange
  };
};
