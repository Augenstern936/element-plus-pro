/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-06-27 20:57:53
 * @LastEditTime: 2024-11-03 15:43:13
 * @FilePath: \element-plus-pro\packages\form\src\core\HOC\createField.tsx
 */
import { useVModel } from "@vueuse/core";
import { DefineComponent, FunctionalComponent, SetupContext } from "vue-demi";
import { ProFormItem } from "../FormItem";
import type * as Types from "../../components";

type AddType<O, V> = O & { type: V };

type RenderProps =
  | AddType<Types.ProFormTextProps, "text">
  | AddType<Types.ProFormPasswordProps, "password">
  | AddType<Types.ProFormTextareaProps, "textarea">
  | AddType<Types.ProFormNumberProps, "number">
  | AddType<Types.ProFormDateProps, "date">
  | AddType<Types.ProFormDatesProps, "dates">
  | AddType<Types.ProFormDateRangeProps, "dateRange">
  | AddType<Types.ProFormDateYearProps, "dateYear">
  | AddType<Types.ProFormDateYearsProps, "dateYears">
  | AddType<Types.ProFormDateMonthProps, "dateMonth">
  | AddType<Types.ProFormDateMonthsProps, "dateMonths">
  | AddType<Types.ProFormDateMonthRangeProps, "dateMonthRange">
  | AddType<Types.ProFormDateWeekProps, "dateWeek">
  | AddType<Types.ProFormDateTimeProps, "dateTime">
  | AddType<Types.ProFormDateTimeRangeProps, "dateTimeRange">
  | AddType<Types.ProFormTimeProps, "time">
  | AddType<Types.ProFormTimeRangeProps, "timeRange">
  | AddType<Types.ProFormTimeSelectProps, "timeSelect">
  | AddType<Types.ProFormSelectProps, "select">
  | AddType<Types.ProFormTreeSelectProps, "treeSelect">
  | AddType<Types.ProFormVirtualizedSelectProps, "virtualizedSelect">
  | AddType<Types.ProFormCheckboxProps, "checkbox">
  | AddType<Types.ProFormCheckboxButtonProps, "checkboxButton">
  | AddType<Types.ProFormRadioProps, "radio">
  | AddType<Types.ProFormRadioButtonProps, "radioButton">
  | AddType<Types.ProFormSwitchProps, "switch">
  | AddType<Types.ProFormRateProps, "rate">
  | AddType<Types.ProFormColorProps, "color">
  | AddType<Types.ProFormSliderProps, "slider">
  | AddType<Types.ProFormProgressProps, "progress">
  | AddType<Types.ProFormCascaderProps, "cascader">
  | AddType<Types.ProFormUploadAavtarProps, "uploadAvatar">
  | AddType<Types.ProFormUploadImageProps, "uploadImage">;

type FieldComponentType =
  | DefineComponent<
      Omit<RenderProps, "readonly"> & { mode?: "read" | "edit"; emptyText?: string; placeholder?: string | string[] }
    >
  | FunctionalComponent<
      Omit<RenderProps, "readonly"> & { mode?: "read" | "edit"; emptyText?: string; placeholder?: string | string[] }
    >;

function createField(FieldComponent: FieldComponentType) {
  const render = (props: RenderProps, ctx: SetupContext) => {
    const model = useVModel(props, "modelValue", ctx.emit);
    return (
      <ProFormItem {...(props as any)}>
        <FieldComponent
          type={props.type}
          mode={props.readonly === true ? "read" : "edit"}
          emptyText={props?.emptyText}
          placeholder={props?.placeholder}
          fieldProps={props.fieldProps}
          v-model={model.value}
        />
      </ProFormItem>
    );
  };

  return render;
}

export default createField;
