/*
 * @Description:
 * @Date: 2024-04-15 09:39:26
 * @LastEditTime: 2024-07-24 13:50:33
 */
import type { ProFieldType } from "@element-plus-pro/field";
import { ProRequestData, ValueEnum, ValueOption } from "@element-plus-pro/types";
import type { ColProps, FormItemProps, RowProps } from "element-plus";
import { formProps as elFormProps } from "element-plus";
import { ProButtonProps } from "packages/button/es";
import { CSSProperties, ExtractPropTypes, PropType } from "vue-demi";
import { ActionsProps } from "./Submitter";

const commonFormProps = {
  modelValue: {
    type: Object as PropType<{ [x: string]: any }>,
    default: void 0
  },
  title: {
    type: String
  },
  columns: {
    type: Array as PropType<ProFormColumns[]>,
    default: []
  },
  readonly: {
    type: Boolean,
    default: void 0
  },
  required: {
    type: Boolean,
    default: void 0
  },
  labelStyle: {
    type: Object as PropType<CSSProperties>,
    default: {}
  },
  emptyText: {
    type: String,
    default: "--"
  },
  params: {
    type: Object as PropType<Record<string, any>>,
    default: {}
  },
  request: {
    type: Function as PropType<ProRequestData<Record<string, any>>>
  },
  loading: {
    type: Boolean
  },
  submitter: {
    type: [Boolean, Object] as PropType<Actions>,
    default: true
  }
};

const proFormGridConfig = {
  grid: {
    type: Boolean
  },
  rowProps: {
    type: Object as PropType<Partial<RowProps>>
  },
  colProps: {
    type: Object as PropType<Partial<ColProps>>
  }
};

export const generateFormProps = {
  ...elFormProps,
  ...commonFormProps,
  ...proFormGridConfig,
  type: {
    type: String as PropType<"default" | "dialog-form" | "drawer-form" | "steps-form" | "search-form">
  },
  labelWidth: {
    type: [String, Number] as PropType<"auto" | number>,
    default: "auto"
  },
  trigger: {
    type: Object as PropType<ProButtonProps>
  }
};

export type ProFormColumns = Omit<FormItemProps, "prop" | "label"> & {
  key?: string;
  label?: string | ((entity: Record<string, any>, columns?: ProFormColumns[]) => JSX.Element);
  tooltip?: string;
  dataField?: string;
  readonly?: boolean;
  valueType?: ProFormValueType;
  valueEnum?: ValueEnum;
  valueOptions?: ValueOption[];
  defaultValue?: string | number | boolean | any[];
  fieldProps?: Record<string, any>;
  hidden?: boolean | FormItemPropertyFunction<boolean>;
  render?: () => JSX.Element;
};

/**
 * 通用函数类型
 */
type FormItemPropertyFunction<T> = (entity: Record<string, any>, items: ProFormColumns[]) => T;

export type ProFormValueType = ProFieldType;

export type Actions = boolean | ActionsProps;

export type CommonFormProps = Partial<ExtractPropTypes<typeof commonFormProps>>;

export type ProFormGridConfig = Partial<ExtractPropTypes<typeof proFormGridConfig>>;

export type GenerateFormProps = Partial<ExtractPropTypes<typeof generateFormProps>>;
