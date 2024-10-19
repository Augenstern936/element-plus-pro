/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-09-13 21:28:34
 * @LastEditTime: 2024-10-19 23:31:39
 * @FilePath: \element-plus-pro\packages\field\src\props.ts
 */
import { PropType } from "vue-demi";
import type { ProFieldMode, ProFieldType } from "./typing";

export const commomFieldProps = {
  mode: {
    type: String as PropType<ProFieldMode>,
    default: "edit"
  },
  emptyText: {
    type: String,
    default: "--"
  }
};

export const proFieldProps = {
  ...commomFieldProps,
  modelValue: {
    type: [String, Number, Boolean, Array] as PropType<string | number | boolean | []>,
    default: void 0
  },
  type: {
    type: String as PropType<ProFieldType>,
    default: "text"
  },
  size: {
    type: Number,
    default: 40
  },
  placeholder: {
    type: [String, Array] as PropType<string | [string] | [string, string]>
  },
  fieldProps: {
    type: Object as PropType<Record<string, any>>
  }
} as const;
