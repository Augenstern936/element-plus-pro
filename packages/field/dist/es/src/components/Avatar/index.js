var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/components/Avatar/index.tsx
var Avatar_exports = {};
__export(Avatar_exports, {
  ProFieldAvatar: () => ProFieldAvatar,
  default: () => Avatar_default,
  proFieldAvatar: () => proFieldAvatar
});
module.exports = __toCommonJS(Avatar_exports);

// ../../build/jsxFactory.ts
var import_vue = require("vue");

// src/components/Avatar/index.tsx
var import_element_plus2 = require("element-plus");
var import_avatar = require("element-plus/theme-chalk/src/avatar.scss");
var import_vue2 = require("vue");

// src/components/Avatar/props.ts
var import_element_plus = require("element-plus");
var proFieldAvatar = {
  ...import_element_plus.avatarProps,
  style: {
    type: Object,
    default: {}
  }
};

// src/components/Avatar/index.tsx
var ProFieldAvatar = (0, import_vue2.defineComponent)(
  (props) => {
    return () => /* @__PURE__ */ (0, import_vue.h)(import_element_plus2.ElAvatar, { ...props });
  },
  {
    name: "ProFieldAvatar"
  }
);
ProFieldAvatar.props = proFieldAvatar;
var Avatar_default = ProFieldAvatar;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ProFieldAvatar,
  proFieldAvatar
});
