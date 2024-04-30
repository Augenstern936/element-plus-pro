import { defineComponent as g, computed as h, createVNode as t, mergeProps as E, Fragment as w, createTextVNode as j, isVNode as R } from "vue";
import "./style/index.scss.mjs";
import k from "./props.mjs";
import { withInstall as z, checkValueIsComponent as m } from "@element-plus/pro-utils";
import { ElTabs as I, ElTabPane as O, ElEmpty as C } from "element-plus";
import u from "@element-plus/pro-center-container";
function S(l) {
  return typeof l == "function" || Object.prototype.toString.call(l) === "[object Object]" && !R(l);
}
const T = /* @__PURE__ */ g((l, r) => {
  const i = h({
    get: () => l.modelValue,
    set: (n) => r.emit("update:modelValue", n)
  }), P = (n) => {
    r.emit("change", n), r.emit("update:modelValue", n);
  }, V = ({
    label: n,
    badge: e
  }) => (typeof e == "string" && Number.isNaN(Number(e)) ? (e = 0, console.warn("Badge field value incorrect!")) : e = Number(e), t(w, null, [n, j(" "), e ? t("span", {
    class: "badge"
  }, [e > 99 ? "99+" : e]) : ""])), v = (n) => {
    var c, d, b, y;
    const {
      value: e,
      empty: o,
      props: p = {},
      render: s
    } = n;
    if (r.slots[e])
      return (d = (c = r.slots)[e]) == null ? void 0 : d.call(c);
    if (s) {
      if (typeof s != "function")
        throw new TypeError("render not a function");
      const f = s(p), N = o && o != !0 ? t(u, null, S(o) ? o : {
        default: () => [o]
      }) : l.empty && l.empty != !0 ? t(u, null, {
        default: () => [l.empty]
      }) : t(C, {
        "image-size": 100
      }, null);
      return m(f) ? t(f, p, null) : f || N;
    }
    if (r.slots.default)
      return (y = (b = r.slots).default) == null ? void 0 : y.call(b);
    if (o === !1)
      return;
    if (o && o != !0)
      return t(u, null, {
        default: () => [m(o) ? t(o, null, null) : o]
      });
    const a = l.empty;
    if (a !== !1)
      return a && a !== !0 ? t(u, null, {
        default: () => [m(a) ? t(a, null, null) : a]
      }) : t(C, {
        "image-size": 100
      }, null);
  };
  return () => t(I, E({
    class: "pro-tabs",
    modelValue: i.value,
    "onUpdate:modelValue": (n) => i.value = n
  }, l.tabsProps, {
    "before-leave": l.beforeChange,
    onTabChange: P
  }), {
    default: () => {
      var n;
      return [(n = l.panes) == null ? void 0 : n.map((e) => t(O, {
        name: e.value,
        key: e.value
      }, {
        label: () => t(V, e, null),
        default: () => v(e)
      }))];
    }
  });
}, {
  name: "ProTabs"
});
T.props = k;
const q = z(T);
export {
  q as default
};
