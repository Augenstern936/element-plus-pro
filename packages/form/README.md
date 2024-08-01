<<<<<<< HEAD
<!--
 * @Description: 
 * @Author: wangbowen936926
 * @Date: 2024-06-26 21:22:42
 * @LastEditTime: 2024-08-01 22:04:08
 * @FilePath: \element-plus-pro\packages\form\README.md
-->
# @element-plus/pro-form
=======
# @element-plus-ui/pro-form
>>>>>>> f6abb778d01005aad8853ec749e64e4b83314a28

> 测试

## Install

```bash
$ npm install @element-plus-ui/pro-form
```

```bash
$ yarn add @element-plus-ui/pro-form
```

```bash
$ pnpm add @element-plus-ui/pro-form
```

## Usage

## API

### ProTable Attributes

| 属性        | 描述                                                           | 类型                                          | 默认值 | 是否必填 |
| ----------- | -------------------------------------------------------------- | --------------------------------------------- | ------ | -------- |
| columns     | 需要生成的 table 列配置.                                       | [`ColumnsConfig[]`](#columns)                 | -      | 是       |
| request     | 获取数据源.                                                    | `Funtion`                                     | -      | 否       |
| dataSource  | 数据源，优先级大于`request`                                    | `array`                                       | -      | 否       |
| loading     | 是否开启加载中(当数据由`dataSource`提供时，需手动设置 loading) | `boolean`                                     | -      | 否       |
| search      | 是否显示搜索栏及搜索栏相关配置.                                | `boolean` / `object`                          | true   | 否       |
| params      | 查询需要的额外参数.                                            | `object`                                      | -      | 否       |
| toolbar     | 是否显示工具栏及工具项相关配置.                                | `boolean` / `array`                           | -      | 否       |
| ellipsis    | 表格列内容溢出是否显示省略号.                                  | `boolean`                                     | false  | 否       |
| pagination  | 是否显示分页器及相关配置.                                      | `boolean` / [`PaginationConfig`](#pagination) | true   | 否       |
| defaultSize | 默认值分页器页数大小.                                          | `number` / `string`                           | 10     | 否       |
| keepAlive   | 是否需要开启缓存模式.                                          | `boolean`                                     | false  | 否       |

### columns

| 属性        | 描述                                                | 类型                                      | 默认值 | 是否必填 |
| ----------- | --------------------------------------------------- | ----------------------------------------- | ------ | -------- |
| title       | 列头标题.                                           | `string`                                  | -      | 是       |
| type        | 当前列类型.                                         | `Enum {index, expand, selection, action}` | -      | 否       |
| dataField   | 数据渲染映射的字段名称(与`dataSource`相对应).       | `string`                                  | -      | 否       |
| width       | 列宽.                                               | `number` / `string`                       | -      | 否       |
| sorter      | 是否开启排序.                                       | `boolean`                                 | false  | 否       |
| filters     | 开启过滤及相关配置.                                 | `boolean` / `object`                      | false  | 否       |
| search      | 在搜索栏显隐及相关配置(优先级大于全局`search`设置). | `boolean` / [`SearchConfig`](#search)     | false  | 否       |
| valueType   | 值类型(决定着搜索栏表单渲染的类型).                 | `Enum {input, select, date, checkbox}`    | input  | 否       |
| valueOption | 值选项.                                             | `array`                                   | []     | 否       |
| hideInTable | 当前列是否在表格中显示.                             | `boolean`                                 | false  | 否       |
| children    | 子级(可用于`跨行跨列`效果).                         | [`ColumnsConfig[]`](#columns)             | -      | 否       |
| render      | 自定义渲染数据内容(优先级小于`slots`).              | `function`                                | -      | 否       |

### search

| 属性       | 描述                                      | 类型                | 默认值 | 是否必填 |
| ---------- | ----------------------------------------- | ------------------- | ------ | -------- |
| maxShow    | 搜索栏表单项最大显示数(全局`search`配置). | `number` / `string` | 3      | 否       |
| inline     | 是否内联(全局`search`配置).               | `boolean`           | true   | 否       |
| order      | 排序(在搜索栏中显示的前后顺序).           | `number` / `string` | -      | 否       |
| label      | 标签.                                     | `string`            | -      | 否       |
| labelWidth | 标签宽度.                                 | `number` / `string` | auto   | 否       |

### pagination

| 属性     | 描述           | 类型                         | 默认值 | 是否必填 |
| -------- | -------------- | ---------------------------- | ------ | -------- |
| current  | 当前页         | `number` / `string`          | 1      | 否       |
| pageSize | 分页大小       | `number` / `string`          | 10     | 否       |
| align    | 分页器排列方向 | `Enum {left, right, center}` | right  | 否       |

### 事件

| 名称 | 描述 | 类型 |
| ---- | ---- | ---- |

### 插槽

### 暴露

| 属性              | 描述                          | 类型       |
| ----------------- | ----------------------------- | ---------- |
| loading           | 加载效果                      | `boolean`  |
| refresh           | 刷新数据，参数回滚到最初状态. | `Function` |
| reload            | 重新加载当前页数据.           | `Function` |
| clearSelected     | 清空选中项.                   | `Function` |
| resetSearchFields | 重置搜索栏表单.               | `Function` |
