/*
 * @Description:
 * @Date: 2024-04-30 17:42:23
 * @LastEditTime: 2024-10-06 21:57:56
 */
import { ProIconName } from "@element-plus-ui/pro-icon";
import { GeneratePropTypes } from "@element-plus-ui/pro-types";
import { textProps } from "element-plus";
import { PropType } from "vue";

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
  icon?: ProIconName | [ProIconName] | [ProIconName, ProIconName] | [ProIconName, ProIconName, ProIconName];
  tooltip?: string;
  onCopy?: (isSuccess: boolean, text: string) => void;
};

export type ProTextEditableConfig = {
  text?: string;
  icon?: ProIconName;
  tooltip?: string;
  editing?: boolean;
  maxLength?: number;
  autoSize?: boolean | { minRows?: number; maxRows?: number };
  onInput?: (text: string) => void;
  onChange?: (editing: boolean, text: string) => void;
};

export type ProTextProps = GeneratePropTypes<typeof proTextProps>;
