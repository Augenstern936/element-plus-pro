"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const o=require("vue"),c=require("@element-plus/pro-utils"),t=require("./components/index.js"),a=require("./typing.js"),u=require("./components/Avatar/typing.js"),P=require("./components/Avatar/index.js"),F=require("./components/Cascader/typing.js"),m=require("./components/Cascader/index.js"),g=require("./components/Checkbox/typing.js"),q=require("./components/Checkbox/index.js"),$=require("./components/Color/typing.js"),y=require("./components/Color/index.js"),x=require("./components/Image/typing.js"),h=require("./components/Image/index.js"),C=require("./components/Progress/typing.js"),v=require("./components/Progress/index.js"),S=require("./components/Radio/typing.js"),A=require("./components/Radio/index.js"),R=require("./components/Rate/typing.js"),b=require("./components/Rate/index.js"),f=require("./components/Slider/typing.js"),V=require("./components/Slider/index.js"),k=require("./components/Switch/typing.js"),w=require("./components/Switch/index.js"),I=require("./components/TreeSelect/index.js"),n=o.defineComponent((r,l)=>{const d=o.computed(()=>t.components[r.valueType||"text"]),i=o.computed({get:()=>r.modelValue,set:e=>{l.emit("update:modelValue",e)}}),p=o.computed(()=>{var s;const e=(s=r.placeholder)!=null?s:c.formatPlaceholder("",r.valueType||"text");return Array.isArray(e)&&e.length>1?{startPlaceholder:e[0],endPlaceholder:e[1]}:{placeholder:Array.isArray(e)?e[0]:e}});return()=>o.createVNode(d.value,o.mergeProps({modelValue:i.value,"onUpdate:modelValue":e=>i.value=e},r.fieldProps,p.value),null)},{name:"ProField"});n.props=a.proFieldProps;for(const r in t.components){const l=r.charAt(0).toUpperCase()+r.slice(1),d=t.components[r];n[l]=i=>o.createVNode(d,o.mergeProps(i,{type:r}),null)}const T=c.withInstall(n);exports.components=t.components;exports.proFieldAvatar=u.proFieldAvatar;exports.ProFieldAvatar=P.ProFieldAvatar;exports.proFieldCascaderProps=F.proFieldCascaderProps;exports.ProFieldCascader=m.ProFieldCascader;exports.proFieldCheckboxProps=g.proFieldCheckboxProps;exports.ProFieldCheckbox=q.ProFieldCheckbox;exports.proFieldColor=$.proFieldColor;exports.ProFieldColor=y.ProFieldColor;exports.proFieldImageProps=x.proFieldImageProps;exports.ProFieldImage=h.ProFieldImage;exports.proFieldProgressProps=C.proFieldProgressProps;exports.ProFieldProgress=v.ProFieldProgress;exports.proFieldRadioProps=S.proFieldRadioProps;exports.ProFieldRadio=A.ProFieldRadio;exports.proFieldRateProps=R.proFieldRateProps;exports.ProFieldRate=b.ProFieldRate;exports.proFieldSliderProps=f.proFieldSliderProps;exports.ProFieldSlider=V.ProFieldSlider;exports.proFieldSwitchProps=k.proFieldSwitchProps;exports.ProFieldSwitch=w.ProFieldSwitch;exports.ProFieldTreeSelect=I.ProFieldTreeSelect;exports.default=T;