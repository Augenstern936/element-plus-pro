<h1 align="center">@element-plus-ui/pro-button</h1>

<p align="center">基于 <a href="https://element-plus.org/zh-CN/" style="line-height: 16px; vertical-align:middle;"><img src="https://element-plus.org/images/element-plus-logo.svg" width="77px"/></a> 的 <a href="https://element-plus.org/zh-CN/component/button.html">Button</a> 组件而开发，提供了二次确认提示操作，让中后台开发更简单 💪</p>

## 📦 安装

```bash
$ npm install @element-plus-ui/pro-button
```

```bash
$ yarn add @element-plus-ui/pro-button
```

````bash
$ pnpm add @element-plus-ui/pro-button
```

## 🔨 使用

##### 🚀 全局引用

```ts
import { createApp } from "vue";
import App from "./src/App.vue";
import ProButton from "@element-plus-ui/pro-button";

const app = createApp(App);

app.mount("#app").use(ProButton);
````

##### 🚀 按需使用

```vue
<template>
  <pro-button>Default</pro-button>
  <pro-button type="primary">Primary</pro-button>
  <pro-button type="success">Success</pro-button>
  <pro-button type="info">Info</pro-button>
  <pro-button type="warning">Warning</pro-button>
  <pro-button type="danger">Danger</pro-button>
  <pro-button type="danger" tip="确定要删除吗？">删除</pro-button>
</template>

<script setup lang="ts">
import ProButton from "@element-plus-ui/pro-button";
</script>
```

## API

> ProButton 除了继承 [ElButton](https://element-plus.org/zh-CN/component/button.html) 的 API 以外还支持以下属性.

| 属性 | 描述          | 类型                                 | 默认值 |
| ---- | ------------- | ------------------------------------ | ------ |
| tip  | 二次确认提示. | `string` / [`TipConfig`](#TipConfig) | -      |

#### TipConfig

> 弹框分为 [popconfirm](#https://element-plus.org/zh-CN/component/popconfirm.html) 和 [message-box](https://element-plus.org/zh-CN/component/message-box.html) 两种，可通过 `mode` 参数进行指定，同时 `TipConfig` 继承了 [ElPopconfirm](#https://element-plus.org/zh-CN/component/popconfirm.html) 和 [ElMessageBox](https://element-plus.org/zh-CN/component/message-box.html) 组件 API，相关参数可查阅 <a href="https://element-plus.org/zh-CN/" style="line-height: 16px; vertical-align:middle;"><img src="https://element-plus.org/images/element-plus-logo.svg" width="77px"/></a> 文档.

| 属性 | 描述              | 类型                         | 默认值      |
| ---- | ----------------- | ---------------------------- | ----------- |
| mode | 提示弹框展示模式. | `popconfirm` / `message-box` | message-box |

## 🔨 案例

#### 🚀 message-box

```vue
<template>
  <pro-button type="danger" :tip={mode: "message-box", title: '温馨提示', message: '确定要删除吗?'}>
    删除
  </pro-button>
</template>
```

<img src="https://gitee.com/bo-wen-wang936926/element-plus-pro/raw/master/docs/public/images/button_example/demo1.jpg"/>

#### 🚀 popconfirm

```vue
<template>
  <pro-button type="danger" :tip={mode: "popconfirm", title: '确定要删除吗?'}>
    删除
  </pro-button>
</template>v
```

<img src="https://gitee.com/bo-wen-wang936926/element-plus-pro/raw/master/docs/public/images/button_example/demo2.jpg"/>
