import { PropType } from "vue-demi";
import type { ProFieldType } from "./typing";

export const proFieldProps = {
  modelValue: {
    type: [String, Number, Boolean, Array] as PropType<string | number | boolean | []>,
    default: void 0
  },
  mode: {
    type: String as PropType<"read" | "edit">,
    default: "edit"
  },
  type: {
    type: String as PropType<ProFieldType>,
    default: "text"
  },
  emptyText: {
    type: String,
    default: "--"
  },
  placeholder: {
    type: [String, Array] as PropType<string | [string] | [string, string]>
  },
  fieldProps: {
    type: Object as PropType<Record<string, unknown>>
  }
} as const;
