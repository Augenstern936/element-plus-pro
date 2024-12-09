<h1 align="center">@element-plus-ui/pro-field</h1>

<p align="center">⚡️ 原子信息组件，基于 <a href="https://element-plus.org/zh-CN/">ElementPlus</a> 的 <a href="https://element-plus.org/zh-CN/component/form.html">Form</a> 表单组件</p>
<p align="center">统一 <a href="bubiaoq">@element-plus-ui/pro-components</a> 中的 <a href="https://www.npmjs.com/package/@element-plus-ui/pro-form">ProForm</a>、<a href="https://www.npmjs.com/package/@element-plus-ui/pro-table">ProTable</a> 等组件里的字段定义</p>
<p align="center">让中后台开发更简单 💪</p>

## 📦 安装

```bash
$ npm install @element-plus-ui/pro-field
```

```bash
$ yarn add @element-plus-ui/pro-field
```

```bash
$ pnpm add @element-plus-ui/pro-field
```

## ✨ 组件列表

- [ProField](#ProField) **顶级组件，挂载了以下所有组件，可从中指定需要渲染的组件**
- [ProFieldText](#ProFieldText) 用于输入各类文本
- [ProFieldTextarea](#ProFieldTextarea) 用于输入多行文本
- [ProFieldNumber](#ProFieldNumber) 用于输入数子
- [ProFieldPassword](#ProFieldPassword) 用于输入密码
- [ProFieldDate](#ProFieldDate) 日期选择器用于输入日期
- [ProFieldDateMonth](#ProFieldDateMonth) 日期 + 月选择器，用于输入日期和月
- [ProFieldDateMonths](#ProFieldDateMonths) 日期 + 月选择器，用于输入多个日期和月
- [ProFieldDateMonthRange](#ProFieldDateMonthRange) 日期 + 月区间选择器，用于输入一个日期 + 月的区间
- [ProFieldDateRange](#ProFieldDateRange) 日期区间选择器用于输入一个日期区间
- [ProFieldDates](#ProFieldDates) 用于选择多个日期
- [ProFieldDateTime](#ProFieldDateTime) 日期 + 时间选择器，用于输入日期和时间
- [ProFieldDateTimeRange](#ProFieldDateTimeRange) 日期 + 时间区间选择器，用于输入一个日期 + 时间的区间
- [ProFieldDateWeek](#ProFieldDateWeek) 日期 + 周选择器，用于输入日期和周
- [ProFieldDateYear](#ProFieldDateYear) 日期 + 年选择器，用于输入日期和年
- [ProFieldDateYears](#ProFieldDateYears) 日期 + 年选择器，用于输入多个日期和年
- [ProFieldTime](#ProFieldTime) 时间选择器用于输入时间
- [ProFieldTimeRange](#ProFieldTimeRange) 时间区间选择器用于输入一个时间区间
- [ProFieldRadio](#ProFieldRadio) 支持 **request** 和 **valueEnum** 两种方式来生成子项
- [ProFieldRadioButton](#ProFieldRadioButton) 支持 **request** 和 **valueEnum** 两种方式来生成子项
- [ProFieldCheckbox](#ProFieldCheckbox) 支持 **request** 和 **valueEnum** 两种方式来生成子项
- [ProFieldCheckboxButton](#ProFieldCheckboxButton) 支持 **request** 和 **valueEnum** 两种方式来生成子项
- [ProFieldRate](#ProFieldRate) 用于评分
- [ProFieldSelect](#ProFieldSelect) 支持 **request** 和 **valueEnum** 两种方式来生成子项
- [ProFieldSlider](#ProFieldSlider) 当用户需要在数值区间 / 自定义区间内进行选择时，可为连续或离散值
- [ProFieldSwitch](#ProFieldSwitch) 用于输入互斥的两个选项，一般是 **true** 和 **false**
- [ProFieldColor](#ProFieldColor) 用于颜色选择
- [ProFieldCascader](#ProFieldCascader) 级联选择器逐级查看并选择，支持 **request** 和 **valueEnum** 两种方式来生成子项
- [ProFieldTimeSelect](#ProFieldTimeSelect) 用于选择或输入日期
- [ProFieldTreeSelect](#ProFieldTreeSelect) 支持 **request** 和 **valueEnum** 两种方式来生成子项
- [ProFieldUploadImage](#ProFieldUploadImage) 用于图片上传和展示
- [ProFieldUploadAvatar](#ProFieldUploadAvatar) 用于头像上传和展示
- [ProFieldVirtualizedSelect](#ProFieldVirtualizedSelect) 虚拟化选择器，支持 **request** 和 **valueEnum** 两种方式来生成子项

## 🔨 使用

```vue
<template>
  <!-- 通过 type 属性指定渲染的组件 -->
  <ProField type="switch" v-model="isOpenSwitch" />
  <!-- 通过导出的形式直接使用对应的组件 -->
  <ProFieldSelect :request="getSelectList"/>
  <!-- 通过对象取值的方式指定渲染的组件 -->
  <ProField.Radio
    v-model="selectedRadio"
    mode="read"
    marker="disc"
    :value-enum="{
      1: {
        label: '拔都',
        status: 'success'
      },
      2: {
        label: '海都',
        color: 'red'
      },
      3: {
        label: '蒙哥',
        status: 'warning'
      },
      4: '昔班',
    }"
  />
</template>

<script setup lang="ts">
  import { ProField, ProFieldSelect } from "@element-plus-ui/pro-field";

  const isOpenSwitch = ref(true);
  const selectedRadio = ref(1)

  const getSelectList = async () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([
          {
            label: '红楼梦',
            value: 1,
            disabled: true
          },
          {
            label: '水浒传',
            value: 2
          },
          {
            label: '西游记',
            value: 3
          },
          {
            label: '三国演义',
            value: 4
          },
          '聊斋志异',
          '笑傲江湖'
        ]);
      }, 2000);
    });
  };
</script>
```

> 在 **ValueEnum** 配置中，当键值为对象时，除了包含 **status**、**color** 等属性之外、同时也继承了当前渲染的组件自身的 **Props**，如以上设置了 **disabled** 。
> 如有需要，您可前往 [ElementPlus](https://element-plus.org/zh-CN/) 官方文档处，查阅对应的组件 **API**.

## ProField

属性 `size`、`marker`、`request`、`valueEnum`、`separator`、`emptyText`、`placeholder`、`mappingEnumValue` 只在当前 **type** 指定的组件，包含此属性时生效.

| 属性 | 描述          | 类型                                 | 默认值 |
| ---- | ------------- | ------------------------------------ | ------ |
| v-model  | 绑定的值. | `string` / `number` / `boolean` / `Array<string \| number \| boolean>` | -      |
| mode  | 展示模式. | `read` / `edit` | edit      |
| type  | 当前渲染的元素. | [Type](#Type) | text      |
| size  | 图片和头像大小. | `number` | 40      |
| marker  | 需要显示的标记. | [Marker](#Marker) | none      |
| request  | 从服务器获取数据. | `() => Promise<ValueEnum>` | -      |
| valueEnum  | 要生成的选项集数据，支持多种数据结构，优先级低于 **request**. | [ValueEnum](#ValueEnum) | -      |
| separator  | 多个值之间的分隔符. | `string` | -      |
| emptyText  | **mode=read** 值为空时，提供的占位文本. | `string` | -      |
| placeholder  | 输入框占位文本，透传到 **fieldProps** 中. | `string` / `[string]` / `[string, string]` | -      |
| mappingEnumValue  | 当选项集数据中，未明确指定 **value** 时，需要映射的目标对象. | `lable` / `index` | lable      |
| fieldProps  | 当前渲染的组件 **Props** 配置. | `Record<string, any>` | {}      |

> **fieldProps** 为当前 **type** 所对应的组件 **Props** 配置，主要兼容 [ElementPlus](https://element-plus.org/zh-CN/) 组件，优先级是最高的.
> 如有需要，您可前往 [ElementPlus](https://element-plus.org/zh-CN/) 官方文档处，查阅对应的组件 **API**

### Type

* `text`
* `textarea`
* `number`
* `password`
* `date`
* `dateMonth`
* `dateMonths`
* `dateMonthRange`
* `dateRange`
* `dates`
* `dateTime`
* `dateTimeRange`
* `dateWeek`
* `dateYear`
* `dateYears`
* `time`
* `timeRange`
* `radio`
* `radioButton`
* `checkbox`
* `checkboxButton`
* `rate`
* `select`
* `slider`
* `switch`
* `color`
* `cascader`
* `timeSelect`
* `treeSelect`
* `uploadImage`
* `uploadAvatar`

### Marker

```ts
type Marker = "tag" | "disc" | "circle" | "square" | "disclosure-open" | "disclosure-closed"
```

### ValueEnum

*1. 对象类型，键值为字符串或数字或布尔值或对象*

```ts
Record<string, string | number | boolean | {
  label: string; 
  color?: string; 
  status?: 'success' | 'error' | 'warning' | 'default' | 'processing',
  [key: string]: any
}>
```

```vue
<template>
  <ProField.Radio
    :value-enum="{
      1: '未知',
      2: 2
      3: { label: '审核中', status: 'processing' },
      4: { label: '未通过', status: 'error' },
      5: { label: '已过期', status: 'warning' },
      6: { label: '已完成', status: 'success' },
    }"
  />
</template>

<script setup lang="ts">
  import ProField from "@element-plus-ui/pro-field";
</script>
```

*2. 数组类型，值为字符串或数字或布尔值或对象*

```ts
Array<string | number | boolean | {
  label: string; 
  value?: string | number | boolean; 
  color?: string; 
  status?: 'success' | 'error' | 'warning' | 'default' | 'processing',
  [key: string]: any
}>
```

```vue
<template>
  <ProField.Checkbox
    mapping-enum-value="index"
    :value-enum="[
      '成吉思汗', 
      '阿骨打', 
      '阿保机', 
      99, 
      {
        label: '汉高祖',
        value: 0,
        disabled: true
      },
      {
        label: '唐太宗',
        value: 1
      },
      {
        label: '宋太祖',
        value: 2
      },
      {
        label: '明太祖',
      }
    ]"
  />
</template>

<script setup lang="ts">
  import ProField from "@element-plus-ui/pro-field";
</script>
```

## ProFieldText

| 属性 | 描述          | 类型                                 | 默认值 |
| ---- | ------------- | ------------------------------------ | ------ |
| v-model  | 绑定的值. | `string` | -      |
| mode  | 展示模式. | `read` / `edit` | edit      |
| emptyText  | **mode=read** 时，值为空时的占位文本. | `string` | -      |
| fieldProps  | **Text** 组件 **Props** 配置 | [FieldProps](https://element-plus.org/zh-CN/component/input.html) | {}      |
| placeholder  | 输入框占位文本，透传到 [FieldProps](https://element-plus.org/zh-CN/component/input.html) 中. | `string` | -      |

## ProFieldTextarea

| 属性 | 描述          | 类型                                 | 默认值 |
| ---- | ------------- | ------------------------------------ | ------ |
| v-model  | 绑定的值. | `string` | -      |
| mode  | 展示模式. | `read` / `edit` | edit      |
| emptyText  | **mode=read** 时，值为空时的占位文本. | `string` | -      |
| fieldProps  | **Textarea** 组件 **Props** 配置 | [FieldProps](https://element-plus.org/zh-CN/component/input.html) | {}      |
| placeholder  | 输入框占位文本，透传到 [FieldProps](https://element-plus.org/zh-CN/component/input.html) 中. | `string` | -      |

## ProFieldNumber

| 属性 | 描述          | 类型                                 | 默认值 |
| ---- | ------------- | ------------------------------------ | ------ |
| v-model  | 绑定的值. | `string` | -      |
| mode  | 展示模式. | `read` / `edit` | edit      |
| emptyText  | **mode=read** 时，值为空时的占位文本. | `string` | -      |
| fieldProps  | **Number** 组件 **Props** 配置 | [FieldProps](https://element-plus.org/zh-CN/component/input-number.html) | {}      |
| placeholder  | 输入框占位文本，透传到 [FieldProps](https://element-plus.org/zh-CN/component/input-number.html) 中. | `string` | -      |

## ProFieldPassword

| 属性 | 描述          | 类型                                 | 默认值 |
| ---- | ------------- | ------------------------------------ | ------ |
| v-model  | 绑定的值. | `string` | -      |
| mode  | 展示模式. | `read` / `edit` | edit      |
| emptyText  | **mode=read** 时，值为空时的占位文本. | `string` | -      |
| fieldProps  | **Password** 组件 **Props** 配置 | [FieldProps](https://element-plus.org/zh-CN/component/input.html) | {}      |
| placeholder  | 输入框占位文本，透传到 [FieldProps](https://element-plus.org/zh-CN/component/input.html) 中. | `string` | -      |

## ProFieldDate

| 属性 | 描述          | 类型                                 | 默认值 |
| ---- | ------------- | ------------------------------------ | ------ |
| v-model  | 绑定的值. | `string` / `number` / `Date` | -      |
| mode  | 展示模式. | `read` / `edit` | edit      |
| emptyText  | **mode=read** 时，值为空时的占位文本. | `string` | -      |
| fieldProps  | **Date** 组件 **Props** 配置 | [FieldProps](https://element-plus.org/zh-CN/component/date-picker.html) | {}      |
| placeholder  | 输入框占位文本，透传到 [FieldProps](https://element-plus.org/zh-CN/component/date-picker.html) 中. | `string` | -      |

## ProFieldDates

| 属性 | 描述          | 类型                                 | 默认值 |
| ---- | ------------- | ------------------------------------ | ------ |
| v-model  | 绑定的值. | `string` | -      |
| mode  | 展示模式. | `read` / `edit` | edit      |
| emptyText  | **mode=read** 时，值为空时的占位文本. | `string` | -      |
| fieldProps  | **Dates** 组件 **Props** 配置 | [FieldProps](https://element-plus.org/zh-CN/component/date-picker.html) | {}      |
| placeholder  | 输入框占位文本，透传到 [FieldProps](https://element-plus.org/zh-CN/component/date-picker.html) 中. | `string` | -      |

## ProFieldDateMonth

| 属性 | 描述          | 类型                                 | 默认值 |
| ---- | ------------- | ------------------------------------ | ------ |
| v-model  | 绑定的值. | `string` / `number` / `Date` | -      |
| mode  | 展示模式. | `read` / `edit` | edit      |
| emptyText  | **mode=read** 时，值为空时的占位文本. | `string` | -      |
| fieldProps  | **DateMonth** 组件 **Props** 配置 | [FieldProps](https://element-plus.org/zh-CN/component/date-picker.html) | {}      |
| placeholder  | 输入框占位文本，透传到 [FieldProps](https://element-plus.org/zh-CN/component/date-picker.html) 中. | `string` | -      |

## ProFieldDateMonths

| 属性 | 描述          | 类型                                 | 默认值 |
| ---- | ------------- | ------------------------------------ | ------ |
| v-model  | 绑定的值. | `string[]` / `number[]` / `Date[]` | -      |
| mode  | 展示模式. | `read` / `edit` | edit      |
| separator  | 多个值之间的分隔符. | `string` | -      |
| emptyText  | **mode=read** 时，值为空时的占位文本. | `string` | -      |
| fieldProps  | **DateMonth** 组件 **Props** 配置 | [FieldProps](https://element-plus.org/zh-CN/component/date-picker.html) | {}      |
| placeholder  | 输入框占位文本，透传到 [FieldProps](https://element-plus.org/zh-CN/component/date-picker.html) 中. | `string` | -      |

## ProFieldDateMonthRange

| 属性 | 描述          | 类型                                 | 默认值 |
| ---- | ------------- | ------------------------------------ | ------ |
| v-model  | 绑定的值. | `string` | -      |
| mode  | 展示模式. | `read` / `edit` | edit      |
| separator  | 多个值之间的分隔符，透传到 **FieldProps** 中. | `string` | -      |
| emptyText  | **mode=read** 时，值为空时的占位文本. | `string` | -      |
| fieldProps  | **DateMonthRange** 组件 **Props** 配置 | [FieldProps](https://element-plus.org/zh-CN/component/date-picker.html) | {}      |
| placeholder  | 输入框占位文本，透传到 [FieldProps](https://element-plus.org/zh-CN/component/date-picker.html) 中. | `string` / `[string]` / `[string, string]` | -      |

## ProFieldDateRange

| 属性 | 描述          | 类型                                 | 默认值 |
| ---- | ------------- | ------------------------------------ | ------ |
| v-model  | 绑定的值. | `string` | -      |
| mode  | 展示模式. | `read` / `edit` | edit      |
| separator  | 多个值之间的分隔符，透传到 **FieldProps** 中. | `string` | -      |
| emptyText  | **mode=read** 时，值为空时的占位文本. | `string` | -      |
| fieldProps  | **DateRange** 组件 **Props** 配置 | [FieldProps](https://element-plus.org/zh-CN/component/date-picker.html) | {}      |
| placeholder  | 输入框占位文本，透传到 [FieldProps](https://element-plus.org/zh-CN/component/date-picker.html) 中. | `string` / `[string]` / `[string, string]` | -      |

## ProFieldDateTime

| 属性 | 描述          | 类型                                 | 默认值 |
| ---- | ------------- | ------------------------------------ | ------ |
| v-model  | 绑定的值. | `string` / `number` / `Date` | -      |
| mode  | 展示模式. | `read` / `edit` | edit      |
| emptyText  | **mode=read** 时，值为空时的占位文本. | `string` | -      |
| fieldProps  | **DateTime** 组件 **Props** 配置 | [FieldProps](https://element-plus.org/zh-CN/component/date-picker.html) | {}      |
| placeholder  | 输入框占位文本，透传到 [FieldProps](https://element-plus.org/zh-CN/component/date-picker.html) 中. | `string` | -      |

## ProFieldDateTimeRange

| 属性 | 描述          | 类型                                 | 默认值 |
| ---- | ------------- | ------------------------------------ | ------ |
| v-model  | 绑定的值. | `string` | -      |
| mode  | 展示模式. | `read` / `edit` | edit      |
| separator  | 多个值之间的分隔符，透传到 **FieldProps** 中. | `string` | -      |
| emptyText  | **mode=read** 时，值为空时的占位文本. | `string` | -      |
| fieldProps  | **DateTimeRange** 组件 **Props** 配置 | [FieldProps](https://element-plus.org/zh-CN/component/date-picker.html) | {}      |
| placeholder  | 输入框占位文本，透传到 [FieldProps](https://element-plus.org/zh-CN/component/date-picker.html) 中. | `string` / `[string]` / `[string, string]` | -      |

## ProFieldDateWeek

| 属性 | 描述          | 类型                                 | 默认值 |
| ---- | ------------- | ------------------------------------ | ------ |
| v-model  | 绑定的值. | `string` / `number` / `Date` | -      |
| mode  | 展示模式. | `read` / `edit` | edit      |
| emptyText  | **mode=read** 时，值为空时的占位文本. | `string` | -      |
| fieldProps  | **DateWeek** 组件 **Props** 配置 | [FieldProps](https://element-plus.org/zh-CN/component/date-picker.html) | {}      |
| placeholder  | 输入框占位文本，透传到 [FieldProps](https://element-plus.org/zh-CN/component/date-picker.html) 中. | `string` | -      |

## ProFieldDateYear

| 属性 | 描述          | 类型                                 | 默认值 |
| ---- | ------------- | ------------------------------------ | ------ |
| v-model  | 绑定的值. | `string` / `number` / `Date` | -      |
| mode  | 展示模式. | `read` / `edit` | edit      |
| emptyText  | **mode=read** 时，值为空时的占位文本. | `string` | -      |
| fieldProps  | **DateYear** 组件 **Props** 配置 | [FieldProps](https://element-plus.org/zh-CN/component/date-picker.html) | {}      |
| placeholder  | 输入框占位文本，透传到 [FieldProps](https://element-plus.org/zh-CN/component/date-picker.html) 中. | `string` | -      |

## ProFieldDateYears

| 属性 | 描述          | 类型                                 | 默认值 |
| ---- | ------------- | ------------------------------------ | ------ |
| v-model  | 绑定的值. | `string[]` / `number[]` / `Date[]` | -      |
| mode  | 展示模式. | `read` / `edit` | edit      |
| separator  | 多个值之间的分隔符. | `string` | -      |
| emptyText  | **mode=read** 时，值为空时的占位文本. | `string` | -      |
| fieldProps  | **DateYears** 组件 **Props** 配置 | [FieldProps](https://element-plus.org/zh-CN/component/date-picker.html) | {}      |
| placeholder  | 输入框占位文本，透传到 [FieldProps](https://element-plus.org/zh-CN/component/date-picker.html) 中. | `string` | -      |

## ProFieldTime

| 属性 | 描述          | 类型                                 | 默认值 |
| ---- | ------------- | ------------------------------------ | ------ |
| v-model  | 绑定的值. | `string` | -      |
| mode  | 展示模式. | `read` / `edit` | edit      |
| emptyText  | **mode=read** 时，值为空时的占位文本. | `string` | -      |
| fieldProps  | **Time** 组件 **Props** 配置 | [FieldProps](https://element-plus.org/zh-CN/component/time-picker.html) | {}      |
| placeholder  | 输入框占位文本，透传到 [FieldProps](https://element-plus.org/zh-CN/component/time-picker.html) 中. | `string` | -      |

## ProFieldTimeRange

| 属性 | 描述          | 类型                                 | 默认值 |
| ---- | ------------- | ------------------------------------ | ------ |
| v-model  | 绑定的值. | `string` | -      |
| mode  | 展示模式. | `read` / `edit` | edit      |
| separator  | 多个值之间的分隔符，透传到 **FieldProps** 中. | `string` | -      |
| emptyText  | **mode=read** 时，值为空时的占位文本. | `string` | -      |
| fieldProps  | **TimeRange** 组件 **Props** 配置 | [FieldProps](https://element-plus.org/zh-CN/component/time-picker.html) | {}      |
| placeholder  | 输入框占位文本，透传到 [FieldProps](https://element-plus.org/zh-CN/component/time-picker.html) 中. | `string` / `[string]` / `[string, string]` | -      |

## ProFieldRadio

| 属性 | 描述          | 类型                                 | 默认值 |
| ---- | ------------- | ------------------------------------ | ------ |
| v-model  | 绑定的值. | `string` / `number` / `boolean` | -      |
| mode  | 展示模式. | `read` / `edit` | edit      |
| marker  | **mode=read** 时，需要显示的标记. | [Marker](#Marker) | none      |
| request  | 从服务器获取数据. | `() => Promise<ValueEnum>` | -      |
| valueEnum  | 要生成的选项集数据，支持多种数据结构，优先级低于 **request**. | [ValueEnum](#ValueEnum) | -      |
| mappingEnumValue  | 枚举配置未明确指定 **value** 时，需要映射的目标对象. | `lable` / `index` | lable      |
| emptyText  | **mode=read** 时，值为空时的占位文本. | `string` | -      |
| fieldProps  | **RadioGroup** 组件 **Props** 配置 | [FieldProps](https://element-plus.org/zh-CN/component/radio.html) | {}      |

## ProFieldRadioButton

| 属性 | 描述          | 类型                                 | 默认值 |
| ---- | ------------- | ------------------------------------ | ------ |
| v-model  | 绑定的值. | `string` / `number` / `boolean` | -      |
| mode  | 展示模式. | `read` / `edit` | edit      |
| marker  | **mode=read** 时，需要显示的标记. | [Marker](#Marker) | none      |
| request  | 从服务器获取数据. | `() => Promise<ValueEnum>` | -      |
| valueEnum  | 要生成的选项集数据，支持多种数据结构，优先级低于 **request**. | [ValueEnum](#ValueEnum) | -      |
| mappingEnumValue  | 枚举配置未明确指定 **value** 时，需要映射的目标对象. | `lable` / `index` | lable      |
| emptyText  | **mode=read** 时，值为空时的占位文本. | `string` | -      |
| fieldProps  | **RadioGroup** 组件 **Props** 配置 | [FieldProps](https://element-plus.org/zh-CN/component/radio.html) | {}      |

## ProFieldCheckbox

| 属性 | 描述          | 类型                                 | 默认值 |
| ---- | ------------- | ------------------------------------ | ------ |
| v-model  | 绑定的值. | `Array<string \| number \| boolean>` | -      |
| mode  | 展示模式. | `read` / `edit` | edit      |
| marker  | **mode=read** 时，需要显示的标记. | [Marker](#Marker) | none      |
| request  | 从服务器获取数据. | `() => Promise<ValueEnum>` | -      |
| valueEnum  | 要生成的选项集数据，支持多种数据结构，优先级低于 **request**. | [ValueEnum](#ValueEnum) | -      |
| mappingEnumValue  | 枚举配置未明确指定 **value** 时，需要映射的目标对象. | `lable` / `index` | lable      |
| separator  | **mode=read** 时，显示的多个值之间的分隔符. | `string` | -      |
| emptyText  | **mode=read** 时，值为空时的占位文本. | `string` | -      |
| fieldProps  | **CheckboxGroup** 组件 **Props** 配置 | [FieldProps](https://element-plus.org/zh-CN/component/checkbox.html) | {}      |

## ProFieldCheckboxButton

| 属性 | 描述          | 类型                                 | 默认值 |
| ---- | ------------- | ------------------------------------ | ------ |
| v-model  | 绑定的值. | `Array<string \| number \| boolean>` | -      |
| mode  | 展示模式. | `read` / `edit` | edit      |
| marker  | **mode=read** 时，需要显示的标记. | [Marker](#Marker) | none      |
| request  | 从服务器获取数据. | `() => Promise<ValueEnum>` | -      |
| valueEnum  | 要生成的选项集数据，支持多种数据结构，优先级低于 **request**. | [ValueEnum](#ValueEnum) | -      |
| mappingEnumValue  | 枚举配置未明确指定 **value** 时，需要映射的目标对象. | `lable` / `index` | lable      |
| separator  | **mode=read** 时，显示的多个值之间的分隔符. | `string` | -      |
| emptyText  | **mode=read** 时，值为空时的占位文本. | `string` | -      |
| fieldProps  | **CheckboxGroup** 组件 **Props** 配置 | [FieldProps](https://element-plus.org/zh-CN/component/checkbox.html) | {}      |

## ProFieldRate

| 属性 | 描述          | 类型                                 | 默认值 |
| ---- | ------------- | ------------------------------------ | ------ |
| v-model  | 绑定的值. | `number` | -      |
| mode  | 展示模式. | `read` / `edit` | edit      |
| emptyText  | **mode=read** 时，值为空时的占位文本. | `string` | -      |
| fieldProps  | **Rate** 组件 **Props** 配置 | [FieldProps](https://element-plus.org/zh-CN/component/rate.html) | {}      |

## ProFieldSelect

| 属性 | 描述          | 类型                                 | 默认值 |
| ---- | ------------- | ------------------------------------ | ------ |
| v-model  | 绑定的值. | `string` / `number` / `boolean` / `object` / `array` | -      |
| mode  | 展示模式. | `read` / `edit` | edit      |
| marker  | 需要显示的标记. | [Marker](#Marker) | none      |
| request  | 从服务器获取数据. | `() => Promise<ValueEnum>` | -      |
| valueEnum  | 要生成的选项集数据，支持多种数据结构，优先级低于 **request**. | [ValueEnum](#ValueEnum) | -      |
| mappingEnumValue  | 枚举配置未明确指定 **value** 时，需要映射的目标对象. | `lable` / `index` | lable      |
| separator  | **mode=read** 时，显示的多个值之间的分隔符. | `string` | -      |
| emptyText  | **mode=read** 时，值为空时的占位文本. | `string` | -      |
| fieldProps  | **Select** 组件 **Props** 配置 | [FieldProps](https://element-plus.org/zh-CN/component/select.html) | {}      |
| placeholder  | 输入框占位文本，透传到 [FieldProps](https://element-plus.org/zh-CN/component/select.html) 中. | `string` | -      |

## ProFieldSlider

| 属性 | 描述          | 类型                                 | 默认值 |
| ---- | ------------- | ------------------------------------ | ------ |
| v-model  | 绑定的值. | `number` / `number[]` | -      |
| mode  | 展示模式. | `read` / `edit` | edit      |
| emptyText  | **mode=read** 时，值为空时的占位文本. | `string` | -      |
| fieldProps  | **Slider** 组件 **Props** 配置 | [FieldProps](https://element-plus.org/zh-CN/component/slider.html) | {}      |

## ProFieldSwitch

| 属性 | 描述          | 类型                                 | 默认值 |
| ---- | ------------- | ------------------------------------ | ------ |
| v-model  | 绑定的值. | `boolean` | -      |
| mode  | 展示模式. | `read` / `edit` | edit      |
| emptyText  | **mode=read** 时，值为空时的占位文本. | `string` | -      |
| fieldProps  | **Switch** 组件 **Props** 配置 | [FieldProps](https://element-plus.org/zh-CN/component/switch.html) | {}      |

## ProFieldColor

| 属性 | 描述          | 类型                                 | 默认值 |
| ---- | ------------- | ------------------------------------ | ------ |
| v-model  | 绑定的值. | `string` | -      |
| mode  | 展示模式. | `read` / `edit` | edit      |
| emptyText  | **mode=read** 时，值为空时的占位文本. | `string` | -      |
| fieldProps  | **ColorPicker** 组件 **Props** 配置 | [FieldProps](https://element-plus.org/zh-CN/component/color-picker.html) | {}      |

## ProFieldCascader

| 属性 | 描述          | 类型                                 | 默认值 |
| ---- | ------------- | ------------------------------------ | ------ |
| v-model  | 绑定的值. | `string` / `number` / `array` | -      |
| mode  | 展示模式. | `read` / `edit` | edit      |
| separator  | 多个值之间的分隔符. | `string` | -      |
| emptyText  | **mode=read** 时，值为空时的占位文本. | `string` | -      |
| fieldProps  | **Cascader** 组件 **Props** 配置 | [FieldProps](https://element-plus.org/zh-CN/component/cascader.html) | {}      |
| placeholder  | 输入框占位文本，透传到 [FieldProps](https://element-plus.org/zh-CN/component/cascader.html) 中. | `string` | -      |

## ProFieldTimeSelect

| 属性 | 描述          | 类型                                 | 默认值 |
| ---- | ------------- | ------------------------------------ | ------ |
| v-model  | 绑定的值. | `string` | -      |
| mode  | 展示模式. | `read` / `edit` | edit      |
| emptyText  | **mode=read** 时，值为空时的占位文本. | `string` | -      |
| fieldProps  | **TimeSelect** 组件 **Props** 配置 | [FieldProps](https://element-plus.org/zh-CN/component/time-select.html) | {}      |
| placeholder  | 输入框占位文本，透传到 [FieldProps](https://element-plus.org/zh-CN/component/time-select.html) 中. | `string` | -      |

## ProFieldTreeSelect

| 属性 | 描述          | 类型                                 | 默认值 |
| ---- | ------------- | ------------------------------------ | ------ |
| v-model  | 绑定的值. | `string` | -      |
| mode  | 展示模式. | `read` / `edit` | edit      |
| request  | 从服务器获取数据. | `() => Promise<ValueEnum>` | -      |
| valueEnum  | 要生成的选项集数据，支持多种数据结构，优先级低于 **request**. | [ValueEnum](#ValueEnum) | -      |
| emptyText  | **mode=read** 时，值为空时的占位文本. | `string` | -      |
| fieldProps  | **TreeSelect** 组件 **Props** 配置 | [FieldProps](https://element-plus.org/zh-CN/component/tree-select.html) | {}      |
| placeholder  | 输入框占位文本，透传到 [FieldProps](https://element-plus.org/zh-CN/component/tree-select.html) 中. | `string` | -      |

## ProFieldUploadImage

| 属性 | 描述          | 类型                                 | 默认值 |
| ---- | ------------- | ------------------------------------ | ------ |
| v-model  | 绑定的值. | `string` / `{name?: string; url: string}` / `Array<{name?: string; url: string}>` | -      |
| mode  | 展示模式. | `read` / `edit` | edit      |
| size  | 图片大小. | `number` | 40      |
| fieldProps  | **UploadImage** 组件 **Props** 配置 | [FieldProps](#) | {}      |

> **fieldProps** 合并了 [ElUpload](https://element-plus.org/zh-CN/component/upload.html) 和 [ElImage](https://element-plus.org/zh-CN/component/image.html) 组件 **Props** 属性，可统一在此进行指定相关属性

## ProFieldUploadAvatar

| 属性 | 描述          | 类型                                 | 默认值 |
| ---- | ------------- | ------------------------------------ | ------ |
| v-model  | 绑定的值. | `string` / `{name?: string; url: string}` | -      |
| mode  | 展示模式. | `read` / `edit` | edit      |
| size  | 图片大小，透传到 [FieldProps](#) 中. | `default \| large \| small` / `number` | default      |
| marker  | 需要显示的标记. | `female \| male \| on-line \| off-line`      | none |
| fieldProps  | **UploadAvatar** 组件 **Props** 配置 | [FieldProps](#) | {}      |

> **fieldProps** 合并了 [ElUpload](https://element-plus.org/zh-CN/component/upload.html) 和 [ElAvatar](https://element-plus.org/zh-CN/component/avatar.html) 组件 **Props** 属性，可统一在此进行指定相关属性

## ProFieldVirtualizedSelect

| 属性 | 描述          | 类型                                 | 默认值 |
| ---- | ------------- | ------------------------------------ | ------ |
| v-model  | 绑定的值. | `string` / `number` / `boolean` / `Array<string \| number \| boolean>` | -      |
| mode  | 展示模式. | `read` / `edit` | edit      |
| marker  | 需要显示的标记. | [Marker](#Marker) | none      |
| request  | 从服务器获取数据. | `() => Promise<ValueEnum>` | -      |
| valueEnum  | 要生成的选项集数据，支持多种数据结构，优先级低于 **request**. | [ValueEnum](#ValueEnum) | -      |
| separator  | **mode=read** 时，显示的多个值之间的分隔符. | `string` | -      |
| emptyText  | **mode=read** 时，值为空时的占位文本. | `string` | -      |
| fieldProps  | **VirtualizedSelect** 组件 **Props** 配置 | [FieldProps](https://element-plus.org/zh-CN/component/select-v2.html) | {}      |
| placeholder  | 输入框占位文本，透传到 [FieldProps](https://element-plus.org/zh-CN/component/select-v2.html) 中. | `string` | -      |
