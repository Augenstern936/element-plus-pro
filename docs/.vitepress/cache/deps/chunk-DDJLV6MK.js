// ../node_modules/.pnpm/vue-demi@0.14.10_@vue+composition-api@1.7.2_vue@3.5.4_typescript@5.6.2___vue@3.5.4_typescript@5.6.2_/node_modules/vue-demi/lib/index.mjs
var isVue2 = false;
var isVue3 = true;
var Vue2 = void 0;
function install() {
}
function set(target, key, val) {
  if (Array.isArray(target)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val;
  }
  target[key] = val;
  return val;
}
function del(target, key) {
  if (Array.isArray(target)) {
    target.splice(key, 1);
    return;
  }
  delete target[key];
}

export {
  isVue2,
  isVue3,
  Vue2,
  install,
  set,
  del
};
//# sourceMappingURL=chunk-DDJLV6MK.js.map
