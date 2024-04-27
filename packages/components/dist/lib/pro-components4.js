"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const t=require("vue"),p=require("@element-plus/pro-utils"),n=require("./pro-components16.js"),s={modelValue:{type:[String,Number,Boolean,Array],default:""},mode:{type:String,default:"edit"},valueType:{type:String,default:"text"},placeholder:{type:[String,Array]},fieldProps:{type:Object,default:{}}},d=t.defineComponent((e,a)=>{const u=t.computed(()=>n.components[e.valueType||"text"]),o=t.computed({get:()=>e.modelValue,set:l=>{a.emit("update:modelValue",l)}}),c=t.computed(()=>{var l;const r=(l=e.placeholder)!=null?l:p.formatPlaceholder("",e.valueType||"text");return Array.isArray(r)&&r.length>1?{startPlaceholder:r[0],endPlaceholder:r[1]}:{placeholder:Array.isArray(r)?r[0]:r}});return()=>t.createVNode(u.value,t.mergeProps({modelValue:o.value,"onUpdate:modelValue":l=>o.value=l},e.fieldProps,c.value),null)},{name:"ProField"});d.props=s;for(const e in n.components){const a=e.charAt(0).toUpperCase()+e.slice(1),u=n.components[e];d[a]=o=>t.createVNode(u,t.mergeProps(o,{type:e}),null)}const i=p.withInstall(d);exports.default=i;exports.proFieldProps=s;
