import { defineComponent as o, createVNode as r } from "vue";
import { ElImage as m } from "element-plus";
import { proFieldImageProps as p } from "./props.mjs";
const t = /* @__PURE__ */ o((e) => () => r(m, e, null), {
  name: "ProFieldImage"
});
t.props = p;
export {
  t as ProFieldImage,
  t as default,
  p as proFieldImageProps
};
(function(){"use strict";try{if(typeof document!="undefined"){var e=document.createElement("style");e.appendChild(document.createTextNode(".el-image__error,.el-image__placeholder,.el-image__wrapper,.el-image__inner{width:100%;height:100%}.el-image{position:relative;display:inline-block;overflow:hidden}.el-image__inner{vertical-align:top;opacity:1}.el-image__inner.is-loading{opacity:0}.el-image__wrapper{position:absolute;top:0;left:0}.el-image__placeholder{background:var(--el-fill-color-light)}.el-image__error{display:flex;justify-content:center;align-items:center;font-size:14px;background:var(--el-fill-color-light);color:var(--el-text-color-placeholder);vertical-align:middle}.el-image__preview{cursor:pointer}")),document.head.appendChild(e)}}catch(i){console.error("vite-plugin-css-injected-by-js",i)}})();
