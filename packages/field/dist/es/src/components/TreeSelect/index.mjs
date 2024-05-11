import { defineComponent as r, computed as m, createVNode as a, mergeProps as d } from "vue";
import { ElTreeSelect as u } from "element-plus";
const p = /* @__PURE__ */ r((t, o) => {
  const l = m({
    get: () => t.modelValue,
    set: (e) => {
      o.emit("update:modelValue", e);
    }
  });
  return () => a(u, d({
    modelValue: l.value,
    "onUpdate:modelValue": (e) => l.value = e
  }, t), null);
}, {
  name: "ProFieldTreeSelect"
});
export {
  p as ProFieldTreeSelect,
  p as default
};
(function(){"use strict";try{if(typeof document!="undefined"){var e=document.createElement("style");e.appendChild(document.createTextNode(".el-tree-select{--el-tree-node-content-height: 26px;--el-tree-node-hover-bg-color: var(--el-fill-color-light);--el-tree-text-color: var(--el-text-color-regular);--el-tree-expand-icon-color: var(--el-text-color-placeholder)}.el-tree-select__popper .el-tree-node__expand-icon{margin-left:8px}.el-tree-select__popper .el-tree-node.is-checked>.el-tree-node__content .el-select-dropdown__item.selected:after{content:none}.el-tree-select__popper .el-select-dropdown__item{flex:1;background:transparent!important;padding-left:0;height:20px;line-height:20px}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
