/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-09-13 21:28:34
 * @LastEditTime: 2024-10-27 17:15:13
 * @FilePath: \element-plus-pro\packages\field\src\props.ts
 */
import { PropType } from "vue-demi";
import type { ProFieldMode, ProFieldType } from "./typing";
import { Marker, Request, ValueEnum } from "@element-plus-ui/pro-types";

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
    type: [String, Number] as PropType<"default" | "large" | "small" | number>,
    default: "default"
  },
  marker: {
    type: String as PropType<Marker>
  },
  request: {
    type: Function as PropType<Request<ValueEnum>>
  },
  valueEnum: {
    type: Object as PropType<ValueEnum>
  },
  separator: {
    type: String,
    default: ""
  },
  placeholder: {
    type: [String, Array] as PropType<string | [string] | [string, string]>
  },
  fieldProps: {
    type: Object as PropType<Record<string, any>>
  },
  mappingEnumValue: {
    type: String as PropType<"label" | "index">,
    default: "label"
  }
} as const;
