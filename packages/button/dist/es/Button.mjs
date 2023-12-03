import { defineComponent, createVNode, mergeProps } from "vue";
import { withInstall } from "@element-plus/pro-utils";
import { ElButton, ElMessageBox } from "element-plus";
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
const ProButton = /* @__PURE__ */ defineComponent((props, ctx) => {
  const onClick = (evt) => {
    if (props.tip) {
      return ElMessageBox.confirm(props.tip, "提示", {
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
  return () => createVNode(ElButton, mergeProps(props, {
    "onClick": onClick.bind(globalThis)
  }), {
    default: () => {
      var _a, _b;
      return [(_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a)];
    }
  });
});
ProButton.props = Props;
const ProButton$1 = withInstall(ProButton);
export {
  ProButton$1 as default
};
