"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),d=require("element-plus");require("../../../node_modules/.pnpm/registry.npmmirror.com_element-plus@2.4.1_vue@3.3.7/node_modules/element-plus/theme-chalk/src/tree-select.scss.js");const u=e.defineComponent((l,o)=>{const r=e.computed({get:()=>l.modelValue,set:t=>{o.emit("update:modelValue",t)}});return()=>e.createVNode(d.ElTreeSelect,e.mergeProps({modelValue:r.value,"onUpdate:modelValue":t=>r.value=t},l),null)},{name:"ProFieldTreeSelect"});exports.ProFieldTreeSelect=u;exports.default=u;
