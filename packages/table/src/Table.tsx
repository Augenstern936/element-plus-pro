import { ProSearchBar } from "@element-plus-ui/pro-form";
import { isObject } from "@vueuse/core";
import { ElPagination, ElTable, ElLoading } from "element-plus";
import type { DefineComponent } from "vue-demi";
import { computed, defineComponent, nextTick, ref, watch, watchEffect } from "vue-demi";
import { Alert, Card, TableColumns, ToolBar } from "./components";
import { elTableProps, GlobalSearchConfig, ProTableProps, proTableProps } from "./typing";
// import './fetch-mock';
import { useTable } from "./useTable";
import { pickObjectProperty } from "@element-plus-ui/pro-utils";

/**
 * 高级表格组件
 */
const ProTable = defineComponent<ProTableProps>(
  (props, ctx) => {
    const {
      data,
      params,
      loading,
      elTableRef,
      searchEntity,
      selectedRows,
      searchColumns,
      tableColumns,
      searchBarDisplay,
      paginationAlignStyle,
      refresh,
      reload,
      onSearch,
      onSearchIcon,
      clearSelected,
      onSettingChange,
      onSettingReset,
      onPaginationStateChange
    } = useTable(props, ctx);

    //const loading = ref(propsLoading);

    const isFullScreening = ref(false);

    const searchBarRef = ref();

    const loadingInstance = ref<Record<string, any>>({});

    const toolbarlabelRender = computed(() => {
      return ctx.slots.label || ctx.slots["label"];
    });

    const toOrdinaryObj = (proxyObj: any) => Object.fromEntries(Object.entries(proxyObj));

    const resetSearchFields = () => searchBarRef.value?.resetFields();

    // ref暴露
    ctx.expose({ loading, refresh, reload, clearSelected, resetSearchFields });

    watchEffect(() => {
      if (!loading.value || (props.data && props.loading === false)) {
        return nextTick(() => loadingInstance.value?.close?.());
      }
      nextTick(() => {
        loadingInstance.value = ElLoading.service({
          target: document.querySelector("#pro-table .el-table-container")
        });
      });
    });

    watch(
      () => tableColumns.value,
      v => {
        console.log(v, "v");
      },
      {
        deep: true
      }
    );

    return () => {
      const searchProps = isObject(props.search) ? (props.search as GlobalSearchConfig) : {};
      return (
        <div id="pro-table" class="pro-table" style={isFullScreening.value ? { height: "100vh", background: "#fff" } : {}}>
          <Card
            v-show={searchBarDisplay.value === "block"}
            ghost={props.ghost || false}
            style={{ paddingBottom: 0, marginBottom: "20px" }}
          >
            {ctx.slots?.["search-bar"]?.(searchEntity.value) ?? (
              <ProSearchBar
                ref={searchBarRef}
                {...searchProps}
                columns={searchColumns.value as any}
                colProps={{
                  span: searchProps?.colSpan
                }}
                v-model={searchEntity.value}
                onSearch={onSearch}
                onCollapse={(collapse: boolean) => ctx.emit("collapse", collapse)}
                // rightTools={searchBarTools.value}
                // v-slots={{
                // 	'right-tools': () => ctx.slots['search-bar-right-tools']?.({ ...searchEntity.value }),
                // }}
                // onTools={(i: number) => ctx.emit('tools', i)}
              />
            )}
          </Card>
          <Card ghost={props.ghost || false}>
            <ToolBar
              onSearchIcon={onSearchIcon}
              onSettingChange={onSettingChange}
              onSettingReset={onSettingReset}
              onFullScreenIcon={(v: boolean) => {
                isFullScreening.value = v;
              }}
              v-slots={{
                label: () => toolbarlabelRender.value?.({ selection: toOrdinaryObj(selectedRows.value) }),
                actions: () => ctx.slots.toolbar?.({ selection: toOrdinaryObj(selectedRows.value) })
              }}
            />
            <Alert count={selectedRows.value.length} onClose={clearSelected} />
            <div class={"el-table-container"} style={{ border: "1px solid transparent" }}>
              <ElTable
                ref={elTableRef}
                {...pickObjectProperty(props, Object.keys(elTableProps) as [])}
                header-cell-style={{
                  color: "#333",
                  fontWeight: 600,
                  background: "#f5f7fa",
                  ...props.headerCellStyle
                }}
                data={data.value.list}
                onSelection-change={rows => {
                  selectedRows.value = rows;
                  ctx.emit("selection-change", rows);
                }}
                v-slots={{
                  default: () => <TableColumns selection={props.selection} columns={tableColumns.value} />,
                  ...ctx.slots
                }}
              />
              {props.pagination !== false && data.value.total > 0 && (
                <div class="pagination-container" style={paginationAlignStyle.value}>
                  <ElPagination
                    v-model:current-page={params.value.current}
                    background={true}
                    total={data.value.total}
                    page-size={params.value.pageSize}
                    page-sizes={[10, 30, 50, 100, 200]}
                    layout="total, sizes, prev, pager, next, jumper"
                    {...(isObject(props.pagination) ? props.pagination : {})}
                    onUpdate:page-size={(e: number) => onPaginationStateChange("pageSize", e)}
                    onUpdate:current-page={(e: number) => onPaginationStateChange("current", e)}
                  />
                </div>
              )}
            </div>
          </Card>
        </div>
      );
    };
  },
  {
    name: "ProTable"
  }
) as DefineComponent<ProTableProps>;

ProTable.props = proTableProps;

export default ProTable;
