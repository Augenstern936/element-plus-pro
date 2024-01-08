import { defineComponent as s, computed as d, createVNode as l } from "vue";
import { withInstall as h, toCssUnitValue as r } from "@element-plus/pro-utils";
const u = {
  width: {
    type: [Number, String],
    default: "100%"
  },
  height: {
    type: [Number, String],
    default: "100%"
  }
}, o = /* @__PURE__ */ s((t, i) => {
  const a = d(() => ({
    width: r(t.width || "100%"),
    height: r(t.height || "100%")
  }));
  return () => {
    var e, n;
    return l("div", {
      class: "pro-center-container",
      style: a.value
    }, [(n = (e = i.slots).default) == null ? void 0 : n.call(e)]);
  };
}, {
  name: "ProCenterContainer"
});
o.props = u;
const m = h(o);
export {
  m as default
};
(function(){"use strict";try{if(typeof document!="undefined"){var e=document.createElement("style");e.appendChild(document.createTextNode(".pro-center-container{display:grid;place-items:center}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
