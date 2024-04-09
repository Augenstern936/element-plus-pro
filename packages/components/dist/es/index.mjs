import B from "@element-plus/pro-tabs";
export * from "@element-plus/pro-tabs";
import { createVNode as a, mergeProps as r, defineComponent as s, computed as d, Fragment as g } from "vue";
import { withInstall as D, formatPlaceholder as V } from "@element-plus/pro-utils";
import { inputProps as w, datePickerProps as _, cascaderProps as I, radioProps as v, checkboxProps as O, switchProps as j, avatarProps as M, sliderProps as N, imageProps as G, colorPickerProps as z, progressProps as H, timePickerDefaultProps as W, ElInput as Y, ElDatePicker as q, ElSelect as $, ElOption as J, ElCascader as K, ElRadioGroup as L, ElRadio as Q, ElRadioButton as X, ElCheckboxGroup as Z, ElCheckbox as ee, ElCheckboxButton as le, ElRate as te, ElSwitch as ae, ElAvatar as oe, ElSlider as re, ElImage as ne, ElColorPicker as ue, ElProgress as de, ElTreeSelect as se, ElTimePicker as pe, useSizeProp as ie, ElTimeSelect as me } from "element-plus";
import { Clock as ce, CircleClose as Pe } from "@element-plus/icons-vue";
import ye from "@element-plus/pro-table";
export * from "@element-plus/pro-table";
import fe from "@element-plus/pro-button";
export * from "@element-plus/pro-button";
import ge from "@element-plus/pro-search-bar";
export * from "@element-plus/pro-search-bar";
import Ve from "@element-plus/pro-center-container";
export * from "@element-plus/pro-center-container";
const ve = {
  modelValue: {
    type: [String, Number, Boolean, Array],
    default: ""
  },
  mode: {
    type: String,
    default: "edit"
  },
  valueType: {
    type: String,
    default: "text"
  },
  placeholder: {
    type: [String, Array]
  },
  fieldProps: {
    type: Object,
    default: {}
  }
}, m = /* @__PURE__ */ s((e, o) => {
  const t = d({
    get: () => e.modelValue,
    set: (l) => {
      o.emit("update:modelValue", l);
    }
  });
  return () => a(Y, r({
    modelValue: t.value,
    "onUpdate:modelValue": (l) => t.value = l
  }, e), null);
});
m.props = {
  ...w,
  type: {
    type: String,
    default: "text"
  }
};
const he = (e) => a(m, r(e, {
  type: "text"
}), null), Se = (e) => a(m, r(e, {
  type: "password"
}), null), Fe = (e) => a(m, r(e, {
  type: "textarea"
}), null), p = /* @__PURE__ */ s((e, o) => {
  const t = d({
    get: () => e.modelValue,
    set: (u) => {
      o.emit("update:modelValue", u);
    }
  }), l = d(() => {
    var u;
    const n = (u = e.placeholder) != null ? u : V("", e.type || "text");
    return Array.isArray(n) && n.length > 1 ? {
      startPlaceholder: n[0],
      endPlaceholder: n[1]
    } : {
      placeholder: Array.isArray(n) ? n[0] : n
    };
  });
  return () => a(q, r({
    modelValue: t.value,
    "onUpdate:modelValue": (u) => t.value = u
  }, e, l.value), null);
});
p.props = {
  ..._,
  placeholder: {
    type: [String, Array],
    default: void 0
  },
  style: {
    type: Object,
    default: {}
  }
};
const be = (e) => a(p, r(e, {
  type: "date"
}), null), xe = (e) => a(p, r(e, {
  type: "dates"
}), null), ke = (e) => a(p, r(e, {
  type: "datetime"
}), null), Te = (e) => a(p, r(e, {
  type: "week"
}), null), Ee = (e) => a(p, r(e, {
  type: "month"
}), null), Ce = (e) => a(p, r(e, {
  type: "year"
}), null), Ae = (e) => a(p, r(e, {
  type: "daterange"
}), null), Ue = (e) => a(p, r(e, {
  type: "datetimerange"
}), null), Re = (e) => a(p, r(e, {
  type: "monthrange"
}), null), Be = /* @__PURE__ */ s((e, o) => {
  const t = d({
    get: () => e.modelValue,
    set: (l) => {
      o.emit("update:modelValue", l);
    }
  });
  return () => a($, {
    modelValue: t.value,
    "onUpdate:modelValue": (l) => t.value = l
  }, {
    default: () => {
      var l;
      return [(l = e.options) == null ? void 0 : l.map((u, n) => a(J, r(u, {
        key: n
      }), {
        default: () => [u.label]
      }))];
    }
  });
}, {
  name: "ProFieldSelect"
}), De = Be, h = /* @__PURE__ */ s((e, o) => {
  const t = d({
    get: () => e.modelValue,
    set: (l) => {
      o.emit("update:modelValue", l);
    }
  });
  return () => a(K, r({
    modelValue: t.value,
    "onUpdate:modelValue": (l) => t.value = l
  }, e), null);
}, {
  name: "ProFieldCascader"
});
h.props = {
  ...I,
  modelValue: {
    type: [String, Number]
  }
};
const we = h, S = /* @__PURE__ */ s((e, o) => {
  const t = d({
    get: () => e.modelValue,
    set: (l) => {
      o.emit("update:modelValue", l);
    }
  });
  return () => a(L, {
    modelValue: t.value,
    "onUpdate:modelValue": (l) => t.value = l
  }, {
    default: () => {
      var l;
      return [(l = e.options) == null ? void 0 : l.map((u, n) => a(g, null, [u.type == "radio" ? a(Q, r(u, {
        key: n
      }), {
        default: () => [u.label]
      }) : a(X, {
        label: u.value,
        key: n
      }, {
        default: () => [u.label]
      })]))];
    }
  });
}, {
  name: "ProFieldRadio"
});
S.props = {
  ...v,
  type: {
    type: String,
    default: "radio"
  },
  options: {
    type: Array,
    default: []
  }
};
const y = S, F = /* @__PURE__ */ s((e, o) => {
  const t = d({
    get: () => e.modelValue,
    set: (l) => {
      o.emit("update:modelValue", l);
    }
  });
  return () => a(Z, {
    modelValue: t.value,
    "onUpdate:modelValue": (l) => t.value = l
  }, {
    default: () => {
      var l;
      return [(l = e.options) == null ? void 0 : l.map((u, n) => a(g, null, [e.type == "checkbox" ? a(ee, r(u, {
        key: n
      }), null) : a(le, r(u, {
        key: n
      }), {
        default: () => [u.label]
      })]))];
    }
  });
}, {
  name: "ProFieldCheckbox"
});
F.props = {
  ...O,
  type: {
    type: String,
    default: "checkbox"
  },
  options: {
    type: Array,
    default: []
  }
};
const _e = F, b = /* @__PURE__ */ s((e, o) => {
  const t = d({
    get: () => e.modelValue,
    set: (l) => {
      o.emit("update:modelValue", l);
    }
  });
  return () => a(te, r({
    modelValue: t.value,
    "onUpdate:modelValue": (l) => t.value = l
  }, e), null);
}, {
  name: "ProFieldRate"
});
b.props = v;
const Ie = b, x = /* @__PURE__ */ s((e, o) => {
  const t = d({
    get: () => e.modelValue,
    set: (l) => {
      o.emit("update:modelValue", l);
    }
  });
  return () => a(ae, r({
    modelValue: t.value,
    "onUpdate:modelValue": (l) => t.value = l
  }, e), null);
}, {
  name: "ProFieldSwitch"
});
x.props = j;
const Oe = x, k = /* @__PURE__ */ s((e, o) => () => a(oe, e, null), {
  name: "ProFieldAvatar"
});
k.props = M;
const je = k, T = /* @__PURE__ */ s((e, o) => {
  const t = d({
    get: () => e.modelValue,
    set: (l) => {
      o.emit("update:modelValue", l);
    }
  });
  return () => a(re, r({
    modelValue: t.value,
    "onUpdate:modelValue": (l) => t.value = l
  }, e), null);
}, {
  name: "ProFieldSlider"
});
T.props = N;
const Me = T, E = /* @__PURE__ */ s((e, o) => () => a(ne, e, null), {
  name: "ProFieldImage"
});
E.props = G;
const Ne = E, C = /* @__PURE__ */ s((e, o) => {
  const t = d({
    get: () => e.modelValue,
    set: (l) => {
      o.emit("update:modelValue", l);
    }
  });
  return () => a(ue, r({
    modelValue: t.value,
    "onUpdate:modelValue": (l) => t.value = l
  }, e), null);
}, {
  name: "ProFieldColor"
});
C.props = z;
const Ge = C, A = /* @__PURE__ */ s((e, o) => () => a(de, e, null), {
  name: "ProFieldProgress"
});
A.props = H;
const ze = A, He = /* @__PURE__ */ s((e, o) => {
  const t = d({
    get: () => e.modelValue,
    set: (l) => {
      o.emit("update:modelValue", l);
    }
  });
  return () => a(se, r({
    modelValue: t.value,
    "onUpdate:modelValue": (l) => t.value = l
  }, e), null);
}, {
  name: "ProFieldTreeSelect"
}), We = He, U = /* @__PURE__ */ s((e, o) => {
  const t = d({
    get: () => e.modelValue,
    set: (l) => {
      o.emit("upTime:modelValue", l);
    }
  });
  return () => a(pe, r({
    modelValue: t.value,
    "onUpdate:modelValue": (l) => t.value = l
  }, e), null);
}, {
  name: "ProFieldTime"
});
U.props = {
  ...W,
  type: {
    type: String,
    default: "time"
  },
  style: {
    type: Object,
    default: {}
  }
};
const f = U, Ye = {
  format: {
    type: String,
    default: "HH:mm"
  },
  modelValue: String,
  disabled: Boolean,
  editable: {
    type: Boolean,
    default: !0
  },
  effect: {
    type: String,
    default: "light"
  },
  clearable: {
    type: Boolean,
    default: !0
  },
  size: ie,
  placeholder: String,
  start: {
    type: String,
    default: "09:00"
  },
  end: {
    type: String,
    default: "18:00"
  },
  step: {
    type: String,
    default: "00:30"
  },
  minTime: String,
  maxTime: String,
  name: String,
  prefixIcon: {
    type: [String, Object],
    default: () => ce
  },
  clearIcon: {
    type: [String, Object],
    default: () => Pe
  },
  style: {
    type: Object,
    default: {}
  }
}, R = /* @__PURE__ */ s((e, o) => {
  const t = d({
    get: () => e.modelValue,
    set: (l) => {
      o.emit("upTime:modelValue", l);
    }
  });
  return () => a(me, r({
    modelValue: t.value,
    "onUpdate:modelValue": (l) => t.value = l
  }, e), null);
}, {
  name: "ProFieldTimeSelect"
});
R.props = Ye;
const qe = R, c = {
  text: he,
  password: Se,
  textarea: Fe,
  date: be,
  dates: xe,
  dateTime: ke,
  dateWeek: Te,
  dateMonth: Ee,
  dateYear: Ce,
  dateRange: Ae,
  dateTimeRange: Ue,
  dateMonthRange: Re,
  time: f,
  timeRange: f,
  timeSelect: qe,
  select: De,
  treeSelect: We,
  checkbox: _e,
  radio: y,
  radioButton: y,
  switch: Oe,
  avatar: je,
  image: Ne,
  rate: Ie,
  color: Ge,
  cascader: we,
  slider: Me,
  progress: ze
}, P = /* @__PURE__ */ s((e, o) => {
  const t = d(() => c[e.valueType || "text"]), l = d({
    get: () => e.modelValue,
    set: (n) => {
      o.emit("update:modelValue", n);
    }
  }), u = d(() => {
    var n;
    const i = (n = e.placeholder) != null ? n : V("", e.valueType || "text");
    return Array.isArray(i) && i.length > 1 ? {
      startPlaceholder: i[0],
      endPlaceholder: i[1]
    } : {
      placeholder: Array.isArray(i) ? i[0] : i
    };
  });
  return () => a(t.value, r({
    modelValue: l.value,
    "onUpdate:modelValue": (n) => l.value = n
  }, e.fieldProps, u.value), null);
}, {
  name: "ProField"
});
P.props = ve;
for (const e in c) {
  const o = e.charAt(0).toUpperCase() + e.slice(1), t = c[e];
  P[o] = (l) => a(t, r(l, {
    type: e
  }), null);
}
const $e = D(P), Je = {
  "@element-plus/pro-button": "0.0.1",
  "@element-plus/pro-center-container": "0.0.1",
  "@element-plus/pro-components": "0.0.1-test-01-test-01",
  "@element-plus/pro-search-bar": "0.0.1",
  "@element-plus/pro-table": "0.0.1",
  "@element-plus/pro-tabs": "0.0.1",
  "@element-plus/pro-utils": "1.0.0"
}, Ke = (e) => {
  const o = (t) => {
    for (const l in e)
      t.component(l, e[l]);
  };
  return {
    version: Je["@element-plus/pro-components"],
    install: o
  };
}, Le = Ke({
  ProTabs: B,
  ProField: $e,
  ProTable: ye,
  ProButton: fe,
  ProSearchBar: ge,
  ProCenterContainer: Ve
}), nl = Le.install;
export {
  $e as ProField,
  _e as ProFieldCheckbox,
  be as ProFieldDate,
  Ee as ProFieldDateMonth,
  Re as ProFieldDateMonthRange,
  Ae as ProFieldDateRange,
  ke as ProFieldDateTime,
  Ue as ProFieldDateTimeRange,
  Te as ProFieldDateWeek,
  Ce as ProFieldDateYear,
  xe as ProFieldDates,
  Se as ProFieldPassword,
  y as ProFieldRadio,
  De as ProFieldSelect,
  he as ProFieldText,
  Fe as ProFieldTextarea,
  We as ProFieldTreeSelect,
  Le as default,
  nl as install,
  ve as proFieldProps,
  Je as version
};
