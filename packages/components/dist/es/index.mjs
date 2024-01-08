import n from "@element-plus/pro-tabs";
export * from "@element-plus/pro-tabs";
import a from "@element-plus/pro-table";
export * from "@element-plus/pro-table";
import l from "@element-plus/pro-button";
export * from "@element-plus/pro-button";
import s from "@element-plus/pro-search-bar";
export * from "@element-plus/pro-search-bar";
import f from "@element-plus/pro-center-container";
export * from "@element-plus/pro-center-container";
const i = (r) => ({
  version: "0.0.1",
  install: (e) => {
    for (const o in r)
      e.component(o, r[o]);
  }
}), t = i({
  ProTabs: n,
  ProTable: a,
  ProButton: l,
  ProSearchBar: s,
  ProCenterContainer: f
}), x = t.install, b = t.version;
export {
  t as default,
  x as install,
  b as version
};
