import { defineComponent as re, ref as i, computed as c, provide as R, watch as j, createVNode as r, withDirectives as ie, vShow as se, Fragment as ue, createTextVNode as U, KeepAlive as ce } from "vue";
import ge from "@element-plus/pro-search-bar";
import { withInstall as fe, toOptions as ve } from "@element-plus/pro-utils";
import { ElAlert as de, ElMessage as me, ElTable as he, ElPagination as pe } from "element-plus";
import "./style/index.scss.mjs";
import { proTableProps as Se } from "./typing.mjs";
import be from "../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.mjs";
import q from "./components/Card/index.mjs";
import ye from "./components/ToolBar/index.mjs";
import Ce from "./components/TableColumn/index.mjs";
const N = /* @__PURE__ */ re((l, s) => {
  const {
    loading: V,
    search: u,
    keepAlive: K,
    columns: L,
    params: M,
    defaultSize: W,
    pagination: k,
    dataSource: g,
    request: S
  } = l, f = i(V), F = i(!1), v = i({}), D = i(), O = i(), d = i([]), b = i("block"), m = i({
    data: [],
    total: 0
  }), n = i({
    current: 1,
    pageSize: W || 10
  }), y = i([]), C = i(!1), $ = c(() => {
    var e;
    return typeof l.search == "object" ? (e = l.search.rightTools) != null ? e : [] : void 0;
  }), z = c(() => s.slots.title || s.slots.title), T = c(() => {
    var t, a;
    return ((a = (t = l.columns) == null ? void 0 : t.filter((o) => !o.hideInTable)) != null ? a : []).map((o) => ({
      ...o,
      id: be(),
      name: o.dataField
    }));
  }), w = c(() => C.value ? y.value : T.value), G = c(() => ({
    display: "flex",
    justifyContent: (typeof (l == null ? void 0 : l.pagination) == "object" ? l.pagination.align : "right") || "right"
  })), P = c(() => {
    const e = u || u === void 0 ? void 0 : !0;
    return L.map((t) => {
      const {
        valueType: a,
        search: o
      } = t;
      if (a != "index" && a != "image" && a != "avatar" && a != "tag" && a != "action" && (o || o === e))
        return H(t);
    }).filter((t) => t);
  }), B = (e) => Object.fromEntries(Object.entries(e)), H = (e) => {
    const {
      dataField: t = "",
      title: a,
      valueType: o,
      valueEnum: E
    } = e, oe = typeof e.search == "object" ? e.search : {}, ne = typeof u == "object" ? u : {};
    return {
      label: a,
      dataField: t,
      valueType: o,
      valueOptions: E ? ve(E) : void 0,
      ...ne,
      ...oe
    };
  }, h = (e, ...t) => {
    let a = {
      ...e
    };
    return t.length && t.forEach((o) => {
      typeof o == "object" && (o.current || o.pageSize) && (a = {
        ...a,
        ...o
      });
    }), {
      current: a.current,
      pageSize: a.pageSize
    };
  }, p = async (e = {}) => {
    if (S && typeof S == "function" && !f.value)
      try {
        f.value = !0;
        const t = h(n.value), a = {
          ...n.value
        };
        delete a.current, delete a.pageSize, m.value = await S(t, {
          ...v.value,
          ...a,
          ...e
        });
      } catch (t) {
        console.warn(t);
      } finally {
        f.value = !1;
      }
  }, J = (e = {}) => {
    const {
      current: t,
      pageSize: a
    } = h(n.value, M, k);
    if (t == n.value.current && n.value.pageSize == a)
      return p(e);
    n.value.current = t, n.value.pageSize = a;
  }, Q = (e = {}) => {
    g || p(e);
  }, A = () => {
    O.value.clearSelection();
  }, X = (e = {}) => {
    const t = Object.keys(e);
    if (!t.length)
      return !0;
    let a = 0;
    return t.forEach((o) => {
      e[o] || ++a;
    }), t.length === a;
  }, Y = () => {
    if (X(v.value))
      return me.warning("筛选栏表单信息为空");
    p();
  }, Z = () => {
    P.value.length && (b.value = b.value === "block" ? "none" : "block");
  }, _ = (e) => {
    y.value = T.value.filter((t) => e.includes(t.id) || (t == null ? void 0 : t.type) == "selection"), C.value = !0;
  }, ee = () => {
    y.value = [], C.value = !1;
  }, te = (e) => {
    d.value = e;
  }, x = (e, t) => {
    const a = h(n.value);
    if (g)
      return s.emit("pageChange", {
        ...a,
        [e]: t
      });
    n.value[e] = t;
  }, ae = () => {
    var e;
    return (e = D.value) == null ? void 0 : e.resetFields();
  }, I = () => r("div", {
    style: {
      border: "1px solid transparent"
    }
  }, [r(he, {
    ref: O,
    data: m.value.data,
    "header-cell-style": {
      color: "#333",
      fontWeight: 600,
      background: "#f5f7fa",
      ...l.headerCellStyle
    },
    "onSelection-change": te
  }, {
    default: () => [r(Ce, {
      columns: w.value
    }, null)]
  }), k !== !1 && m.value.total > 0 && r("div", {
    class: "pagination-container",
    style: G.value
  }, [r(pe, {
    "current-page": n.value.current,
    "onUpdate:current-page": [(e) => n.value.current = e, (e) => x("current", e)],
    background: !0,
    total: m.value.total,
    "page-size": n.value.pageSize,
    "page-sizes": [10, 30, 50, 100, 200],
    layout: "total, sizes, prev, pager, next, jumper",
    "onUpdate:page-size": (e) => x("pageSize", e)
  }, null)])]), le = () => {
    g && Array.isArray(g) ? m.value.data = [...g] : p();
  };
  return R("tableProps", {
    ctx: s,
    ...l,
    columns: w.value
  }), R("toolbar", {
    title: l.title,
    options: l.options,
    columns: T.value,
    showSearchOption: !!P.value.length,
    config: l.toolbar
  }), j(() => l.loading, (e) => {
    f.value = e;
  }), j(() => [l.defaultSize, l.params, l.pagination], (e) => {
    n.value = h({
      ...n.value,
      pageSize: e[0]
    }, e[1], e[2]);
  }, {
    deep: !0,
    immediate: !0
  }), j(() => [n.value, l.dataSource], () => {
    le();
  }, {
    deep: !0,
    immediate: !0
  }), s.expose({
    loading: f,
    refresh: J,
    reload: Q,
    clearSelected: A,
    resetSearchFields: ae
  }), () => r("div", {
    id: "pro-table",
    class: "pro-table",
    style: F.value ? {
      height: "100vh",
      background: "#fff"
    } : {}
  }, [ie(r(q, {
    ghost: l.ghost || !1,
    style: {
      paddingBottom: 0,
      marginBottom: "20px"
    }
  }, {
    default: () => [r(ge, {
      ref: D,
      modelValue: v.value,
      "onUpdate:modelValue": (e) => v.value = e,
      items: P.value,
      rightTools: $.value,
      inline: typeof u == "object" ? u.inline === void 0 ? !0 : u.inline : !0,
      onSearch: Y,
      onTools: (e) => s.emit("tools", e)
    }, {
      "right-tools": () => {
        var e, t;
        return (t = (e = s.slots)["search-bar-right-tools"]) == null ? void 0 : t.call(e, {
          ...v.value
        });
      }
    })]
  }), [[se, b.value === "block"]]), r(q, {
    ghost: l.ghost || !1
  }, {
    default: () => [r(ye, {
      onSearchDisplay: Z,
      onColumnsSettingChange: _,
      onColumnsSettingReset: ee,
      onFullScreenChange: (e) => {
        F.value = e;
      }
    }, {
      title: () => {
        var e;
        return (e = z.value) == null ? void 0 : e.call(z, {
          selection: B(d.value)
        });
      },
      actions: () => {
        var e, t;
        return (t = (e = s.slots).toolbar) == null ? void 0 : t.call(e, {
          selection: B(d.value)
        });
      }
    }), d.value.length > 0 && r(de, {
      type: "info",
      "close-text": "取消选择",
      style: {
        marginBottom: "20px",
        backgroundColor: "#f5f7fa"
      },
      onClose: A
    }, {
      title: () => r(ue, null, [U("已选择 "), r("span", {
        class: "alert-count"
      }, [d.value.length]), U(" 项")])
    }), K ? r(ce, null, [I()]) : I()]
  })]);
}, {
  name: "ProTable"
});
N.props = Se;
const Be = fe(N);
export {
  Be as default
};
