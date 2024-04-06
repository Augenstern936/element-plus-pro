import { defineComponent as r, computed as d, createVNode as o, mergeProps as u, Fragment as y } from "vue";
import { withInstall as w, formatPlaceholder as B } from "@element-plus/pro-utils";
import { ElInput as O, inputProps as j, ElDatePicker as D, datePickerProps as $, ElSelect as G, ElOption as N, ElCascader as z, cascaderProps as H, ElRadioGroup as M, ElRadio as W, ElRadioButton as Y, radioProps as S, ElCheckboxGroup as _, ElCheckbox as q, ElCheckboxButton as J, checkboxProps as K, ElRate as L, ElSwitch as Q, switchProps as X, ElAvatar as Z, avatarProps as ee, ElSlider as te, sliderProps as le, ElImage as ae, imageProps as oe, ElColorPicker as re, colorPickerProps as ne, ElProgress as de, progressProps as ue, ElTreeSelect as ce, ElTimePicker as se, timePickerDefaultProps as ie, ElTimeSelect as me, useSizeProp as pe } from "element-plus";
import { Clock as Pe, CircleClose as Ve } from "@element-plus/icons-vue";
const ge = {
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
};
const f = /* @__PURE__ */ r((t, a) => {
  const l = d({
    get: () => t.modelValue,
    set: (e) => {
      a.emit("update:modelValue", e);
    }
  });
  return () => o(O, u({
    modelValue: l.value,
    "onUpdate:modelValue": (e) => l.value = e
  }, t), null);
}, {
  name: "ProFieldInput"
});
f.props = {
  ...j,
  type: {
    type: String,
    default: "text"
  }
};
const i = f;
const F = /* @__PURE__ */ r((t, a) => {
  const l = d({
    get: () => t.modelValue,
    set: (e) => {
      a.emit("update:modelValue", e);
    }
  });
  return () => o(D, u({
    modelValue: l.value,
    "onUpdate:modelValue": (e) => l.value = e
  }, t), null);
}, {
  name: "ProFieldDate"
});
F.props = {
  ...$,
  style: {
    type: Object,
    default: {}
  }
};
const s = F;
const ye = /* @__PURE__ */ r((t, a) => {
  const l = d({
    get: () => t.modelValue,
    set: (e) => {
      a.emit("update:modelValue", e);
    }
  });
  return () => o(G, {
    modelValue: l.value,
    "onUpdate:modelValue": (e) => l.value = e
  }, {
    default: () => {
      var e;
      return [(e = t.options) == null ? void 0 : e.map((c, n) => o(N, u(c, {
        key: n
      }), {
        default: () => [c.label]
      }))];
    }
  });
}, {
  name: "ProFieldSelect"
}), Se = ye;
const v = /* @__PURE__ */ r((t, a) => {
  const l = d({
    get: () => t.modelValue,
    set: (e) => {
      a.emit("update:modelValue", e);
    }
  });
  return () => o(z, u({
    modelValue: l.value,
    "onUpdate:modelValue": (e) => l.value = e
  }, t), null);
}, {
  name: "ProFieldCascader"
});
v.props = {
  ...H,
  modelValue: {
    type: [String, Number]
  }
};
const fe = v;
const h = /* @__PURE__ */ r((t, a) => {
  const l = d({
    get: () => t.modelValue,
    set: (e) => {
      a.emit("update:modelValue", e);
    }
  });
  return () => o(M, {
    modelValue: l.value,
    "onUpdate:modelValue": (e) => l.value = e
  }, {
    default: () => {
      var e;
      return [(e = t.options) == null ? void 0 : e.map((c, n) => o(y, null, [c.type == "radio" ? o(W, u(c, {
        key: n
      }), {
        default: () => [c.label]
      }) : o(Y, {
        label: c.value,
        key: n
      }, {
        default: () => [c.label]
      })]))];
    }
  });
}, {
  name: "ProFieldRadio"
});
h.props = {
  ...S,
  type: {
    type: String,
    default: "radio"
  },
  options: {
    type: Array,
    default: []
  }
};
const V = h;
const k = /* @__PURE__ */ r((t, a) => {
  const l = d({
    get: () => t.modelValue,
    set: (e) => {
      a.emit("update:modelValue", e);
    }
  });
  return () => o(_, {
    modelValue: l.value,
    "onUpdate:modelValue": (e) => l.value = e
  }, {
    default: () => {
      var e;
      return [(e = t.options) == null ? void 0 : e.map((c, n) => o(y, null, [t.type == "checkbox" ? o(q, u(c, {
        key: n
      }), null) : o(J, u(c, {
        key: n
      }), {
        default: () => [c.label]
      })]))];
    }
  });
}, {
  name: "ProFieldCheckbox"
});
k.props = {
  ...K,
  type: {
    type: String,
    default: "checkbox"
  },
  options: {
    type: Array,
    default: []
  }
};
const Fe = k;
const b = /* @__PURE__ */ r((t, a) => {
  const l = d({
    get: () => t.modelValue,
    set: (e) => {
      a.emit("update:modelValue", e);
    }
  });
  return () => o(L, u({
    modelValue: l.value,
    "onUpdate:modelValue": (e) => l.value = e
  }, t), null);
}, {
  name: "ProFieldRate"
});
b.props = S;
const ve = b;
const x = /* @__PURE__ */ r((t, a) => {
  const l = d({
    get: () => t.modelValue,
    set: (e) => {
      a.emit("update:modelValue", e);
    }
  });
  return () => o(Q, u({
    modelValue: l.value,
    "onUpdate:modelValue": (e) => l.value = e
  }, t), null);
}, {
  name: "ProFieldSwitch"
});
x.props = X;
const he = x;
const T = /* @__PURE__ */ r((t, a) => () => o(Z, t, null), {
  name: "ProFieldAvatar"
});
T.props = ee;
const ke = T;
const C = /* @__PURE__ */ r((t, a) => {
  const l = d({
    get: () => t.modelValue,
    set: (e) => {
      a.emit("update:modelValue", e);
    }
  });
  return () => o(te, u({
    modelValue: l.value,
    "onUpdate:modelValue": (e) => l.value = e
  }, t), null);
}, {
  name: "ProFieldSlider"
});
C.props = le;
const be = C;
const E = /* @__PURE__ */ r((t, a) => () => o(ae, t, null), {
  name: "ProFieldImage"
});
E.props = oe;
const xe = E;
const U = /* @__PURE__ */ r((t, a) => {
  const l = d({
    get: () => t.modelValue,
    set: (e) => {
      a.emit("update:modelValue", e);
    }
  });
  return () => o(re, u({
    modelValue: l.value,
    "onUpdate:modelValue": (e) => l.value = e
  }, t), null);
}, {
  name: "ProFieldColor"
});
U.props = ne;
const Te = U;
const R = /* @__PURE__ */ r((t, a) => () => o(de, t, null), {
  name: "ProFieldProgress"
});
R.props = ue;
const Ce = R;
const Ee = /* @__PURE__ */ r((t, a) => {
  const l = d({
    get: () => t.modelValue,
    set: (e) => {
      a.emit("update:modelValue", e);
    }
  });
  return () => o(ce, u({
    modelValue: l.value,
    "onUpdate:modelValue": (e) => l.value = e
  }, t), null);
}, {
  name: "ProFieldTreeSelect"
}), Ue = Ee;
const A = /* @__PURE__ */ r((t, a) => {
  const l = d({
    get: () => t.modelValue,
    set: (e) => {
      a.emit("upTime:modelValue", e);
    }
  });
  return () => o(se, u({
    modelValue: l.value,
    "onUpdate:modelValue": (e) => l.value = e
  }, t), null);
}, {
  name: "ProFieldTime"
});
A.props = {
  ...ie,
  type: {
    type: String,
    default: "time"
  },
  style: {
    type: Object,
    default: {}
  }
};
const g = A;
const Re = {
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
  size: pe,
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
}, I = /* @__PURE__ */ r((t, a) => {
  const l = d({
    get: () => t.modelValue,
    set: (e) => {
      a.emit("upTime:modelValue", e);
    }
  });
  return () => o(me, u({
    modelValue: l.value,
    "onUpdate:modelValue": (e) => l.value = e
  }, t), null);
}, {
  name: "ProFieldTimeSelect"
});
I.props = Re;
const Ae = I, m = {
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
  time: g,
  timeRange: g,
  timeSelect: Ae,
  select: Se,
  treeSelect: Ue,
  checkbox: Fe,
  radio: V,
  radioButton: V,
  switch: he,
  avatar: ke,
  image: xe,
  rate: ve,
  color: Te,
  cascader: fe,
  slider: be,
  progress: Ce
}, p = /* @__PURE__ */ r((t, a) => {
  const l = d(() => m[t.valueType || "text"]), e = d({
    get: () => t.modelValue,
    set: (n) => {
      a.emit("update:modelValue", n);
    }
  }), c = d(() => {
    var P;
    const n = (P = t.placeholder) != null ? P : B("", t.valueType || "text");
    return Array.isArray(n) ? {
      startPlaceholder: n[0],
      endPlaceholder: n[1]
    } : {
      placeholder: n
    };
  });
  return () => o(l.value, u({
    modelValue: e.value,
    "onUpdate:modelValue": (n) => e.value = n
  }, c.value, t.fieldProps, {
    type: t.valueType
  }), null);
}, {
  name: "ProField"
});
p.props = ge;
for (const t in m) {
  const a = t.charAt(0).toUpperCase() + t.slice(1), l = m[t];
  p[a] = (e) => o(l, u(e, {
    type: t
  }), null);
}
const je = w(p);
export {
  je as P,
  V as a,
  Fe as b,
  Se as c,
  Ue as d,
  ge as p
};
