import ProButton from "@element-plus-ui/pro-button";
import { isObject } from "@vueuse/core";
import { ElButton, ElTableColumn } from "element-plus";
import { DefineComponent, PropType, computed, defineComponent, inject } from "vue-demi";
import { ProField, ProFieldType } from "@element-plus-ui/pro-field";
import type { ProTableProps, TableColumn } from "../../typing";
import { enumTransformOptions, omitObjectProperty, pickObjectProperty, toUpperCase } from "@element-plus-ui/pro-utils";
import { ProText } from "@element-plus-ui/pro-text";

export const TableColumns = defineComponent(props => {
  const tableProps = inject("tableProps", {}) as ProTableProps & { ctx: Record<string, any> };

  const { ctx: tableCtx, cellEmptyText, cellAlign } = tableProps;

  /**
   * 是否开启省略号
   */
  const ellipsis = computed(() => {
    return (columns: TableColumn) => (columns.ellipsis != void 0 ? columns.ellipsis : tableProps.ellipsis);
  });

  /**
   * 格式化表格标头项筛选集合数据格式
   * @param column
   * @returns
   */
  const formatFiltersOption = (column: TableColumn) => {
    const { filters, valueEnum, mappingEnumValue } = column;
    if (!filters && !valueEnum) return;
    if (Array.isArray(filters)) return filters;
    const options = enumTransformOptions(valueEnum ?? [], mappingEnumValue).map(item => ({
      text: item.label,
      value: item.value
    }));
    return options.length ? options : void 0;
  };

  const renderActionContent = (e: any) => (
    <>
      <ElButton type="warning" size="small" onClick={() => tableCtx.emit("action", 0, e.row)}>
        编辑
      </ElButton>
      <ElButton type="primary" size="small" onClick={() => tableCtx.emit("action", 1, e.row)}>
        查看
      </ElButton>
      <ProButton
        type="danger"
        size="small"
        tip={{
          mode: "popconfirm",
          title: "确定要删除吗?"
        }}
        onClick={() => tableCtx.emit("action", 2, e.row)}
      >
        删除
      </ProButton>
    </>
  );

  /**
   * 渲染单元格内容
   * @param e
   * @param column
   * @returns
   */
  const renderCellContent = (e: any, column: TableColumn) => {
    const { valueType, prop, valueEnum, valueMark } = column;
    const type = toUpperCase(valueType ?? "") as ProFieldType;
    const Field = ProField[type];
    const emptyText = cellEmptyText || "--";
    const cellValue = e.row[prop ?? "none"];
    const proFieldProps = pickObjectProperty(column, ["valueEnum", "fieldProps"]);
    const isHasValEnum = (isObject(valueEnum) && Object.keys(valueEnum).length) || (Array.isArray(valueEnum) && valueEnum.length);
    if (prop && tableCtx.slots[prop]) {
      return tableCtx.slots[prop as string]?.(e.row);
    }
    if (typeof column.render === "function") {
      const val = column.render?.(e.row);
      return val || val === 0 ? val : emptyText;
    }
    if (column.type === "actions") {
      return renderActionContent(e);
    }
    if (!cellValue && cellValue !== 0) {
      return emptyText;
    }
    if (Field) {
      if (isHasValEnum) {
        return <ProField.Radio {...proFieldProps} marker={valueMark as any} mode="read" v-model={cellValue} />;
      }
      return <Field {...proFieldProps} mode="read" size={30} v-model={cellValue} />;
    }
    if (isHasValEnum) {
      return <ProField.Radio {...proFieldProps} marker={valueMark as any} mode="read" v-model={cellValue} />;
    }
    if (column.copyable === true || column.ellipsis === true) {
      return <ProText copyable={column.copyable ?? false} content={String(cellValue)} />;
    }
    return cellValue;
  };

  return () => (
    <>
      {(props.selection === true || isObject(props.selection)) && <ElTableColumn type={"selection"} width={55} />}
      {props.columns.map((column: TableColumn, index: number) => {
        const columnProps = omitObjectProperty(column, [
          "ellipsis",
          "copyable",
          "search",
          "valueType",
          "valueEnum",
          "valueMark",
          "children",
          "render"
        ]);
        return (
          <ElTableColumn
            {...(columnProps as any)}
            align={column.align || cellAlign}
            filters={formatFiltersOption(column)}
            show-overflow-tooltip={ellipsis.value(column)}
            key={column.columnKey || column.prop || index}
            v-slots={{
              default: (e: any) => (
                <>
                  {column.children && column.children.length ? (
                    <TableColumns columns={column.children} />
                  ) : (
                    renderCellContent(e, column)
                  )}
                </>
              )
            }}
          />
        );
      })}
    </>
  );
}) as DefineComponent<any>;

TableColumns.props = {
  selection: {
    type: [Boolean, Object] as PropType<boolean | Record<string, any>>
  },
  columns: {
    type: Array as PropType<TableColumn[]>
  }
};
