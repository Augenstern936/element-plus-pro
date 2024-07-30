/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-04-11 22:26:41
 * @LastEditTime: 2024-07-27 19:11:34
 * @FilePath: \element-plus-pro\packages\form\src\layouts\SearchBar\typing.ts
 */
import type { ProButtonProps } from "@element-plus-pro/button";
import type { ExtractPropTypes, PropType } from "vue-demi";
import { ProFormColumns } from "../../core";
import { ProFormLayout } from "../../typing";

export const proSearchBarProps = {
  modelValue: {
    type: Object as PropType<Record<string, string | number | boolean | (string | number)[]>>
  },
  columns: {
    type: Array as PropType<ProFormColumns[]>,
    default: []
  },
  layout: {
    type: String as PropType<ProFormLayout>,
    default: "inline"
  },
  searchButton: {
    type: [Object, Boolean] as PropType<ProButtonProps | boolean>,
    default: true
  },
  resetButton: {
    type: [Object, Boolean] as PropType<ProButtonProps | boolean>,
    default: true
  },
  searchButtonTitle: {
    type: String
  },
  resetButtonTitle: {
    type: String
  },
  submitter: {
    type: [Array, Function] as PropType<ProButtonProps[] | (() => JSX.Element)>,
    default: void 0
  },
  collapsed: {
    type: Boolean,
    default: void 0
  },
  defaultCollapsed: {
    type: Boolean
  },
  defaultColsNumber: {
    type: Number
  },
  colSpan: {
    type: Number
  },
  preserve: {
    type: Boolean
  },
  searchBefore: {
    type: Function as PropType<(model: Record<string, any>) => Record<string, any>>
  },
  extraTools: {
    type: [Array, Function] as PropType<ProButtonProps[] | (() => JSX.Element)>,
    default: void 0
  }
};

export type ProSearchBarColumn = {
  label?: string;
  type?: string;
};

export type ProSearchBarProps = Partial<ExtractPropTypes<typeof proSearchBarProps>>;
