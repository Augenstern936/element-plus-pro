"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const t=require("vue"),r=require("element-plus");require("../../../node_modules/.pnpm/registry.npmmirror.com_element-plus@2.4.1_vue@3.3.7/node_modules/element-plus/theme-chalk/src/option.scss.js");require("../../../node_modules/.pnpm/registry.npmmirror.com_element-plus@2.4.1_vue@3.3.7/node_modules/element-plus/theme-chalk/src/select.scss.js");const a=t.defineComponent((l,d)=>{const o=t.computed({get:()=>l.modelValue,set:e=>{d.emit("update:modelValue",e)}});return()=>t.createVNode(r.ElSelect,{modelValue:o.value,"onUpdate:modelValue":e=>o.value=e},{default:()=>{var e;return[(e=l.options)==null?void 0:e.map((u,n)=>t.createVNode(r.ElOption,t.mergeProps(u,{key:n}),{default:()=>[u.label]}))]}})},{name:"ProFieldSelect"}),c=a;exports.ProFieldSelect=a;exports.default=c;