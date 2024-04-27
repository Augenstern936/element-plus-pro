import { version as t } from "./pro-components3.mjs";
const l = (n) => {
  const e = (r) => {
    for (const o in n)
      r.component(o, n[o]);
  };
  return {
    version: t["@element-plus/pro-components"],
    install: e
  };
};
export {
  l as default
};
