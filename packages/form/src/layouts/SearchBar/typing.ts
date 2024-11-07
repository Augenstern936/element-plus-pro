/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-04-11 22:26:41
 * @LastEditTime: 2024-11-07 23:02:40
 * @FilePath: \element-plus-pro\packages\form\src\layouts\SearchBar\typing.ts
 */
import type { ProButtonProps } from "@element-plus-ui/pro-button";
import type { ExtractPropTypes, PropType } from "vue-demi";
import { generateFormProps } from "../../core";
import { ProFormLayout } from "../../typing";
import { pickObjectProperty } from "@element-plus-ui/pro-utils";

const commonProps = pickObjectProperty(generateFormProps, [
  "modelValue",
  "columns",
  "labelWidth",
  "labelSuffix",
  "labelStyle",
  "submitter"
]);

export const proSearchBarProps = {
  ...commonProps,
  layout: {
    type: String as PropType<ProFormLayout>,
    default: "inline"
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
    type: [Array, Function] as PropType<(ProButtonProps & { onClick?: () => void })[] | (() => JSX.Element)>,
    default: void 0
  }
};

export type ProSearchBarProps = Partial<ExtractPropTypes<typeof proSearchBarProps>>;
