<!--
 * @Description: 
 * @Author: wangbowen936926
 * @Date: 2024-10-05 22:43:24
 * @LastEditTime: 2024-10-10 11:00:38
 * @FilePath: \element-plus-pro\packages\icon\README.md
-->
<h1 align="center">@element-plus-ui/pro-icon</h1>

<p align="center">简化了 <a href="https://element-plus.org/zh-CN/component/icon.html">ElIcon</a> 组件的使用，通过  <b>Name</b> 或 <b>对象取值</b> 的方式指定渲染的元素</p>
<p align="center">您依旧可以按照原先的那种方式使用，让中后台开发更简单 💪</P>

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

```vue
<template>
  <!-- 通过 name 属性指定图标 -->
  <pro-icon name="ArrowDown"/>
  <pro-icon name="ChatRound" :size="20"/>
  <!-- 通过对象取值的方式指定图标 -->
  <ProIcon.ArrowDown color="#409efc"/>
  <!-- 通过默认插槽的方式指定图标 -->
  <pro-icon :size="20" color="#409efc">
    <ChatRound/>
  </pro-icon>
</template>

<script setup lang="ts">
  import {ProIcon, ChatRound} from "@element-plus-ui/pro-icon";
</script>
```