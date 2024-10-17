/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-03-06 21:17:05
 * @LastEditTime: 2024-10-14 15:42:13
 * @FilePath: \element-plus-pro\packages\field\src\components\index.ts
 */
import ProFieldVirtualizedSelect from "./VirtualizedSelect";
import ProFieldUploadAvatar from "./UploadAvatar";
import ProFieldCascader from "./Cascader";
import * as Checkbox from "./Checkbox";
import ProFieldColor from "./ColorPicker";
import * as DatePicker from "./DatePicker";
import ProFieldUploadImage from "./UploadImage";
import * as Input from "./Input";
import ProFieldProgress from "./Progress";
import * as Radio from "./Radio";
import ProFieldRate from "./Rate";
import ProFieldSelect from "./Select";
import ProFieldSlider from "./Slider";
import ProFieldSwitch from "./Switch";
import * as TimePicker from "./TimePicker";
import ProFieldTimeSelect from "./TimeSelect";
import ProFieldTreeSelect from "./TreeSelect";

export * from "./UploadAvatar";
export * from "./Cascader";
export * from "./Checkbox";
export * from "./ColorPicker";
export * from "./DatePicker";
export * from "./UploadImage";
export * from "./Input";
export * from "./Progress";
export * from "./Radio";
export * from "./Rate";
export * from "./Select";
export * from "./Slider";
export * from "./Switch";
export * from "./TimePicker";
export * from "./TimeSelect";
export * from "./TreeSelect";
export * from "./UploadImage";
export * from "./UploadAvatar";
export * from "./VirtualizedSelect";

export default {
  text: Input.ProFieldText,
  number: Input.ProFieldNumber,
  password: Input.ProFieldPassword,
  textarea: Input.ProFieldTextarea,
  date: DatePicker.ProFieldDate,
  dates: DatePicker.ProFieldDates,
  dateRange: DatePicker.ProFieldDateRange,
  dateYear: DatePicker.ProFieldDateYear,
  dateYears: DatePicker.ProFieldDateYears,
  dateMonth: DatePicker.ProFieldDateMonth,
  dateMonths: DatePicker.ProFieldDateMonths,
  dateMonthRange: DatePicker.ProFieldDateMonthRange,
  dateWeek: DatePicker.ProFieldDateWeek,
  dateTime: DatePicker.ProFieldDateTime,
  dateTimeRange: DatePicker.ProFieldDateTimeRange,
  time: TimePicker.ProFieldTime,
  timeRange: TimePicker.ProFieldTimeRange,
  timeSelect: ProFieldTimeSelect,
  select: ProFieldSelect,
  treeSelect: ProFieldTreeSelect,
  virtualizedSelect: ProFieldVirtualizedSelect,
  checkbox: Checkbox.ProFieldCheckbox,
  checkboxButton: Checkbox.ProFieldCheckboxButton,
  radio: Radio.ProFieldRadio,
  radioButton: Radio.ProFieldRadioButton,
  switch: ProFieldSwitch,
  uploadAvatar: ProFieldUploadAvatar,
  uploadImage: ProFieldUploadImage,
  rate: ProFieldRate,
  color: ProFieldColor,
  cascader: ProFieldCascader,
  slider: ProFieldSlider,
  progress: ProFieldProgress
};
