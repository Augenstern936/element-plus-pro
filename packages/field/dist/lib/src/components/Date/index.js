"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("vue"),r=require("@element-plus/pro-utils"),t=require("element-plus");require("../../../node_modules/.pnpm/element-plus@2.6.3_vue@3.4.21_typescript@5.4.4_/node_modules/element-plus/theme-chalk/src/date-picker.scss.js");const o=e.defineComponent(((o,l)=>{const a=e.computed({get:()=>o.modelValue,set:e=>{l.emit("update:modelValue",e)}}),p=e.computed((()=>{var e;const t=null!=(e=o.placeholder)?e:r.formatPlaceholder("",o.type||"text");return Array.isArray(t)&&t.length>1?{startPlaceholder:t[0],endPlaceholder:t[1]}:{placeholder:Array.isArray(t)?t[0]:t}}));return()=>e.createVNode(t.ElDatePicker,e.mergeProps({modelValue:a.value,"onUpdate:modelValue":e=>a.value=e},o,p.value),null)}));o.props={...t.datePickerProps,placeholder:{type:[String,Array],default:void 0},style:{type:Object,default:{}}};exports.ProFieldDate=r=>e.createVNode(o,e.mergeProps(r,{type:"date"}),null),exports.ProFieldDateMonth=r=>e.createVNode(o,e.mergeProps(r,{type:"month"}),null),exports.ProFieldDateMonthRange=r=>e.createVNode(o,e.mergeProps(r,{type:"monthrange"}),null),exports.ProFieldDateRange=r=>e.createVNode(o,e.mergeProps(r,{type:"daterange"}),null),exports.ProFieldDateTime=r=>e.createVNode(o,e.mergeProps(r,{type:"datetime"}),null),exports.ProFieldDateTimeRange=r=>e.createVNode(o,e.mergeProps(r,{type:"datetimerange"}),null),exports.ProFieldDateWeek=r=>e.createVNode(o,e.mergeProps(r,{type:"week"}),null),exports.ProFieldDateYear=r=>e.createVNode(o,e.mergeProps(r,{type:"year"}),null),exports.ProFieldDates=r=>e.createVNode(o,e.mergeProps(r,{type:"dates"}),null);
