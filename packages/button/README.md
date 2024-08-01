# @element-plus-ui/pro-button

> 基于 Element Plus 的 Button 进行了扩展，完全兼容 ElButton 按钮，增加二次确认提示操作。

## 📦 Install

```bash
$ npm install @element-plus-ui/pro-button
```

```bash
$ yarn add @element-plus-ui/pro-button
```

```bash
$ pnpm add @element-plus-ui/pro-button
```

## 🔨 Usage

##### 🚀 全局引用

```ts
import { createApp } from "vue";
import App from "./src/App.vue";
import ProButton from "@element-plus-ui/pro-button";

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
import { ProButton } from "@element-plus-ui/pro-button";
</script>
```

## API

> ProButton 除了继承 [ElButton](https://element-plus.org/zh-CN/component/button.html) 的 API 以外还支持下面的属性.

| 属性 | 描述          | 类型                                 | 默认值 |
| ---- | ------------- | ------------------------------------ | ------ |
| tip  | 二次确认提示. | `string` / [`TipConfig`](#TipConfig) | -      |

#### TipConfig

> 弹框分为[popconfirm](#https://element-plus.org/zh-CN/component/popconfirm.html)和[message-box](https://element-plus.org/zh-CN/component/message-box.html)两种，您可通过`mode`参数进行指定，同时 TipConfig 继承了 [ElPopconfirm](#https://element-plus.org/zh-CN/component/popconfirm.html) 和 [ElMessageBox](https://element-plus.org/zh-CN/component/message-box.html) 组件 API，其它参数指定您可查阅[Elelment Plus](https://element-plus.org/zh-CN/)相关文档.

| 属性 | 描述              | 类型                         | 默认值      |
| ---- | ----------------- | ---------------------------- | ----------- |
| mode | 提示弹框展示模式. | `popconfirm` / `message-box` | message-box |
