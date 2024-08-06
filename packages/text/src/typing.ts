/*
 * @Description:
 * @Date: 2024-04-30 17:42:23
 * @LastEditTime: 2024-08-05 22:46:11
 */
import { GeneratePropTypes } from "@element-plus-ui/pro-types";
import { textProps } from "element-plus";
import { Component, PropType } from "vue";

export const proTextProps = {
  ...textProps,
  strong: {
    type: Boolean
  },
  italic: {
    type: Boolean
  },
  delete: {
    type: Boolean
  },
  disabled: {
    type: Boolean
  },
  content: {
    type: String
  },
  copyable: {
    type: [Boolean, Object] as PropType<boolean | ProTextCopyableConfig>
  },
  editable: {
    type: [Boolean, Object] as PropType<boolean | ProTextEditableConfig>
  }
} as const;

export type ProTextCopyableConfig = {
  text?: string;
  icon?: Component;
  tooltip?: string;
  onCopy?: (isSuccess: boolean, text: string) => void;
};

export type ProTextEditableConfig = {
  text?: string;
  icon?: Component;
  tooltip?: string;
  editing?: boolean;
  maxLength?: number;
  autoSize?: boolean | { minRows?: number; maxRows?: number };
  onInput?: (text: string) => void;
  onChange?: (editing: boolean, text: string) => void;
};

export type ProTextProps = GeneratePropTypes<typeof proTextProps>;
