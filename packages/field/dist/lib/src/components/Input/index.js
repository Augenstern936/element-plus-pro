"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("vue"),t=require("element-plus");require("../../../node_modules/.pnpm/element-plus@2.6.3_vue@3.4.21_typescript@5.4.4_/node_modules/element-plus/theme-chalk/src/input.scss.js");const r=e.defineComponent(((r,o)=>{const l=e.computed({get:()=>r.modelValue,set:e=>{o.emit("update:modelValue",e)}});return()=>e.createVNode(t.ElInput,e.mergeProps({modelValue:l.value,"onUpdate:modelValue":e=>l.value=e},r),null)}));r.props={...t.inputProps,type:{type:String,default:"text"}};exports.ProFieldPassword=t=>e.createVNode(r,e.mergeProps(t,{type:"password"}),null),exports.ProFieldText=t=>e.createVNode(r,e.mergeProps(t,{type:"text"}),null),exports.ProFieldTextarea=t=>e.createVNode(r,e.mergeProps(t,{type:"textarea"}),null);
