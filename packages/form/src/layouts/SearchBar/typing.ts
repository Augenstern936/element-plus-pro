/*
 * @Description:
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2024-04-11 22:26:41
 * @LastEditTime: 2024-11-19 11:44:18
 *
 */
import type { ProButtonProps } from "@element-plus-ui/pro-button";
import type { ExtractPropTypes, PropType, VNode } from "vue-demi";
import { CreateFormProps } from "../../core";
import { ProFormLayout } from "../../typing";
import { pickObjectProperty } from "@element-plus-ui/pro-utils";

const commonProps = pickObjectProperty(CreateFormProps, [
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
    type: [Array, Function] as PropType<
      (ProButtonProps & { onClick?: (entity: Record<string, any>) => void })[] | ((entity: Record<string, any>) => VNode)
    >,
    default: void 0
  }
};

export type ProSearchBarProps = Partial<ExtractPropTypes<typeof proSearchBarProps>>;
