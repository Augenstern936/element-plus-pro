# @element-plus-pro/button

> 对 Element Plus 的Button进行了扩展，增加二次确认提示操作。

## 📦 Install

```bash
$ npm install @element-plus-pro/button
```

```bash
$ yarn add @element-plus-pro/button
```

```bash
$ pnpm add @element-plus-pro/button
```

## 🔨 Usage

##### 🚀 完整引入

```ts
import { createApp } from "vue";
import App from "./src/App.vue";
import ProButton from "@element-plus-pro/button";

const app = createApp(App);

app.mount("#app").use(ProButton);
```

##### 🚀 按需使用

```vue
<template>
  <pro-button>Default</pro-button>
  <pro-button type="primary">Primary</pro-button>
  <pro-button type="success">Success</pro-button>
  <pro-button type="info">Info</pro-button>
  <pro-button type="warning">Warning</pro-button>
  <pro-button type="danger">Danger</pro-button>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { ProButton } from "@element-plus-pro/button";
</script>
```
