"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const c=require("@element-plus/pro-tabs"),t=require("vue"),g=require("@element-plus/pro-utils"),r=require("element-plus"),v=require("@element-plus/icons-vue"),m=require("@element-plus/pro-table"),i=require("@element-plus/pro-button"),y=require("@element-plus/pro-search-bar"),V=require("@element-plus/pro-center-container"),q={...r.avatarProps,style:{type:Object,default:{}}},N=t.defineComponent(e=>()=>t.createVNode(r.ElAvatar,e,null),{name:"ProFieldAvatar"});N.props=q;const B=N,I={...r.calendarProps,style:{type:Object,default:{}}},O=t.defineComponent((e,a)=>{const o=t.computed({get:()=>e.modelValue,set:l=>{a.emit("update:modelValue",l)}});return()=>t.createVNode(r.ElCascader,t.mergeProps({modelValue:o.value,"onUpdate:modelValue":l=>o.value=l},e),null)},{name:"ProFieldCascader"});O.props=I;const M=O,z={...r.checkboxProps,type:{type:String,default:"checkbox"},options:{type:Array,default:[]},style:{type:Object,default:{}}},S=t.defineComponent((e,a)=>{const o=t.computed({get:()=>e.modelValue,set:l=>{a.emit("update:modelValue",l)}});return()=>t.createVNode(r.ElCheckboxGroup,{modelValue:o.value,"onUpdate:modelValue":l=>o.value=l},{default:()=>{var l;return[(l=e.options)==null?void 0:l.map((d,n)=>t.createVNode(t.Fragment,null,[e.type=="checkbox"?t.createVNode(r.ElCheckbox,t.mergeProps(d,{key:n}),null):t.createVNode(r.ElCheckboxButton,t.mergeProps(d,{key:n}),{default:()=>[d.label]})]))]}})},{name:"ProFieldCheckbox"});S.props=z;const D=S,G={...r.colorPickerProps,style:{type:Object,default:{}}},j=t.defineComponent((e,a)=>{const o=t.computed({get:()=>e.modelValue,set:l=>{a.emit("update:modelValue",l)}});return()=>t.createVNode(r.ElColorPicker,t.mergeProps({modelValue:o.value,"onUpdate:modelValue":l=>o.value=l},e),null)},{name:"ProFieldColor"});j.props=G;const H=j,u=t.defineComponent((e,a)=>{const o=t.computed({get:()=>e.modelValue,set:d=>{a.emit("update:modelValue",d)}}),l=t.computed(()=>{var d;const n=(d=e.placeholder)!=null?d:g.formatPlaceholder("",e.type||"text");return Array.isArray(n)&&n.length>1?{startPlaceholder:n[0],endPlaceholder:n[1]}:{placeholder:Array.isArray(n)?n[0]:n}});return()=>t.createVNode(r.ElDatePicker,t.mergeProps({modelValue:o.value,"onUpdate:modelValue":d=>o.value=d},e,l.value),null)});u.props={...r.datePickerProps,placeholder:{type:[String,Array],default:void 0},style:{type:Object,default:{}}};const _=e=>t.createVNode(u,t.mergeProps(e,{type:"date"}),null),W=e=>t.createVNode(u,t.mergeProps(e,{type:"dates"}),null),Y=e=>t.createVNode(u,t.mergeProps(e,{type:"datetime"}),null),J=e=>t.createVNode(u,t.mergeProps(e,{type:"week"}),null),K=e=>t.createVNode(u,t.mergeProps(e,{type:"month"}),null),L=e=>t.createVNode(u,t.mergeProps(e,{type:"year"}),null),Q=e=>t.createVNode(u,t.mergeProps(e,{type:"daterange"}),null),X=e=>t.createVNode(u,t.mergeProps(e,{type:"datetimerange"}),null),Z=e=>t.createVNode(u,t.mergeProps(e,{type:"monthrange"}),null),$={...r.imageProps,style:{type:Object,default:{}}},C=t.defineComponent(e=>()=>t.createVNode(r.ElImage,e,null),{name:"ProFieldImage"});C.props=$;const ee=C,s=t.defineComponent((e,a)=>{const o=t.computed({get:()=>e.modelValue,set:l=>{a.emit("update:modelValue",l)}});return()=>t.createVNode(r.ElInput,t.mergeProps({modelValue:o.value,"onUpdate:modelValue":l=>o.value=l},e),null)});s.props={...r.inputProps,type:{type:String,default:"text"}};const te=e=>t.createVNode(s,t.mergeProps(e,{type:"text"}),null),le=e=>t.createVNode(s,t.mergeProps(e,{type:"password"}),null),oe=e=>t.createVNode(s,t.mergeProps(e,{type:"textarea"}),null),re={...r.progressProps,style:{type:Object,default:{}}},E=t.defineComponent(e=>()=>t.createVNode(r.ElProgress,e,null),{name:"ProFieldProgress"});E.props=re;const ae=E,ne={...r.radioProps,type:{type:String,default:"radio"},options:{type:Array,default:[]},style:{type:Object,default:{}}},x=t.defineComponent((e,a)=>{const o=t.computed({get:()=>e.modelValue,set:l=>{a.emit("update:modelValue",l)}});return()=>t.createVNode(r.ElRadioGroup,{modelValue:o.value,"onUpdate:modelValue":l=>o.value=l},{default:()=>{var l;return[(l=e.options)==null?void 0:l.map((d,n)=>t.createVNode(t.Fragment,null,[d.type=="radio"?t.createVNode(r.ElRadio,t.mergeProps(d,{key:n}),{default:()=>[d.label]}):t.createVNode(r.ElRadioButton,{label:d.value,key:n},{default:()=>[d.label]})]))]}})},{name:"ProFieldRadio"});x.props=ne;const h=x,de={...r.rateProps,style:{type:Object,default:{}}},F=t.defineComponent((e,a)=>{const o=t.computed({get:()=>e.modelValue,set:l=>{a.emit("update:modelValue",l)}});return()=>t.createVNode(r.ElRate,t.mergeProps({modelValue:o.value,"onUpdate:modelValue":l=>o.value=l},e),null)},{name:"ProFieldRate"});F.props=de;const ue=F,pe=t.defineComponent((e,a)=>{const o=t.computed({get:()=>e.modelValue,set:l=>{a.emit("update:modelValue",l)}});return()=>t.createVNode(r.ElSelect,{modelValue:o.value,"onUpdate:modelValue":l=>o.value=l},{default:()=>{var l;return[(l=e.options)==null?void 0:l.map((d,n)=>t.createVNode(r.ElOption,t.mergeProps(d,{key:n}),{default:()=>[d.label]}))]}})},{name:"ProFieldSelect"}),se=pe,ce={...r.sliderProps,style:{type:Object,default:{}}},T=t.defineComponent((e,a)=>{const o=t.computed({get:()=>e.modelValue,set:l=>{a.emit("update:modelValue",l)}});return()=>t.createVNode(r.ElSlider,t.mergeProps({modelValue:o.value,"onUpdate:modelValue":l=>o.value=l},e),null)},{name:"ProFieldSlider"});T.props=ce;const me=T,ie={...r.switchProps,style:{type:Object,default:{}}},A=t.defineComponent((e,a)=>{const o=t.computed({get:()=>e.modelValue,set:l=>{a.emit("update:modelValue",l)}});return()=>t.createVNode(r.ElSwitch,t.mergeProps({modelValue:o.value,"onUpdate:modelValue":l=>o.value=l},e),null)},{name:"ProFieldSwitch"});A.props=ie;const ye=A,f=t.defineComponent((e,a)=>{const o=t.computed({get:()=>e.modelValue,set:l=>{a.emit("upTime:modelValue",l)}});return()=>t.createVNode(r.ElTimePicker,t.mergeProps({modelValue:o.value,"onUpdate:modelValue":l=>o.value=l},e),null)});f.props={...r.timePickerDefaultProps,style:{type:Object,default:{}}};const Ve=e=>t.createVNode(f,t.mergeProps(e,{isRange:!1}),null),Pe=e=>t.createVNode(f,t.mergeProps(e,{isRange:!0}),null),ge={format:{type:String,default:"HH:mm"},modelValue:String,disabled:Boolean,editable:{type:Boolean,default:!0},effect:{type:String,default:"light"},clearable:{type:Boolean,default:!0},size:r.useSizeProp,placeholder:String,start:{type:String,default:"09:00"},end:{type:String,default:"18:00"},step:{type:String,default:"00:30"},minTime:String,maxTime:String,name:String,prefixIcon:{type:[String,Object],default:()=>v.Clock},clearIcon:{type:[String,Object],default:()=>v.CircleClose},style:{type:Object,default:{}}},U=t.defineComponent((e,a)=>{const o=t.computed({get:()=>e.modelValue,set:l=>{a.emit("upTime:modelValue",l)}});return()=>t.createVNode(r.ElTimeSelect,t.mergeProps({modelValue:o.value,"onUpdate:modelValue":l=>o.value=l},e),null)},{name:"ProFieldTimeSelect"});U.props=ge;const fe=U,be=t.defineComponent((e,a)=>{const o=t.computed({get:()=>e.modelValue,set:l=>{a.emit("update:modelValue",l)}});return()=>t.createVNode(r.ElTreeSelect,t.mergeProps({modelValue:o.value,"onUpdate:modelValue":l=>o.value=l},e),null)},{name:"ProFieldTreeSelect"}),ve=be,P={text:te,password:le,textarea:oe,date:_,dates:W,dateTime:Y,dateWeek:J,dateMonth:K,dateYear:L,dateRange:Q,dateTimeRange:X,dateMonthRange:Z,time:Ve,timeRange:Pe,timeSelect:fe,select:se,treeSelect:ve,checkbox:D,radio:h,radioButton:h,switch:ye,avatar:B,image:ee,rate:ue,color:H,cascader:M,slider:me,progress:ae},k={modelValue:{type:[String,Number,Boolean,Array],default:""},mode:{type:String,default:"edit"},valueType:{type:String,default:"text"},placeholder:{type:[String,Array]},fieldProps:{type:Object,default:{}}},b=t.defineComponent((e,a)=>{const o=t.computed(()=>P[e.valueType||"text"]),l=t.computed({get:()=>e.modelValue,set:n=>{a.emit("update:modelValue",n)}}),d=t.computed(()=>{var n;const p=(n=e.placeholder)!=null?n:g.formatPlaceholder("",e.valueType||"text");return Array.isArray(p)&&p.length>1?{startPlaceholder:p[0],endPlaceholder:p[1]}:{placeholder:Array.isArray(p)?p[0]:p}});return()=>t.createVNode(o.value,t.mergeProps({modelValue:l.value,"onUpdate:modelValue":n=>l.value=n},e.fieldProps,d.value),null)},{name:"ProField"});b.props=k;for(const e in P){const a=e.charAt(0).toUpperCase()+e.slice(1),o=P[e];b[a]=l=>t.createVNode(o,t.mergeProps(l,{type:e}),null)}const he=g.withInstall(b),w={"@element-plus/pro-button":"0.0.1","@element-plus/pro-center-container":"0.0.1","@element-plus/pro-components":"0.0.1-test-01-test-01","@element-plus/pro-search-bar":"0.0.1","@element-plus/pro-table":"0.0.1","@element-plus/pro-tabs":"0.0.1","@element-plus/pro-utils":"1.0.0"},Ne=e=>{const a=o=>{for(const l in e)o.component(l,e[l])};return{version:w["@element-plus/pro-components"],install:a}},R=Ne({ProTabs:c,ProField:he,ProTable:m,ProButton:i,ProSearchBar:y,ProCenterContainer:V}),Oe=R.install;exports.default=R;exports.install=Oe;exports.proFieldProps=k;exports.version=w;Object.keys(c).forEach(e=>{e!=="default"&&!Object.prototype.hasOwnProperty.call(exports,e)&&Object.defineProperty(exports,e,{enumerable:!0,get:()=>c[e]})});Object.keys(m).forEach(e=>{e!=="default"&&!Object.prototype.hasOwnProperty.call(exports,e)&&Object.defineProperty(exports,e,{enumerable:!0,get:()=>m[e]})});Object.keys(i).forEach(e=>{e!=="default"&&!Object.prototype.hasOwnProperty.call(exports,e)&&Object.defineProperty(exports,e,{enumerable:!0,get:()=>i[e]})});Object.keys(y).forEach(e=>{e!=="default"&&!Object.prototype.hasOwnProperty.call(exports,e)&&Object.defineProperty(exports,e,{enumerable:!0,get:()=>y[e]})});Object.keys(V).forEach(e=>{e!=="default"&&!Object.prototype.hasOwnProperty.call(exports,e)&&Object.defineProperty(exports,e,{enumerable:!0,get:()=>V[e]})});
