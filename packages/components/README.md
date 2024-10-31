<h1 align="center">@element-plus-ui/pro-components</h1>

<p align="center">基于 <a href="https://element-plus.org/zh-CN/">ElementPlus</a> 而开发的一套 <a href="https://cn.vuejs.org/">Vue3</a> 模板组件.</p>
<p align="center">在 <a href="https://element-plus.org/zh-CN/">ElementPlus</a> 上进行了自己的封装，更加易用，样式风格与 <a href="https://element-plus.org/zh-CN/">ElementPlus</a> 一脉相承，无需魔改，浑然天成.</p>
<p align="center">使用 <a href="https://www.typescriptlang.org/"> TypeScript </a>开发，提供完整的类型定义文件，无需频繁打开官网，让中后台开发更简单 💪</p>

## 📦 安装

```bash
$ npm install @element-plus-ui/pro-components
```

```bash
$ yarn add @element-plus-ui/pro-components
```

```bash
$ pnpm add @element-plus-ui/pro-components
```

## ✨ 组件

- [ProIcon](https://www.npmjs.com/package/@element-plus-ui/pro-icon) 图标组件，简化了 **ElIcon** 组件，更加简单易用
- [ProText](https://www.npmjs.com/package/@element-plus-ui/pro-text) 文本组件，提供了一些基础操作功能(拷贝/可编辑)
- [ProButton](https://www.npmjs.com/package/@element-plus-ui/pro-button) 按钮模板组件，新增了二次确认操作
- [ProField](https://www.npmjs.com/package/@element-plus-ui/pro-field) 原子信息组件，统一定义了 **ProForm** 和 **ProTable** 组件中的字段
- [ProTable](https://www.npmjs.com/package/@element-plus-ui/pro-table) 表格模板组件，抽象网络请求和表格格式化
- [ProForm](https://www.npmjs.com/package/@element-plus-ui/pro-form) 基础表单模板组件
- [ProSearchBar](https://www.npmjs.com/package/@element-plus-ui/pro-form) 搜索栏组件，属于 **ProForm** 子集，可从 **ProForm** 中导出使用
- [ProStepsForm](https://www.npmjs.com/package/@element-plus-ui/pro-form) 分步表单组件，属于 **ProForm** 子集，可从 **ProForm** 中导出使用
- [ProDialogForm](https://www.npmjs.com/package/@element-plus-ui/pro-form) 搜索栏组件，属于 **ProForm** 子集，可从 **ProForm** 中导出使用
- [ProDrawerForm](https://www.npmjs.com/package/@element-plus-ui/pro-form) 分步表单组件，属于 **ProForm** 子集，可从 **ProForm** 中导出使用
- [ProDescriptions](https://www.npmjs.com/package/@element-plus-ui/pro-descriptions) 定义列表模板组件，**ProTable** 的配套组件

## 🔨 使用

### 🚀 完整引入

```ts
import { createApp } from "vue";
import App from "./src/App.vue";
import ProComponents from "@element-plus-ui/pro-components";

const app = createApp(App);

app.mount("#app").use(ProComponents);
```

### 🚀 按需使用

<img src="https://github.com/Augenstern936/element-plus-pro/raw/master/docs/public/images/table_example/demo1.jpg"/>

```vue
<template>
  <pro-table title="ProTable-高级表格" :columns="columns" />
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { ProTable } from "@element-plus-ui/pro-components";
import type { TableColumns } from "@element-plus-ui/pro-components";

const columns = ref<TableColumns[]>([
  {
    title: "ID",
    dataField: "id",
    search: false,
    width: 100
  },
  {
    title: "姓名",
    dataField: "name",
    search: {
      order: 2
    }
  },
  {
    title: "性别",
    dataField: "sex",
    search: false,
    valueType: "radioButton",
    valueEnum: {
      0: "男",
      1: "女"
    }
  },
  {
    title: "年龄",
    dataField: "age"
  },
  {
    title: "头像",
    dataField: "avatar",
    valueType: "avatar"
  },
  {
    title: "户籍",
    dataField: "city",
    search: true
  },
  {
    title: "生日",
    dataField: "date",
    valueType: "dateYear"
  },
  {
    title: "操作",
    valueType: "action",
    width: 200,
    fixed: "right"
  }
]);
</script>
```

## 捐赠 🍵

如果您正在使用这个项目或者喜欢这个项目的，可以通过以下方式支持我：

- Star、Fork、Watch 一键三连 🚀
- 通过微信、支付宝一次性捐款 ❤

|                                        微信                                        |                                       支付宝                                       |
| :--------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------: |
| <img src="https://github.com/Augenstern936/element-plus-pro/raw/master/docs/public/images/pay/weixin_pay-qrcode.jpg" alt="Wechat QRcode" width=170> | <img src="https://github.com/Augenstern936/element-plus-pro/raw/master/docs/public/images/pay/alipay-qrcode.jpg" alt="Alipay QRcode" width=170> |
