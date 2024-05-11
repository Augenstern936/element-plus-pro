"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue");require("./style/index.scss.js");const g=require("./props.js"),c=require("@element-plus/pro-utils"),u=require("element-plus"),s=require("@element-plus/pro-center-container");function h(r){return typeof r=="function"||Object.prototype.toString.call(r)==="[object Object]"&&!e.isVNode(r)}const y=e.defineComponent((r,o)=>{const f=e.computed({get:()=>r.modelValue,set:n=>o.emit("update:modelValue",n)}),C=n=>{o.emit("change",n),o.emit("update:modelValue",n)},T=({label:n,badge:t})=>(typeof t=="string"&&Number.isNaN(Number(t))?(t=0,console.warn("Badge field value incorrect!")):t=Number(t),e.createVNode(e.Fragment,null,[n,e.createTextVNode(" "),t?e.createVNode("span",{class:"badge"},[t>99?"99+":t]):""])),v=n=>{var p,V,N,b;const{value:t,empty:l,props:m={},render:d}=n;if(o.slots[t])return(V=(p=o.slots)[t])==null?void 0:V.call(p);if(d){if(typeof d!="function")throw new TypeError("render not a function");const i=d(m),P=l&&l!=!0?e.createVNode(s,null,h(l)?l:{default:()=>[l]}):r.empty&&r.empty!=!0?e.createVNode(s,null,{default:()=>[r.empty]}):e.createVNode(u.ElEmpty,{"image-size":100},null);return c.checkValueIsComponent(i)?e.createVNode(i,m,null):i||P}if(o.slots.default)return(b=(N=o.slots).default)==null?void 0:b.call(N);if(l===!1)return;if(l&&l!=!0)return e.createVNode(s,null,{default:()=>[c.checkValueIsComponent(l)?e.createVNode(l,null,null):l]});const a=r.empty;if(a!==!1)return a&&a!==!0?e.createVNode(s,null,{default:()=>[c.checkValueIsComponent(a)?e.createVNode(a,null,null):a]}):e.createVNode(u.ElEmpty,{"image-size":100},null)};return()=>e.createVNode(u.ElTabs,e.mergeProps({class:"pro-tabs",modelValue:f.value,"onUpdate:modelValue":n=>f.value=n},r.tabsProps,{"before-leave":r.beforeChange,onTabChange:C}),{default:()=>{var n;return[(n=r.panes)==null?void 0:n.map(t=>e.createVNode(u.ElTabPane,{name:t.value,key:t.value},{label:()=>e.createVNode(T,t,null),default:()=>v(t)}))]}})},{name:"ProTabs"});y.props=g.default;const E=c.withInstall(y);exports.default=E;