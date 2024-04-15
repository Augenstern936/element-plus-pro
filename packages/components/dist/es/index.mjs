import j from "@element-plus/pro-tabs";
export * from "@element-plus/pro-tabs";
import { createVNode as a, mergeProps as r, defineComponent as p, computed as d, Fragment as P } from "vue";
import { withInstall as A, formatPlaceholder as g } from "@element-plus/pro-utils";
import { avatarProps as U, calendarProps as R, checkboxProps as B, colorPickerProps as _, datePickerProps as w, imageProps as I, inputProps as z, progressProps as D, radioProps as G, rateProps as H, sliderProps as M, switchProps as N, timePickerDefaultProps as W, ElAvatar as Y, ElCascader as q, ElCheckboxGroup as J, ElCheckbox as K, ElCheckboxButton as L, ElColorPicker as Q, ElDatePicker as X, ElImage as Z, ElInput as $, ElProgress as ee, ElRadioGroup as te, ElRadio as le, ElRadioButton as ae, ElRate as oe, ElSlider as re, ElSwitch as ue, ElTimePicker as ne, useSizeProp as de, ElTimeSelect as pe, ElSelect as se, ElOption as me, ElTreeSelect as ie } from "element-plus";
import { Clock as ce, CircleClose as ye } from "@element-plus/icons-vue";
import fe from "@element-plus/pro-table";
export * from "@element-plus/pro-table";
import Ve from "@element-plus/pro-button";
export * from "@element-plus/pro-button";
import Pe from "@element-plus/pro-search-bar";
export * from "@element-plus/pro-search-bar";
import ge from "@element-plus/pro-center-container";
export * from "@element-plus/pro-center-container";
const ve = {
  ...U,
  style: {
    type: Object,
    default: {}
  }
}, v = /* @__PURE__ */ p((e) => () => a(Y, e, null), {
  name: "ProFieldAvatar"
});
v.props = ve;
const be = v, he = {
  ...R,
  style: {
    type: Object,
    default: {}
  }
}, b = /* @__PURE__ */ p((e, o) => {
  const l = d({
    get: () => e.modelValue,
    set: (t) => {
      o.emit("update:modelValue", t);
    }
  });
  return () => a(q, r({
    modelValue: l.value,
    "onUpdate:modelValue": (t) => l.value = t
  }, e), null);
}, {
  name: "ProFieldCascader"
});
b.props = he;
const Se = b, xe = {
  ...B,
  type: {
    type: String,
    default: "checkbox"
  },
  options: {
    type: Array,
    default: []
  },
  style: {
    type: Object,
    default: {}
  }
}, h = /* @__PURE__ */ p((e, o) => {
  const l = d({
    get: () => e.modelValue,
    set: (t) => {
      o.emit("update:modelValue", t);
    }
  });
  return () => a(J, {
    modelValue: l.value,
    "onUpdate:modelValue": (t) => l.value = t
  }, {
    default: () => {
      var t;
      return [(t = e.options) == null ? void 0 : t.map((n, u) => a(P, null, [e.type == "checkbox" ? a(K, r(n, {
        key: u
      }), null) : a(L, r(n, {
        key: u
      }), {
        default: () => [n.label]
      })]))];
    }
  });
}, {
  name: "ProFieldCheckbox"
});
h.props = xe;
const ke = h, Ee = {
  ..._,
  style: {
    type: Object,
    default: {}
  }
}, S = /* @__PURE__ */ p((e, o) => {
  const l = d({
    get: () => e.modelValue,
    set: (t) => {
      o.emit("update:modelValue", t);
    }
  });
  return () => a(Q, r({
    modelValue: l.value,
    "onUpdate:modelValue": (t) => l.value = t
  }, e), null);
}, {
  name: "ProFieldColor"
});
S.props = Ee;
const Te = S, s = /* @__PURE__ */ p((e, o) => {
  const l = d({
    get: () => e.modelValue,
    set: (n) => {
      o.emit("update:modelValue", n);
    }
  }), t = d(() => {
    var n;
    const u = (n = e.placeholder) != null ? n : g("", e.type || "text");
    return Array.isArray(u) && u.length > 1 ? {
      startPlaceholder: u[0],
      endPlaceholder: u[1]
    } : {
      placeholder: Array.isArray(u) ? u[0] : u
    };
  });
  return () => a(X, r({
    modelValue: l.value,
    "onUpdate:modelValue": (n) => l.value = n
  }, e, t.value), null);
});
s.props = {
  ...w,
  placeholder: {
    type: [String, Array],
    default: void 0
  },
  style: {
    type: Object,
    default: {}
  }
};
const Ce = (e) => a(s, r(e, {
  type: "date"
}), null), Fe = (e) => a(s, r(e, {
  type: "dates"
}), null), Oe = (e) => a(s, r(e, {
  type: "datetime"
}), null), je = (e) => a(s, r(e, {
  type: "week"
}), null), Ae = (e) => a(s, r(e, {
  type: "month"
}), null), Ue = (e) => a(s, r(e, {
  type: "year"
}), null), Re = (e) => a(s, r(e, {
  type: "daterange"
}), null), Be = (e) => a(s, r(e, {
  type: "datetimerange"
}), null), _e = (e) => a(s, r(e, {
  type: "monthrange"
}), null), we = {
  ...I,
  style: {
    type: Object,
    default: {}
  }
}, x = /* @__PURE__ */ p((e) => () => a(Z, e, null), {
  name: "ProFieldImage"
});
x.props = we;
const Ie = x, i = /* @__PURE__ */ p((e, o) => {
  const l = d({
    get: () => e.modelValue,
    set: (t) => {
      o.emit("update:modelValue", t);
    }
  });
  return () => a($, r({
    modelValue: l.value,
    "onUpdate:modelValue": (t) => l.value = t
  }, e), null);
});
i.props = {
  ...z,
  type: {
    type: String,
    default: "text"
  }
};
const ze = (e) => a(i, r(e, {
  type: "text"
}), null), De = (e) => a(i, r(e, {
  type: "password"
}), null), Ge = (e) => a(i, r(e, {
  type: "textarea"
}), null), He = {
  ...D,
  style: {
    type: Object,
    default: {}
  }
}, k = /* @__PURE__ */ p((e) => () => a(ee, e, null), {
  name: "ProFieldProgress"
});
k.props = He;
const Me = k, Ne = {
  ...G,
  type: {
    type: String,
    default: "radio"
  },
  options: {
    type: Array,
    default: []
  },
  style: {
    type: Object,
    default: {}
  }
}, E = /* @__PURE__ */ p((e, o) => {
  const l = d({
    get: () => e.modelValue,
    set: (t) => {
      o.emit("update:modelValue", t);
    }
  });
  return () => a(te, {
    modelValue: l.value,
    "onUpdate:modelValue": (t) => l.value = t
  }, {
    default: () => {
      var t;
      return [(t = e.options) == null ? void 0 : t.map((n, u) => a(P, null, [n.type == "radio" ? a(le, r(n, {
        key: u
      }), {
        default: () => [n.label]
      }) : a(ae, {
        label: n.value,
        key: u
      }, {
        default: () => [n.label]
      })]))];
    }
  });
}, {
  name: "ProFieldRadio"
});
E.props = Ne;
const V = E, We = {
  ...H,
  style: {
    type: Object,
    default: {}
  }
}, T = /* @__PURE__ */ p((e, o) => {
  const l = d({
    get: () => e.modelValue,
    set: (t) => {
      o.emit("update:modelValue", t);
    }
  });
  return () => a(oe, r({
    modelValue: l.value,
    "onUpdate:modelValue": (t) => l.value = t
  }, e), null);
}, {
  name: "ProFieldRate"
});
T.props = We;
const Ye = T, qe = /* @__PURE__ */ p((e, o) => {
  const l = d({
    get: () => e.modelValue,
    set: (t) => {
      o.emit("update:modelValue", t);
    }
  });
  return () => a(se, {
    modelValue: l.value,
    "onUpdate:modelValue": (t) => l.value = t
  }, {
    default: () => {
      var t;
      return [(t = e.options) == null ? void 0 : t.map((n, u) => a(me, r(n, {
        key: u
      }), {
        default: () => [n.label]
      }))];
    }
  });
}, {
  name: "ProFieldSelect"
}), Je = qe, Ke = {
  ...M,
  style: {
    type: Object,
    default: {}
  }
}, C = /* @__PURE__ */ p((e, o) => {
  const l = d({
    get: () => e.modelValue,
    set: (t) => {
      o.emit("update:modelValue", t);
    }
  });
  return () => a(re, r({
    modelValue: l.value,
    "onUpdate:modelValue": (t) => l.value = t
  }, e), null);
}, {
  name: "ProFieldSlider"
});
C.props = Ke;
const Le = C, Qe = {
  ...N,
  style: {
    type: Object,
    default: {}
  }
}, F = /* @__PURE__ */ p((e, o) => {
  const l = d({
    get: () => e.modelValue,
    set: (t) => {
      o.emit("update:modelValue", t);
    }
  });
  return () => a(ue, r({
    modelValue: l.value,
    "onUpdate:modelValue": (t) => l.value = t
  }, e), null);
}, {
  name: "ProFieldSwitch"
});
F.props = Qe;
const Xe = F, y = /* @__PURE__ */ p((e, o) => {
  const l = d({
    get: () => e.modelValue,
    set: (t) => {
      o.emit("upTime:modelValue", t);
    }
  });
  return () => a(ne, r({
    modelValue: l.value,
    "onUpdate:modelValue": (t) => l.value = t
  }, e), null);
});
y.props = {
  ...W,
  style: {
    type: Object,
    default: {}
  }
};
const Ze = (e) => a(y, r(e, {
  isRange: !1
}), null), $e = (e) => a(y, r(e, {
  isRange: !0
}), null), et = {
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
  size: de,
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
    default: () => ye
  },
  style: {
    type: Object,
    default: {}
  }
}, O = /* @__PURE__ */ p((e, o) => {
  const l = d({
    get: () => e.modelValue,
    set: (t) => {
      o.emit("upTime:modelValue", t);
    }
  });
  return () => a(pe, r({
    modelValue: l.value,
    "onUpdate:modelValue": (t) => l.value = t
  }, e), null);
}, {
  name: "ProFieldTimeSelect"
});
O.props = et;
const tt = O, lt = /* @__PURE__ */ p((e, o) => {
  const l = d({
    get: () => e.modelValue,
    set: (t) => {
      o.emit("update:modelValue", t);
    }
  });
  return () => a(ie, r({
    modelValue: l.value,
    "onUpdate:modelValue": (t) => l.value = t
  }, e), null);
}, {
  name: "ProFieldTreeSelect"
}), at = lt, c = {
  text: ze,
  password: De,
  textarea: Ge,
  date: Ce,
  dates: Fe,
  dateTime: Oe,
  dateWeek: je,
  dateMonth: Ae,
  dateYear: Ue,
  dateRange: Re,
  dateTimeRange: Be,
  dateMonthRange: _e,
  time: Ze,
  timeRange: $e,
  timeSelect: tt,
  select: Je,
  treeSelect: at,
  checkbox: ke,
  radio: V,
  radioButton: V,
  switch: Xe,
  avatar: be,
  image: Ie,
  rate: Ye,
  color: Te,
  cascader: Se,
  slider: Le,
  progress: Me
}, ot = {
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
}, f = /* @__PURE__ */ p((e, o) => {
  const l = d(() => c[e.valueType || "text"]), t = d({
    get: () => e.modelValue,
    set: (u) => {
      o.emit("update:modelValue", u);
    }
  }), n = d(() => {
    var u;
    const m = (u = e.placeholder) != null ? u : g("", e.valueType || "text");
    return Array.isArray(m) && m.length > 1 ? {
      startPlaceholder: m[0],
      endPlaceholder: m[1]
    } : {
      placeholder: Array.isArray(m) ? m[0] : m
    };
  });
  return () => a(l.value, r({
    modelValue: t.value,
    "onUpdate:modelValue": (u) => t.value = u
  }, e.fieldProps, n.value), null);
}, {
  name: "ProField"
});
f.props = ot;
for (const e in c) {
  const o = e.charAt(0).toUpperCase() + e.slice(1), l = c[e];
  f[o] = (t) => a(l, r(t, {
    type: e
  }), null);
}
const rt = A(f), ut = {
  "@element-plus/pro-button": "0.0.1",
  "@element-plus/pro-center-container": "0.0.1",
  "@element-plus/pro-components": "0.0.1-test-01-test-01",
  "@element-plus/pro-search-bar": "0.0.1",
  "@element-plus/pro-table": "0.0.1",
  "@element-plus/pro-tabs": "0.0.1",
  "@element-plus/pro-utils": "1.0.0"
}, nt = (e) => {
  const o = (l) => {
    for (const t in e)
      l.component(t, e[t]);
  };
  return {
    version: ut["@element-plus/pro-components"],
    install: o
  };
}, dt = nt({
  ProTabs: j,
  ProField: rt,
  ProTable: fe,
  ProButton: Ve,
  ProSearchBar: Pe,
  ProCenterContainer: ge
}), gt = dt.install;
export {
  dt as default,
  gt as install,
  ot as proFieldProps,
  ut as version
};
