"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),t=require("element-plus");const d={...t.checkboxProps,type:{type:String,default:"checkbox"},options:{type:Array,default:[]},style:{type:Object,default:{}}},r=e.defineComponent((l,n)=>{const u=e.computed({get:()=>l.modelValue,set:o=>{n.emit("update:modelValue",o)}});return()=>e.createVNode(t.ElCheckboxGroup,{modelValue:u.value,"onUpdate:modelValue":o=>u.value=o},{default:()=>{var o;return[(o=l.options)==null?void 0:o.map((c,a)=>e.createVNode(e.Fragment,null,[l.type=="checkbox"?e.createVNode(t.ElCheckbox,e.mergeProps(c,{key:a}),null):e.createVNode(t.ElCheckboxButton,e.mergeProps(c,{key:a}),{default:()=>[c.label]})]))]}})},{name:"ProFieldCheckbox"});r.props=d;exports.ProFieldCheckbox=r;exports.default=r;exports.proFieldCheckboxProps=d;
