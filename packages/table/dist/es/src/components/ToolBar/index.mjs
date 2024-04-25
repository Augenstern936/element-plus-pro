import { defineComponent as I, inject as O, ref as p, computed as m, createVNode as t, watch as U, createTextVNode as B, isVNode as L } from "vue";
import { RefreshRight as q, Search as R, Setting as x, FullScreen as G } from "@element-plus/icons-vue";
import { ElInput as K, ElButton as u, ElTooltip as f, ElPopover as P, ElCheckbox as _, ElCheckboxGroup as $ } from "element-plus";
import y from "../../../node_modules/.pnpm/screenfull@6.0.2/node_modules/screenfull/index.mjs";
function j(s) {
  return typeof s == "function" || Object.prototype.toString.call(s) === "[object Object]" && !L(s);
}
const z = /* @__PURE__ */ I((s, a) => {
  const c = O("toolbar", {}), r = p(!1), v = p(""), i = p(!0), d = p([]), h = m(() => {
    var l, o;
    const e = (o = (l = a.slots) == null ? void 0 : l.title) == null ? void 0 : o.call(l);
    return e[0].children ? e : c.title ? t("h3", null, [c.title]) : "";
  }), S = m(() => {
    var k;
    const e = (k = c.config) == null ? void 0 : k.search, {
      placeholder: l = "请输入关键字",
      showAction: o = !0,
      actionText: n = "",
      actionStyle: N = {},
      onChange: g = null,
      onAction: b = null
    } = typeof e == "object" ? e : {}, A = () => o === !0 ? t(u, {
      icon: n ? void 0 : R,
      style: {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        ...N
      },
      onClick: () => b == null ? void 0 : b(v.value)
    }, j(n) ? n : {
      default: () => [n]
    }) : void 0, D = t(K, {
      modelValue: v.value,
      "onUpdate:modelValue": (C) => v.value = C,
      placeholder: l,
      clearable: !0,
      style: {
        width: "200px"
      },
      onInput: (C) => g == null ? void 0 : g(C)
    }, {
      append: A
    });
    return e ? D : "";
  }), w = m(() => {
    var l, o;
    const {
      actions: e
    } = c.config || {};
    return typeof e == "object" && e != null ? e != null && e.__v_isVNode ? e : Array.isArray(e) && e.length ? e.map((n) => n.__v_isVNode ? n : t(u, n, {
      default: () => [n.content]
    })) : t(u, e, {
      default: () => [e.content]
    }) : (o = (l = a.slots).actions) == null ? void 0 : o.call(l);
  }), E = m(() => c.columns.filter(({
    title: e
  }) => e)), T = (e) => {
    a.emit("columnsSettingChange", e);
  }, V = () => {
    i.value = !0, d.value = E.value.map(({
      id: e
    }) => e), a.emit("columnsSettingReset");
  }, F = () => {
    if (y.isEnabled) {
      const e = document.getElementById("pro-table");
      r.value ? y.exit() : y.request(e), r.value = !r.value, a.emit("fullScreenChange", r.value);
    }
  };
  return U(() => i.value, (e) => {
    if (e)
      return V();
    d.value = [], a.emit("columnsSettingChange", []);
  }, {
    immediate: !0
  }), () => {
    let e;
    return t("div", {
      class: "toolbar-container"
    }, [t("div", {
      class: "left"
    }, [h.value ? h.value : S.value]), t("div", {
      class: "right"
    }, [h.value && S.value, t("div", {
      class: "actions"
    }, [w.value]), c.options && t("div", {
      class: "options"
    }, [t(f, {
      content: "刷新",
      placement: "top"
    }, {
      default: () => [t(u, {
        class: "icon",
        icon: q,
        circle: !0,
        onClick: () => a.emit("refresh")
      }, null)]
    }), c.showSearchOption && t(f, {
      content: "搜索栏显隐",
      placement: "top"
    }, {
      default: () => [t(u, {
        class: "icon",
        icon: R,
        circle: !0,
        onClick: () => a.emit("searchDisplay")
      }, null)]
    }), t(P, {
      placement: "bottom",
      width: 200,
      trigger: "click",
      "popper-class": "columns-setting-popover",
      "popper-style": {
        padding: 0
      }
    }, {
      default: () => [t("div", {
        class: "columns-setting-popover-content"
      }, [t("div", {
        class: "head"
      }, [t(_, {
        modelValue: i.value,
        "onUpdate:modelValue": (l) => i.value = l
      }, {
        default: () => [B("列展示")]
      }), t("span", {
        class: "reset-btn",
        onClick: V
      }, [B("重置")])]), t("div", {
        class: "body"
      }, [t($, {
        modelValue: d.value,
        "onUpdate:modelValue": (l) => d.value = l,
        onChange: T
      }, j(e = E.value.map((l, o) => t("p", {
        key: o
      }, [t(_, {
        label: l.id
      }, {
        default: () => [l.title]
      })]))) ? e : {
        default: () => [e]
      })])])],
      reference: () => t("div", {
        class: "icon",
        style: "display: flex; align-items: center"
      }, [t(f, {
        content: "列设置",
        placement: "top"
      }, {
        default: () => [t(u, {
          icon: x,
          circle: !0
        }, null)]
      })])
    }), t(f, {
      content: r.value ? "退出全屏" : "全屏",
      placement: "top"
    }, {
      default: () => [t(u, {
        class: "icon",
        icon: G,
        circle: !0,
        onClick: F
      }, null)]
    })])])]);
  };
}), W = z;
export {
  W as default
};
