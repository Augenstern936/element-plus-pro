<h1 align="center">@element-plus-ui/pro-icon</h1>

<p align="center">简化了 <a href="https://element-plus.org/zh-CN/component/icon.html">ElIcon</a> 组件的使用，通过  <b>Name</b> 指定渲染的元素</p>
<p align="center">让中后台开发更简单 💪</P>

## 📦 安装

```bash
$ npm install @element-plus-ui/pro-icon
```

```bash
$ yarn add @element-plus-ui/pro-icon
```

```bash
$ pnpm add @element-plus-ui/pro-icon
```

## 🔨 使用

#### 🚀 全局引用

```ts
import { createApp } from "vue";
import App from "./src/App.vue";
import ProIcon from "@element-plus-ui/pro-icon";

const app = createApp(App);

app.mount("#app").use(ProIcon);
```

#### 🚀 按需使用

```vue
<template>
  <pro-icon name="ArrowDown"/>
  <pro-icon name="ChatRound" :size="20"/>
  <pro-icon name="ArrowLeft" :color="'#409efc'"/>
</template>

<script setup lang="ts">
  import ProIcon from "@element-plus-ui/pro-icon";
</script>
```