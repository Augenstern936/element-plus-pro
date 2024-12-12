/*
 * @Description:
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2024-12-12 23:01:02
 * @LastEditTime: 2024-12-12 23:40:54
 */
import { enumTransformOptions, omitObjectProperty } from "@element-plus-ui/pro-utils";
import { ProTableProps, TableColumn, ElTableColumnProps } from "../../typing";
import { inject } from "vue-demi";

export const useTableColumns = () => {
  const tableProps = inject("tableProps", {}) as ProTableProps & { ctx: Record<string, any> };

  const getElTableColumnType = (column: TableColumn) => {
    const types = ["default", "selection", "index", "expand"];
    return column.type && types.includes(column.type) ? column.type : "default";
  };

  /**
   * 格式化表格标头项筛选集合数据格式
   * @param column
   * @returns
   */
  const getFormatFiltersOption = (column: TableColumn) => {
    const { filters, valueEnum, mappingEnumValue } = column;
    if (!filters && !valueEnum) return;
    if (Array.isArray(filters)) return filters;
    const options = enumTransformOptions(valueEnum ?? [], mappingEnumValue).map(item => ({
      text: item.label,
      value: item.value
    }));
    return options.length ? options : void 0;
  };

  const getElTableColumnProps = (column: TableColumn) => {
    const columnProps = omitObjectProperty(column, [
      "ellipsis",
      "copyable",
      "search",
      "valueEnum",
      "valueMark",
      "children",
      "render"
    ]);

    return {
      ...(columnProps as any),
      type: getElTableColumnType(column) as any,
      filters: getFormatFiltersOption(column) as [] | never,
      align: column.align || tableProps.cellAlign,
      showOverflowTooltip: column.ellipsis != void 0 ? column.ellipsis : tableProps.ellipsis
    };
  };

  return {
    tableProps,
    getElTableColumnProps
  };
};
