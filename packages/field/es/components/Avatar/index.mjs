import { defineComponent as o, createVNode as t } from "vue";
import { ElAvatar as e } from "element-plus";
import { proFieldAvatar as a } from "./props.mjs";
const m = /* @__PURE__ */ o((r) => () => t(e, r, null), {
  name: "ProFieldAvatar"
});
m.props = a;
export {
  m as ProFieldAvatar,
  m as default,
  a as proFieldAvatar
};
(function(){"use strict";try{if(typeof document!="undefined"){var a=document.createElement("style");a.appendChild(document.createTextNode(".el-avatar{--el-avatar-text-color: var(--el-color-white);--el-avatar-bg-color: var(--el-text-color-disabled);--el-avatar-text-size: 14px;--el-avatar-icon-size: 18px;--el-avatar-border-radius: var(--el-border-radius-base);--el-avatar-size-large: 56px;--el-avatar-size-small: 24px;--el-avatar-size: 40px;display:inline-flex;justify-content:center;align-items:center;box-sizing:border-box;text-align:center;overflow:hidden;color:var(--el-avatar-text-color);background:var(--el-avatar-bg-color);width:var(--el-avatar-size);height:var(--el-avatar-size);font-size:var(--el-avatar-text-size)}.el-avatar>img{display:block;width:100%;height:100%}.el-avatar--circle{border-radius:50%}.el-avatar--square{border-radius:var(--el-avatar-border-radius)}.el-avatar--icon{font-size:var(--el-avatar-icon-size)}.el-avatar--small{--el-avatar-size: 24px}.el-avatar--large{--el-avatar-size: 56px}")),document.head.appendChild(a)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();