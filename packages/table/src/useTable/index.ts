import { v4 as uuidv4 } from "uuid";
import { computed, provide, ref, SetupContext, watch } from "vue-demi";
import { ProTableProps, TableColumn } from "../typing";
import { isObject } from "@vueuse/core";
import { formatSearchColumnConfig, isEmptyObj, mergePaginationParams } from "./util";
import { ElMessage } from "element-plus";

export const useTable = (props: ProTableProps, ctx: SetupContext) => {
  const isUpdateColumns = ref(false);

  const loading = ref(false);

  const elTableRef = ref();

  const selectedRows = ref([]);

  const searchEntity = ref({});

  const searchBarDisplay = ref<"none" | "block">("block");

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
   * 原始列
   */
  const originColumns = computed(() => {
    const filterColumns = props.columns?.filter((item: TableColumn) => !item.hideInTable) ?? [];
    return filterColumns.map(item => ({ ...item, id: uuidv4(), name: item.prop }));
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
    const isShowUndefinedItem = props.search || props.search === void 0 ? void 0 : true;
    return originColumns.value
      .map((item: TableColumn) => {
        const { type, valueType, search } = item;
        const excludeType = ["default", "index", "expand", "selection", "actions"].includes(type || "none");
        const excludeValType = ["uploadImage", "uploadAvatar"].includes(valueType || "none");
        if (!excludeType && !excludeValType && (search || search === isShowUndefinedItem)) {
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
        setTimeout(() => {
          loading.value = false;
        }, 3000);
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
    settingSelectedColumns.value = originColumns.value.filter(item => ids.includes(item.id) || item?.type == "selection");
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

  provide("toolbar", {
    title: props.title,
    options: props.options,
    columns: originColumns.value,
    showSearchOption: searchColumns.value.length ? true : false,
    config: props.toolbar
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
  watch(
    () => [params.value, props.data],
    () => {
      loadData();
    },
    { deep: true, immediate: true }
  );

  return {
    data,
    params,
    loading,
    elTableRef,
    searchEntity,
    selectedRows,
    tableColumns,
    searchColumns,
    searchBarDisplay,
    paginationAlignStyle,
    reload,
    refresh,
    request,
    clearSelected,
    onSearch,
    onSearchIcon,
    onSettingChange,
    onSettingReset,
    onPaginationStateChange
  };
};
