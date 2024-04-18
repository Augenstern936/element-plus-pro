import { defineComponent, inject, computed, createVNode, Fragment } from "vue";
import { DocumentCopy, UserFilled, Picture, View, Edit, Search, Delete } from "@element-plus/icons-vue";
import ProButton from "@element-plus/pro-button";
import { ElTableColumn, ElSpace, ElIcon, ElProgress, ElRate, ElAvatar, ElImage, ElTooltip, ElButton } from "element-plus";
import { StatusColorEnum } from "../../enum.mjs";
const TableColumn = /* @__PURE__ */ defineComponent((props) => {
  const tableProps = inject("tableProps", {});
  const {
    ctx: tableCtx,
    columnEmptyText,
    cellAlign
  } = tableProps;
  const ellipsis = computed(() => {
    return (columns) => {
      if (columns.ellipsis != void 0) {
        return columns.ellipsis;
      }
      return tableProps.ellipsis;
    };
  });
  const formatFiltersOption = (column) => {
    const {
      filters,
      valueOption = []
    } = column;
    if (filters === true) {
      if (valueOption == null ? void 0 : valueOption.length) {
        return valueOption.map((item) => ({
          text: item.label || item.text,
          value: item.value
        }));
      }
    }
    if (Array.isArray(filters) && (filters == null ? void 0 : filters.length)) {
      return filters.map((item) => ({
        text: item.label || item.text,
        value: item.value
      }));
    }
    return void 0;
  };
  const renderElementContent = (type, data, e) => {
    const valNumber = Number(data);
    switch (type) {
      case "switch":
        return;
      case "image":
        return createVNode("div", {
          "class": "cell-image"
        }, [createVNode(ElImage, {
          "src": data,
          "preview-src-list": [data],
          "preview-teleported": true,
          "fit": "cover",
          "style": "height: 100%; display: flex; align-items: center; justify-content: center;"
        }, {
          error: () => createVNode(ElIcon, {
            "size": 26
          }, {
            default: () => [createVNode(Picture, null, null)]
          })
        }), createVNode("div", {
          "class": "mask-view"
        }, [createVNode(ElIcon, {
          "color": "#fff"
        }, {
          default: () => [createVNode(View, null, null)]
        })])]);
      case "avatar":
        return createVNode(ElAvatar, {
          "src": data,
          "size": 30,
          "icon": UserFilled
        }, null);
      case "rate":
        const rate = Number.isNaN(valNumber) ? 0 : valNumber > 5 ? 5 : valNumber;
        return createVNode(ElRate, {
          "modelValue": rate,
          "size": "large",
          "disabled-void-color": "#c0c4cc",
          "allow-half": true,
          "disabled": true
        }, null);
      case "progress":
        const percentage = Number.isNaN(valNumber) ? 0 : valNumber > 100 ? 100 : valNumber;
        return createVNode(ElProgress, {
          "percentage": percentage,
          "style": "flex: 1"
        }, null);
      case "tag":
        return;
      case "action":
        return renderActionContent(e);
      default:
        return data;
    }
  };
  const renderActionContent = (e) => createVNode(Fragment, null, [createVNode(ElTooltip, {
    "content": "编辑",
    "placement": "top",
    "effect": "dark"
  }, {
    default: () => [createVNode(ElButton, {
      "type": "warning",
      "size": "small",
      "icon": Edit,
      "onClick": () => tableCtx.emit("action", 0, e.row)
    }, null)]
  }), createVNode(ElTooltip, {
    "content": "详情",
    "placement": "top",
    "effect": "dark"
  }, {
    default: () => [createVNode(ElButton, {
      "type": "primary",
      "size": "small",
      "icon": Search,
      "onClick": () => tableCtx.emit("action", 1, e.row)
    }, null)]
  }), createVNode(ElTooltip, {
    "content": "删除",
    "placement": "top",
    "effect": "dark"
  }, {
    default: () => [createVNode(ProButton, {
      "type": "danger",
      "size": "small",
      "icon": Delete,
      "tip": "确定要删除吗?",
      "onClick": () => tableCtx.emit("action", 2, e.row)
    }, null)]
  })]);
  const renderTableColumnContent = (e, column) => {
    var _a, _b, _c;
    const {
      dataField: field,
      valueType: type,
      valueEnum,
      tooltip,
      ellipsis: ellipsis2,
      render
    } = column;
    if (field && tableCtx.slots[field] || type && tableCtx.slots[type]) {
      const name = field || type;
      return (_b = (_a = tableCtx.slots)[name]) == null ? void 0 : _b.call(_a, e.row);
    }
    let tdValue = field ? e.row[field] : "-";
    if (type) {
      if (type == "index") {
        return void 0;
      }
      tdValue = renderElementContent(type, tdValue, e);
    }
    if (type === void 0 && valueEnum) {
      const key = field ? e.row[field] : "";
      const item = valueEnum[key];
      const color = typeof item == "object" ? item.status ? StatusColorEnum[item.status] : void 0 : void 0;
      tdValue = typeof item == "object" && Object.prototype.toString.call(item) == "[object Object]" ? createVNode(ElSpace, {
        "size": 5
      }, {
        default: () => [color && createVNode("span", {
          "class": `dot ${item.status}`,
          "style": {
            "--status-color": color,
            background: color
          }
        }, null), " ", item.text]
      }) : item;
    }
    let emptyText = "-";
    if (typeof columnEmptyText === "boolean") {
      emptyText = columnEmptyText ? "-" : "";
    } else {
      emptyText = columnEmptyText || emptyText;
    }
    const content = (_c = render == null ? void 0 : render(e.row)) != null ? _c : tdValue;
    return content ? createVNode(Fragment, null, [content, " ", column.copyable && createVNode(ElIcon, {
      "class": "copyable"
    }, {
      default: () => [createVNode(DocumentCopy, null, null)]
    })]) : emptyText;
  };
  return () => createVNode(Fragment, null, [props.columns.map((column) => createVNode(ElTableColumn, {
    "prop": column.dataField,
    "label": column.title,
    "type": column.valueType,
    "sortable": column.sorter,
    "width": column.width || "auto",
    "align": column.align || cellAlign,
    "fixed": column.fixed,
    "filters": formatFiltersOption(column),
    "show-overflow-tooltip": ellipsis.value(column),
    "key": column.dataField
  }, {
    default: (e) => column.children && column.children.length ? createVNode(TableColumn, {
      "columns": column.children
    }, null) : renderTableColumnContent(e, column)
  }))]);
});
TableColumn.props = {
  columns: {
    type: Array
  }
};
const TableColumn$1 = TableColumn;
export {
  TableColumn$1 as default
};
