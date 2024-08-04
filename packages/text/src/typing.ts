/*
 * @Description:
 * @Date: 2024-04-30 17:42:23
 * @LastEditTime: 2024-08-04 17:32:54
 */
import { GeneratePropTypes } from "@element-plus-ui/pro-types";
import { textProps } from "element-plus";
import { PropType } from "vue";

export const proTextProps = {
  ...textProps,
  mark: {
    type: Boolean
  },
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
  underline: {
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

export type ProTextCopyableConfig = {};

export type ProTextEditableConfig = {};

export type ProTextProps = GeneratePropTypes<typeof proTextProps>;
