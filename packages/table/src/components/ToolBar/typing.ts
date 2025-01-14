/*
 * @Description:
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2024-12-19 16:51:35
 * @LastEditTime: 2025-01-06 17:27:41
 */
import { PropType, VNode, ExtractPropTypes } from "vue-demi";
import { ProButtonProps } from "@element-plus-ui/pro-button";
import { MenuProps } from "./Menu";

export const tableToolbarProps = {
  title: {
    type: [String, Object] as PropType<ToolBarTitle>
  },
  menu: {
    type: Object as PropType<MenuProps>,
    default: {}
  },
  search: {
    type: [Boolean, Object] as PropType<ToolbarSearch>
  },
  actions: {
    type: [Object, Array] as PropType<VNode | Array<ProButtonProps>>,
    default: []
  },
  options: {
    type: [Boolean, Object] as PropType<boolean | ToolBarOptions>
  }
};

export type ToolBarTitle =
  | string
  | {
      text: string;
      tooltip?: string;
    };

export type ToolbarSearch =
  | boolean
  | {
      placeholder?: string;
      button?: boolean | string;
      onChange?: (keywords: string) => void;
      onButton?: (keywords: string) => void;
    };

export type ToolBarOptions = {
  refresh?: boolean;
  search?: boolean;
  setting?: boolean;
  fullScreen?: boolean;
  export?: boolean;
  import?: boolean;
};

export type TableToolbarProps = ExtractPropTypes<typeof tableToolbarProps> & {
  onCreate?: () => void;
  onSearch?: (keyword: string) => void;
  onRefreshIcon?: () => void;
  onSearchIcon?: () => void;
  onSettingChange?: (ids: string[]) => void;
  onSettingReset?: () => void;
  onFullScreenIcon?: (v: boolean) => void;
  onDargChange?: (column: any[]) => void;
};
