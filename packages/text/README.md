<h1 align="center">@element-plus-ui/pro-text</h1>

<p align="center">基于 <a href="https://element-plus.org/zh-CN/" style="line-height: 16px; vertical-align:middle;"><img src="https://element-plus.org/images/element-plus-logo.svg" width="77px"/></a> 的 <a href="https://element-plus.org/zh-CN/component/text.html">Text</a> 组件而开发，提供了一些基础操作功能，如：拷贝/可编辑，让中后台开发更简单 💪</P>

## 📦 安装

```bash
$ npm install @element-plus-ui/pro-text
```

```bash
$ yarn add @element-plus-ui/pro-text
```

```bash
$ pnpm add @element-plus-ui/pro-text
```

## 🔨 使用

##### 🚀 全局引用

```ts
import { createApp } from "vue";
import App from "./src/App.vue";
import ProText from "@element-plus-ui/pro-text";

const app = createApp(App);

app.mount("#app").use(ProText);
```

##### 🚀 按需使用

```vue
<template>
  <pro-text class="mx-1">Default</pro-text>
  <pro-text class="mx-1" type="primary">Primary</pro-text>
  <pro-text class="mx-1" type="success">Success</pro-text>
  <pro-text class="mx-1" type="info">Info</pro-text>
  <pro-text class="mx-1" type="warning">Warning</pro-text>
  <pro-text class="mx-1" type="danger">Danger</pro-text>
</template>

<script setup lang="ts">
import ProText from "@element-plus-ui/pro-text";
</script>
```

## API

> ProButton 除了继承 [ElButton](https://element-plus.org/zh-CN/component/button.html) 的 API 以外还支持下面的属性.

| 属性 | 描述          | 类型                                 | 默认值 |
| ---- | ------------- | ------------------------------------ | ------ |
| tip  | 二次确认提示. | `string` / [`TipConfig`](#TipConfig) | -      |

## 🔨 案例
