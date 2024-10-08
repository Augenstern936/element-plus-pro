import ProButton from "@element-plus-ui/pro-button";
import { Delete, DocumentCopy, Edit, Picture, Search, UserFilled, View } from "@element-plus/icons-vue";
import { isObject } from "@vueuse/core";
import { ElAvatar, ElButton, ElIcon, ElImage, ElProgress, ElRate, ElTableColumn, ElTooltip } from "element-plus";
import { FunctionalComponent, PropType, computed, defineComponent, inject } from "vue-demi";
import { ProField } from "@element-plus-ui/pro-field";
import type { ProTableProps, TableColumns, ValueType } from "../../typing";

const TableColumn = defineComponent(props => {
  const tableProps = inject("tableProps", {}) as ProTableProps & { ctx: Record<string, any> };

  const { ctx: tableCtx, columnEmptyText, cellAlign } = tableProps;

  /**
   * 是否开启省略号
   */
  const ellipsis = computed(() => {
    return (columns: TableColumns) => {
      if (columns.ellipsis != void 0) {
        return columns.ellipsis;
      }
      return tableProps.ellipsis;
    };
  });

  /**
   * 格式化表格标头项筛选集合数据格式
   * @param column
   * @returns
   */
  const formatFiltersOption = (column: TableColumns) => {
    const { filters, valueOption = [] } = column;
    if (filters === true) {
      if (valueOption?.length) {
        return valueOption.map((item: any) => ({ text: item.label || item.text, value: item.value }));
      }
    }
    if (Array.isArray(filters) && filters?.length) {
      return filters.map((item: any) => ({ text: item.label || item.text, value: item.value }));
    }
    return void 0;
  };

  const renderElementContent = (type: ValueType, data: any, e: any) => {
    const valNumber = Number(data);
    switch (type) {
      case "switch":
        return;
      case "image":
        return (
          <div class="cell-image">
            <ElImage
              src={data}
              preview-src-list={[data]}
              preview-teleported={true}
              fit="cover"
              style="height: 100%; display: flex; align-items: center; justify-content: center;"
              v-slots={{
                error: () => (
                  <ElIcon size={26}>
                    <Picture />
                  </ElIcon>
                )
              }}
            />
            <div class="mask-view">
              <ElIcon color="#fff">
                <View />
              </ElIcon>
            </div>
          </div>
        );
      case "avatar":
        return <ElAvatar src={data} size={30} icon={UserFilled} />;
      case "rate":
        const rate = Number.isNaN(valNumber) ? 0 : valNumber > 5 ? 5 : valNumber;
        return <ElRate modelValue={rate} size="large" disabled-void-color="#c0c4cc" allow-half disabled />;
      case "progress":
        const percentage = Number.isNaN(valNumber) ? 0 : valNumber > 100 ? 100 : valNumber;
        return <ElProgress percentage={percentage} style="flex: 1" />;
      case "tag":
        return;
      case "action":
        return renderActionContent(e);
      default:
        return data;
    }
  };

  const renderActionContent = (e: any) => (
    <>
      <ElTooltip content="编辑" placement="top" effect="dark">
        <ElButton type="warning" size="small" icon={Edit} onClick={() => tableCtx.emit("action", 0, e.row)} />
      </ElTooltip>
      <ElTooltip content="详情" placement="top" effect="dark">
        <ElButton type="primary" size="small" icon={Search} onClick={() => tableCtx.emit("action", 1, e.row)} />
      </ElTooltip>
      <ElTooltip content="删除" placement="top" effect="dark">
        <ProButton
          type="danger"
          size="small"
          icon={Delete}
          tip="确定要删除吗?"
          onClick={() => tableCtx.emit("action", 2, e.row)}
        />
      </ElTooltip>
    </>
  );

  // 渲染表格列内容
  const renderTableColumnContent = (e: { [x: string]: any }, column: TableColumns) => {
    const { dataField: field, valueType: type, valueEnum, valueEnumMark, tooltip, ellipsis, render } = column;

    if ((field && tableCtx.slots[field]) || (type && tableCtx.slots[type])) {
      const name = field || type;
      return tableCtx.slots[name as string]?.(e.row);
    }

    let tdValue = field ? e.row[field] : "-";

    if (type) {
      if (type == "index") {
        return void 0;
      }
      tdValue = renderElementContent(type, tdValue, e);
    }

    if (type === void 0 && valueEnum) {
      const key = field ? e.row[field] : "";
      const item = (valueEnum as any)[key] ?? "";
      tdValue = isObject(item) ? (
        <ProField.Radio v-model={key} mode="read" mark-shape={valueEnumMark || "disc"} valueEnum={valueEnum} />
      ) : (
        item
      );
    }
    // if (tooltip) {
    // 	tdValue = typeof tooltip === 'function' ? tooltip(e.row) : tooltip;
    // 	//tdValue = <el-tooltip placement="top" content={tips}>{ tdValue }</el-tooltip>
    // }
    // if(ellipsis){
    //     tdValue = <div class="ellipsis-container">{ tdValue }</div>
    // }

    let emptyText = "-";
    if (typeof columnEmptyText === "boolean") {
      emptyText = columnEmptyText ? "-" : "";
    } else {
      emptyText = columnEmptyText || emptyText;
    }

    const content = render?.(e.row) ?? tdValue;

    return content ? (
      <>
        {content}{" "}
        {column.copyable && (
          <ElIcon class="copyable">
            <DocumentCopy />
          </ElIcon>
        )}
      </>
    ) : (
      emptyText
    );
  };

  return () => (
    <>
      {(props.selection === true || isObject(props.selection)) && <ElTableColumn type={"selection"} width={55} />}
      {props.columns.map((column: TableColumns) => (
        <ElTableColumn
          prop={column.dataField}
          label={column.title}
          type={column.valueType}
          sortable={column.sorter}
          width={column.width || "auto"}
          align={column.align || cellAlign}
          fixed={column.fixed}
          filters={formatFiltersOption(column)}
          show-overflow-tooltip={ellipsis.value(column)}
          key={column.dataField}
        >
          {(e: any) =>
            column.children && column.children.length ? (
              <TableColumn columns={column.children} />
            ) : (
              renderTableColumnContent(e, column)
            )
          }
        </ElTableColumn>
      ))}
    </>
  );
}) as unknown as FunctionalComponent<any>;

TableColumn.props = {
  selection: {
    type: [Boolean, Object] as PropType<boolean | Record<string, any>>
  },
  columns: {
    type: Array as PropType<TableColumns[]>
  }
};

export default TableColumn;
