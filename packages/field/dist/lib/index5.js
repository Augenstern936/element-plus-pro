"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),u=require("element-plus");const i={...u.switchProps,style:{type:Object,default:{}}},o=e.defineComponent((l,s)=>{const r=e.computed({get:()=>l.modelValue,set:t=>{s.emit("update:modelValue",t)}});return()=>e.createVNode(u.ElSwitch,e.mergeProps({modelValue:r.value,"onUpdate:modelValue":t=>r.value=t},l),null)},{name:"ProFieldSwitch"});o.props=i;exports.ProFieldSwitch=o;exports.default=o;exports.proFieldSwitchProps=i;
