import { defineComponent as s, computed as l, createVNode as m } from "vue";
import "./styles/index.scss.mjs";
import p from "./props.mjs";
import { withInstall as c, toCssUnitValue as r } from "@element-plus/pro-utils";
const n = /* @__PURE__ */ s((t, i) => {
  const a = l(() => ({
    width: r(t.width || "100%"),
    height: r(t.height || "100%")
  }));
  return () => {
    var e, o;
    return m("div", {
      class: "pro-center-container",
      style: a.value
    }, [(o = (e = i.slots).default) == null ? void 0 : o.call(e)]);
  };
}, {
  name: "ProCenterContainer"
});
n.props = p;
const f = c(n);
export {
  f as default
};
