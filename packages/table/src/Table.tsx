import { ProDialogForm, ProSearchBar } from "@element-plus-ui/pro-form";
import { isObject } from "@vueuse/core";
import { ElPagination, ElTable, ElLoading } from "element-plus";
import { VueDraggable } from "vue-draggable-plus";
import { computed, DefineComponent, defineComponent, nextTick, ref, watch, watchEffect } from "vue-demi";
import { Alert, TableColumns, TableToolBar, Wrapper } from "./components";
import { elTableProps, GlobalSearchConfig, ProTableProps, proTableProps } from "./typing";
// import './fetch-mock';
import FileSaver from "file-saver";
import * as XLSX from "xlsx";
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
      formData,
      elTableRef,
      dialogOpen,
      searchEntity,
      selectedRows,
      searchColumns,
      tableColumns,
      dialogFormProps,
      searchBarDisplay,
      paginationAlignStyle,
      refresh,
      reload,
      onCreate,
      onSearch,
      onSearchIcon,
      clearSelected,
      onSettingChange,
      onSettingReset,
      onPaginationStateChange
    } = useTable(props, ctx);

    const isFullScreening = ref(false);

    const searchBarRef = ref();

    const loadingInstance = ref<Record<string, any>>({});

    const toolbarlabelRender = computed(() => ctx.slots.label || ctx.slots["label"]);

    const toOrdinaryObj = (proxyObj: any) => Object.fromEntries(Object.entries(proxyObj));

    const resetSearchFields = () => searchBarRef.value?.resetFields();

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
      () => loading.value,
      v => {
        searchBarRef.value.loading = v;
      }
    );

    // ref暴露
    ctx.expose({ loading, refresh, reload, clearSelected, resetSearchFields });

    interface IExportXlsx {
      eleById: string;
      title: string;
    }

    const exportToExcel = async (element: string | Array<IExportXlsx>, name?: string): Promise<Object> => {
      await nextTick();
      // 设置导出的内容是否只做解析，不进行格式转换 false：要解析， true:不解析
      const xlsxParam = { raw: true };
      let wb: XLSX.WorkBook;
      if (typeof element === "string") {
        // 导出单个表格
        wb = XLSX.utils.table_to_book(document.getElementById(element), xlsxParam);
      } else {
        // 遍历导出多个表格
        wb = XLSX.utils.book_new();
        element.forEach((item: IExportXlsx) =>
          XLSX.utils.book_append_sheet(
            wb,
            XLSX.utils.table_to_sheet(document.getElementById(item.eleById), xlsxParam),
            item.title
          )
        );
      }

      // 导出excel文件名
      const fileName: string = `${name || Date.now()}.xlsx`;

      const wbout = XLSX.write(wb, {
        bookType: "xlsx",
        bookSST: true,
        type: "array"
      });
      try {
        // 下载保存文件
        FileSaver.saveAs(
          new Blob([wbout], {
            type: "application/octet-stream"
          }),
          fileName
        );
      } catch (e) {
        console.log(e, wbout);
      }
      return wbout;
    };

    return () => {
      const searchProps = isObject(props.search) ? (props.search as GlobalSearchConfig) : {};
      return (
        <div id="pro-table" class="pro-table" style={isFullScreening.value ? { height: "100vh" } : { height: "100%" }}>
          <Wrapper
            v-show={searchBarDisplay.value === "block"}
            ghost={props.ghost || false}
            style={{ paddingBottom: 0, marginBottom: "20px" }}
          >
            {ctx.slots?.["search-bar"]?.(searchEntity.value) ?? (
              <ProSearchBar
                {...searchProps}
                ref={searchBarRef}
                columns={searchColumns.value as any}
                colProps={{
                  span: searchProps?.colSpan
                }}
                v-model={searchEntity.value}
                onSearch={() => {
                  onSearch();
                  exportToExcel("pro-table-element", "test");
                }}
                onCollapse={(collapse: boolean) => ctx.emit("collapse", collapse)}
              />
            )}
          </Wrapper>
          <Wrapper ghost={props.ghost || false}>
            <TableToolBar
              {...props?.toolbar}
              onCreate={onCreate}
              onSearch={refresh}
              onDargChange={data => onSettingChange(data.filter(item => item.id))}
              onRefreshIcon={refresh}
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
              <VueDraggable handle=".darg-icon" target="tbody" v-model={data.value.list} animation={150}>
                <ElTable
                  ref={elTableRef}
                  id="pro-table-element"
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
                  //onFilter-change={v => console.log(v, "测试")}
                  v-slots={{
                    default: () => <TableColumns columns={tableColumns.value} />,
                    ...ctx.slots
                  }}
                />
              </VueDraggable>
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
          </Wrapper>
          <ProDialogForm {...dialogFormProps.value} v-model={formData.value} v-model:open={dialogOpen.value} />
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
