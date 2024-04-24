import { ProFieldDate as r, ProFieldDates as o, ProFieldDateTime as t, ProFieldDateWeek as i, ProFieldDateMonth as a, ProFieldDateYear as d, ProFieldDateRange as m, ProFieldDateTimeRange as l, ProFieldDateMonthRange as P } from "./Date/index.mjs";
import { ProFieldText as F, ProFieldPassword as p, ProFieldTextarea as s } from "./Input/index.mjs";
import { ProFieldTime as n, ProFieldTimeRange as c } from "./TimePicker/index.mjs";
import { ProFieldAvatar as f } from "./Avatar/index.mjs";
import { ProFieldCascader as g } from "./Cascader/index.mjs";
import { ProFieldCheckbox as R } from "./Checkbox/index.mjs";
import { ProFieldColor as D } from "./Color/index.mjs";
import { ProFieldImage as T } from "./Image/index.mjs";
import { ProFieldProgress as h } from "./Progress/index.mjs";
import { ProFieldRadio as e } from "./Radio/index.mjs";
import { ProFieldRate as x } from "./Rate/index.mjs";
import S from "./Select/index.mjs";
import { ProFieldSlider as k } from "./Slider/index.mjs";
import { ProFieldSwitch as w } from "./Switch/index.mjs";
import { ProFieldTreeSelect as M } from "./TreeSelect/index.mjs";
const H = {
  text: F,
  password: p,
  textarea: s,
  date: r,
  dates: o,
  dateTime: t,
  dateWeek: i,
  dateMonth: a,
  dateYear: d,
  dateRange: m,
  dateTimeRange: l,
  dateMonthRange: P,
  time: n,
  timeRange: c,
  // timeSelect: ProFieldTimeSelect,
  select: S,
  treeSelect: M,
  checkbox: R,
  radio: e,
  radioButton: e,
  switch: w,
  avatar: f,
  image: T,
  rate: x,
  color: D,
  cascader: g,
  slider: k,
  progress: h
};
export {
  f as ProFieldAvatar,
  g as ProFieldCascader,
  R as ProFieldCheckbox,
  D as ProFieldColor,
  T as ProFieldImage,
  h as ProFieldProgress,
  e as ProFieldRadio,
  x as ProFieldRate,
  k as ProFieldSlider,
  w as ProFieldSwitch,
  M as ProFieldTreeSelect,
  H as components
};
