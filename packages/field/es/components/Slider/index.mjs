import { defineComponent as t, computed as d, createVNode as m, mergeProps as a } from "vue";
import { ElSlider as i } from "element-plus";
import { proFieldSliderProps as p } from "./props.mjs";
const u = /* @__PURE__ */ t((o, l) => {
  const r = d({
    get: () => o.modelValue,
    set: (e) => {
      l.emit("update:modelValue", e);
    }
  });
  return () => m(i, a({
    modelValue: r.value,
    "onUpdate:modelValue": (e) => r.value = e
  }, o), null);
}, {
  name: "ProFieldSlider"
});
u.props = p;
export {
  u as ProFieldSlider,
  u as default,
  p as proFieldSliderProps
};
(function(){"use strict";try{if(typeof document!="undefined"){var e=document.createElement("style");e.appendChild(document.createTextNode('.el-slider{--el-slider-main-bg-color: var(--el-color-primary);--el-slider-runway-bg-color: var(--el-border-color-light);--el-slider-stop-bg-color: var(--el-color-white);--el-slider-disabled-color: var(--el-text-color-placeholder);--el-slider-border-radius: 3px;--el-slider-height: 6px;--el-slider-button-size: 20px;--el-slider-button-wrapper-size: 36px;--el-slider-button-wrapper-offset: -15px}.el-slider{width:100%;height:32px;display:flex;align-items:center}.el-slider__runway{flex:1;height:var(--el-slider-height);background-color:var(--el-slider-runway-bg-color);border-radius:var(--el-slider-border-radius);position:relative;cursor:pointer}.el-slider__runway.show-input{margin-right:30px;width:auto}.el-slider__runway.is-disabled{cursor:default}.el-slider__runway.is-disabled .el-slider__bar{background-color:var(--el-slider-disabled-color)}.el-slider__runway.is-disabled .el-slider__button{border-color:var(--el-slider-disabled-color)}.el-slider__runway.is-disabled .el-slider__button-wrapper:hover,.el-slider__runway.is-disabled .el-slider__button-wrapper.hover,.el-slider__runway.is-disabled .el-slider__button-wrapper.dragging{cursor:not-allowed}.el-slider__runway.is-disabled .el-slider__button:hover,.el-slider__runway.is-disabled .el-slider__button.hover,.el-slider__runway.is-disabled .el-slider__button.dragging{transform:scale(1)}.el-slider__runway.is-disabled .el-slider__button:hover,.el-slider__runway.is-disabled .el-slider__button.hover,.el-slider__runway.is-disabled .el-slider__button.dragging{cursor:not-allowed}.el-slider__input{flex-shrink:0;width:130px}.el-slider__bar{height:var(--el-slider-height);background-color:var(--el-slider-main-bg-color);border-top-left-radius:var(--el-slider-border-radius);border-bottom-left-radius:var(--el-slider-border-radius);position:absolute}.el-slider__button-wrapper{height:var(--el-slider-button-wrapper-size);width:var(--el-slider-button-wrapper-size);position:absolute;z-index:1;top:var(--el-slider-button-wrapper-offset);transform:translate(-50%);background-color:transparent;text-align:center;user-select:none;line-height:normal;outline:none}.el-slider__button-wrapper:after{display:inline-block;content:"";height:100%;vertical-align:middle}.el-slider__button-wrapper:hover,.el-slider__button-wrapper.hover{cursor:grab}.el-slider__button-wrapper.dragging{cursor:grabbing}.el-slider__button{display:inline-block;width:var(--el-slider-button-size);height:var(--el-slider-button-size);vertical-align:middle;border:solid 2px var(--el-slider-main-bg-color);background-color:var(--el-color-white);border-radius:50%;box-sizing:border-box;transition:var(--el-transition-duration-fast);user-select:none}.el-slider__button:hover,.el-slider__button.hover,.el-slider__button.dragging{transform:scale(1.2)}.el-slider__button:hover,.el-slider__button.hover{cursor:grab}.el-slider__button.dragging{cursor:grabbing}.el-slider__stop{position:absolute;height:var(--el-slider-height);width:var(--el-slider-height);border-radius:var(--el-border-radius-circle);background-color:var(--el-slider-stop-bg-color);transform:translate(-50%)}.el-slider__marks{top:0;left:12px;width:18px;height:100%}.el-slider__marks-text{position:absolute;transform:translate(-50%);font-size:14px;color:var(--el-color-info);margin-top:15px;white-space:pre}.el-slider.is-vertical{position:relative;display:inline-flex;width:auto;height:100%;flex:0}.el-slider.is-vertical .el-slider__runway{width:var(--el-slider-height);height:100%;margin:0 16px}.el-slider.is-vertical .el-slider__bar{width:var(--el-slider-height);height:auto;border-radius:0 0 3px 3px}.el-slider.is-vertical .el-slider__button-wrapper{top:auto;left:var(--el-slider-button-wrapper-offset);transform:translateY(50%)}.el-slider.is-vertical .el-slider__stop{transform:translateY(50%)}.el-slider.is-vertical .el-slider__marks-text{margin-top:0;left:15px;transform:translateY(50%)}.el-slider--large{height:40px}.el-slider--small{height:24px}')),document.head.appendChild(e)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
