import { ProFieldDate, ProFieldDates, ProFieldDateTime, ProFieldDateWeek, ProFieldDateMonth, ProFieldDateYear, ProFieldDateRange, ProFieldDateTimeRange, ProFieldDateMonthRange } from "./Date/index.mjs";
import { ProFieldText, ProFieldPassword, ProFieldTextarea } from "./Input/index.mjs";
import { ProFieldTime, ProFieldTimeRange } from "./TimePicker/index.mjs";
import { ProFieldAvatar } from "./Avatar/index.mjs";
import { ProFieldCascader } from "./Cascader/index.mjs";
import { ProFieldCheckbox } from "./Checkbox/index.mjs";
import { ProFieldColor } from "./Color/index.mjs";
import { ProFieldImage } from "./Image/index.mjs";
import { ProFieldProgress } from "./Progress/index.mjs";
import { ProFieldRadio } from "./Radio/index.mjs";
import { ProFieldRate } from "./Rate/index.mjs";
import ProFieldSelect from "./Select/index.mjs";
import { ProFieldSlider } from "./Slider/index.mjs";
import { ProFieldSwitch } from "./Switch/index.mjs";
import { ProFieldTreeSelect } from "./TreeSelect/index.mjs";
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
  ProFieldAvatar,
  ProFieldCascader,
  ProFieldCheckbox,
  ProFieldColor,
  ProFieldImage,
  ProFieldProgress,
  ProFieldRadio,
  ProFieldRate,
  ProFieldSlider,
  ProFieldSwitch,
  ProFieldTreeSelect,
  components
};
