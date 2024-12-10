import {
  ElIcon,
  iconProps
} from "./chunk-ZIUYPRRG.js";
import {
  dist_exports
} from "./chunk-YQQYPD6E.js";
import {
  computed,
  createVNode,
  defineComponent,
  mergeProps
} from "./chunk-GQRJDRKQ.js";

// ../node_modules/.pnpm/@element-plus-ui+pro-icon@1.2.1_@vue+composition-api@1.7.2_vue@3.5.4_typescript@5.6.2___eleme_xntdmr726g5r47ghuzi4sw5bzi/node_modules/@element-plus-ui/pro-icon/es/utils/vue/install.mjs
var f = (c, o) => {
  if (c.install = (s) => {
    for (const n of [c, ...Object.values(o != null ? o : {})])
      s.component(n.name, n);
  }, o)
    for (const [s, n] of Object.entries(o))
      c[s] = n;
  return c;
};

// ../node_modules/.pnpm/@element-plus-ui+pro-icon@1.2.1_@vue+composition-api@1.7.2_vue@3.5.4_typescript@5.6.2___eleme_xntdmr726g5r47ghuzi4sw5bzi/node_modules/@element-plus-ui/pro-icon/es/Icon.mjs
import "D:/Users/wang936926/Desktop/workspace/element-plus-pro/node_modules/.pnpm/element-plus@2.8.8_@vue+composition-api@1.7.2_vue@3.5.4_typescript@5.6.2___vue@3.5.4_typescript@5.6.2_/node_modules/element-plus/theme-chalk/index.css";

// ../node_modules/.pnpm/@element-plus-ui+pro-icon@1.2.1_@vue+composition-api@1.7.2_vue@3.5.4_typescript@5.6.2___eleme_xntdmr726g5r47ghuzi4sw5bzi/node_modules/@element-plus-ui/pro-icon/es/typing.mjs
var p = {
  ...iconProps,
  name: {
    type: String,
    default: ""
  }
};

// ../node_modules/.pnpm/@element-plus-ui+pro-icon@1.2.1_@vue+composition-api@1.7.2_vue@3.5.4_typescript@5.6.2___eleme_xntdmr726g5r47ghuzi4sw5bzi/node_modules/@element-plus-ui/pro-icon/es/Icon.mjs
var e = defineComponent((n, r) => {
  const m2 = computed(() => {
    var o;
    return dist_exports[(o = n.name) != null ? o : "none"];
  });
  return () => createVNode(ElIcon, n, {
    default: () => {
      var o, l;
      return [((l = (o = r.slots) == null ? void 0 : o.default) == null ? void 0 : l.call(o)) || m2.value && createVNode(m2.value, null, null)];
    }
  });
}, {
  name: "ProIcon"
});
e.props = p;
for (const n in dist_exports)
  e[n] = (r) => createVNode(e, mergeProps(r, {
    name: n
  }), null);
var v = e;

// ../node_modules/.pnpm/@element-plus-ui+pro-icon@1.2.1_@vue+composition-api@1.7.2_vue@3.5.4_typescript@5.6.2___eleme_xntdmr726g5r47ghuzi4sw5bzi/node_modules/@element-plus-ui/pro-icon/es/index.mjs
var m = f(v);

export {
  p,
  m
};
//# sourceMappingURL=chunk-GY2MLGMF.js.map
