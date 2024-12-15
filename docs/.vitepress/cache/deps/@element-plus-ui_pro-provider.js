import "./chunk-V6ZDW5E6.js";
import {
  defineComponent,
  provide
} from "./chunk-FNEGEEL4.js";
import "./chunk-JVSYCCQQ.js";
import "./chunk-MTI3AIJG.js";

// ../node_modules/.pnpm/@element-plus-ui+pro-provider@1.0.0_vue@3.5.13_typescript@5.7.2_/node_modules/@element-plus-ui/pro-provider/es/utils/vue/install.mjs
var f = (c, o) => {
  if (c.install = (s) => {
    for (const n of [c, ...Object.values(o != null ? o : {})])
      s.component(n.name, n);
  }, o)
    for (const [s, n] of Object.entries(o))
      c[s] = n;
  return c;
};

// ../node_modules/.pnpm/@element-plus-ui+pro-provider@1.0.0_vue@3.5.13_typescript@5.7.2_/node_modules/@element-plus-ui/pro-provider/es/index.mjs
var u = defineComponent({
  name: "ProProvider",
  props: {
    value: {
      type: Object,
      default: {}
    }
  },
  setup(t, a) {
    if (t.value && Object.keys(t.value).length) {
      provide("provider-value", t.value);
      for (const e in t.value)
        Object.prototype.hasOwnProperty.call(t.value, e) && provide(e, t.value[e]);
    }
    return () => {
      var e, l;
      return (l = (e = a.slots) == null ? void 0 : e.default) == null ? void 0 : l.call(e);
    };
  }
});
var d = f(u);
export {
  u as ProProvider,
  d as default
};
//# sourceMappingURL=@element-plus-ui_pro-provider.js.map
