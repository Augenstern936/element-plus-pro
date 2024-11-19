<h1 align="center">@element-plus-ui/pro-provider</h1>

<p align="center">以组件的方式使用 <a href="https://cn.vuejs.org/">Vue</a> 的 <a href="https://cn.vuejs.org/api/composition-api-dependency-injection.html#provide">Provide API</a>，让中后台开发更简单 💪</p>

## 📦 安装

```bash
$ npm install @element-plus-ui/pro-provider
```

```bash
$ yarn add @element-plus-ui/pro-provider
```

```bash
$ pnpm add @element-plus-ui/pro-provider
```

## 🔨 使用

- #### 祖先组件

```vue
<template>
  <pro-provider :value="{id: '101', name: '李四', role: 'admin'}">
    <my-component-a>
       <my-component-b/>
    </my-component-a>
  </pro-provider>
</template>
  
<script setup lang="ts">
  import ProProvider from "@element-plus-ui/pro-provider"
</script>
```

- #### 后代组件

```vue
<script setup lang="ts">
  import { inject } from 'vue'

  // 注入单个值
  const userId = inject<string>('id')

  // 注入整个值
  const user = inject('provider-value', {})
</script>
```