"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),t=require("element-plus");require("../../../node_modules/.pnpm/element-plus@2.7.2_vue@3.4.25_typescript@5.4.5_/node_modules/element-plus/theme-chalk/src/checkbox-button.scss.js");require("../../../node_modules/.pnpm/element-plus@2.7.2_vue@3.4.25_typescript@5.4.5_/node_modules/element-plus/theme-chalk/src/checkbox-group.scss.js");require("../../../node_modules/.pnpm/element-plus@2.7.2_vue@3.4.25_typescript@5.4.5_/node_modules/element-plus/theme-chalk/src/checkbox.scss.js");const c=require("./props.js"),u=e.defineComponent((r,n)=>{const d=e.computed({get:()=>r.modelValue,set:o=>{n.emit("update:modelValue",o)}});return()=>e.createVNode(t.ElCheckboxGroup,{modelValue:d.value,"onUpdate:modelValue":o=>d.value=o},{default:()=>{var o;return[(o=r.options)==null?void 0:o.map((l,a)=>e.createVNode(e.Fragment,null,[r.type=="checkbox"?e.createVNode(t.ElCheckbox,e.mergeProps(l,{key:a}),null):e.createVNode(t.ElCheckboxButton,e.mergeProps(l,{key:a}),{default:()=>[l.label]})]))]}})},{name:"ProFieldCheckbox"});u.props=c.proFieldCheckboxProps;exports.proFieldCheckboxProps=c.proFieldCheckboxProps;exports.ProFieldCheckbox=u;exports.default=u;
