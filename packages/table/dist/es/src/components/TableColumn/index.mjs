import { defineComponent as B, inject as S, computed as V, createVNode as t, Fragment as m } from "vue";
import { DocumentCopy as D, UserFilled as I, Picture as O, View as $, Edit as R, Search as U, Delete as q } from "@element-plus/icons-vue";
import G from "@element-plus/pro-button";
import { ElTableColumn as H, ElSpace as J, ElIcon as y, ElProgress as K, ElRate as L, ElAvatar as M, ElImage as Q, ElTooltip as b, ElButton as k } from "element-plus";
import { StatusColorEnum as W } from "../../enum.mjs";
const v = /* @__PURE__ */ B((N) => {
  const g = S("tableProps", {}), {
    ctx: a,
    columnEmptyText: u,
    cellAlign: T
  } = g, F = V(() => (e) => e.ellipsis != null ? e.ellipsis : g.ellipsis), j = (e) => {
    const {
      filters: r,
      valueOption: o = []
    } = e;
    if (r === !0 && o != null && o.length)
      return o.map((l) => ({
        text: l.label || l.text,
        value: l.value
      }));
    if (Array.isArray(r) && (r != null && r.length))
      return r.map((l) => ({
        text: l.label || l.text,
        value: l.value
      }));
  }, z = (e, r, o) => {
    const l = Number(r);
    switch (e) {
      case "switch":
        return;
      case "image":
        return t("div", {
          class: "cell-image"
        }, [t(Q, {
          src: r,
          "preview-src-list": [r],
          "preview-teleported": !0,
          fit: "cover",
          style: "height: 100%; display: flex; align-items: center; justify-content: center;"
        }, {
          error: () => t(y, {
            size: 26
          }, {
            default: () => [t(O, null, null)]
          })
        }), t("div", {
          class: "mask-view"
        }, [t(y, {
          color: "#fff"
        }, {
          default: () => [t($, null, null)]
        })])]);
      case "avatar":
        return t(M, {
          src: r,
          size: 30,
          icon: I
        }, null);
      case "rate":
        const s = Number.isNaN(l) ? 0 : l > 5 ? 5 : l;
        return t(L, {
          modelValue: s,
          size: "large",
          "disabled-void-color": "#c0c4cc",
          "allow-half": !0,
          disabled: !0
        }, null);
      case "progress":
        const w = Number.isNaN(l) ? 0 : l > 100 ? 100 : l;
        return t(K, {
          percentage: w,
          style: "flex: 1"
        }, null);
      case "tag":
        return;
      case "action":
        return A(o);
      default:
        return r;
    }
  }, A = (e) => t(m, null, [t(b, {
    content: "编辑",
    placement: "top",
    effect: "dark"
  }, {
    default: () => [t(k, {
      type: "warning",
      size: "small",
      icon: R,
      onClick: () => a.emit("action", 0, e.row)
    }, null)]
  }), t(b, {
    content: "详情",
    placement: "top",
    effect: "dark"
  }, {
    default: () => [t(k, {
      type: "primary",
      size: "small",
      icon: U,
      onClick: () => a.emit("action", 1, e.row)
    }, null)]
  }), t(b, {
    content: "删除",
    placement: "top",
    effect: "dark"
  }, {
    default: () => [t(G, {
      type: "danger",
      size: "small",
      icon: q,
      tip: "确定要删除吗?",
      onClick: () => a.emit("action", 2, e.row)
    }, null)]
  })]), P = (e, r) => {
    var h, x, C;
    const {
      dataField: o,
      valueType: l,
      valueEnum: s,
      tooltip: w,
      ellipsis: X,
      render: p
    } = r;
    if (o && a.slots[o] || l && a.slots[l]) {
      const d = o || l;
      return (x = (h = a.slots)[d]) == null ? void 0 : x.call(h, e.row);
    }
    let i = o ? e.row[o] : "-";
    if (l) {
      if (l == "index")
        return;
      i = z(l, i, e);
    }
    if (l === void 0 && s) {
      const d = o ? e.row[o] : "", n = s[d], f = typeof n == "object" && n.status ? W[n.status] : void 0;
      i = typeof n == "object" && Object.prototype.toString.call(n) == "[object Object]" ? t(J, {
        size: 5
      }, {
        default: () => [f && t("span", {
          class: `dot ${n.status}`,
          style: {
            "--status-color": f,
            background: f
          }
        }, null), " ", n.text]
      }) : n;
    }
    let c = "-";
    typeof u == "boolean" ? c = u ? "-" : "" : c = u || c;
    const E = (C = p == null ? void 0 : p(e.row)) != null ? C : i;
    return E ? t(m, null, [E, " ", r.copyable && t(y, {
      class: "copyable"
    }, {
      default: () => [t(D, null, null)]
    })]) : c;
  };
  return () => t(m, null, [N.columns.map((e) => t(H, {
    prop: e.dataField,
    label: e.title,
    type: e.valueType,
    sortable: e.sorter,
    width: e.width || "auto",
    align: e.align || T,
    fixed: e.fixed,
    filters: j(e),
    "show-overflow-tooltip": F.value(e),
    key: e.dataField
  }, {
    default: (r) => e.children && e.children.length ? t(v, {
      columns: e.children
    }, null) : P(r, e)
  }))]);
});
v.props = {
  columns: {
    type: Array
  }
};
const le = v;
export {
  le as default
};
