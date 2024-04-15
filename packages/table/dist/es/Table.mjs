import { defineComponent as ce, ref as s, computed as p, provide as N, watch as U, createVNode as u, withDirectives as se, vShow as de, Fragment as ge, createTextVNode as H, KeepAlive as pe } from "vue";
import { withInstall as me, toOptions as ve } from "@element-plus/pro-utils";
import { ElAlert as fe, ElMessage as ye, ElTable as he, ElPagination as Se } from "element-plus";
import be from "@element-plus/pro-search-bar";
import { Card as K, ToolBar as Ce, TableColumn as je } from "./index2.mjs";
import "@element-plus/icons-vue";
import "@element-plus/pro-button";
const ze = {
  loading: {
    type: Boolean,
    default: !1
  },
  ghost: {
    type: Boolean,
    default: !1
  },
  // 是否开启缓存模式
  keepAlive: {
    type: Boolean,
    default: !1
  },
  title: String,
  cellAlign: {
    type: String,
    default: "left"
  },
  headerCellStyle: {
    type: Object,
    default: {}
  },
  // 列
  columns: {
    type: Array,
    required: !0
  },
  // 为空时，默认显示的标记
  columnEmptyText: {
    type: [Boolean, String],
    default: "-"
  },
  // 默认分页大小
  defaultSize: {
    type: Number,
    default: 10
  },
  // 是否开启超出列宽显示省略号
  ellipsis: {
    type: Boolean,
    default: void 0
  },
  // 全局搜索栏配置(权限低于单列配置)
  search: {
    type: [Boolean, Object],
    default: void 0
  },
  // 工具栏
  toolbar: {
    type: Object,
    default: {
      placeholder: "请输入关键字",
      showAction: !0,
      actionStyle: {}
    }
  },
  //
  options: {
    type: Boolean,
    default: !0
  },
  // 样式
  tableStyle: {
    type: Object,
    default: () => {
    }
  },
  // 获取数据需要的额外参数
  params: {
    type: Object,
    default: {}
  },
  pagination: {
    type: [Boolean, Object],
    default: !0
  },
  // 数据源
  dataSource: {
    type: Object
  },
  // 获取数据的方法
  request: {
    type: Function
  },
  // 监听查询事件
  onSearch: {
    type: Function
  },
  // 监听重置事件
  onReset: {
    type: Function
  },
  // 监听过滤事件
  onFilter: {
    type: Function
  }
};
let C;
const Te = new Uint8Array(16);
function Fe() {
  if (!C && (C = typeof crypto != "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !C))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return C(Te);
}
const o = [];
for (let t = 0; t < 256; ++t)
  o.push((t + 256).toString(16).slice(1));
function Oe(t, n = 0) {
  return o[t[n + 0]] + o[t[n + 1]] + o[t[n + 2]] + o[t[n + 3]] + "-" + o[t[n + 4]] + o[t[n + 5]] + "-" + o[t[n + 6]] + o[t[n + 7]] + "-" + o[t[n + 8]] + o[t[n + 9]] + "-" + o[t[n + 10]] + o[t[n + 11]] + o[t[n + 12]] + o[t[n + 13]] + o[t[n + 14]] + o[t[n + 15]];
}
const Be = typeof crypto != "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto), L = {
  randomUUID: Be
};
function De(t, n, m) {
  if (L.randomUUID && !n && !t)
    return L.randomUUID();
  t = t || {};
  const r = t.random || (t.rng || Fe)();
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, n) {
    m = m || 0;
    for (let d = 0; d < 16; ++d)
      n[m + d] = r[d];
    return n;
  }
  return Oe(r);
}
const M = /* @__PURE__ */ ce((t, n) => {
  const {
    loading: m,
    search: r,
    keepAlive: d,
    columns: W,
    params: $,
    defaultSize: G,
    pagination: P,
    dataSource: v,
    request: j
  } = t, f = s(m), x = s(!1), g = s({}), k = s(), w = s(), y = s([]), z = s("block"), h = s({
    data: [],
    total: 0
  }), i = s({
    current: 1,
    pageSize: G || 10
  }), T = s([]), F = s(!1), J = p(() => {
    var e;
    return typeof t.search == "object" ? ((e = t.search) == null ? void 0 : e.rightTools) || [] : void 0;
  }), O = p(() => n.slots.title || n.slots.title), B = p(() => {
    var a;
    return ((a = t.columns) == null ? void 0 : a.filter((l) => !l.hideInTable)).map((l) => ({
      ...l,
      id: De(),
      name: l.dataField
    }));
  }), A = p(() => F.value ? T.value : B.value), Q = p(() => {
    var a;
    return {
      display: "flex",
      justifyContent: (typeof (t == null ? void 0 : t.pagination) == "object" ? (a = t == null ? void 0 : t.pagination) == null ? void 0 : a.align : "right") || "right"
    };
  }), D = p(() => {
    const e = r || r === void 0 ? void 0 : !0;
    return W.map((a) => {
      const {
        valueType: l,
        search: c
      } = a;
      if (l != "index" && l != "image" && l != "avatar" && l != "tag" && l != "action" && (c || c === e))
        return X(a);
    }).filter((a) => a);
  }), I = (e) => Object.fromEntries(Object.entries(e)), X = (e) => {
    const {
      dataField: a = "",
      title: l,
      valueType: c,
      valueEnum: E
    } = e, ie = typeof e.search == "object" ? e.search : {}, ue = typeof r == "object" ? r : {};
    return {
      label: l,
      dataField: a,
      valueType: c,
      valueOptions: E ? ve(E) : void 0,
      ...ue,
      ...ie
    };
  }, S = (e, ...a) => {
    let l = {
      ...e
    };
    return a.length && a.forEach((c) => {
      typeof c == "object" && (c.current || c.pageSize) && (l = {
        ...l,
        ...c
      });
    }), {
      current: l.current,
      pageSize: l.pageSize
    };
  }, b = async (e = {}) => {
    if (j && typeof j == "function" && !f.value)
      try {
        f.value = !0;
        const a = S(i.value), l = {
          ...i.value
        };
        delete l.current, delete l.pageSize, h.value = await j(a, {
          ...g.value,
          ...l,
          ...e
        });
      } catch (a) {
        console.warn(a);
      } finally {
        f.value = !1;
      }
  }, Y = (e = {}) => {
    const {
      current: a,
      pageSize: l
    } = S(i.value, $, P);
    if (a == i.value.current && i.value.pageSize == l)
      return b(e);
    i.value.current = a, i.value.pageSize = l;
  }, Z = (e = {}) => {
    v || b(e);
  }, R = () => {
    w.value.clearSelection();
  }, _ = (e = {}) => {
    const a = Object.keys(e);
    if (!a.length)
      return !0;
    let l = 0;
    return a.forEach((c) => {
      e[c] || ++l;
    }), a.length === l;
  }, ee = () => {
    if (console.log(g.value, "searchForm.value"), _(g.value))
      return ye.warning("筛选栏表单信息为空");
    b();
  }, te = () => {
    D.value.length && (z.value = z.value === "block" ? "none" : "block");
  }, ae = (e) => {
    T.value = B.value.filter((a) => e.includes(a.id) || a.type == "selection"), F.value = !0;
  }, ne = () => {
    T.value = [], F.value = !1;
  }, le = (e) => {
    y.value = e;
  }, V = (e, a) => {
    const l = S(i.value);
    if (v)
      return n.emit("pageChange", {
        ...l,
        [e]: a
      });
    i.value[e] = a;
  }, oe = () => {
    var e;
    return (e = k.value) == null ? void 0 : e.resetFields();
  }, q = () => u("div", {
    style: {
      border: "1px solid transparent"
    }
  }, [u(he, {
    ref: w,
    data: h.value.data,
    "header-cell-style": {
      color: "#333",
      fontWeight: 600,
      background: "#f5f7fa",
      ...t.headerCellStyle
    },
    "onSelection-change": le
  }, {
    default: () => [u(je, {
      columns: A.value
    }, null)]
  }), P !== !1 && h.value.total > 0 && u("div", {
    class: "pagination-container",
    style: Q.value
  }, [u(Se, {
    "current-page": i.value.current,
    "onUpdate:current-page": [(e) => i.value.current = e, (e) => V("current", e)],
    background: !0,
    total: h.value.total,
    "page-size": i.value.pageSize,
    "page-sizes": [10, 30, 50, 100, 200],
    layout: "total, sizes, prev, pager, next, jumper",
    "onUpdate:page-size": (e) => V("pageSize", e)
  }, null)])]), re = () => {
    v && Array.isArray(v) ? h.value.data = [...v] : b();
  };
  return N("tableProps", {
    ctx: n,
    ...t,
    columns: A.value
  }), N("toolbar", {
    title: t.title,
    options: t.options,
    columns: B.value,
    showSearchOption: !!D.value.length,
    config: t.toolbar
  }), U(() => t.loading, (e) => {
    f.value = e;
  }), U(() => [t.defaultSize, t.params, t.pagination], (e) => {
    i.value = S({
      ...i.value,
      pageSize: e[0]
    }, e[1], e[2]);
  }, {
    deep: !0,
    immediate: !0
  }), U(() => [i.value, t.dataSource], () => {
    re();
  }, {
    deep: !0,
    immediate: !0
  }), n.expose({
    loading: f,
    refresh: Y,
    reload: Z,
    clearSelected: R,
    resetSearchFields: oe
  }), () => u("div", {
    id: "pro-table",
    class: "pro-table",
    style: x.value ? {
      height: "100vh",
      background: "#fff"
    } : {}
  }, [se(u(K, {
    ghost: t.ghost || !1,
    style: {
      paddingBottom: 0,
      marginBottom: "20px"
    }
  }, {
    default: () => [u(be, {
      ref: k,
      modelValue: g.value,
      "onUpdate:modelValue": (e) => g.value = e,
      items: D.value,
      rightTools: J.value,
      inline: typeof r == "object" ? (r == null ? void 0 : r.inline) === void 0 ? !0 : r.inline : !0,
      onSearch: ee,
      onTools: (e) => n.emit("tools", e)
    }, {
      "right-tools": () => {
        var e, a;
        return (a = (e = n.slots)["search-bar-right-tools"]) == null ? void 0 : a.call(e, {
          ...g.value
        });
      }
    })]
  }), [[de, z.value === "block"]]), u(K, {
    ghost: t.ghost || !1
  }, {
    default: () => [u(Ce, {
      onSearchDisplay: te,
      onColumnsSettingChange: ae,
      onColumnsSettingReset: ne,
      onFullScreenChange: (e) => {
        x.value = e;
      }
    }, {
      title: () => {
        var e;
        return (e = O.value) == null ? void 0 : e.call(O, {
          selection: I(y.value)
        });
      },
      actions: () => {
        var e, a;
        return (a = (e = n.slots).toolbar) == null ? void 0 : a.call(e, {
          selection: I(y.value)
        });
      }
    }), y.value.length > 0 && u(fe, {
      type: "info",
      "close-text": "取消选择",
      style: {
        marginBottom: "20px",
        backgroundColor: "#f5f7fa"
      },
      onClose: R
    }, {
      title: () => u(ge, null, [H("已选择 "), u("span", {
        class: "alert-count"
      }, [y.value.length]), H(" 项")])
    }), d ? u(pe, null, [q()]) : q()]
  })]);
}, {
  name: "ProTable"
});
M.props = ze;
const Ie = me(M);
export {
  Ie as default
};
