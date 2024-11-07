/*
 * @Description:
 * @Date: 2024-04-15 09:39:26
 * @LastEditTime: 2024-11-04 22:25:26
 */
import { FormEmits } from "element-plus";

import type {
  ProFieldType,
  ProFieldTextProps,
  ProFieldNumberProps,
  ProFieldDateRangeProps,
  ProFieldTimeProps,
  ProFieldTimeSelectProps,
  ProFieldSelectProps,
  ProFieldTreeSelectProps,
  ProFieldVirtualizedSelectProps,
  ProFieldCheckboxProps,
  ProFieldRadioProps,
  ProFieldSwitchProps,
  ProFieldRateProps,
  ProFieldColorProps,
  ProFieldCascaderProps,
  ProFieldSliderProps,
  ProFieldProgressProps,
  ProFieldUploadAvatarProps,
  ProFieldUploadImageProps,
  ProFieldTimeRangeProps,
  ProFieldDateProps,
  ProFieldDatesProps,
  ProFieldDateYearProps,
  ProFieldDateYearsProps,
  ProFieldDateMonthProps,
  ProFieldDateMonthsProps,
  ProFieldDateTimeProps,
  ProFieldDateTimeRangeProps,
  ProFieldDateMonthRangeProps,
  ProFieldDateWeekProps
} from "@element-plus-ui/pro-field";
import { ProRequestData } from "@element-plus-ui/pro-types";
import type { ColProps, FormItemProps, RowProps } from "element-plus";
import { formProps as elFormProps } from "element-plus";
import { CSSProperties, ExtractPropTypes, PropType } from "vue-demi";
import type { ProButtonProps } from "@element-plus-ui/pro-button";

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
    type: [Boolean, Object, Function, Array] as PropType<ProFormSubmitter>,
    default: true
  },
  onValidate: {
    type: Function as PropType<FormEmits["validate"]>
  },
  onReset: {
    type: Function
  },
  onFinish: {
    type: Function as PropType<(entity: Record<string, any>) => void | Promise<boolean>>
  },
  onFailed: {
    type: Function as PropType<(entity: Record<string, any>) => void>
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
  labelWidth: {
    type: [String, Number] as PropType<"auto" | number>,
    default: "auto"
  }
};

type ProFormItemProps = Partial<Omit<FormItemProps, "prop" | "label" | "inline" | "labelPosition">>;

/**
 * 通用函数类型
 */
type FormItemPropertyFunction<T> = (entity: Record<string, any>, columns: ProFormColumn[]) => T;

interface ProFormColumnCommonConfig extends ProFormItemProps {
  key?: string;
  order?: number;
  label?: string | FormItemPropertyFunction<JSX.Element>;
  labelStyle?: CSSProperties;
  tooltip?: string;
  dataField?: string;
  readonly?: boolean;
  defaultValue?: string | number | boolean | any[];
  hidden?: boolean | FormItemPropertyFunction<boolean>;
  render?: () => JSX.Element;
  renderFormItem?: () => JSX.Element;
}

interface ValueTypeInput extends ProFormColumnCommonConfig, Omit<ProFieldTextProps, "modelValue" | "type"> {
  valueType?: "text" | "password" | "textarea";
}

interface ValueTypeNumber extends ProFormColumnCommonConfig, Omit<ProFieldNumberProps, "modelValue"> {
  valueType?: "number";
}

interface ValueTypeDate extends ProFormColumnCommonConfig, Omit<ProFieldDateProps, "modelValue"> {
  valueType?: "date";
}

interface ValueTypeDates extends ProFormColumnCommonConfig, Omit<ProFieldDatesProps, "modelValue"> {
  valueType?: "dates";
}

interface ValueTypeDateTime extends ProFormColumnCommonConfig, Omit<ProFieldDateTimeProps, "modelValue"> {
  valueType?: "dateTime";
}

interface ValueTypeDateWeek extends ProFormColumnCommonConfig, Omit<ProFieldDateWeekProps, "modelValue"> {
  valueType?: "dateWeek";
}

interface ValueTypeDateMonth extends ProFormColumnCommonConfig, Omit<ProFieldDateMonthProps, "modelValue"> {
  valueType?: "dateMonth";
}

interface ValueTypeDateMonths extends ProFormColumnCommonConfig, Omit<ProFieldDateMonthsProps, "modelValue"> {
  valueType?: "dateMonths";
}

interface ValueTypeDateYear extends ProFormColumnCommonConfig, Omit<ProFieldDateYearProps, "modelValue"> {
  valueType?: "dateYear";
}

interface ValueTypeDateYears extends ProFormColumnCommonConfig, Omit<ProFieldDateYearsProps, "modelValue"> {
  valueType?: "dateYears";
}

interface ValueTypeDateRange extends ProFormColumnCommonConfig, Omit<ProFieldDateRangeProps, "modelValue"> {
  valueType?: "dateRange";
}

interface ValueTypeDateTimeRange extends ProFormColumnCommonConfig, Omit<ProFieldDateTimeRangeProps, "modelValue"> {
  valueType?: "dateTimeRange";
}

interface ValueTypeDateMonthRange extends ProFormColumnCommonConfig, Omit<ProFieldDateMonthRangeProps, "modelValue"> {
  valueType?: "dateMonthRange";
}

interface ValueTypeTime extends ProFormColumnCommonConfig, Omit<ProFieldTimeProps, "modelValue"> {
  valueType?: "time";
}

interface ValueTypeTimeRange extends ProFormColumnCommonConfig, Omit<ProFieldTimeRangeProps, "modelValue"> {
  valueType?: "timeRange";
}

interface ValueTypeTimeSelect extends ProFormColumnCommonConfig, Omit<ProFieldTimeSelectProps, "modelValue"> {
  valueType?: "timeSelect";
}

interface ValueTypeSelect extends ProFormColumnCommonConfig, Omit<ProFieldSelectProps, "modelValue"> {
  valueType?: "select";
}

interface ValueTypeTreeSelect extends ProFormColumnCommonConfig, Omit<ProFieldTreeSelectProps, "modelValue"> {
  valueType?: "treeSelect";
}

interface ValueTypevirtualizedSelect extends ProFormColumnCommonConfig, Omit<ProFieldVirtualizedSelectProps, "modelValue"> {
  valueType?: "virtualizedSelect";
}

interface ValueTypeCheckbox extends ProFormColumnCommonConfig, Omit<ProFieldCheckboxProps, "modelValue"> {
  valueType?: "checkbox" | "checkboxButton";
}

interface ValueTypeRadio extends ProFormColumnCommonConfig, Omit<ProFieldRadioProps, "modelValue"> {
  valueType?: "radio" | "radioButton";
}

interface ValueTypeSwitch extends ProFormColumnCommonConfig, Omit<ProFieldSwitchProps, "modelValue"> {
  valueType?: "switch";
}

interface ValueTypeUploadAvatar extends ProFormColumnCommonConfig, Omit<ProFieldUploadAvatarProps, "modelValue" | "size"> {
  valueType?: "uploadAvatar";
}

interface ValueTypeUploadImage extends ProFormColumnCommonConfig, Omit<ProFieldUploadImageProps, "modelValue" | "size"> {
  valueType?: "uploadImage";
}

interface ValueTypeRate extends ProFormColumnCommonConfig, Omit<ProFieldRateProps, "modelValue"> {
  valueType?: "rate";
}

interface ValueTypeColor extends ProFormColumnCommonConfig, Omit<ProFieldColorProps, "modelValue"> {
  valueType?: "color";
}

interface ValueTypeCascader extends ProFormColumnCommonConfig, Omit<ProFieldCascaderProps, "modelValue"> {
  valueType?: "cascader";
}

interface ValueTypeSlider extends ProFormColumnCommonConfig, Omit<ProFieldSliderProps, "modelValue"> {
  valueType?: "slider";
}

interface ValueTypeProgress extends ProFormColumnCommonConfig, ProFieldProgressProps {
  valueType?: "progress";
}

export type ProFormColumn =
  | ValueTypeInput
  | ValueTypeNumber
  | ValueTypeDate
  | ValueTypeDates
  | ValueTypeDateTime
  | ValueTypeDateWeek
  | ValueTypeDateMonth
  | ValueTypeDateMonths
  | ValueTypeDateYear
  | ValueTypeDateYears
  | ValueTypeDateRange
  | ValueTypeDateTimeRange
  | ValueTypeDateMonthRange
  | ValueTypeTime
  | ValueTypeTimeRange
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

export type SubmitterConfigProps = {
  submitButtonTitle?: string;
  resetButtonTitle?: string;
  hideResetButton?: boolean;
  submitButtonProps?: ButtonProps;
  resetButtonProps?: ButtonProps;
  fillMode?: "aequilate" | "full" | "auto";
  align?: "left" | "right" | "center";
  reversal?: boolean;
  render?: (props: SubmitterConfigProps, doms?: JSX.Element[]) => JSX.Element | JSX.Element[];
  onSubmit?: (entity: Record<string, any>) => void;
  onReset?: (entity: Record<string, any>) => void;
};
interface ButtonProps extends ProButtonProps {
  style?: CSSProperties;
  //onClick?: (e?: Record<string, any>) => void;
}

export type ProFormValueType = ProFieldType;

export type ProFormSubmitter<T extends Record<string, any> = {}, K extends string = ""> =
  | boolean
  | Omit<SubmitterConfigProps & T, K>
  | (() => JSX.Element)
  | Array<
      Omit<ProButtonProps, "tip"> & {
        onClick?: () => void;
      }
    >;

export type CommonFormProps = Partial<ExtractPropTypes<typeof commonFormProps>>;

export type ProFormGridConfig = Partial<ExtractPropTypes<typeof proFormGridConfig>>;

export type GenerateFormProps = Partial<ExtractPropTypes<typeof generateFormProps>>;
