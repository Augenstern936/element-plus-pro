/*
 * @Description:
 * @Date: 2024-04-15 09:39:26
 * @LastEditTime: 2024-10-20 22:45:55
 */
import type { ProFieldType, ProFieldProps } from "@element-plus-ui/pro-field";
import { ProRequestData } from "@element-plus-ui/pro-types";
import type {
  AvatarProps,
  CascaderProps,
  CheckboxGroupProps,
  ColorPickerProps,
  ColProps,
  DatePickerProps,
  FormItemProps,
  ImageProps,
  InputNumberProps,
  InputProps,
  ISelectProps,
  ISelectV2Props,
  ProgressProps,
  RadioGroupProps,
  RateProps,
  RowProps,
  SliderProps,
  SwitchProps,
  TimePickerDefaultProps,
  TimeSelectProps,
  UploadProps
} from "element-plus";
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
    type: Array as PropType<ProFormColumn[]>,
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

type ProFormItemProps = Partial<Omit<FormItemProps, "prop" | "label">>;

type ProFormFieldProps = Omit<ProFieldProps, "type" | "size">;

/**
 * 通用函数类型
 */
type FormItemPropertyFunction<T> = (entity: Record<string, any>, items: ProFormColumn[]) => T;

interface ProFormColumnCommonConfig extends ProFormItemProps, ProFormFieldProps {
  key?: string;
  label?: string | ((entity: Record<string, any>, columns?: ProFormColumn[]) => JSX.Element);
  tooltip?: string;
  dataField?: string;
  readonly?: boolean;
  defaultValue?: string | number | boolean | any[];
  hidden?: boolean | FormItemPropertyFunction<boolean>;
  render?: () => JSX.Element;
}

interface ValueTypeInput extends ProFormColumnCommonConfig {
  valueType?: "text" | "password" | "textarea";
  fieldProps?: Partial<Omit<InputProps, "modelValue" | "type">>;
}

interface ValueTypeNumber extends ProFormColumnCommonConfig {
  valueType?: "number";
  fieldProps?: Partial<Omit<InputNumberProps, "modelValue">>;
}

interface ValueTypeDate extends ProFormColumnCommonConfig {
  valueType?:
    | "date"
    | "dates"
    | "dateRange"
    | "dateYear"
    | "dateYears"
    | "dateMonth"
    | "dateMonths"
    | "dateMonthRange"
    | "dateTimeRange"
    | "dateTime"
    | "dateTimeRange";
  fieldProps?: Partial<Omit<DatePickerProps, "modelValue" | "type">>;
}

interface ValueTypeTime extends ProFormColumnCommonConfig {
  valueType?: "time" | "timeRange";
  fieldProps?: Partial<Omit<TimePickerDefaultProps, "modelValue">>;
}

interface ValueTypeTimeSelect extends ProFormColumnCommonConfig {
  valueType?: "timeSelect";
  fieldProps?: Partial<Omit<TimeSelectProps, "modelValue">>;
}

interface ValueTypeSelect extends ProFormColumnCommonConfig {
  valueType?: "select";
  fieldProps?: Partial<Omit<ISelectProps, "modelValue">>;
}

interface ValueTypeTreeSelect extends ProFormColumnCommonConfig {
  valueType?: "treeSelect";
  fieldProps?: Partial<Omit<ISelectProps & Record<string, any>, "modelValue">>;
}

interface ValueTypevirtualizedSelect extends ProFormColumnCommonConfig {
  valueType?: "virtualizedSelect";
  fieldProps?: Partial<Omit<ISelectV2Props, "modelValue">>;
}

interface ValueTypeCheckbox extends ProFormColumnCommonConfig {
  valueType?: "checkbox" | "checkboxButton";
  fieldProps?: Partial<Omit<CheckboxGroupProps, "modelValue">>;
}

interface ValueTypeRadio extends ProFormColumnCommonConfig {
  valueType?: "radio" | "radioButton";
  fieldProps?: Partial<Omit<RadioGroupProps, "modelValue">>;
}

interface ValueTypeSwitch extends ProFormColumnCommonConfig {
  valueType?: "switch";
  fieldProps?: Partial<Omit<SwitchProps, "modelValue">>;
}

interface ValueTypeUploadAvatar extends ProFormColumnCommonConfig {
  valueType?: "uploadAvatar";
  fieldProps?: Partial<Omit<UploadProps, "fileList"> & AvatarProps>;
}

interface ValueTypeUploadImage extends ProFormColumnCommonConfig {
  valueType?: "uploadImage";
  fieldProps?: Partial<Omit<UploadProps, "fileList"> & ImageProps>;
}

interface ValueTypeRate extends ProFormColumnCommonConfig {
  valueType?: "rate";
  fieldProps?: Partial<Omit<RateProps, "modelValue">>;
}

interface ValueTypeColor extends ProFormColumnCommonConfig {
  valueType?: "color";
  fieldProps?: Partial<Omit<ColorPickerProps, "modelValue">>;
}

interface ValueTypeCascader extends ProFormColumnCommonConfig {
  valueType?: "cascader";
  fieldProps?: Partial<Omit<CascaderProps & { placeholder?: string }, "modelValue">>;
}

interface ValueTypeSlider extends ProFormColumnCommonConfig {
  valueType?: "slider";
  fieldProps?: Partial<Omit<SliderProps, "modelValue">>;
}

interface ValueTypeProgress extends ProFormColumnCommonConfig {
  valueType?: "progress";
  fieldProps?: Partial<ProgressProps>;
}

export type ProFormColumn =
  | ValueTypeInput
  | ValueTypeNumber
  | ValueTypeDate
  | ValueTypeTime
  | ValueTypeTimeSelect
  | ValueTypeSelect
  | ValueTypeTreeSelect
  | ValueTypevirtualizedSelect
  | ValueTypeCheckbox
  | ValueTypeRadio
  | ValueTypeSwitch
  | ValueTypeUploadAvatar
  | ValueTypeUploadImage
  | ValueTypeRate
  | ValueTypeColor
  | ValueTypeCascader
  | ValueTypeSlider
  | ValueTypeProgress;

export type ProFormValueType = ProFieldType;

export type Actions = boolean | ActionsProps;

export type CommonFormProps = Partial<ExtractPropTypes<typeof commonFormProps>>;

export type ProFormGridConfig = Partial<ExtractPropTypes<typeof proFormGridConfig>>;

export type GenerateFormProps = Partial<ExtractPropTypes<typeof generateFormProps>>;
