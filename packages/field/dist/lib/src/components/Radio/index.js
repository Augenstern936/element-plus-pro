"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),o=require("element-plus");require("../../../node_modules/.pnpm/element-plus@2.7.2_vue@3.4.25_typescript@5.4.5_/node_modules/element-plus/theme-chalk/src/radio-button.scss.js");require("../../../node_modules/.pnpm/element-plus@2.7.2_vue@3.4.25_typescript@5.4.5_/node_modules/element-plus/theme-chalk/src/radio-group.scss.js");require("../../../node_modules/.pnpm/element-plus@2.7.2_vue@3.4.25_typescript@5.4.5_/node_modules/element-plus/theme-chalk/src/radio.scss.js");const i=require("./props.js"),a=e.defineComponent((d,s)=>{const t=e.computed({get:()=>d.modelValue,set:r=>{s.emit("update:modelValue",r)}});return()=>e.createVNode(o.ElRadioGroup,{modelValue:t.value,"onUpdate:modelValue":r=>t.value=r},{default:()=>{var r;return[(r=d.options)==null?void 0:r.map((l,u)=>e.createVNode(e.Fragment,null,[l.type=="radio"?e.createVNode(o.ElRadio,e.mergeProps(l,{key:u}),{default:()=>[l.label]}):e.createVNode(o.ElRadioButton,{label:l.value,key:u},{default:()=>[l.label]})]))]}})},{name:"ProFieldRadio"});a.props=i.proFieldRadioProps;exports.proFieldRadioProps=i.proFieldRadioProps;exports.ProFieldRadio=a;exports.default=a;
