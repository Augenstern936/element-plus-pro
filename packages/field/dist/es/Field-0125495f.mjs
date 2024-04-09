import { createVNode as a, mergeProps as r, defineComponent as s, computed as u, Fragment as V } from "vue";
import { formatPlaceholder as F, withInstall as w } from "@element-plus/pro-utils";
import { inputProps as D, ElInput as B, datePickerProps as I, ElDatePicker as j, ElSelect as O, ElOption as $, ElCascader as G, cascaderProps as M, ElRadioGroup as N, ElRadio as z, ElRadioButton as H, radioProps as S, ElCheckboxGroup as W, ElCheckbox as Y, ElCheckboxButton as q, checkboxProps as _, ElRate as J, ElSwitch as K, switchProps as L, ElAvatar as Q, avatarProps as X, ElSlider as Z, sliderProps as ee, ElImage as te, imageProps as le, ElColorPicker as ae, colorPickerProps as oe, ElProgress as re, progressProps as ne, ElTreeSelect as de, ElTimePicker as ue, timePickerDefaultProps as se, ElTimeSelect as ce, useSizeProp as ie } from "element-plus";
import { Clock as me, CircleClose as pe } from "@element-plus/icons-vue";
const Pe = {
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
const i = /* @__PURE__ */ s((e, o) => {
  const l = u({
    get: () => e.modelValue,
    set: (t) => {
      o.emit("update:modelValue", t);
    }
  });
  return () => a(B, r({
    modelValue: l.value,
    "onUpdate:modelValue": (t) => l.value = t
  }, e), null);
});
i.props = {
  ...D,
  type: {
    type: String,
    default: "text"
  }
};
const ye = (e) => a(i, r(e, {
  type: "text"
}), null), ge = (e) => a(i, r(e, {
  type: "password"
}), null), Ve = (e) => a(i, r(e, {
  type: "textarea"
}), null);
const c = /* @__PURE__ */ s((e, o) => {
  const l = u({
    get: () => e.modelValue,
    set: (n) => {
      o.emit("update:modelValue", n);
    }
  }), t = u(() => {
    var d;
    const n = (d = e.placeholder) != null ? d : F("", e.type || "text");
    return Array.isArray(n) && n.length > 1 ? {
      startPlaceholder: n[0],
      endPlaceholder: n[1]
    } : {
      placeholder: Array.isArray(n) ? n[0] : n
    };
  });
  return () => a(j, r({
    modelValue: l.value,
    "onUpdate:modelValue": (n) => l.value = n
  }, e, t.value), null);
});
c.props = {
  ...I,
  placeholder: {
    type: [String, Array],
    default: void 0
  },
  style: {
    type: Object,
    default: {}
  }
};
const Fe = (e) => a(c, r(e, {
  type: "date"
}), null), Se = (e) => a(c, r(e, {
  type: "dates"
}), null), fe = (e) => a(c, r(e, {
  type: "datetime"
}), null), he = (e) => a(c, r(e, {
  type: "week"
}), null), ve = (e) => a(c, r(e, {
  type: "month"
}), null), ke = (e) => a(c, r(e, {
  type: "year"
}), null), be = (e) => a(c, r(e, {
  type: "daterange"
}), null), xe = (e) => a(c, r(e, {
  type: "datetimerange"
}), null), Te = (e) => a(c, r(e, {
  type: "monthrange"
}), null);
const Ce = /* @__PURE__ */ s((e, o) => {
  const l = u({
    get: () => e.modelValue,
    set: (t) => {
      o.emit("update:modelValue", t);
    }
  });
  return () => a(O, {
    modelValue: l.value,
    "onUpdate:modelValue": (t) => l.value = t
  }, {
    default: () => {
      var t;
      return [(t = e.options) == null ? void 0 : t.map((n, d) => a($, r(n, {
        key: d
      }), {
        default: () => [n.label]
      }))];
    }
  });
}, {
  name: "ProFieldSelect"
}), Ee = Ce;
const f = /* @__PURE__ */ s((e, o) => {
  const l = u({
    get: () => e.modelValue,
    set: (t) => {
      o.emit("update:modelValue", t);
    }
  });
  return () => a(G, r({
    modelValue: l.value,
    "onUpdate:modelValue": (t) => l.value = t
  }, e), null);
}, {
  name: "ProFieldCascader"
});
f.props = {
  ...M,
  modelValue: {
    type: [String, Number]
  }
};
const Ae = f;
const h = /* @__PURE__ */ s((e, o) => {
  const l = u({
    get: () => e.modelValue,
    set: (t) => {
      o.emit("update:modelValue", t);
    }
  });
  return () => a(N, {
    modelValue: l.value,
    "onUpdate:modelValue": (t) => l.value = t
  }, {
    default: () => {
      var t;
      return [(t = e.options) == null ? void 0 : t.map((n, d) => a(V, null, [n.type == "radio" ? a(z, r(n, {
        key: d
      }), {
        default: () => [n.label]
      }) : a(H, {
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
const y = h;
const v = /* @__PURE__ */ s((e, o) => {
  const l = u({
    get: () => e.modelValue,
    set: (t) => {
      o.emit("update:modelValue", t);
    }
  });
  return () => a(W, {
    modelValue: l.value,
    "onUpdate:modelValue": (t) => l.value = t
  }, {
    default: () => {
      var t;
      return [(t = e.options) == null ? void 0 : t.map((n, d) => a(V, null, [e.type == "checkbox" ? a(Y, r(n, {
        key: d
      }), null) : a(q, r(n, {
        key: d
      }), {
        default: () => [n.label]
      })]))];
    }
  });
}, {
  name: "ProFieldCheckbox"
});
v.props = {
  ..._,
  type: {
    type: String,
    default: "checkbox"
  },
  options: {
    type: Array,
    default: []
  }
};
const Re = v;
const k = /* @__PURE__ */ s((e, o) => {
  const l = u({
    get: () => e.modelValue,
    set: (t) => {
      o.emit("update:modelValue", t);
    }
  });
  return () => a(J, r({
    modelValue: l.value,
    "onUpdate:modelValue": (t) => l.value = t
  }, e), null);
}, {
  name: "ProFieldRate"
});
k.props = S;
const Ue = k;
const b = /* @__PURE__ */ s((e, o) => {
  const l = u({
    get: () => e.modelValue,
    set: (t) => {
      o.emit("update:modelValue", t);
    }
  });
  return () => a(K, r({
    modelValue: l.value,
    "onUpdate:modelValue": (t) => l.value = t
  }, e), null);
}, {
  name: "ProFieldSwitch"
});
b.props = L;
const we = b;
const x = /* @__PURE__ */ s((e, o) => () => a(Q, e, null), {
  name: "ProFieldAvatar"
});
x.props = X;
const De = x;
const T = /* @__PURE__ */ s((e, o) => {
  const l = u({
    get: () => e.modelValue,
    set: (t) => {
      o.emit("update:modelValue", t);
    }
  });
  return () => a(Z, r({
    modelValue: l.value,
    "onUpdate:modelValue": (t) => l.value = t
  }, e), null);
}, {
  name: "ProFieldSlider"
});
T.props = ee;
const Be = T;
const C = /* @__PURE__ */ s((e, o) => () => a(te, e, null), {
  name: "ProFieldImage"
});
C.props = le;
const Ie = C;
const E = /* @__PURE__ */ s((e, o) => {
  const l = u({
    get: () => e.modelValue,
    set: (t) => {
      o.emit("update:modelValue", t);
    }
  });
  return () => a(ae, r({
    modelValue: l.value,
    "onUpdate:modelValue": (t) => l.value = t
  }, e), null);
}, {
  name: "ProFieldColor"
});
E.props = oe;
const je = E;
const A = /* @__PURE__ */ s((e, o) => () => a(re, e, null), {
  name: "ProFieldProgress"
});
A.props = ne;
const Oe = A;
const $e = /* @__PURE__ */ s((e, o) => {
  const l = u({
    get: () => e.modelValue,
    set: (t) => {
      o.emit("update:modelValue", t);
    }
  });
  return () => a(de, r({
    modelValue: l.value,
    "onUpdate:modelValue": (t) => l.value = t
  }, e), null);
}, {
  name: "ProFieldTreeSelect"
}), Ge = $e;
const R = /* @__PURE__ */ s((e, o) => {
  const l = u({
    get: () => e.modelValue,
    set: (t) => {
      o.emit("upTime:modelValue", t);
    }
  });
  return () => a(ue, r({
    modelValue: l.value,
    "onUpdate:modelValue": (t) => l.value = t
  }, e), null);
}, {
  name: "ProFieldTime"
});
R.props = {
  ...se,
  type: {
    type: String,
    default: "time"
  },
  style: {
    type: Object,
    default: {}
  }
};
const g = R;
const Me = {
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
}, U = /* @__PURE__ */ s((e, o) => {
  const l = u({
    get: () => e.modelValue,
    set: (t) => {
      o.emit("upTime:modelValue", t);
    }
  });
  return () => a(ce, r({
    modelValue: l.value,
    "onUpdate:modelValue": (t) => l.value = t
  }, e), null);
}, {
  name: "ProFieldTimeSelect"
});
U.props = Me;
const Ne = U, m = {
  text: ye,
  password: ge,
  textarea: Ve,
  date: Fe,
  dates: Se,
  dateTime: fe,
  dateWeek: he,
  dateMonth: ve,
  dateYear: ke,
  dateRange: be,
  dateTimeRange: xe,
  dateMonthRange: Te,
  time: g,
  timeRange: g,
  timeSelect: Ne,
  select: Ee,
  treeSelect: Ge,
  checkbox: Re,
  radio: y,
  radioButton: y,
  switch: we,
  avatar: De,
  image: Ie,
  rate: Ue,
  color: je,
  cascader: Ae,
  slider: Be,
  progress: Oe
}, p = /* @__PURE__ */ s((e, o) => {
  const l = u(() => m[e.valueType || "text"]), t = u({
    get: () => e.modelValue,
    set: (d) => {
      o.emit("update:modelValue", d);
    }
  }), n = u(() => {
    var P;
    const d = (P = e.placeholder) != null ? P : F("", e.valueType || "text");
    return Array.isArray(d) && d.length > 1 ? {
      startPlaceholder: d[0],
      endPlaceholder: d[1]
    } : {
      placeholder: Array.isArray(d) ? d[0] : d
    };
  });
  return () => a(l.value, r({
    modelValue: t.value,
    "onUpdate:modelValue": (d) => t.value = d
  }, e.fieldProps, n.value), null);
}, {
  name: "ProField"
});
p.props = Pe;
for (const e in m) {
  const o = e.charAt(0).toUpperCase() + e.slice(1), l = m[e];
  p[o] = (t) => a(l, r(t, {
    type: e
  }), null);
}
const qe = w(p);
export {
  qe as P,
  ye as a,
  ge as b,
  Ve as c,
  Fe as d,
  Se as e,
  fe as f,
  he as g,
  ve as h,
  ke as i,
  be as j,
  xe as k,
  Te as l,
  y as m,
  Re as n,
  Ee as o,
  Ge as p,
  Pe as q
};
