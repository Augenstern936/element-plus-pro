import {
  ProFieldDate,
  ProFieldDateMonth,
  ProFieldDateMonthRange,
  ProFieldDateRange,
  ProFieldDateTime,
  ProFieldDateTimeRange,
  ProFieldDateWeek,
  ProFieldDateYear,
  ProFieldDates
} from "./Date";
import { ProFieldPassword, ProFieldText, ProFieldTextarea } from "./Input";
import { ProFieldTime, ProFieldTimeRange } from "./TimePicker";
import ProFieldAvatar from "./Avatar";
import ProFieldCascader from "./Cascader";
import ProFieldCheckbox from "./Checkbox";
import ProFieldColor from "./Color";
import ProFieldImage from "./Image";
import ProFieldProgress from "./Progress";
import ProFieldRadio from "./Radio";
import ProFieldRate from "./Rate";
import ProFieldSelect from "./Select";
import ProFieldSlider from "./Slider";
import ProFieldSwitch from "./Switch";
import ProFieldTreeSelect from "./TreeSelect";
export * from "./Avatar";
export * from "./Cascader";
export * from "./Checkbox";
export * from "./Color";
export * from "./Image";
export * from "./Progress";
export * from "./Radio";
export * from "./Rate";
export * from "./Slider";
export * from "./Switch";
export * from "./TreeSelect";
const components = {
  text: ProFieldText,
  password: ProFieldPassword,
  textarea: ProFieldTextarea,
  date: ProFieldDate,
  dates: ProFieldDates,
  dateTime: ProFieldDateTime,
  dateWeek: ProFieldDateWeek,
  dateMonth: ProFieldDateMonth,
  dateYear: ProFieldDateYear,
  dateRange: ProFieldDateRange,
  dateTimeRange: ProFieldDateTimeRange,
  dateMonthRange: ProFieldDateMonthRange,
  time: ProFieldTime,
  timeRange: ProFieldTimeRange,
  // timeSelect: ProFieldTimeSelect,
  select: ProFieldSelect,
  treeSelect: ProFieldTreeSelect,
  checkbox: ProFieldCheckbox,
  radio: ProFieldRadio,
  radioButton: ProFieldRadio,
  switch: ProFieldSwitch,
  avatar: ProFieldAvatar,
  image: ProFieldImage,
  rate: ProFieldRate,
  color: ProFieldColor,
  cascader: ProFieldCascader,
  slider: ProFieldSlider,
  progress: ProFieldProgress
};
export {
  components
};
