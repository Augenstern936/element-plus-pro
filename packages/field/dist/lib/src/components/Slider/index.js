"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}}),require("../../../node_modules/.pnpm/vue@3.4.21_typescript@5.4.4/node_modules/vue/dist/vue.runtime.esm-bundler.js");const e=require("element-plus");require("../../../node_modules/.pnpm/element-plus@2.6.3_vue@3.4.21_typescript@5.4.4_/node_modules/element-plus/theme-chalk/src/slider.scss.js");const r=require("./typing.js"),o=require("../../../node_modules/.pnpm/@vue_runtime-core@3.4.21/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js"),l=o.defineComponent(((r,l)=>{const s=o.computed({get:()=>r.modelValue,set:e=>{l.emit("update:modelValue",e)}});return()=>o.createVNode(e.ElSlider,o.mergeProps({modelValue:s.value,"onUpdate:modelValue":e=>s.value=e},r),null)}),{name:"ProFieldSlider"});l.props=r.proFieldSliderProps;const s=l;exports.proFieldSliderProps=r.proFieldSliderProps,exports.ProFieldSlider=l,exports.default=s;
