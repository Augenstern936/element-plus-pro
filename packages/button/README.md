<h1 align="center">@element-plus-ui/pro-button</h1>

<p align="center">基于 <a href="https://element-plus.org/zh-CN/">ElementPlus</a> 的 <a href="https://element-plus.org/zh-CN/component/button.html">ElButton</a> 组件</p>
<p align="center">提供了二次确认提示操作，让中后台开发更简单 💪</p>

## 📦 安装

```bash
$ npm install @element-plus-ui/pro-button
```

```bash
$ yarn add @element-plus-ui/pro-button
```

```bash
$ pnpm add @element-plus-ui/pro-button
```

## 🔨 使用

#### 🚀 全局引用

```ts
import { createApp } from "vue";
import App from "./src/App.vue";
import ProButton from "@element-plus-ui/pro-button";

const app = createApp(App);

app.mount("#app").use(ProButton);
```

#### 🚀 按需引用

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

> 除了继承 [ElButton](https://element-plus.org/zh-CN/component/button.html) 的 API 以外还支持以下属性.

| 属性 | 描述          | 类型                                 | 默认值 |
| ---- | ------------- | ------------------------------------ | ------ |
| tip  | 二次确认提示. | `string` / [`TipConfig`](#TipConfig) | -      |

#### TipConfig

> 除了支持以下属性外，同时也继承了 <a href="https://element-plus.org/zh-CN/">ElementPlus</a> 的 <a href="https://element-plus.org/zh-CN/component/popconfirm.html">ElPopconfirm</a> 和 <a href="https://element-plus.org/zh-CN/component/message-box.html">ElMessageBox</a> 组件 API，相关属性指定可查阅 <a href="https://element-plus.org/zh-CN/">ElementPlus</a> 文档.

| 属性 | 描述              | 类型                         | 默认值      |
| ---- | ----------------- | ---------------------------- | ----------- |
| mode | 提示弹框展示模式. | `popconfirm` / `message-box` | message-box |
| before | 操作确认前的行为, 返回值为`false`停止确认行为. | `() => boolean` | - |

## 🔨 案例

#### 🚀 message-box

```vue
<template>
  <pro-button 
    tip="确定要删除吗?" 
    @click="onDelete"
  > 
    default 
  </pro-button>
  <pro-button 
    type="danger" 
    :tip={mode: "message-box", title: '温馨提示', message: '确定要删除吗?'} 
    @click="onDelete"
  >
    删除
  </pro-button>
</template>
<script setup lang="ts">
import ProButton from "@element-plus-ui/pro-button";

const onDelete = () => {
  console.log("确定删除");
};
</script>
```

<img src="https://github.com/Augenstern936/element-plus-pro/blob/master/docs/public/images/button_example/message-box.jpg"/>

#### 🚀 popconfirm

```vue
<template>
  <pro-button 
    type="danger" 
    :tip={mode: "popconfirm", title: '确定要删除吗?'}
    @click="onDelete"
  >
    删除
  </pro-button>
</template>

<script setup lang="ts">
import ProButton from "@element-plus-ui/pro-button";

const onDelete = () => {
  console.log("确定删除");
};
</script>
```

<img src="https://github.com/Augenstern936/element-plus-pro/blob/master/docs/public/images/button_example/popconfirm.jpg"/>
