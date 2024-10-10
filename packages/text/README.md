<h1 align="center">@element-plus-ui/pro-text</h1>

<p align="center">基于 <a href="https://element-plus.org/zh-CN/">ElementPlus</a> 的 <a href="https://element-plus.org/zh-CN/component/text.html">ElText</a> 组件，提供了一些基础操作功能(拷贝/可编辑)</p>
<p align="center">让中后台开发更简单 💪</P>

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

#### 🚀 全局引用

```ts
import { createApp } from "vue";
import App from "./src/App.vue";
import ProText from "@element-plus-ui/pro-text";

const app = createApp(App);

app.mount("#app").use(ProText);
```

#### 🚀 按需使用

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

> 除了继承 [ElText](https://element-plus.org/zh-CN/component/button.html) 的 API 以外还支持以下属性.

| 属性     | 描述      | 类型                                            | 默认值 |
| -------- | --------- | ----------------------------------------------- | ------ |
| content  | 文本内容，优先级低于插槽. | `string`                                        | -      |
| copyable | 文本复制. | `boolean` / [`CopyableConfig`](#CopyableConfig) | false      |
| editable | 文本编辑. | `boolean` / [`EditableConfig`](#EditableConfig) | false      |

### CopyableConfig

| 属性     | 描述      | 类型                                            | 默认值 |
| -------- | --------- | ----------------------------------------------- | ------ |
| text  | 复制的文本(未设置时，值为当前ProText文本内容). | `string`                                           | -      |
| icon  | 图标名称. | `string` / `string[]                                             | [DocumentCopy, Select, CloseBold]      |
| tooltip  | 提示框文本. | `string`                                        | -      |
| onCopy  | 监听复制事件. | `(isSuccess: boolean, text: string) => void`   | -      |

### EditableConfig

| 属性     | 描述      | 类型                                            | 默认值 |
| -------- | --------- | ----------------------------------------------- | ------ |
| text  | 编辑的文本(未设置时，值为当前ProText文本内容). | `string`                                           | -      |
| icon  | 图标名称. | `string`                                             | EditPen      |
| tooltip  | 提示框文本. | `string`                                        | -      |
| editing  | 是否编辑中. | `boolean`                                       | false      |
| maxLength  | 最大输入长度. | `number`                                    | -      |
| autoSize  | 自动resize文本域. | `boolean` / [`AutoSizeConfig`](#AutoSizeConfig)                                       | -      |
| onInput  | 监听输入事件. | `(text: string) => void`                      | -      |
| onChange  | 监听编辑状态变化. | `(editing: boolean, text: string) => void`   | -      |

### AutoSizeConfig

| 属性     | 描述      | 类型                                            | 默认值 |
| -------- | --------- | ----------------------------------------------- | ------ |
| minRows  | 最小行数. | `number`                                           | -      |
| maxRows  | 最大行数. | `number`                                           | -      |

## 🔨 案例

```vue
<template>
  <pro-text
    tag="i"
    :content="'通过content属性设置的文本，优先级低于默认插槽'"
    :truncated="true"
    :copyable="true"
    :editable="true"
  >
    通过插槽设置文本内容
  </pro-text>
</template>

<script setup lang="ts">
  import { ProText } from "@element-plus-ui/pro-text";
</script>
```
<img src="https://github.com/Augenstern936/element-plus-pro/blob/master/docs/public/images/text_example/default.jpg"/>

```vue
<template>
  <pro-text
    tag="i"
    :content="editValue"
    :truncated="true"
    :copyable="{
      text: '复制的文本',
      icon: ['CopyDocument', 'CircleCheck'],
      onCopy: (isSuccess: boolean, text: string) => {
        console.log(isSuccess, text);
      }
    }"
    :editable="{
      tooltip: '编辑文本',
      editing: isEditing,
      maxLength: 100,
      autoSize: { minRows: 3 },
      onInput: (text: string) => {
        editValue = text;
      },
      onChange: (editing: boolean, text: string) => {
        editValue = text;
        isEditing = editing;
      }
    }"
    style="font-size: 33px"
  />
</template>

<script setup lang="ts">
import { ProText } from "@element-plus-ui/pro-text";
import { ref } from "vue";

const editValue = ref("我是ProText");
const isEditing = ref(false);
</script>
```
