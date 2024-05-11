import { defineComponent as a, computed as l, createVNode as m, mergeProps as d } from "vue";
import { ElRate as p } from "element-plus";
import { proFieldRateProps as u } from "./props.mjs";
const n = /* @__PURE__ */ a((o, r) => {
  const t = l({
    get: () => o.modelValue,
    set: (e) => {
      r.emit("update:modelValue", e);
    }
  });
  return () => m(p, d({
    modelValue: t.value,
    "onUpdate:modelValue": (e) => t.value = e
  }, o), null);
}, {
  name: "ProFieldRate"
});
n.props = u;
export {
  n as ProFieldRate,
  n as default,
  u as proFieldRateProps
};
(function(){"use strict";try{if(typeof document!="undefined"){var e=document.createElement("style");e.appendChild(document.createTextNode(".el-rate{--el-rate-height: 20px;--el-rate-font-size: var(--el-font-size-base);--el-rate-icon-size: 18px;--el-rate-icon-margin: 6px;--el-rate-void-color: var(--el-border-color-darker);--el-rate-fill-color: #f7ba2a;--el-rate-disabled-void-color: var(--el-fill-color);--el-rate-text-color: var(--el-text-color-primary)}.el-rate{display:inline-flex;align-items:center;height:32px}.el-rate:focus,.el-rate:active{outline:none}.el-rate__item{cursor:pointer;display:inline-block;position:relative;font-size:0;vertical-align:middle;color:var(--el-rate-void-color);line-height:normal}.el-rate .el-rate__icon{position:relative;display:inline-block;font-size:var(--el-rate-icon-size);margin-right:var(--el-rate-icon-margin);transition:var(--el-transition-duration)}.el-rate .el-rate__icon.hover{transform:scale(1.15)}.el-rate .el-rate__icon .path2{position:absolute;left:0;top:0}.el-rate .el-rate__icon.is-active{color:var(--el-rate-fill-color)}.el-rate__decimal{position:absolute;top:0;left:0;display:inline-block;overflow:hidden;color:var(--el-rate-fill-color)}.el-rate__decimal--box{position:absolute;top:0;left:0}.el-rate__text{font-size:var(--el-rate-font-size);vertical-align:middle;color:var(--el-rate-text-color)}.el-rate--large{height:40px}.el-rate--small{height:24px}.el-rate--small .el-rate__icon{font-size:14px}.el-rate.is-disabled .el-rate__item{cursor:auto;color:var(--el-rate-disabled-void-color)}")),document.head.appendChild(e)}}catch(l){console.error("vite-plugin-css-injected-by-js",l)}})();
