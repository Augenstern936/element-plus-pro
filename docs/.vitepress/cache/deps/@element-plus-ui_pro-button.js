import {
  ElButton,
  ElMessageBox,
  ElPopconfirm
} from "./chunk-ZIUYPRRG.js";
import "./chunk-XNQOMRZN.js";
import {
  warning_filled_default
} from "./chunk-YQQYPD6E.js";
import {
  isObject
} from "./chunk-2BDEUP5R.js";
import "./chunk-DDJLV6MK.js";
import {
  computed,
  createBlock,
  createTextVNode,
  createVNode,
  defineComponent,
  isRef,
  mergeProps,
  openBlock,
  ref,
  renderSlot,
  unref,
  withCtx,
  withModifiers
} from "./chunk-GQRJDRKQ.js";
import {
  toDisplayString
} from "./chunk-UKAMLJMJ.js";
import "./chunk-MTI3AIJG.js";

// ../node_modules/.pnpm/@element-plus-ui+pro-button@1.0.0_@vue+composition-api@1.7.2_vue@3.5.4_typescript@5.6.2___ele_gwcr6bogesa6ymwhca3c72iylu/node_modules/@element-plus-ui/pro-button/es/utils/vue/install.mjs
var f = (c, o) => {
  if (c.install = (s) => {
    for (const n of [c, ...Object.values(o != null ? o : {})])
      s.component(n.name, n);
  }, o)
    for (const [s, n] of Object.entries(o))
      c[s] = n;
  return c;
};

// ../node_modules/.pnpm/@element-plus-ui+pro-button@1.0.0_@vue+composition-api@1.7.2_vue@3.5.4_typescript@5.6.2___ele_gwcr6bogesa6ymwhca3c72iylu/node_modules/@element-plus-ui/pro-button/es/Button.vue.mjs
import "D:/Users/wang936926/Desktop/workspace/element-plus-pro/node_modules/.pnpm/element-plus@2.8.8_@vue+composition-api@1.7.2_vue@3.5.4_typescript@5.6.2___vue@3.5.4_typescript@5.6.2_/node_modules/element-plus/theme-chalk/base.css";
import "D:/Users/wang936926/Desktop/workspace/element-plus-pro/node_modules/.pnpm/element-plus@2.8.8_@vue+composition-api@1.7.2_vue@3.5.4_typescript@5.6.2___vue@3.5.4_typescript@5.6.2_/node_modules/element-plus/theme-chalk/el-overlay.css";
import "D:/Users/wang936926/Desktop/workspace/element-plus-pro/node_modules/.pnpm/element-plus@2.8.8_@vue+composition-api@1.7.2_vue@3.5.4_typescript@5.6.2___vue@3.5.4_typescript@5.6.2_/node_modules/element-plus/theme-chalk/el-message-box.css";
import "D:/Users/wang936926/Desktop/workspace/element-plus-pro/node_modules/.pnpm/element-plus@2.8.8_@vue+composition-api@1.7.2_vue@3.5.4_typescript@5.6.2___vue@3.5.4_typescript@5.6.2_/node_modules/element-plus/theme-chalk/el-button.css";
import "D:/Users/wang936926/Desktop/workspace/element-plus-pro/node_modules/.pnpm/element-plus@2.8.8_@vue+composition-api@1.7.2_vue@3.5.4_typescript@5.6.2___vue@3.5.4_typescript@5.6.2_/node_modules/element-plus/theme-chalk/el-popconfirm.css";
var R = defineComponent({
  __name: "Button",
  props: {
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
    tag: {},
    tip: {},
    title: {}
  },
  emits: ["click"],
  setup(x, { emit: w }) {
    const l = w, e = x, p = ref(false), s = computed(() => {
      var t, o;
      return typeof e.tip == "string" ? "message-box" : (o = (t = e.tip) == null ? void 0 : t.mode) != null ? o : "message-box";
    }), f2 = () => {
      var i, u, m, d;
      if (!e.tip)
        return l("click");
      let t = true, o = typeof e.tip == "string" ? e.tip : "";
      if (isObject(e.tip)) {
        const r = e.tip;
        o = s.value === "popconfirm" ? r.title : r.message, t = (m = (u = (i = e.tip) == null ? void 0 : i.before) == null ? void 0 : u.call(i)) != null ? m : true;
      }
      if (!o)
        return l("click");
      if (t === true) {
        if (s.value == "popconfirm") {
          p.value = true;
          return;
        }
        const r = isObject(e.tip) ? e.tip : {};
        ElMessageBox.confirm(o, (d = e.tip.title) != null ? d : "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
          message: o,
          ...r
        }).then(() => {
          l("click");
        });
      }
    };
    return (t, o) => unref(s) == "popconfirm" && t.tip.title ? (openBlock(), createBlock(unref(ElPopconfirm), mergeProps({ key: 0 }, t.tip, {
      visible: unref(p),
      "onUpdate:visible": o[0] || (o[0] = (i) => isRef(p) ? p.value = i : null),
      title: t.tip.title,
      icon: unref(warning_filled_default),
      trigger: "",
      onConfirm: o[1] || (o[1] = (i) => l("click"))
    }), {
      reference: withCtx(() => [
        createVNode(
          unref(ElButton),
          mergeProps(e, {
            onClick: withModifiers(f2, ["stop"])
          }),
          {
            default: withCtx(() => [
              renderSlot(t.$slots, "default", {}, () => [
                createTextVNode(
                  toDisplayString(t.title),
                  1
                  /* TEXT */
                )
              ])
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
    }, 16, ["visible", "title", "icon"])) : (openBlock(), createBlock(
      unref(ElButton),
      mergeProps({ key: 1 }, e, {
        onClick: withModifiers(f2, ["stop"])
      }),
      {
        default: withCtx(() => [
          renderSlot(t.$slots, "default", {}, () => [
            createTextVNode(
              toDisplayString(t.title),
              1
              /* TEXT */
            )
          ])
        ]),
        _: 3
        /* FORWARDED */
      },
      16
      /* FULL_PROPS */
    ));
  }
});

// ../node_modules/.pnpm/@element-plus-ui+pro-button@1.0.0_@vue+composition-api@1.7.2_vue@3.5.4_typescript@5.6.2___ele_gwcr6bogesa6ymwhca3c72iylu/node_modules/@element-plus-ui/pro-button/es/index.mjs
var a = f(R);
export {
  a as ProButton,
  a as default
};
//# sourceMappingURL=@element-plus-ui_pro-button.js.map
