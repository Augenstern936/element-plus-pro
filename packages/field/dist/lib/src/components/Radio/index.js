"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),r=require("element-plus");require("../../../node_modules/.pnpm/element-plus@2.6.3_vue@3.4.21/node_modules/element-plus/theme-chalk/src/radio-button.scss.js");require("../../../node_modules/.pnpm/element-plus@2.6.3_vue@3.4.21/node_modules/element-plus/theme-chalk/src/radio-group.scss.js");require("../../../node_modules/.pnpm/element-plus@2.6.3_vue@3.4.21/node_modules/element-plus/theme-chalk/src/radio.scss.js");const i=require("./typing.js"),a=e.defineComponent((d,s)=>{const t=e.computed({get:()=>d.modelValue,set:o=>{s.emit("update:modelValue",o)}});return()=>e.createVNode(r.ElRadioGroup,{modelValue:t.value,"onUpdate:modelValue":o=>t.value=o},{default:()=>{var o;return[(o=d.options)==null?void 0:o.map((l,u)=>e.createVNode(e.Fragment,null,[l.type=="radio"?e.createVNode(r.ElRadio,e.mergeProps(l,{key:u}),{default:()=>[l.label]}):e.createVNode(r.ElRadioButton,{label:l.value,key:u},{default:()=>[l.label]})]))]}})},{name:"ProFieldRadio"});a.props=i.proFieldRadioProps;const n=a;exports.proFieldRadioProps=i.proFieldRadioProps;exports.ProFieldRadio=a;exports.default=n;
