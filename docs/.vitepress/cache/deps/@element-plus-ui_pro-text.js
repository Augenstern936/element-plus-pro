import {
  m
} from "./chunk-JRYTBEYQ.js";
import {
  ElInput,
  ElText,
  ElTooltip,
  textProps
} from "./chunk-TJXSL54N.js";
import "./chunk-KSW55A4O.js";
import {
  isObject
} from "./chunk-6I67DBKK.js";
import "./chunk-V6ZDW5E6.js";
import {
  computed,
  createVNode,
  defineComponent,
  mergeProps,
  ref,
  watch
} from "./chunk-FNEGEEL4.js";
import "./chunk-JVSYCCQQ.js";
import {
  __commonJS,
  __toESM
} from "./chunk-MTI3AIJG.js";

// ../node_modules/.pnpm/toggle-selection@1.0.6/node_modules/toggle-selection/index.js
var require_toggle_selection = __commonJS({
  "../node_modules/.pnpm/toggle-selection@1.0.6/node_modules/toggle-selection/index.js"(exports, module) {
    module.exports = function() {
      var selection = document.getSelection();
      if (!selection.rangeCount) {
        return function() {
        };
      }
      var active = document.activeElement;
      var ranges = [];
      for (var i = 0; i < selection.rangeCount; i++) {
        ranges.push(selection.getRangeAt(i));
      }
      switch (active.tagName.toUpperCase()) {
        case "INPUT":
        case "TEXTAREA":
          active.blur();
          break;
        default:
          active = null;
          break;
      }
      selection.removeAllRanges();
      return function() {
        selection.type === "Caret" && selection.removeAllRanges();
        if (!selection.rangeCount) {
          ranges.forEach(function(range) {
            selection.addRange(range);
          });
        }
        active && active.focus();
      };
    };
  }
});

// ../node_modules/.pnpm/copy-to-clipboard@3.3.3/node_modules/copy-to-clipboard/index.js
var require_copy_to_clipboard = __commonJS({
  "../node_modules/.pnpm/copy-to-clipboard@3.3.3/node_modules/copy-to-clipboard/index.js"(exports, module) {
    "use strict";
    var deselectCurrent = require_toggle_selection();
    var clipboardToIE11Formatting = {
      "text/plain": "Text",
      "text/html": "Url",
      "default": "Text"
    };
    var defaultMessage = "Copy to clipboard: #{key}, Enter";
    function format(message) {
      var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
      return message.replace(/#{\s*key\s*}/g, copyKey);
    }
    function copy(text, options) {
      var debug, message, reselectPrevious, range, selection, mark, success = false;
      if (!options) {
        options = {};
      }
      debug = options.debug || false;
      try {
        reselectPrevious = deselectCurrent();
        range = document.createRange();
        selection = document.getSelection();
        mark = document.createElement("span");
        mark.textContent = text;
        mark.ariaHidden = "true";
        mark.style.all = "unset";
        mark.style.position = "fixed";
        mark.style.top = 0;
        mark.style.clip = "rect(0, 0, 0, 0)";
        mark.style.whiteSpace = "pre";
        mark.style.webkitUserSelect = "text";
        mark.style.MozUserSelect = "text";
        mark.style.msUserSelect = "text";
        mark.style.userSelect = "text";
        mark.addEventListener("copy", function(e) {
          e.stopPropagation();
          if (options.format) {
            e.preventDefault();
            if (typeof e.clipboardData === "undefined") {
              debug && console.warn("unable to use e.clipboardData");
              debug && console.warn("trying IE specific stuff");
              window.clipboardData.clearData();
              var format2 = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"];
              window.clipboardData.setData(format2, text);
            } else {
              e.clipboardData.clearData();
              e.clipboardData.setData(options.format, text);
            }
          }
          if (options.onCopy) {
            e.preventDefault();
            options.onCopy(e.clipboardData);
          }
        });
        document.body.appendChild(mark);
        range.selectNodeContents(mark);
        selection.addRange(range);
        var successful = document.execCommand("copy");
        if (!successful) {
          throw new Error("copy command was unsuccessful");
        }
        success = true;
      } catch (err) {
        debug && console.error("unable to copy using execCommand: ", err);
        debug && console.warn("trying IE specific stuff");
        try {
          window.clipboardData.setData(options.format || "text", text);
          options.onCopy && options.onCopy(window.clipboardData);
          success = true;
        } catch (err2) {
          debug && console.error("unable to copy using clipboardData: ", err2);
          debug && console.error("falling back to prompt");
          message = format("message" in options ? options.message : defaultMessage);
          window.prompt(message, text);
        }
      } finally {
        if (selection) {
          if (typeof selection.removeRange == "function") {
            selection.removeRange(range);
          } else {
            selection.removeAllRanges();
          }
        }
        if (mark) {
          document.body.removeChild(mark);
        }
        reselectPrevious();
      }
      return success;
    }
    module.exports = copy;
  }
});

// ../node_modules/.pnpm/@element-plus-ui+pro-text@1.0.1_element-plus@2.9.0_vue@3.5.13_typescript@5.7.2___vue@3.5.13_typescript@5.7.2_/node_modules/@element-plus-ui/pro-text/es/utils/vue/install.mjs
var f = (c, o) => {
  if (c.install = (s) => {
    for (const n of [c, ...Object.values(o != null ? o : {})])
      s.component(n.name, n);
  }, o)
    for (const [s, n] of Object.entries(o))
      c[s] = n;
  return c;
};

// ../node_modules/.pnpm/@element-plus-ui+pro-text@1.0.1_element-plus@2.9.0_vue@3.5.13_typescript@5.7.2___vue@3.5.13_typescript@5.7.2_/node_modules/@element-plus-ui/pro-text/es/Text.mjs
import "D:/Users/wang936926/Desktop/workspace/element-plus-pro/node_modules/.pnpm/@element-plus-ui+pro-text@1.0.1_element-plus@2.9.0_vue@3.5.13_typescript@5.7.2___vue@3.5.13_typescript@5.7.2_/node_modules/@element-plus-ui/pro-text/es/styles/text.css";
import "D:/Users/wang936926/Desktop/workspace/element-plus-pro/node_modules/.pnpm/element-plus@2.9.0_vue@3.5.13_typescript@5.7.2_/node_modules/element-plus/theme-chalk/index.css";
var import_copy_to_clipboard = __toESM(require_copy_to_clipboard(), 1);

// ../node_modules/.pnpm/@element-plus-ui+pro-text@1.0.1_element-plus@2.9.0_vue@3.5.13_typescript@5.7.2___vue@3.5.13_typescript@5.7.2_/node_modules/@element-plus-ui/pro-text/es/typing.mjs
var t = {
  ...textProps,
  strong: {
    type: Boolean
  },
  italic: {
    type: Boolean
  },
  delete: {
    type: Boolean
  },
  disabled: {
    type: Boolean
  },
  content: {
    type: String
  },
  copyable: {
    type: [Boolean, Object]
  },
  editable: {
    type: [Boolean, Object]
  }
};

// ../node_modules/.pnpm/@element-plus-ui+pro-text@1.0.1_element-plus@2.9.0_vue@3.5.13_typescript@5.7.2___vue@3.5.13_typescript@5.7.2_/node_modules/@element-plus-ui/pro-text/es/Text.mjs
var T = defineComponent((o, r) => {
  const d = ref("default"), i = ref(false), c = ref(""), I = computed(() => {
    const t2 = isObject(o.copyable) ? o.copyable : {};
    return {
      default: {
        icon: () => createVNode(m, mergeProps(r.attrs, {
          class: "icon",
          name: Array.isArray(t2.icon) ? t2.icon[0] : "DocumentCopy",
          color: "var(--el-color-primary)"
        }), null),
        tooltips: t2 != null && t2.tooltip ? t2.tooltip : "复制"
      },
      success: {
        icon: () => createVNode(m, mergeProps(r.attrs, {
          class: "icon",
          name: Array.isArray(t2.icon) ? t2.icon[1] : "Select",
          color: "var(--el-color-success)"
        }), null),
        tooltips: "复制成功"
      },
      error: {
        icon: () => createVNode(m, mergeProps(r.attrs, {
          class: "icon",
          name: Array.isArray(t2.icon) ? t2.icon[1] : "CloseBold",
          color: "var(--el-color-danger)"
        }), null),
        tooltips: "复制失败"
      }
    };
  }), g = computed(() => I.value[d.value]), m3 = computed(() => {
    var e, n, f2;
    const t2 = (n = (e = r.slots).default) == null ? void 0 : n.call(e);
    return t2 != null && t2.length ? t2.map((l) => l.children).join("") : (f2 = o.content) != null ? f2 : "";
  }), P = async (t2) => {
    const e = t2 || c.value || m3.value;
    if (e)
      try {
        await (0, import_copy_to_clipboard.default)(e), h("success", e);
      } catch (n) {
        h("error");
      }
  }, h = (t2, e = "") => {
    const n = t2 === "success";
    isObject(o.copyable) && typeof o.copyable.onCopy == "function" ? o.copyable.onCopy(n, e) : r.emit("copy", n, e), d.value = t2, setTimeout(() => {
      d.value = "default";
    }, 2200);
  }, A = (t2) => {
    var e;
    c.value = (e = c.value || t2) != null ? e : m3.value, i.value = true;
  };
  return watch(() => [o.editable, m3.value], () => {
    var e, n;
    const t2 = o.editable;
    isObject(t2) ? (c.value = (e = t2.text) != null ? e : m3.value, i.value = (n = t2.editing) != null ? n : false) : c.value = m3.value || c.value;
  }, {
    deep: true,
    immediate: true
  }), () => {
    var n, f2;
    const t2 = isObject(o.copyable) ? o.copyable : {}, e = isObject(o.editable) ? o.editable : {};
    return i.value === true ? createVNode(ElInput, {
      modelValue: c.value,
      "onUpdate:modelValue": (l) => c.value = l,
      type: "textarea",
      autofocus: i.value,
      autosize: (n = e.autoSize) != null ? n : {
        minRows: 1
      },
      maxlength: e.maxLength,
      "show-word-limit": !!e.maxLength,
      onBlur: () => {
        var l;
        i.value = false, (l = e == null ? void 0 : e.onChange) == null || l.call(e, false, c.value);
      },
      onInput: (l) => {
        var a;
        return (a = e == null ? void 0 : e.onInput) == null ? void 0 : a.call(e, l);
      },
      onChange: (l) => {
        var a;
        i.value = false, (a = e == null ? void 0 : e.onChange) == null || a.call(e, false, l);
      }
    }, null) : createVNode("div", {
      class: "pro-text",
      style: {
        display: "flex",
        alignItems: "center"
      }
    }, [createVNode(ElText, mergeProps({
      class: "text"
    }, o, r.attrs), {
      default: () => {
        var l, a, x;
        return [e.text ? (x = (a = (l = r.slots).default) == null ? void 0 : a.call(l)) != null ? x : o.content : c.value];
      }
    }), (o.editable === true || isObject(o.editable)) && createVNode(ElTooltip, {
      content: (f2 = e.tooltip) != null ? f2 : "编辑",
      placement: "top"
    }, {
      default: () => [createVNode(m, mergeProps(r.attrs, {
        class: "icon",
        name: isObject(o.editable) && o.editable.icon || "EditPen",
        color: "var(--el-color-primary)",
        onClick: () => {
          var l, a;
          A(e.text), (a = e == null ? void 0 : e.onChange) == null || a.call(e, true, (l = e.text) != null ? l : m3.value);
        }
      }), null)]
    }), (o.copyable === true || isObject(o.copyable)) && createVNode(ElTooltip, {
      content: g.value.tooltips,
      placement: "top"
    }, {
      default: () => [createVNode(g.value.icon, {
        onClick: () => P(t2.text)
      }, null)]
    })]);
  };
}, {
  name: "ProText"
});
T.props = t;
var q = T;

// ../node_modules/.pnpm/@element-plus-ui+pro-text@1.0.1_element-plus@2.9.0_vue@3.5.13_typescript@5.7.2___vue@3.5.13_typescript@5.7.2_/node_modules/@element-plus-ui/pro-text/es/index.mjs
var m2 = f(q);
export {
  m2 as ProText,
  m2 as default,
  t as proTextProps
};
//# sourceMappingURL=@element-plus-ui_pro-text.js.map
