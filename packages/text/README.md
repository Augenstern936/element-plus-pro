# @element-plus-ui/pro-text

> 基于 Element Plus 的 Text 进行了扩展，完全兼容 ElText 组件.

## 📦 Install

```bash
$ npm install @element-plus-ui/pro-text
```

```bash
$ yarn add @element-plus-ui/pro-text
```

```bash
$ pnpm add @element-plus-ui/pro-text
```

## 🔨 Usage

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
  <pro-text>Default</pro-text>
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
