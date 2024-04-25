import { defineComponent as d, provide as p, createVNode as c } from "vue";
import a from "./Input.mjs";
import e from "./Date.mjs";
import f from "./Select.mjs";
import n from "./Radio.mjs";
import u from "./Rate.mjs";
import y from "./Switch.mjs";
import T from "./Slider.mjs";
import D from "./Color.mjs";
const i = {
  text: a.Text,
  password: a.Password,
  textarea: a.Textarea,
  date: e.Default,
  dates: e.Dates,
  dateTime: e.DateTime,
  dateWeek: e.DateWeek,
  dateMonth: e.DateMonth,
  dateYear: e.DateYear,
  dateRange: e.DateRange,
  dateTimeRange: e.DateTimeRange,
  dateMonthRange: e.DateMonthRange,
  // 'time',
  // 'timeRange',
  select: f,
  // 'treeSelect',
  // 'checkbox',
  radio: n.Default,
  radioButton: n.RadioButton,
  switch: y,
  rate: u,
  color: D,
  // 'cascader',
  slider: T
}, s = /* @__PURE__ */ d((t) => {
  var m;
  const r = (m = t.formItem) == null ? void 0 : m.valueType, o = (r != "select" && i[r] ? !1 : Array.isArray(t.formItem.valueOptions)) ? "select" : r || "text";
  ({
    ...t,
    formItem: {
      ...t.formItem
    }
  }, p(o, {
    ...t,
    formItem: {
      ...t.formItem,
      valueType: o
    }
  }));
  const l = i[o];
  return () => c(l, null, null);
});
s.props = {
  formItem: {
    type: Object,
    required: !0
  },
  emitter: {
    type: Object,
    required: !0
  }
};
const b = s;
export {
  b as default
};
