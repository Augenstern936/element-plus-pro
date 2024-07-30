# @element-plus-pro/components

> 基于 Element Plus 而开发的一套Vue3模板组件。在 Element Plus 上进行了自己的封装，更加易用，样式风格与 Element Plus 一脉相承，无需魔改，浑然天成。使用 📠 TypeScript 开发，提供完整的类型定义文件，无需频繁打开官网，让中后台开发更简单.

## 📦 Install

```bash
$ npm install @element-plus-pro/components
```

```bash
$ yarn add @element-plus-pro/components
```

```bash
$ pnpm add @element-plus-pro/components
```

## ✨ Components

- [ProButton](https://www.npmjs.com/package/@element-plus-pro/button) 按钮模板组件，抽象网络请求和表格格式化
- [ProField](https://www.npmjs.com/package/@element-plus-pro/field) 表单字段模板组件，抽象网络请求和表格格式化
- [ProForm](https://www.npmjs.com/package/@element-plus-pro/form) 表单模板组件，预设常见布局和行为
- [ProTable](https://www.npmjs.com/package/@element-plus-pro/table) 表格模板组件，抽象网络请求和表格格式化
- [ProTabs](https://www.npmjs.com/package/@element-plus-pro/tabs) 标签模板组件，抽象网络请求和表格格式化
- [ProDescriptions](https://www.npmjs.com/package/@element-plus-pro/descriptions) 定义列表模板组件，ProTable 的配套组件

## 🔨 Usage

##### 🚀 完整引入

```ts
import { createApp } from "vue";
import App from "./src/App.vue";
import ProComponents from "@element-plus-pro/components";

const app = createApp(App);

app.mount("#app").use(ProComponents);
```

##### 🚀 按需使用

```vue
<template>
  <pro-table title="ProTable-高级表格" :columns="columns" />
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { ProTable } from "@element-plus-pro/components";
import type { TableColumns } from "@element-plus-pro/components";

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
