import { defineComponent as u, createVNode as a, computed as s, mergeProps as o, Fragment as F } from "vue";
import { formatPlaceholder as V, withInstall as A } from "@element-plus/pro-utils";
import { avatarProps as j, ElAvatar as O, calendarProps as U, ElCascader as w, checkboxProps as D, ElCheckboxGroup as B, ElCheckbox as I, ElCheckboxButton as $, colorPickerProps as G, ElColorPicker as M, datePickerProps as N, ElDatePicker as z, imageProps as H, ElImage as W, inputProps as Y, ElInput as q, progressProps as _, ElProgress as J, radioProps as K, ElRadioGroup as L, ElRadio as Q, ElRadioButton as X, rateProps as Z, ElRate as ee, ElSelect as te, ElOption as le, sliderProps as ae, ElSlider as oe, switchProps as re, ElSwitch as ne, timePickerDefaultProps as de, ElTimePicker as se, useSizeProp as ue, ElTimeSelect as ce, ElTreeSelect as ie } from "element-plus";
import { Clock as me, CircleClose as pe } from "@element-plus/icons-vue";
const Pe = {
  ...j,
  style: {
    type: Object,
    default: {}
  }
}, f = /* @__PURE__ */ u((e) => () => a(O, e, null), {
  name: "ProFieldAvatar"
});
f.props = Pe;
const ye = f;
const ge = {
  ...U,
  style: {
    type: Object,
    default: {}
  }
}, h = /* @__PURE__ */ u((e, r) => {
  const l = s({
    get: () => e.modelValue,
    set: (t) => {
      r.emit("update:modelValue", t);
    }
  });
  return () => a(w, o({
    modelValue: l.value,
    "onUpdate:modelValue": (t) => l.value = t
  }, e), null);
}, {
  name: "ProFieldCascader"
});
h.props = ge;
const Fe = h;
const Ve = {
  ...D,
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
}, S = /* @__PURE__ */ u((e, r) => {
  const l = s({
    get: () => e.modelValue,
    set: (t) => {
      r.emit("update:modelValue", t);
    }
  });
  return () => a(B, {
    modelValue: l.value,
    "onUpdate:modelValue": (t) => l.value = t
  }, {
    default: () => {
      var t;
      return [(t = e.options) == null ? void 0 : t.map((n, d) => a(F, null, [e.type == "checkbox" ? a(I, o(n, {
        key: d
      }), null) : a($, o(n, {
        key: d
      }), {
        default: () => [n.label]
      })]))];
    }
  });
}, {
  name: "ProFieldCheckbox"
});
S.props = Ve;
const fe = S;
const he = {
  ...G,
  style: {
    type: Object,
    default: {}
  }
}, v = /* @__PURE__ */ u((e, r) => {
  const l = s({
    get: () => e.modelValue,
    set: (t) => {
      r.emit("update:modelValue", t);
    }
  });
  return () => a(M, o({
    modelValue: l.value,
    "onUpdate:modelValue": (t) => l.value = t
  }, e), null);
}, {
  name: "ProFieldColor"
});
v.props = he;
const Se = v;
const c = /* @__PURE__ */ u((e, r) => {
  const l = s({
    get: () => e.modelValue,
    set: (n) => {
      r.emit("update:modelValue", n);
    }
  }), t = s(() => {
    var d;
    const n = (d = e.placeholder) != null ? d : V("", e.type || "text");
    return Array.isArray(n) && n.length > 1 ? {
      startPlaceholder: n[0],
      endPlaceholder: n[1]
    } : {
      placeholder: Array.isArray(n) ? n[0] : n
    };
  });
  return () => a(z, o({
    modelValue: l.value,
    "onUpdate:modelValue": (n) => l.value = n
  }, e, t.value), null);
});
c.props = {
  ...N,
  placeholder: {
    type: [String, Array],
    default: void 0
  },
  style: {
    type: Object,
    default: {}
  }
};
const ve = (e) => a(c, o(e, {
  type: "date"
}), null), be = (e) => a(c, o(e, {
  type: "dates"
}), null), ke = (e) => a(c, o(e, {
  type: "datetime"
}), null), xe = (e) => a(c, o(e, {
  type: "week"
}), null), Te = (e) => a(c, o(e, {
  type: "month"
}), null), Ce = (e) => a(c, o(e, {
  type: "year"
}), null), Re = (e) => a(c, o(e, {
  type: "daterange"
}), null), Ee = (e) => a(c, o(e, {
  type: "datetimerange"
}), null), Ae = (e) => a(c, o(e, {
  type: "monthrange"
}), null);
const je = {
  ...H,
  style: {
    type: Object,
    default: {}
  }
}, b = /* @__PURE__ */ u((e) => () => a(W, e, null), {
  name: "ProFieldImage"
});
b.props = je;
const Oe = b;
const i = /* @__PURE__ */ u((e, r) => {
  const l = s({
    get: () => e.modelValue,
    set: (t) => {
      r.emit("update:modelValue", t);
    }
  });
  return () => a(q, o({
    modelValue: l.value,
    "onUpdate:modelValue": (t) => l.value = t
  }, e), null);
});
i.props = {
  ...Y,
  type: {
    type: String,
    default: "text"
  }
};
const Ue = (e) => a(i, o(e, {
  type: "text"
}), null), we = (e) => a(i, o(e, {
  type: "password"
}), null), De = (e) => a(i, o(e, {
  type: "textarea"
}), null);
const Be = {
  ..._,
  style: {
    type: Object,
    default: {}
  }
}, k = /* @__PURE__ */ u((e) => () => a(J, e, null), {
  name: "ProFieldProgress"
});
k.props = Be;
const Ie = k;
const $e = {
  ...K,
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
}, x = /* @__PURE__ */ u((e, r) => {
  const l = s({
    get: () => e.modelValue,
    set: (t) => {
      r.emit("update:modelValue", t);
    }
  });
  return () => a(L, {
    modelValue: l.value,
    "onUpdate:modelValue": (t) => l.value = t
  }, {
    default: () => {
      var t;
      return [(t = e.options) == null ? void 0 : t.map((n, d) => a(F, null, [n.type == "radio" ? a(Q, o(n, {
        key: d
      }), {
        default: () => [n.label]
      }) : a(X, {
        label: n.value,
        key: d
      }, {
        default: () => [n.label]
      })]))];
    }
  });
}, {
  name: "ProFieldRadio"
});
x.props = $e;
const g = x;
const Ge = {
  ...Z,
  style: {
    type: Object,
    default: {}
  }
}, T = /* @__PURE__ */ u((e, r) => {
  const l = s({
    get: () => e.modelValue,
    set: (t) => {
      r.emit("update:modelValue", t);
    }
  });
  return () => a(ee, o({
    modelValue: l.value,
    "onUpdate:modelValue": (t) => l.value = t
  }, e), null);
}, {
  name: "ProFieldRate"
});
T.props = Ge;
const Me = T;
const Ne = /* @__PURE__ */ u((e, r) => {
  const l = s({
    get: () => e.modelValue,
    set: (t) => {
      r.emit("update:modelValue", t);
    }
  });
  return () => a(te, {
    modelValue: l.value,
    "onUpdate:modelValue": (t) => l.value = t
  }, {
    default: () => {
      var t;
      return [(t = e.options) == null ? void 0 : t.map((n, d) => a(le, o(n, {
        key: d
      }), {
        default: () => [n.label]
      }))];
    }
  });
}, {
  name: "ProFieldSelect"
}), ze = Ne;
const He = {
  ...ae,
  style: {
    type: Object,
    default: {}
  }
}, C = /* @__PURE__ */ u((e, r) => {
  const l = s({
    get: () => e.modelValue,
    set: (t) => {
      r.emit("update:modelValue", t);
    }
  });
  return () => a(oe, o({
    modelValue: l.value,
    "onUpdate:modelValue": (t) => l.value = t
  }, e), null);
}, {
  name: "ProFieldSlider"
});
C.props = He;
const We = C;
const Ye = {
  ...re,
  style: {
    type: Object,
    default: {}
  }
}, R = /* @__PURE__ */ u((e, r) => {
  const l = s({
    get: () => e.modelValue,
    set: (t) => {
      r.emit("update:modelValue", t);
    }
  });
  return () => a(ne, o({
    modelValue: l.value,
    "onUpdate:modelValue": (t) => l.value = t
  }, e), null);
}, {
  name: "ProFieldSwitch"
});
R.props = Ye;
const qe = R;
const p = /* @__PURE__ */ u((e, r) => {
  const l = s({
    get: () => e.modelValue,
    set: (t) => {
      r.emit("upTime:modelValue", t);
    }
  });
  return () => a(se, o({
    modelValue: l.value,
    "onUpdate:modelValue": (t) => l.value = t
  }, e), null);
});
p.props = {
  ...de,
  style: {
    type: Object,
    default: {}
  }
};
const _e = (e) => a(p, o(e, {
  isRange: !1
}), null), Je = (e) => a(p, o(e, {
  isRange: !0
}), null);
const Ke = {
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
  size: ue,
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
    default: () => me
  },
  clearIcon: {
    type: [String, Object],
    default: () => pe
  },
  style: {
    type: Object,
    default: {}
  }
}, E = /* @__PURE__ */ u((e, r) => {
  const l = s({
    get: () => e.modelValue,
    set: (t) => {
      r.emit("upTime:modelValue", t);
    }
  });
  return () => a(ce, o({
    modelValue: l.value,
    "onUpdate:modelValue": (t) => l.value = t
  }, e), null);
}, {
  name: "ProFieldTimeSelect"
});
E.props = Ke;
const Le = E;
const Qe = /* @__PURE__ */ u((e, r) => {
  const l = s({
    get: () => e.modelValue,
    set: (t) => {
      r.emit("update:modelValue", t);
    }
  });
  return () => a(ie, o({
    modelValue: l.value,
    "onUpdate:modelValue": (t) => l.value = t
  }, e), null);
}, {
  name: "ProFieldTreeSelect"
}), Xe = Qe, m = {
  text: Ue,
  password: we,
  textarea: De,
  date: ve,
  dates: be,
  dateTime: ke,
  dateWeek: xe,
  dateMonth: Te,
  dateYear: Ce,
  dateRange: Re,
  dateTimeRange: Ee,
  dateMonthRange: Ae,
  time: _e,
  timeRange: Je,
  timeSelect: Le,
  select: ze,
  treeSelect: Xe,
  checkbox: fe,
  radio: g,
  radioButton: g,
  switch: qe,
  avatar: ye,
  image: Oe,
  rate: Me,
  color: Se,
  cascader: Fe,
  slider: We,
  progress: Ie
}, Ze = {
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
}, P = /* @__PURE__ */ u((e, r) => {
  const l = s(() => m[e.valueType || "text"]), t = s({
    get: () => e.modelValue,
    set: (d) => {
      r.emit("update:modelValue", d);
    }
  }), n = s(() => {
    var y;
    const d = (y = e.placeholder) != null ? y : V("", e.valueType || "text");
    return Array.isArray(d) && d.length > 1 ? {
      startPlaceholder: d[0],
      endPlaceholder: d[1]
    } : {
      placeholder: Array.isArray(d) ? d[0] : d
    };
  });
  return () => a(l.value, o({
    modelValue: t.value,
    "onUpdate:modelValue": (d) => t.value = d
  }, e.fieldProps, n.value), null);
}, {
  name: "ProField"
});
P.props = Ze;
for (const e in m) {
  const r = e.charAt(0).toUpperCase() + e.slice(1), l = m[e];
  P[r] = (t) => a(l, o(t, {
    type: e
  }), null);
}
const ot = A(P);
export {
  ot as P,
  f as a,
  h as b,
  ge as c,
  S as d,
  Ve as e,
  v as f,
  he as g,
  b as h,
  je as i,
  k as j,
  Be as k,
  x as l,
  $e as m,
  T as n,
  Ge as o,
  Pe as p,
  C as q,
  He as r,
  R as s,
  Ye as t,
  E as u,
  Ke as v,
  Qe as w,
  Ze as x
};
