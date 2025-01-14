---
title: ProButton
outline: deep
---

# ProButton 高级按钮

提供了二次确认提示操作，简化操作行为流程处理

## 使用

<demo vue="../examples/pro-button/basic.vue" stackblitz="true"/>

## API

### 属性

| 属性名 | 说明              | 类型                         | 默认值      |
| ---- | ----------------- | ---------------------------- | ----------- |
| tip  | 二次确认提示. | `string` / [`TipConfig`](#TipConfig) | -      |

### TipConfig

除了支持以下属性外，同时也继承了 <a href="https://element-plus.org/zh-CN/component/popconfirm.html">ElPopconfirm</a> 和 <a href="https://element-plus.org/zh-CN/component/message-box.html">ElMessageBox</a> 组件 API.

| 属性 | 描述              | 类型                         | 默认值      |
| ---- | ----------------- | ---------------------------- | ----------- |
| mode | 提示弹框展示模式. | `popconfirm` / `message-box` | message-box |
| before | 确认前的行为, 返回值为`false`停止确认行为. | `() => boolean` | - |
