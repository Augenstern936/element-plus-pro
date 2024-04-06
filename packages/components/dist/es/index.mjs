import _ from "@element-plus/pro-tabs";
export * from "@element-plus/pro-tabs";
import { createVNode as a, mergeProps as u, defineComponent as r, computed as n, Fragment as g } from "vue";
import { withInstall as I, formatPlaceholder as j } from "@element-plus/pro-utils";
import { inputProps as O, datePickerProps as w, cascaderProps as D, radioProps as y, checkboxProps as N, switchProps as z, avatarProps as G, sliderProps as H, imageProps as M, colorPickerProps as W, progressProps as Y, timePickerDefaultProps as q, ElInput as J, ElDatePicker as K, ElSelect as L, ElOption as Q, ElCascader as X, ElRadioGroup as Z, ElRadio as $, ElRadioButton as ee, ElCheckboxGroup as le, ElCheckbox as te, ElCheckboxButton as oe, ElRate as ae, ElSwitch as re, ElAvatar as ne, ElSlider as ue, ElImage as de, ElColorPicker as pe, ElProgress as se, ElTreeSelect as me, ElTimePicker as ie, useSizeProp as ce, ElTimeSelect as fe } from "element-plus";
import { Clock as Pe, CircleClose as Ve } from "@element-plus/icons-vue";
import ge from "@element-plus/pro-table";
export * from "@element-plus/pro-table";
import ye from "@element-plus/pro-button";
export * from "@element-plus/pro-button";
import ve from "@element-plus/pro-search-bar";
export * from "@element-plus/pro-search-bar";
import Se from "@element-plus/pro-center-container";
export * from "@element-plus/pro-center-container";
const be = {
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
}, v = /* @__PURE__ */ r((l, o) => {
  const t = n({
    get: () => l.modelValue,
    set: (e) => {
      o.emit("update:modelValue", e);
    }
  });
  return () => a(J, u({
    modelValue: t.value,
    "onUpdate:modelValue": (e) => t.value = e
  }, l), null);
}, {
  name: "ProFieldInput"
});
v.props = {
  ...O,
  type: {
    type: String,
    default: "text"
  }
};
const i = v, S = /* @__PURE__ */ r((l, o) => {
  const t = n({
    get: () => l.modelValue,
    set: (e) => {
      o.emit("update:modelValue", e);
    }
  });
  return () => a(K, u({
    modelValue: t.value,
    "onUpdate:modelValue": (e) => t.value = e
  }, l), null);
}, {
  name: "ProFieldDate"
});
S.props = {
  ...w,
  style: {
    type: Object,
    default: {}
  }
};
const s = S, he = /* @__PURE__ */ r((l, o) => {
  const t = n({
    get: () => l.modelValue,
    set: (e) => {
      o.emit("update:modelValue", e);
    }
  });
  return () => a(L, {
    modelValue: t.value,
    "onUpdate:modelValue": (e) => t.value = e
  }, {
    default: () => {
      var e;
      return [(e = l.options) == null ? void 0 : e.map((d, p) => a(Q, u(d, {
        key: p
      }), {
        default: () => [d.label]
      }))];
    }
  });
}, {
  name: "ProFieldSelect"
}), Fe = he, b = /* @__PURE__ */ r((l, o) => {
  const t = n({
    get: () => l.modelValue,
    set: (e) => {
      o.emit("update:modelValue", e);
    }
  });
  return () => a(X, u({
    modelValue: t.value,
    "onUpdate:modelValue": (e) => t.value = e
  }, l), null);
}, {
  name: "ProFieldCascader"
});
b.props = {
  ...D,
  modelValue: {
    type: [String, Number]
  }
};
const ke = b, h = /* @__PURE__ */ r((l, o) => {
  const t = n({
    get: () => l.modelValue,
    set: (e) => {
      o.emit("update:modelValue", e);
    }
  });
  return () => a(Z, {
    modelValue: t.value,
    "onUpdate:modelValue": (e) => t.value = e
  }, {
    default: () => {
      var e;
      return [(e = l.options) == null ? void 0 : e.map((d, p) => a(g, null, [d.type == "radio" ? a($, u(d, {
        key: p
      }), {
        default: () => [d.label]
      }) : a(ee, {
        label: d.value,
        key: p
      }, {
        default: () => [d.label]
      })]))];
    }
  });
}, {
  name: "ProFieldRadio"
});
h.props = {
  ...y,
  type: {
    type: String,
    default: "radio"
  },
  options: {
    type: Array,
    default: []
  }
};
const P = h, F = /* @__PURE__ */ r((l, o) => {
  const t = n({
    get: () => l.modelValue,
    set: (e) => {
      o.emit("update:modelValue", e);
    }
  });
  return () => a(le, {
    modelValue: t.value,
    "onUpdate:modelValue": (e) => t.value = e
  }, {
    default: () => {
      var e;
      return [(e = l.options) == null ? void 0 : e.map((d, p) => a(g, null, [l.type == "checkbox" ? a(te, u(d, {
        key: p
      }), null) : a(oe, u(d, {
        key: p
      }), {
        default: () => [d.label]
      })]))];
    }
  });
}, {
  name: "ProFieldCheckbox"
});
F.props = {
  ...N,
  type: {
    type: String,
    default: "checkbox"
  },
  options: {
    type: Array,
    default: []
  }
};
const xe = F, k = /* @__PURE__ */ r((l, o) => {
  const t = n({
    get: () => l.modelValue,
    set: (e) => {
      o.emit("update:modelValue", e);
    }
  });
  return () => a(ae, u({
    modelValue: t.value,
    "onUpdate:modelValue": (e) => t.value = e
  }, l), null);
}, {
  name: "ProFieldRate"
});
k.props = y;
const Ee = k, x = /* @__PURE__ */ r((l, o) => {
  const t = n({
    get: () => l.modelValue,
    set: (e) => {
      o.emit("update:modelValue", e);
    }
  });
  return () => a(re, u({
    modelValue: t.value,
    "onUpdate:modelValue": (e) => t.value = e
  }, l), null);
}, {
  name: "ProFieldSwitch"
});
x.props = z;
const Te = x, E = /* @__PURE__ */ r((l, o) => () => a(ne, l, null), {
  name: "ProFieldAvatar"
});
E.props = G;
const Ce = E, T = /* @__PURE__ */ r((l, o) => {
  const t = n({
    get: () => l.modelValue,
    set: (e) => {
      o.emit("update:modelValue", e);
    }
  });
  return () => a(ue, u({
    modelValue: t.value,
    "onUpdate:modelValue": (e) => t.value = e
  }, l), null);
}, {
  name: "ProFieldSlider"
});
T.props = H;
const Ue = T, C = /* @__PURE__ */ r((l, o) => () => a(de, l, null), {
  name: "ProFieldImage"
});
C.props = M;
const Re = C, U = /* @__PURE__ */ r((l, o) => {
  const t = n({
    get: () => l.modelValue,
    set: (e) => {
      o.emit("update:modelValue", e);
    }
  });
  return () => a(pe, u({
    modelValue: t.value,
    "onUpdate:modelValue": (e) => t.value = e
  }, l), null);
}, {
  name: "ProFieldColor"
});
U.props = W;
const Ae = U, R = /* @__PURE__ */ r((l, o) => () => a(se, l, null), {
  name: "ProFieldProgress"
});
R.props = Y;
const Be = R, _e = /* @__PURE__ */ r((l, o) => {
  const t = n({
    get: () => l.modelValue,
    set: (e) => {
      o.emit("update:modelValue", e);
    }
  });
  return () => a(me, u({
    modelValue: t.value,
    "onUpdate:modelValue": (e) => t.value = e
  }, l), null);
}, {
  name: "ProFieldTreeSelect"
}), Ie = _e, A = /* @__PURE__ */ r((l, o) => {
  const t = n({
    get: () => l.modelValue,
    set: (e) => {
      o.emit("upTime:modelValue", e);
    }
  });
  return () => a(ie, u({
    modelValue: t.value,
    "onUpdate:modelValue": (e) => t.value = e
  }, l), null);
}, {
  name: "ProFieldTime"
});
A.props = {
  ...q,
  type: {
    type: String,
    default: "time"
  },
  style: {
    type: Object,
    default: {}
  }
};
const V = A, je = {
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
  size: ce,
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
    default: () => Pe
  },
  clearIcon: {
    type: [String, Object],
    default: () => Ve
  },
  style: {
    type: Object,
    default: {}
  }
}, B = /* @__PURE__ */ r((l, o) => {
  const t = n({
    get: () => l.modelValue,
    set: (e) => {
      o.emit("upTime:modelValue", e);
    }
  });
  return () => a(fe, u({
    modelValue: t.value,
    "onUpdate:modelValue": (e) => t.value = e
  }, l), null);
}, {
  name: "ProFieldTimeSelect"
});
B.props = je;
const Oe = B, c = {
  text: i,
  password: i,
  textarea: i,
  date: s,
  dates: s,
  dateTime: s,
  dateWeek: s,
  dateMonth: s,
  dateYear: s,
  dateRange: s,
  dateTimeRange: s,
  dateMonthRange: s,
  time: V,
  timeRange: V,
  timeSelect: Oe,
  select: Fe,
  treeSelect: Ie,
  checkbox: xe,
  radio: P,
  radioButton: P,
  switch: Te,
  avatar: Ce,
  image: Re,
  rate: Ee,
  color: Ae,
  cascader: ke,
  slider: Ue,
  progress: Be
}, f = /* @__PURE__ */ r((l, o) => {
  const t = n(() => c[l.valueType || "text"]), e = n({
    get: () => l.modelValue,
    set: (p) => {
      o.emit("update:modelValue", p);
    }
  }), d = n(() => {
    var p;
    const m = (p = l.placeholder) != null ? p : j("", l.valueType || "text");
    return Array.isArray(m) ? {
      startPlaceholder: m[0],
      endPlaceholder: m[1]
    } : {
      placeholder: m
    };
  });
  return () => a(t.value, u({
    modelValue: e.value,
    "onUpdate:modelValue": (p) => e.value = p
  }, d.value, l.fieldProps, {
    type: l.valueType
  }), null);
}, {
  name: "ProField"
});
f.props = be;
for (const l in c) {
  const o = l.charAt(0).toUpperCase() + l.slice(1), t = c[l];
  f[o] = (e) => a(t, u(e, {
    type: l
  }), null);
}
const we = I(f), De = {
  "@element-plus/pro-button": "0.0.1",
  "@element-plus/pro-center-container": "0.0.1",
  "@element-plus/pro-components": "0.0.1-test-01-test-01",
  "@element-plus/pro-search-bar": "0.0.1",
  "@element-plus/pro-table": "0.0.1",
  "@element-plus/pro-tabs": "0.0.1",
  "@element-plus/pro-utils": "1.0.0"
}, Ne = (l) => {
  const o = (t) => {
    for (const e in l)
      t.component(e, l[e]);
  };
  return {
    version: De["@element-plus/pro-components"],
    install: o
  };
}, ze = Ne({
  ProTabs: _,
  ProField: we,
  ProTable: ge,
  ProButton: ye,
  ProSearchBar: ve,
  ProCenterContainer: Se
}), Qe = ze.install;
export {
  we as ProField,
  xe as ProFieldCheckbox,
  P as ProFieldRadio,
  Fe as ProFieldSelect,
  Ie as ProFieldTreeSelect,
  ze as default,
  Qe as install,
  be as proFieldProps,
  De as version
};
