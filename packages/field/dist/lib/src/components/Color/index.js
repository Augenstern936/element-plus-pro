"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),i=require("element-plus");require("../../../node_modules/.pnpm/element-plus@2.6.3_vue@3.4.21/node_modules/element-plus/theme-chalk/src/color-picker.scss.js");const u=require("./typing.js"),l=e.defineComponent((r,d)=>{const t=e.computed({get:()=>r.modelValue,set:o=>{d.emit("update:modelValue",o)}});return()=>e.createVNode(i.ElColorPicker,e.mergeProps({modelValue:t.value,"onUpdate:modelValue":o=>t.value=o},r),null)},{name:"ProFieldColor"});l.props=u.proFieldColor;const n=l;exports.proFieldColor=u.proFieldColor;exports.ProFieldColor=l;exports.default=n;
