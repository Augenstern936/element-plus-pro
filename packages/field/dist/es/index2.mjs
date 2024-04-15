import { defineComponent as d, createVNode as o, computed as u, mergeProps as a, Fragment as P } from "vue";
import { avatarProps as T, ElAvatar as R, calendarProps as C, ElCascader as E, checkboxProps as O, ElCheckboxGroup as j, ElCheckbox as U, ElCheckboxButton as $, colorPickerProps as w, ElColorPicker as A, datePickerProps as D, ElDatePicker as B, imageProps as I, ElImage as G, inputProps as M, ElInput as z, progressProps as H, ElProgress as W, radioProps as Y, ElRadioGroup as N, ElRadio as _, ElRadioButton as q, rateProps as J, ElRate as K, ElSelect as L, ElOption as Q, sliderProps as X, ElSlider as Z, switchProps as ee, ElSwitch as te, timePickerDefaultProps as le, ElTimePicker as oe, useSizeProp as ae, ElTimeSelect as re, ElTreeSelect as ne } from "element-plus";
import { formatPlaceholder as de } from "@element-plus/pro-utils";
import { Clock as ue, CircleClose as se } from "@element-plus/icons-vue";
const ce = {
  ...T,
  style: {
    type: Object,
    default: {}
  }
}, y = /* @__PURE__ */ d((e) => () => o(R, e, null), {
  name: "ProFieldAvatar"
});
y.props = ce;
const ie = y;
const me = {
  ...C,
  style: {
    type: Object,
    default: {}
  }
}, F = /* @__PURE__ */ d((e, r) => {
  const l = u({
    get: () => e.modelValue,
    set: (t) => {
      r.emit("update:modelValue", t);
    }
  });
  return () => o(E, a({
    modelValue: l.value,
    "onUpdate:modelValue": (t) => l.value = t
  }, e), null);
}, {
  name: "ProFieldCascader"
});
F.props = me;
const pe = F;
const Pe = {
  ...O,
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
}, g = /* @__PURE__ */ d((e, r) => {
  const l = u({
    get: () => e.modelValue,
    set: (t) => {
      r.emit("update:modelValue", t);
    }
  });
  return () => o(j, {
    modelValue: l.value,
    "onUpdate:modelValue": (t) => l.value = t
  }, {
    default: () => {
      var t;
      return [(t = e.options) == null ? void 0 : t.map((n, s) => o(P, null, [e.type == "checkbox" ? o(U, a(n, {
        key: s
      }), null) : o($, a(n, {
        key: s
      }), {
        default: () => [n.label]
      })]))];
    }
  });
}, {
  name: "ProFieldCheckbox"
});
g.props = Pe;
const ye = g;
const Fe = {
  ...w,
  style: {
    type: Object,
    default: {}
  }
}, V = /* @__PURE__ */ d((e, r) => {
  const l = u({
    get: () => e.modelValue,
    set: (t) => {
      r.emit("update:modelValue", t);
    }
  });
  return () => o(A, a({
    modelValue: l.value,
    "onUpdate:modelValue": (t) => l.value = t
  }, e), null);
}, {
  name: "ProFieldColor"
});
V.props = Fe;
const ge = V;
const c = /* @__PURE__ */ d((e, r) => {
  const l = u({
    get: () => e.modelValue,
    set: (n) => {
      r.emit("update:modelValue", n);
    }
  }), t = u(() => {
    var s;
    const n = (s = e.placeholder) != null ? s : de("", e.type || "text");
    return Array.isArray(n) && n.length > 1 ? {
      startPlaceholder: n[0],
      endPlaceholder: n[1]
    } : {
      placeholder: Array.isArray(n) ? n[0] : n
    };
  });
  return () => o(B, a({
    modelValue: l.value,
    "onUpdate:modelValue": (n) => l.value = n
  }, e, t.value), null);
});
c.props = {
  ...D,
  placeholder: {
    type: [String, Array],
    default: void 0
  },
  style: {
    type: Object,
    default: {}
  }
};
const Ve = (e) => o(c, a(e, {
  type: "date"
}), null), fe = (e) => o(c, a(e, {
  type: "dates"
}), null), Se = (e) => o(c, a(e, {
  type: "datetime"
}), null), he = (e) => o(c, a(e, {
  type: "week"
}), null), ve = (e) => o(c, a(e, {
  type: "month"
}), null), be = (e) => o(c, a(e, {
  type: "year"
}), null), ke = (e) => o(c, a(e, {
  type: "daterange"
}), null), xe = (e) => o(c, a(e, {
  type: "datetimerange"
}), null), Te = (e) => o(c, a(e, {
  type: "monthrange"
}), null);
const Re = {
  ...I,
  style: {
    type: Object,
    default: {}
  }
}, f = /* @__PURE__ */ d((e) => () => o(G, e, null), {
  name: "ProFieldImage"
});
f.props = Re;
const Ce = f;
const i = /* @__PURE__ */ d((e, r) => {
  const l = u({
    get: () => e.modelValue,
    set: (t) => {
      r.emit("update:modelValue", t);
    }
  });
  return () => o(z, a({
    modelValue: l.value,
    "onUpdate:modelValue": (t) => l.value = t
  }, e), null);
});
i.props = {
  ...M,
  type: {
    type: String,
    default: "text"
  }
};
const Ee = (e) => o(i, a(e, {
  type: "text"
}), null), Oe = (e) => o(i, a(e, {
  type: "password"
}), null), je = (e) => o(i, a(e, {
  type: "textarea"
}), null);
const Ue = {
  ...H,
  style: {
    type: Object,
    default: {}
  }
}, S = /* @__PURE__ */ d((e) => () => o(W, e, null), {
  name: "ProFieldProgress"
});
S.props = Ue;
const $e = S;
const we = {
  ...Y,
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
}, h = /* @__PURE__ */ d((e, r) => {
  const l = u({
    get: () => e.modelValue,
    set: (t) => {
      r.emit("update:modelValue", t);
    }
  });
  return () => o(N, {
    modelValue: l.value,
    "onUpdate:modelValue": (t) => l.value = t
  }, {
    default: () => {
      var t;
      return [(t = e.options) == null ? void 0 : t.map((n, s) => o(P, null, [n.type == "radio" ? o(_, a(n, {
        key: s
      }), {
        default: () => [n.label]
      }) : o(q, {
        label: n.value,
        key: s
      }, {
        default: () => [n.label]
      })]))];
    }
  });
}, {
  name: "ProFieldRadio"
});
h.props = we;
const p = h;
const Ae = {
  ...J,
  style: {
    type: Object,
    default: {}
  }
}, v = /* @__PURE__ */ d((e, r) => {
  const l = u({
    get: () => e.modelValue,
    set: (t) => {
      r.emit("update:modelValue", t);
    }
  });
  return () => o(K, a({
    modelValue: l.value,
    "onUpdate:modelValue": (t) => l.value = t
  }, e), null);
}, {
  name: "ProFieldRate"
});
v.props = Ae;
const De = v;
const Be = /* @__PURE__ */ d((e, r) => {
  const l = u({
    get: () => e.modelValue,
    set: (t) => {
      r.emit("update:modelValue", t);
    }
  });
  return () => o(L, {
    modelValue: l.value,
    "onUpdate:modelValue": (t) => l.value = t
  }, {
    default: () => {
      var t;
      return [(t = e.options) == null ? void 0 : t.map((n, s) => o(Q, a(n, {
        key: s
      }), {
        default: () => [n.label]
      }))];
    }
  });
}, {
  name: "ProFieldSelect"
}), Ie = Be;
const Ge = {
  ...X,
  style: {
    type: Object,
    default: {}
  }
}, b = /* @__PURE__ */ d((e, r) => {
  const l = u({
    get: () => e.modelValue,
    set: (t) => {
      r.emit("update:modelValue", t);
    }
  });
  return () => o(Z, a({
    modelValue: l.value,
    "onUpdate:modelValue": (t) => l.value = t
  }, e), null);
}, {
  name: "ProFieldSlider"
});
b.props = Ge;
const Me = b;
const ze = {
  ...ee,
  style: {
    type: Object,
    default: {}
  }
}, k = /* @__PURE__ */ d((e, r) => {
  const l = u({
    get: () => e.modelValue,
    set: (t) => {
      r.emit("update:modelValue", t);
    }
  });
  return () => o(te, a({
    modelValue: l.value,
    "onUpdate:modelValue": (t) => l.value = t
  }, e), null);
}, {
  name: "ProFieldSwitch"
});
k.props = ze;
const He = k;
const m = /* @__PURE__ */ d((e, r) => {
  const l = u({
    get: () => e.modelValue,
    set: (t) => {
      r.emit("upTime:modelValue", t);
    }
  });
  return () => o(oe, a({
    modelValue: l.value,
    "onUpdate:modelValue": (t) => l.value = t
  }, e), null);
});
m.props = {
  ...le,
  style: {
    type: Object,
    default: {}
  }
};
const We = (e) => o(m, a(e, {
  isRange: !1
}), null), Ye = (e) => o(m, a(e, {
  isRange: !0
}), null);
const Ne = {
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
  size: ae,
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
    default: () => ue
  },
  clearIcon: {
    type: [String, Object],
    default: () => se
  },
  style: {
    type: Object,
    default: {}
  }
}, x = /* @__PURE__ */ d((e, r) => {
  const l = u({
    get: () => e.modelValue,
    set: (t) => {
      r.emit("upTime:modelValue", t);
    }
  });
  return () => o(re, a({
    modelValue: l.value,
    "onUpdate:modelValue": (t) => l.value = t
  }, e), null);
}, {
  name: "ProFieldTimeSelect"
});
x.props = Ne;
const _e = x;
const qe = /* @__PURE__ */ d((e, r) => {
  const l = u({
    get: () => e.modelValue,
    set: (t) => {
      r.emit("update:modelValue", t);
    }
  });
  return () => o(ne, a({
    modelValue: l.value,
    "onUpdate:modelValue": (t) => l.value = t
  }, e), null);
}, {
  name: "ProFieldTreeSelect"
}), Je = qe, Ze = {
  text: Ee,
  password: Oe,
  textarea: je,
  date: Ve,
  dates: fe,
  dateTime: Se,
  dateWeek: he,
  dateMonth: ve,
  dateYear: be,
  dateRange: ke,
  dateTimeRange: xe,
  dateMonthRange: Te,
  time: We,
  timeRange: Ye,
  timeSelect: _e,
  select: Ie,
  treeSelect: Je,
  checkbox: ye,
  radio: p,
  radioButton: p,
  switch: He,
  avatar: ie,
  image: Ce,
  rate: De,
  color: ge,
  cascader: pe,
  slider: Me,
  progress: $e
};
export {
  Ze as default
};
