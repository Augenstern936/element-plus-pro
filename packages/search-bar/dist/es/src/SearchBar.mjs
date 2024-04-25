import { defineComponent as W, ref as v, computed as A, watch as K, onMounted as $, createVNode as e, Fragment as g, mergeProps as C, toRaw as E, isVNode as q } from "vue";
import { ArrowDown as G, ArrowUp as H, MoreFilled as T } from "@element-plus/icons-vue";
import { withInstall as J } from "@element-plus/pro-utils";
import { ElForm as L, ElFormItem as V, ElButton as c, ElIcon as Q, ElDropdown as j, ElDropdownMenu as I, ElDropdownItem as O } from "element-plus";
import X from "../node_modules/.pnpm/mitt@3.0.1/node_modules/mitt/dist/mitt.mjs";
import Y from "./components/index.mjs";
import Z from "./props.mjs";
import "./style/index.scss.mjs";
function _(u) {
  return typeof u == "function" || Object.prototype.toString.call(u) === "[object Object]" && !q(u);
}
const z = /* @__PURE__ */ W((u, s) => {
  const {
    inline: w,
    modelValue: k = {},
    items: h,
    span: R = 3,
    actions: y
  } = u, B = X(), m = v(), S = v(), D = Object.keys(k).length ? k : {}, i = v(D), d = v(!1), f = A(() => h == null ? void 0 : h.sort((l, o) => {
    const r = o != null && o.order ? o.order : 0;
    return (l != null && l.order ? l.order : r + 1) + r;
  })), p = A(() => {
    var o, r;
    return (s.slots["right-tools"] ? (r = (o = s.slots)["right-tools"]) == null ? void 0 : r.call(o) : []).filter(({
      type: t
    }) => String(t) != "Symbol(Comment)");
  }), P = () => s.emit("search", E(i.value)), F = () => S.value.resetFields(), b = (l) => s.emit("onActions", l);
  s.expose({
    resetFields: F
  }), K(() => i, (l) => {
    s.emit("update:modelValue", l.value);
  }, {
    deep: !0
  });
  const M = () => Array.isArray(y) && y.length ? e(g, null, [y.map((l, o) => l != null && l.content ? e(c, C(l, {
    onClick: () => b(o)
  }), {
    default: () => [l.content]
  }) : l)]) : e(g, null, [e(c, {
    type: "primary",
    onClick: P
  }, {
    default: () => [u.searchText]
  }), e(c, {
    onClick: F
  }, {
    default: () => [u.resetText]
  })]), N = () => {
    const l = () => {
      if (p.value.length > 1) {
        let t;
        return e(j, null, {
          default: () => [e(c, {
            icon: T,
            circle: !0
          }, null)],
          dropdown: e(I, null, _(t = p.value.map((n, a) => e(O, {
            key: a,
            onClick: () => s.emit("tools", i.value, a)
          }, {
            default: () => [[n]]
          }))) ? t : {
            default: () => [t]
          })
        });
      }
      return [p.value[0]];
    }, o = () => {
      const t = u.rightTools;
      if (t)
        if (Array.isArray(t) && t.length) {
          let n;
          return e(j, null, {
            default: () => [e(c, {
              icon: T,
              circle: !0
            }, null)],
            dropdown: e(I, null, _(n = t.map((a, U) => e(O, {
              key: U
            }, {
              default: () => [r(a) || a]
            }))) ? n : {
              default: () => [n]
            })
          });
        } else
          return Reflect.ownKeys(t).length ? r(t) : t;
    }, r = (t, n) => {
      var a;
      return !t.__v_isVNode && ((a = Object.keys(t)) != null && a.length) ? e(c, C(t, {
        key: n || "tool",
        onClick: () => s.emit("tools", E(i.value), n)
      }), {
        default: () => [t.content]
      }) : null;
    };
    return e("div", {
      class: "tools-container"
    }, [p.value.length ? l() : o()]);
  }, x = (l) => {
    new ResizeObserver(() => {
      m.value.offsetWidth;
    }).observe(l);
  };
  return $(() => {
    m.value && x(m.value);
  }), () => e("div", {
    class: "pro-search-bar",
    style: {
      display: "flex",
      justifyContent: "space-between",
      flexDirection: w ? "row" : "column"
    }
  }, [f.value.length > 0 && e(g, null, [e("div", {
    ref: m
  }, [e(L, {
    ref: S,
    model: i.value,
    inline: w,
    class: ["search-bar", [d.value ? "expand" : "inexpand"]]
  }, {
    default: () => [f.value.slice(0, d.value ? f.value.length : R).map((l) => {
      const {
        dataField: o,
        label: r,
        labelWidth: t
      } = l, n = l.valueType == "checkbox" ? "" : r;
      return e(V, {
        prop: o,
        label: n,
        "label-width": t
      }, {
        default: () => [e(Y, {
          modelValue: i.value[o],
          "onUpdate:modelValue": (a) => i.value[o] = a,
          emitter: B,
          formItem: l
        }, null)]
      });
    }), e(V, null, {
      default: () => [M(), f.value.length > R && e(c, {
        type: "primary",
        link: !0,
        onClick: () => d.value = !d.value
      }, {
        default: () => [e(Q, null, {
          default: () => [d.value ? e(H, null, null) : e(G, null, null)]
        }), e("span", null, [d.value ? "收起" : "展开"])]
      })]
    })]
  })]), e(N, null, null)])]);
}, {
  name: "ProSearchBar"
});
z.props = Z;
const se = J(z);
export {
  se as default
};
