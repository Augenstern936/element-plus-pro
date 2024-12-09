<h1 align="center">@element-plus-ui/pro-table</h1>

<p align="center">在 <a href="https://element-plus.org/zh-CN">ElementPlus</a> 的 <a href="https://element-plus.org/zh-CN/component/table.html">Table</a> 上进行了一层封装，支持了一些预设，并且封装了一些行为</p>
<p align="center">解决项目中需要写很多 <b>table</b> 样板代码问题，让中后台开发更简单 💪</p>

## 📦 安装

```bash
$ npm install @element-plus-ui/pro-table
```

```bash
$ yarn add @element-plus-ui/pro-table
```

```bash
$ pnpm add @element-plus-ui/pro-table
```

## 🔨 使用

```vue
<template>
  <el-card>
    <pro-table title="高级表格组件" :columns="columns" />
  </el-card>
</template>

<script setup lang="ts">
  import { reactive, ref } from "vue";
  import { ProTable } from "@element-plus-ui/pro-table";
  import type { TableColumns } from "@element-plus-ui/pro-table";

  const columns = ref<TableColumns[]>([]);
</script>
```

## API

在 [ElTableProps](https://element-plus.org/zh-CN/component/table.html) 的基础上，新增了以下属性

| 属性 | 描述          | 类型                                 | 默认值 |
| ---- | ------------- | ------------------------------------ | ------ |
| title  | 标题. | `string` | -      |
| ghost  | 幽灵模式. | `boolean` | -      |
| loading  | 标题. | `boolean` | -      |
| columns  | 定义表格列. | Array<[ColumnConfig](#ColumnConfig)> | []      |
| request  | 从服务器读取数据. | `() => {total: number; list: amy[]}` | -      |
| params  | . | `Record<string, any>` | {}      |
| search  | 标题. | `string` | -      |
| toolbar  | 标题. | [ToolbarConfig](#ToolbarConfig) | -      |
| options  | 标题. | `boolean` | -      |
| ellipsis  | 格子内容溢出时，是否显示省略号. | `boolean` | true      |
| pagination  | 标题. | `string` | -      |
| cellEmptyText  | 格子内容为空时的占位文本. | `string` / `boolean` | -      |

### ColumnConfig

除了包含以下属性外，还继承了 [ElTableColumn](https://element-plus.org/zh-CN/component/table.html) 组件的 [Props](https://element-plus.org/zh-CN/component/table.html);

属性 `request`、`valueType`、`valueEnum`、`valueMark`、`valueEnum`、`mappingEnumValue`、`fieldProps` 来自于 [ProField](https://www.npmjs.com/package/@element-plus-ui/pro-field) 组件，具体如何使用不再过多[说明]([ProField](https://www.npmjs.com/package/@element-plus-ui/pro-field));

| 属性 | 描述          | 类型                                 | 默认值 |
| ---- | ------------- | ------------------------------------ | ------ |
| ellipsis  | 内容溢出显示省略号，权重大于全局设置的. | `boolean` | -      |
| copyable  | 是否开启复制功能. | `boolean` | false      |
| hideInTable  | 是否隐藏当前列. | `boolean` | false      |
| search  | 标题. | [ColumnConfig](#ColumnConfig)[] | []      |
| filters  | 定义标头筛选项集合(数据源默认来自于**request**、**valueEnum**)或设置显隐. | `boolean` / `{label: string; value: string \| number}[]` | -      |
| request  | 从服务器读取 **ValueEnum** 数据. | `() => Promise<ValueEnum>` | -      |
| valueType  | 值类型，. | [ValueType](https://www.npmjs.com/package/@element-plus-ui/pro-field) | {}      |
| valueEnum  | 定义枚举数据. | [ValueEnum](https://www.npmjs.com/package/@element-plus-ui/pro-field) | -      |
| valueMark  | 值标记. | [ValueMark](https://www.npmjs.com/package/@element-plus-ui/pro-field) | -      |
| mappingEnumValue  | **ValueEnum** 未明确指定 **value** 时，映射的目标对象 | `label` \| `index` | label      |
| fieldProps  | **valueType** 渲染的组件 **Props** 配置. | `Record<string, any>` | {}      |
| children  | 定义子集. | [ColumnConfig](#ColumnConfig)[] | -      |
| render  | 自定义渲染格子内容. | `(row) => string \| number \| VNode` | -      |

### ToolbarConfig