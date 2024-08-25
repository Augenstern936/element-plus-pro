<h1 align="center">@element-plus-ui/pro-table</h1>

<p align="center">基于 <a href="https://element-plus.org/zh-CN/" style="line-height: 16px; vertical-align:middle;"><img src="https://element-plus.org/images/element-plus-logo.svg" width="77px"/></a> 而开发的一套 <a href="https://cn.vuejs.org/">Vue3</a> 模板组件.</p>
<p align="center">在 <a href="https://element-plus.org/zh-CN/" style="line-height: 16px; vertical-align:middle"><img src="https://element-plus.org/images/element-plus-logo.svg" width="77px"/></a> 上进行了自己的封装，更加易用，样式风格与 <a href="https://element-plus.org/zh-CN/" style="line-height: 16px;  vertical-align:middle"><img src="https://element-plus.org/images/element-plus-logo.svg" width="77px"/></a> 一脉相承，无需魔改，浑然天成.</p>
<p align="center">使用 📠<a href="https://www.typescriptlang.org/"> TypeScript </a>开发，提供完整的类型定义文件，无需频繁打开官网，让中后台开发更简单.</p>

## 📦 Install

```bash
$ npm install @element-plus-ui/pro-table
```

```bash
$ yarn add @element-plus-ui/pro-table
```

```bash
$ pnpm add @element-plus-ui/pro-table
```

## 🔨 Usage

##### 🚀 完整引入

```ts
import { createApp } from "vue";
import App from "./src/App.vue";
import ProTable from "@element-plus-ui/pro-table";

const app = createApp(App);

app.mount("#app").use(ProTable);
```

##### 🚀 按需使用

<img src="https://github.com/Augenstern936/element-plus-pro/raw/master/docs/public/domes/pro-table.jpg"/>

```vue
<template>
  <pro-table title="ProTable-高级表格组件" :columns="columns" />
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { ProTable } from "@element-plus-ui/pro-table";
import type { TableColumns } from "@element-plus-ui/pro-table";

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
