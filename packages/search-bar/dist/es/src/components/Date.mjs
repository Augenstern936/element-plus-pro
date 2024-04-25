import { createVNode as t, defineComponent as o, inject as d, ref as m } from "vue";
import { ElDatePicker as i } from "element-plus";
import { formatPlaceholder as u } from "@element-plus/pro-utils";
const a = /* @__PURE__ */ o(({
  type: l
}) => {
  const n = d((/* @__PURE__ */ function(e) {
    return e.date = "date", e.dates = "dates", e.datetime = "dateTime", e.week = "dateWeek", e.month = "dateMonth", e.year = "dateYear", e.daterange = "dateRange", e.datetimerange = "dateTimeRange", e.monthrange = "dateMonthRange", e;
  }({}))[l], {}), r = m("");
  return () => t(i, {
    modelValue: r.value,
    "onUpdate:modelValue": (e) => r.value = e,
    placeholder: u(n.formItem.label, l),
    type: l,
    clearable: !0,
    onChange: (e) => n.emitter.emit("value-change", {
      field: n.formItem.dataField,
      value: e
    })
  }, null);
});
a.props = {
  type: {
    type: String,
    default: "text"
  }
};
const h = {
  Default: () => t(a, {
    type: "date"
  }, null),
  Dates: () => t(a, {
    type: "dates"
  }, null),
  DateTime: () => t(a, {
    type: "datetime"
  }, null),
  DateWeek: () => t(a, {
    type: "week"
  }, null),
  DateMonth: () => t(a, {
    type: "month"
  }, null),
  DateYear: () => t(a, {
    type: "year"
  }, null),
  DateRange: () => t(a, {
    type: "daterange"
  }, null),
  DateTimeRange: () => t(a, {
    type: "datetimerange"
  }, null),
  DateMonthRange: () => t(a, {
    type: "monthrange"
  }, null)
};
export {
  h as default
};
