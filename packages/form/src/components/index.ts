/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-04-13 23:34:01
 * @LastEditTime: 2024-10-10 20:42:17
 * @FilePath: \element-plus-pro\packages\form\src\components\index.ts
 */
import { ProFormUploadAvatar } from "./UploadAvatar";
import { ProFormCascader } from "./Cascader";
import * as Checkbox from "./Checkbox";
import { ProFormColor } from "./ColorPicker";
import { ProFormUploadImage } from "./UploadImage";
import * as Input from "./Input";
import * as Radio from "./Radio";
import { ProFormRate } from "./Rate";
import { ProFormSelect } from "./Select";
import { ProFormSlider } from "./Slider";
import { ProFormSwitch } from "./Switch";
import { ProFormTreeSelect } from "./TreeSelect";
import { ProFormVirtualizedSelect } from "./VirtualizedSelect";
import { ProFormTimeSelect } from "./TimeSelect";
import * as TimePicker from "./TimePicker";
import * as DatePicker from "./DatePicker";

export * from "./UploadAvatar";
export * from "./Cascader";
export * from "./Checkbox";
export * from "./TimeSelect";
export * from "./TimePicker";
export * from "./DatePicker";
export * from "./ColorPicker";
export * from "./UploadImage";
export * from "./Input";
export * from "./Radio";
export * from "./Rate";
export * from "./Select";
export * from "./Slider";
export * from "./Switch";
export * from "./TreeSelect";
export * from "./VirtualizedSelect";

export default {
  rate: ProFormRate,
  uploadImage: ProFormUploadImage,
  color: ProFormColor,
  uploadAvatar: ProFormUploadAvatar,
  slider: ProFormSlider,
  switch: ProFormSwitch,
  select: ProFormSelect,
  treeSelect: ProFormTreeSelect,
  text: Input.ProFormText,
  number: Input.ProFormNumber,
  password: Input.ProFormPassword,
  textarea: Input.ProFormTextarea,
  cascader: ProFormCascader,
  radio: Radio.ProFormRadio,
  radioButton: Radio.ProFormRadioButton,
  checkbox: Checkbox.ProFormCheckbox,
  checkboxButton: Checkbox.ProFormCheckboxButton,
  time: TimePicker.ProFormTime,
  timeRange: TimePicker.ProFormTimeRange,
  timeSelect: ProFormTimeSelect,
  date: DatePicker.ProFormDate,
  dates: DatePicker.ProFormDates,
  dateRange: DatePicker.ProFormDateRange,
  dateTime: DatePicker.ProFormDateTime,
  dateTimeRange: DatePicker.ProFormDateTimeRange,
  dateWeek: DatePicker.ProFormDateWeek,
  dateMonth: DatePicker.ProFormDateMonth,
  dateMonthRange: DatePicker.ProFormDateMonthRange,
  dateYear: DatePicker.ProFormDateYear,
  virtualizedSelect: ProFormVirtualizedSelect
};
