"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const proUtils = require("@element-plus/pro-utils");
const elementPlus = require("element-plus");
const Props = {
  type: {
    type: String
  },
  size: {
    type: String,
    default: "default"
  },
  link: {
    type: Boolean,
    default: false
  },
  text: {
    type: Boolean,
    default: false
  },
  tip: {
    type: String,
    default: ""
  }
};
const ProButton = /* @__PURE__ */ vue.defineComponent((props, ctx) => {
  const onClick = (evt) => {
    if (props.tip) {
      return elementPlus.ElMessageBox.confirm(props.tip, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        ctx.emit("on-click", evt);
      }).catch(() => {
      });
    } else {
      ctx.emit("clickEvent", evt);
    }
  };
  return () => vue.createVNode(elementPlus.ElButton, vue.mergeProps(props, {
    "onClick": onClick.bind(globalThis)
  }), {
    default: () => {
      var _a, _b;
      return [(_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a)];
    }
  });
});
ProButton.props = Props;
const ProButton$1 = proUtils.withInstall(ProButton);
exports.default = ProButton$1;
