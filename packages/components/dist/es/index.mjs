import n from "@element-plus/pro-tabs";
export * from "@element-plus/pro-tabs";
import l from "@element-plus/pro-table";
export * from "@element-plus/pro-table";
import s from "@element-plus/pro-button";
export * from "@element-plus/pro-button";
import p from "@element-plus/pro-search-bar";
export * from "@element-plus/pro-search-bar";
import a from "@element-plus/pro-center-container";
export * from "@element-plus/pro-center-container";
const m = {
  "@element-plus/pro-button": "0.0.1",
  "@element-plus/pro-center-container": "0.0.1",
  "@element-plus/pro-components": "0.0.1-test-01-test-01",
  "@element-plus/pro-search-bar": "0.0.1",
  "@element-plus/pro-table": "0.0.1",
  "@element-plus/pro-tabs": "0.0.1",
  "@element-plus/pro-utils": "1.0.0"
}, u = (e) => {
  const o = (t) => {
    for (const r in e)
      t.component(r, e[r]);
  };
  return {
    version: m["@element-plus/pro-components"],
    install: o
  };
}, f = u({
  ProTabs: n,
  ProTable: l,
  ProButton: s,
  ProSearchBar: p,
  ProCenterContainer: a
}), d = f.install;
export {
  f as default,
  d as install,
  m as version
};
