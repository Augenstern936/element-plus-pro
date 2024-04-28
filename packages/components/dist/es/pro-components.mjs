import r from "@element-plus/pro-field";
export * from "@element-plus/pro-field";
import n from "@element-plus/pro-tabs";
export * from "@element-plus/pro-tabs";
const s = {
  "@element-plus/pro-button": "0.0.1",
  "@element-plus/pro-center-container": "0.0.1",
  "@element-plus/pro-components": "0.0.1-test-01-test-01",
  "@element-plus/pro-search-bar": "0.0.1",
  "@element-plus/pro-table": "0.0.1",
  "@element-plus/pro-tabs": "0.0.1",
  "@element-plus/pro-utils": "1.0.0"
}, p = (e) => {
  const o = (l) => {
    for (const t in e)
      l.component(t, e[t]);
  };
  return {
    version: s["@element-plus/pro-components"],
    install: o
  };
}, a = p({
  ProTabs: n,
  ProField: r
  // ProTable,
  // ProButton,
  //ProSearchBar,
  //ProCenterContainer,
}), i = a.install;
export {
  a as default,
  i as install,
  s as version
};
