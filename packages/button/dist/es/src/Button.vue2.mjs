import { defineComponent as v, ref as x, computed as C, openBlock as c, createBlock as f, unref as r, withCtx as l, createVNode as T, mergeProps as u, withModifiers as m, renderSlot as d, createTextVNode as y, toDisplayString as B } from "vue";
import { ElPopconfirm as w, ElButton as g, ElMessageBox as E } from "element-plus";
import { WarningFilled as S } from "@element-plus/icons-vue";
const M = /* @__PURE__ */ v({
  __name: "Button",
  props: {
    tip: {},
    render: {},
    size: {},
    disabled: { type: Boolean },
    type: {},
    icon: {},
    nativeType: {},
    loading: { type: Boolean },
    loadingIcon: {},
    plain: { type: Boolean },
    text: { type: Boolean },
    link: { type: Boolean },
    bg: { type: Boolean },
    autofocus: { type: Boolean },
    round: { type: Boolean },
    circle: { type: Boolean },
    color: {},
    dark: { type: Boolean },
    autoInsertSpace: { type: Boolean },
    tag: {}
  },
  emits: ["click"],
  setup(k, { emit: b }) {
    const i = b, e = k, p = x(!1), a = C(() => {
      var t, o;
      return typeof e.tip == "string" ? "message-box" : (o = (t = e.tip) == null ? void 0 : t.mode) != null ? o : "message-box";
    }), s = (t) => {
      if (!e.tip)
        return i("click");
      let o = !0;
      typeof e.tip == "object" && typeof e.tip.before == "function" && (o = e.tip.before());
      const n = typeof e.tip == "string" ? e.tip : e.tip.text;
      if (!n)
        return i("click");
      if (o === !0) {
        if (a.value == "popconfirm") {
          p.value = !0;
          return;
        }
        E.confirm(n, "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(() => {
          i("click");
        });
      }
    };
    return (t, o) => a.value == "popconfirm" && t.tip.text ? (c(), f(r(w), {
      key: 0,
      visible: p.value,
      "onUpdate:visible": o[0] || (o[0] = (n) => p.value = n),
      title: t.tip.text,
      icon: r(S),
      "cancel-button-text": "取消",
      "confirm-button-text": "确定",
      trigger: "",
      onConfirm: o[1] || (o[1] = (n) => i("click"))
    }, {
      reference: l(() => [
        T(
          r(g),
          u(e, {
            onClick: m(s, ["stop"])
          }),
          {
            default: l(() => [
              d(t.$slots, "default", {}, () => [
                y(
                  B(t.render),
                  1
                  /* TEXT */
                )
              ], !0)
            ]),
            _: 3
            /* FORWARDED */
          },
          16
          /* FULL_PROPS */
        )
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["visible", "title", "icon"])) : (c(), f(
      r(g),
      u({ key: 1 }, e, {
        onClick: m(s, ["stop"])
      }),
      {
        default: l(() => [
          d(t.$slots, "default", {}, () => [
            y(
              B(t.render),
              1
              /* TEXT */
            )
          ], !0)
        ]),
        _: 3
        /* FORWARDED */
      },
      16
      /* FULL_PROPS */
    ));
  }
});
export {
  M as default
};
