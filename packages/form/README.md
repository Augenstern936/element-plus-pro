<h1 align="center">@element-plus-ui/pro-form</h1>

<p align="center">在原来的 <a href="https://element-plus.org/zh-CN/component/form.html">ElForm</a> 的基础上增加了一些语法糖和更多的布局设置，帮助我们快速地开发一个表单</p>
<p align="center">让中后台开发更简单 💪</p>

## 📦 安装

```bash
$ npm install @element-plus-ui/pro-form
```

```bash
$ yarn add @element-plus-ui/pro-form
```

```bash
$ pnpm add @element-plus-ui/pro-form
```

## ✨ 布局组件

- [ProForm](#ProForm) 基础表单组件，并挂载了辅助和表单项组件
- [ProSearchBar](#ProSearchBar) 搜索栏表单组件，配合其它组件单独使用，如：table
- [ProStepsForm](#ProStepsForm) 分布式表单组件
- [ProDialogForm](#ProDialogForm) 组合了 **ElDialog** 和 **ProForm** 组件，可通过 **trigger** 来控制显隐, 减少繁琐的状态管理
- [ProDrawerForm](#ProDrawerForm) 组合了 **ElDrawer** 和 **ProForm** 组件，可通过 **trigger** 来控制显隐, 减少繁琐的状态管理

## ✨ 表单项组件(一般配合布局组件一起使用)

> 这些组件本质上是 **ElFormItem** 和 组件的结合，我们可以把他们当成一个 **ElFormItem** 来使用，并且支持各种 **props**。
> 每个表单项都支持 **fieldProps** 属性来支持设置输入组件的 **props**。 我们支持了 **placeholder** 的透传，你可以直接在组件上设置 **placeholder**

- [ProFormText](#ProFormFields) 用于输入各类文本
- [ProFormTextarea](#ProFormFields) 用于输入多行文本
- [ProFormNumber](#ProFormFields) 用于输入数子
- [ProFormPassword](#ProFormFields) 用于输入密码
- [ProFormDate](#ProFormFields) 日期选择器用于输入日期
- [ProFormDateMonth](#ProFormFields) 日期 + 月选择器，用于输入日期和月
- [ProFormDateMonths](#ProFormFields) 日期 + 月选择器，用于输入多个日期和月
- [ProFormDateMonthRange](#ProFormFields) 日期 + 月区间选择器，用于输入一个日期 + 月的区间
- [ProFormDateRange](#ProFormFields) 日期区间选择器用于输入一个日期区间
- [ProFormDates](#ProFormFields) 用于选择多个日期
- [ProFormDateTime](#ProFormFields) 日期 + 时间选择器，用于输入日期和时间
- [ProFormDateTimeRange](#ProFormFields) 日期 + 时间区间选择器，用于输入一个日期 + 时间的区间
- [ProFormDateWeek](#ProFormFields) 日期 + 周选择器，用于输入日期和周
- [ProFormDateYear](#ProFormFields) 日期 + 年选择器，用于输入日期和年
- [ProFormDateYears](#ProFormFields) 日期 + 年选择器，用于输入多个日期和年
- [ProFormTime](#ProFormFields) 时间选择器用于输入时间
- [ProFormTimeRange](#ProFormFields) 时间区间选择器用于输入一个时间区间
- [ProFormRadio](#ProFormFields) 支持 **request** 和 **valueEnum** 两种方式来生成子项
- [ProFormRadioButton](#ProFormFields) 支持 **request** 和 **valueEnum** 两种方式来生成子项
- [ProFormCheckbox](#ProFormFields) 支持 **request** 和 **valueEnum** 两种方式来生成子项
- [ProFormCheckboxButton](#ProFormFields) 支持 **request** 和 **valueEnum** 两种方式来生成子项
- [ProFormRate](#ProFormFields) 用于评分
- [ProFormSelect](#ProFormFields) 支持 **request** 和 **valueEnum** 两种方式来生成子项
- [ProFormSlider](#ProFormFields) 当用户需要在数值区间 / 自定义区间内进行选择时，可为连续或离散值
- [ProFormSwitch](#ProFormFields) 用于输入互斥的两个选项，一般是 **true** 和 **false**
- [ProFormColor](#ProFormFields) 用于颜色选择
- [ProFormCascader](#ProFormFields) 级联选择器逐级查看并选择，支持 **request** 和 **valueEnum** 两种方式来生成子项
- [ProFormTimeSelect](#ProFormFields) 用于选择或输入日期
- [ProFormTreeSelect](#ProFormFields) 支持 **request** 和 **valueEnum** 两种方式来生成子项
- [ProFormUploadImage](#ProFormFields) 用于图片上传和展示
- [ProFormUploadAvatar](#ProFormFields) 用于头像上传和展示
- [ProFormVirtualizedSelect](#ProFormFields) 虚拟化选择器，支持 **request** 和 **valueEnum** 两种方式来生成子项

## API

### ProForm

> 在 [ElForm](https://element-plus.org/zh-CN/component/form.html) 的基础上，新增了以下属性，如果你想要自定义表单元素，ProForm 与 ElForm 的方法是相同的，你仍然可以用 FormItem + 自定义组件的方式来自定义。

| 属性 | 描述          | 类型                                 | 默认值 |
| ---- | ------------- | ------------------------------------ | ------ |
| v-model  | 绑定的数据实体. | `Record<string, any>` | -      |
| title  | 标题. | `string` | -      |
| grid  | 开启栅格化模式. | `boolean` | false      |
| colProps  | 开启 **grid** 模式时，需配置的布局参数. | [ColProps](https://element-plus.org/zh-CN/component/layout.html) | {}      |
| rowProps  | 开启 **grid** 模式时，需配置的布局参数. | [RowProps](https://element-plus.org/zh-CN/component/layout.html) | {}      |
| columns  | 以JSON配置的方式生成表单项. | Array<[ColumnConfig](ColumnConfig)> | []     |
| params  | 请求参数. | `Record<string, any>` | {}      |
| request  | 发起网络请求，返回值会覆盖给 v-model. | `(params) => Promise<data>` | -      |
| readonly  | 是否只读. | `boolean` | false      |
| emptyText  | **readonly=true** 以及值为空时，需要显示的占位文本. | `string` | -      |
| labelStyle  | 表单项标签样式. | `Record<string, any>` | {}      |
| submitter  | 提交器，用于配置相关按钮. | [SubmitterConfig](#SubmitterConfig) | -      |

```vue
<template>
  <pro-form
    ref="formRef"
    v-model="formData"
    :label-style="{ fontWeight: 600 }"
    :required="true"
    :columns="formItems"
    :request="getFormData"
    :params="form"
    :grid="true"
    :col-props="{ span: 24 }"
    :submitter="{
      hideResetButton: false,
      fillMode: 'full'
    }"
    @reset="() => console.log(formRef, 'reset')"
  >
    <ProForm.Switch v-model="form.switch" :order="1" label="开关测试:" activeText="已打开" inactive-text="测试" />
  </pro-form>
</template>

<script setup lang="ts">
  import { ProForm } from "@element-plus-ui/pro-form";
  import type { ProFormColumn } "@element-plus-ui/pro-form";
  import { ref } from "vue";

  const formRef = ref();

  const formData = ref({})

  const formItems = ref<ProFormColumn[]>([
    {
      label: "姓名:",
      dataField: "name",
      required: true,
      order: 0,
      hidden: (model: Record<string, any>) => {
        return model.switch === true;
      }
    },
    {
      label: "年龄:",
      dataField: "age",
      valueType: "number",
      tooltip: "测试"
    },
    {
      label: "出生日期:",
      valueType: "date",
    },
    {
      label: "爱好:",
      dataField: "test",
      valueType: "radio",
      valueEnum: {
        1: "钓鱼",
        2: "王者",
        3: "台球",
        4: "阅读"
      }
    },
    {
      label: "评价:",
      valueType: "rate",
      fieldProps: {
        scoreTemplate: "{value} 级"
      }
    }
  ]);

  const getFormData = async (params: Record<string, any>, props: Record<string, any>) => {
    return {
      name: "拔都",
      age: 50
    };
  };
</script>
```

### ProSearchBar

表单生成方式与 [ProForm](#proform) 组件相同.

| 属性 | 描述          | 类型                                 | 默认值 |
| ---- | ------------- | ------------------------------------ | ------ |
| v-model  | 绑定的数据实体. | `Record<string, string \| number \| boolean \| any[]>` | -      |
| layout  | 布局方式. | `horizontal` / `vertical` / `inline` | horizontal      |
| columns  | 以JSON配置的方式生成表单项. | Array<ColumnsConfig> | []      |
| colSpan  | 提交器. | `number` | 3      |
| preserve  | 是否能够查询收起的数据，如果设置为 false，收起后的表单数据将会丢失. | `boolean` | true      |
| collapsed  | 是否展开. | `boolean` | false      |
| extraTools  | 额外的工具集配置，权限低于插槽. | Array<[ButtonConfig](#ButtonConfig)> / `() => JSX.Element` | []      |
| searchBefore  | 触发搜索的前置行为. | `(data) => boolean` | -      |
| defaultCollapsed  | 默认是否展开. | `boolean` | false      |
| defaultColsNumber  | 默认显示列数. | `number` | 3      |

```vue
<template>
  <pro-form-text/>
</template>

<script setup lang="ts">
  import { ProFormText } from '@element-plus-ui/pro-form';
</script>
```

### ProStepsForm

我们提供了三种方式来生成表单，首先是通过 `ProStepForm` 组件以插槽的形式生成，这种方式权限也是最高的，其次是通过 `steps` 属性进行配置，如果 `steps` 配置中，未定义 `columns`，那么会使用全局 `columns`。

| 属性 | 描述          | 类型                                 | 默认值 |
| ---- | ------------- | ------------------------------------ | ------ |
| active  | 当前激活的步骤，透传到 **stepsProps** 中. | `number` | 0      |
| steps  | 配置步骤和表单定义. | `string[]` / [StepConfig](#StepConfig)[] | -      |
| columns  | 表单定义，需要使用二维数组来生成多个表单. | Array<[ColumnConfig](#ColumnConfig)[] \| [ColumnConfig](#ColumnConfig)> | -      |
| hideStepsBar  | 是否隐藏步骤栏. | `boolean` | false      |
| stepsProps  | **ElSteps** 组件 **Props** 配置. | [StepsProps](https://element-plus.org/zh-CN/component/steps.html) | -      |

```vue
<template>
  <pro-form-text/>
</template>

<script setup lang="ts">
  import { ProFormText } from '@element-plus-ui/pro-form';
</script>
```

### ProDialogForm

**ProDialogForm** 是 [ElDiaLog](https://element-plus.org/zh-CN/component/dialog.html) 和 [ProForm](#ProForm) 组件的组合，除了以下属性外，还继承了 [ProForm](#ProForm) 的 [Props](#ProForm)，以下不再一一列举，如有需要，可查阅 [ProFormAPI](#ProForm)

| 属性 | 描述          | 类型                                 | 默认值 |
| ---- | ------------- | ------------------------------------ | ------ |
| v-model:open  | 是否打开. | `boolean` | false      |
| title  | 标题文本，透传到 dialogProps 中. | `string` | -      |
| titleSize  | 标题大小. | `number` | 16      |
| titleColor  | 标题颜色. | `string` | #303133      |
| titleWeight  | 标题粗细. | `number` / `string` | 600      |
| width  | 宽度，透传到 dialogProps 中. | `number` / `string` | 50%      |
| trigger  | 用于触发 **Dialog** 打开，一般是 **button**，减少 open 的使用. | [ButtonConfig](#ButtonConfig) / `() => JSX.Element` | -      |
| submitter  | 提交器，用于配置相关按钮 | [SubmitterConfig](#SubmitterConfig) | -      |
| dialogProps  | **ElDialog** 组件 **Props** 配置。注意：不支持 **modelValue**，请使用全局的 **open**. | [DialogProps](https://element-plus.org/zh-CN/component/dialog.html) | {}     |

```vue
<template>
  <el-button @click="open = true">打开</el-button>
  <ProDialogForm
    v-model:open="open"
    :title="'创建用户'"
    :grid="true"
    :col-props="{ span: 24 }"
    :columns="[
      {
        label: '年龄',
        order: 1,
        valueType: 'number'
      }
    ]"
    :trigger="{ title: '以 trigger 方式控制显隐', type: 'primary' }"
  >
    <!-- 自定义 -->
    <el-form-item label="姓名">
      <el-input />
    </el-form-item>
    <!-- 使用表单日期字段组件 -->
    <ProFormDate label="出生日期" :order="3" />
  </ProDialogForm>
</template>

<script setup lang="ts">
  import { ProDialogForm, ProFormDate } from "@element-plus-ui/pro-form";
  import { ref } from "vue";
  const open = ref(false);
</script>
```

### ProDrawerForm

**ProDrawerForm** 是 [ElDrawer](https://element-plus.org/zh-CN/component/drawer.html) 和 [ProForm](#ProForm) 组件的组合，除了以下属性外，还继承了 [ProForm](#ProForm) 的 [Props](#ProForm)，以下不再一一列举，如有需要，可查阅 [ProFormAPI](#ProForm)

| 属性 | 描述          | 类型                                 | 默认值 |
| ---- | ------------- | ------------------------------------ | ------ |
| v-model:open  | 是否打开. | `boolean` | false      |
| title  | 标题文本，透传到 **drawerProps** 中. | `string` | -      |
| titleSize  | 标题大小. | `number` | 16      |
| titleColor  | 标题颜色. | `string` | #303133      |
| titleWeight  | 标题粗细. | `number` / `string` | 600      |
| width  | 宽度，透传到 **drawerProps** 中.. | `number` / `string` | 50%      |
| trigger  | 用于触发 **Drawer** 打开，一般是 **button**，减少 open 的使用. | [ButtonConfig](#ButtonConfig) / `() => JSX.Element` | -      |
| submitter  | 提交器，用于配置相关按钮. | [SubmitterConfig](#SubmitterConfig) | -      |
| drawerProps  | **ElDrawer** 组件 **Props** 配置。注意：不支持 **modelValue**，请使用全局的 **open**. | [DrawerProps](https://element-plus.org/zh-CN/component/drawer.html) | {}     |

```vue
<template>
  <el-card>
    <el-button @click="open = true">打开</el-button>
    <ProDrawerForm
      v-model:open="open"
      :title="'创建用户'"
      :grid="true"
      :col-props="{ span: 24 }"
      :columns="[
        {
          label: '年龄',
          order: 1,
          valueType: 'number'
        }
      ]"
      :trigger="{ title: '以 trigger 方式控制显隐', type: 'primary' }"
    >
      <!-- 自定义 -->
      <el-form-item label="姓名">
        <el-input />
      </el-form-item>
      <!-- 使用表单日期字段组件 -->
      <ProFormDate label="出生日期" :order="3" />
    </ProDrawerForm>
  </el-card>
</template>

<script setup lang="ts">
  import { ProDrawerForm, ProFormDate } from "@element-plus-ui/pro-form";
  import { ref } from "vue";
  const open = ref(false);
</script>
```

### ProFormFields

ProForm 自带的 Filed, 与 [ProField](https://www.npmjs.com/package/@element-plus-ui/pro-field) 组件的 type 一一对应, 除了以下新增的属性之外, 同时也继承了 [ElFormItem](https://element-plus.org/zh-CN/component/form.html) 和 [ProField](https://www.npmjs.com/package/@element-plus-ui/pro-field) 对应的组件 Props.

可以这样理解，ProFormText 是 ElFormItem + ElInput 的产物，所以我们给 ProFormText 设置的 props 其实是 ElFormItem 的，fieldProps 才是包含的组件的，要切记.

对于一些继承的属性，以下不再一一列举，如有需要, 可前往 [ElFormItem](https://element-plus.org/zh-CN/component/form.html) 和 [ProField](https://www.npmjs.com/package/@element-plus-ui/pro-field) 组件处进行查阅

| 属性 | 描述          | 类型                                 | 默认值 |
| ---- | ------------- | ------------------------------------ | ------ |
| order  | 对表单项进行排序，数值越大越靠后. | `number` | -      |

```vue
<template>
  <pro-form :model="entity" :grid="true" :col-props="{ span: 24 }">
    <pro-form-text label="姓名：" v-model="entity.name" />
    <pro-form-number label="年龄：" v-model="entity.age" />
    <ProForm.Date label="出生日期：" v-model="entity.date" />
    <ProForm.Textarea label="介绍：" v-model="entity.desc" />
    <el-form-item label="自定义：">
      <el-input v-model="entity.name" />
    </el-form-item>
  </pro-form>
</template>

<script setup lang="ts">
  import { ProForm, ProFormText, ProFormNumber } from "@element-plus-ui/pro-form";
  import { ref } from "vue";

  const entity = ref({
    name: "",
    age: 10,
    date: "",
    desc: ""
  });
</script>
```

### StepConfig

除了以下属性，同时还继承了 [ElStepProps](https://element-plus.org/zh-CN/component/steps.html) 和 [ProFormProps](#ProForm)

| 属性 | 描述          | 类型                                 | 默认值 |
| ---- | ------------- | ------------------------------------ | ------ |
| columns  | 表单项定义. | [ColumnConfig](#ColumnConfig) | []      |

### ColumnConfig

Column 配置除了以下属性外，自身也继承了 [ElFormItemProps](https://element-plus.org/zh-CN/component/form.html)，以下不再一一列举

| 属性 | 描述          | 类型                                 | 默认值 |
| ---- | ------------- | ------------------------------------ | ------ |
| key  | 唯一标识. | `string` / `number` | -      |
| order  | 对表单项进行排序，数值越大越靠后. | `number` | -      |
| labelStyle  | **label** 样式设置. | `Record<string, any>` | 
| tooltip  | **label** 提示语. | `string` | -      |
| dataField  | 绑定的数据字段. | `string` | -      |
| valueType  | . | [ProFieldType](https://www.npmjs.com/package/@element-plus-ui/pro-field) | text      |
| valueEnum  | 要生成的选项集数据，支持多种数据结构，优先级低于 **request**. | [ProFieldValueEnum](https://www.npmjs.com/package/@element-plus-ui/pro-field) | -      |
| separator  | 多个值之间的分隔符，如日期区间、多选项. | `string` | -      |
| emptyText  | **readonly=true** 时，并且值为空，提供的占位文本. | `string` | -      |
| marker  | 需要显示的标记. | [ProFieldMarker](https://www.npmjs.com/package/@element-plus-ui/pro-field) | none      |
| request  | 从服务器获取数据. | `() => Promise<ValueEnum>` | -      |
| placeholder  | 输入框占位文本，透传到 **fieldProps** 中. | `string` / `[string]` / `[string, string]` | -      |
| mappingEnumValue  | 当 **valueEnum** 数据中，未明确指定 **value** 时，需要映射的目标对象. | `lable` / `index` | lable      |
| fieldProps  | 当前 **valueType** 渲染的组件 **Props** 配置. | [FieldProps](https://www.npmjs.com/package/@element-plus-ui/pro-field) | {}      |
| defaultValue  | 默认值. | `string` / `number` / `array` | -      |
| hidden  | 是否隐藏当前表单项. | `boolean` / `() => boolean` | false      |
| readonly  | 是否只读. | `boolean` | false      |
| render  | 自定义渲染表单项. | `() => Jsx.Element` | -      |
| renderFormItem  | 按钮标题文本. | `string` | -      |

> 属性 **valueType**、**valueEnum**、**request**、**marker**、**mappingEnumValue**、**fieldProps** 使用方式与 [ProField](https://www.npmjs.com/package/@element-plus-ui/pro-field) 组件完全相同，在这不再过多描述，如有需要可前往 [ProField](https://www.npmjs.com/package/@element-plus-ui/pro-field) 文档处进行查阅

### ButtonConfig

在 [ElButtonProps](https://element-plus.org/zh-CN/component/button.html) 的基础上新增了以下属性

| 属性 | 描述          | 类型                                 | 默认值 |
| ---- | ------------- | ------------------------------------ | ------ |
| title  | 按钮标题文本. | `string` | -      |
| onClick  | 点击事件. | `Function` | -      |

### SubmitterConfig

除了支持 `boolean`、`ButtonConfig[]`、`() => JSX.Element` 类型外，还支持以下对象类型配置

| 属性 | 描述          | 类型                                 | 默认值 |
| ---- | ------------- | ------------------------------------ | ------ |
| align  | 水平排列位置. | `left` / `right` / `center` | right      |
| reversal  | 是否反转按钮前后显示顺序. | `boolean` | false      |
| fillMode  | 提交器按钮填充模式. | `auto` / `full` / `aequilate` | auto      |
| hideResetButton  | 是否隐藏取消按钮. | `boolean` | false      |
| resetButtonTitle  | 重置按钮文本设置. | `string` | 重置/取消      |
| submitButtonTitle  | 提交按钮文本设置. | `string` | 提交/确定/查询      |
| render  | 自定义渲染提交器. | `() => JSX.Element` | -      |
| onReset  | 监听取消事件，权限大于全局 **v-bind** 绑定的事件. | `Function` | -      |
| onSubmit  | 监听提交事件，权限大于全局 **v-bind** 绑定的事件. | `Function` | -      |
