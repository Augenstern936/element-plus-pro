/*
 * @Description:
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2024-12-14 19:08:13
 * @LastEditTime: 2025-01-07 16:31:18
 */
import { isObject } from "@vueuse/core";
import { ElTableColumn } from "element-plus";
import { DefineComponent, PropType, defineComponent } from "vue-demi";
import { ProField, ProFieldType } from "@element-plus-ui/pro-field";
import type { TableColumn } from "../../typing";
import { pickObjectProperty, toUpperCase } from "@element-plus-ui/pro-utils";
import { ProText } from "@element-plus-ui/pro-text";
import { useTableColumns } from "./useTableColumns";
import { DragIcon } from "../DragIcon";

export const TableColumns = defineComponent(props => {
  const { tableProps, getElTableColumnProps } = useTableColumns();

  const { ctx: tableCtx, cellEmptyText } = tableProps;

  /**
   * 渲染单元格内容
   * @param e
   * @param column
   * @returns
   */
  const renderCellContent = (e: any, column: TableColumn) => {
    const { type: valueType, prop, valueEnum, valueMark } = column;
    if (valueType === "dargSort") {
      return <DragIcon />;
    }
    const type = toUpperCase(valueType ?? "") as ProFieldType;
    const Field = ProField[type];
    const emptyText = cellEmptyText || "--";
    const cellValue = e.row[prop ?? "none"];
    const proFieldProps = pickObjectProperty(column, ["valueEnum", "fieldProps"]);
    const isHasValEnum =
      (isObject(valueEnum) && Object.keys(valueEnum).length > 0) || (Array.isArray(valueEnum) && valueEnum.length > 0);
    if (prop && tableCtx.slots[prop]) {
      return tableCtx.slots[prop as string]?.(e.row);
    }
    if (typeof column.render === "function") {
      const val = column.render?.(e.row);
      return val || val === 0 ? val : emptyText;
    }
    if (Field) {
      return isHasValEnum ? (
        <ProField.Radio {...proFieldProps} marker={valueMark as any} mode="read" v-model={cellValue} />
      ) : (
        <Field {...proFieldProps} mode="read" size={30} v-model={cellValue} />
      );
    }
    if (isHasValEnum) {
      return <ProField.Radio {...proFieldProps} marker={valueMark as any} mode="read" v-model={cellValue} />;
    }
    if (!cellValue && cellValue !== 0) {
      return emptyText;
    }
    return <ProText copyable={column.copyable ?? false} truncated={column.ellipsis} content={String(cellValue)} />;
  };

  return () => (
    <>
      {props?.columns?.map((column: TableColumn, index: number) => {
        const slots = {
          default: (e: any) => (
            <>
              {column.children && column.children.length ? (
                <TableColumns columns={column.children} />
              ) : (
                renderCellContent(e, column)
              )}
            </>
          )
        };
        const width = ["index", "expand", "dargSort"].includes(column.type || "none") ? (column.width ?? 48) : column.width;
        return (
          <ElTableColumn
            {...getElTableColumnProps(column)}
            key={column.columnKey || column.prop || index}
            width={width}
            v-slots={["selection", "index"].includes(column.type ?? "none") ? {} : slots}
          />
        );
      })}
    </>
  );
}) as DefineComponent<any>;

TableColumns.props = {
  columns: {
    type: Array as PropType<TableColumn[]>
  }
};
