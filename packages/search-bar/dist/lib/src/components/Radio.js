"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),d=require("element-plus"),o=e.defineComponent((l,i)=>{const u=e.inject(l.type,{}),r=e.computed({get:()=>l.modelValue,set:t=>{i.emit("update:modelValue",t),u.emitter.emit("value-change",{field:u.formItem.dataField,value:t})}});return()=>e.createVNode(d.ElRadioGroup,{modelValue:r.value,"onUpdate:modelValue":t=>r.value=t},{default:()=>{var t;return[(t=u.formItem.valueOptions)==null?void 0:t.map((a,n)=>e.createVNode(e.Fragment,null,[l.type=="radio"?e.createVNode(d.ElRadio,e.mergeProps(a,{key:n}),{default:()=>[a.label]}):e.createVNode(d.ElRadioButton,{label:a.value,key:n},{default:()=>[a.label]})]))]}})});o.props={modelValue:{type:[String,Number,Boolean],default:""},type:{type:String,default:"radio"}};const m={Default:()=>e.createVNode(o,{type:"radio"},null),RadioButton:()=>e.createVNode(o,{type:"radioButton"},null)};exports.default=m;
