"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),u=require("element-plus");require("../../../node_modules/.pnpm/registry.npmmirror.com_element-plus@2.4.1_vue@3.3.7/node_modules/element-plus/theme-chalk/src/slider.scss.js");const d=require("./typing.js"),l=e.defineComponent((o,i)=>{const t=e.computed({get:()=>o.modelValue,set:r=>{i.emit("update:modelValue",r)}});return()=>e.createVNode(u.ElSlider,e.mergeProps({modelValue:t.value,"onUpdate:modelValue":r=>t.value=r},o),null)},{name:"ProFieldSlider"});l.props=d.proFieldSliderProps;exports.proFieldSliderProps=d.proFieldSliderProps;exports.ProFieldSlider=l;exports.default=l;
