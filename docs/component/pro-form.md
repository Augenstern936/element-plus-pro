---
outline: deep
---

# ProForm 高级表单

在原来的 <a href="https://element-plus.org/zh-CN/component/form.html">ElForm</a> 的基础上增加了一些语法糖和更多的布局设置
帮助我们快速地开发一个表单，让中后台开发更简单 💪

## ✨ 布局组件

- [ProForm](#ProForm) 通用型表单组件，自身挂载了表单项组件及以下布局组件
- [ProSearchBar](#ProSearchBar) 搜索栏表单组件，配合其它组件单独使用，如：table
- [ProStepsForm](#ProStepsForm) 分布式表单组件，一般在数据量比较多的情况下使用
- [ProDialogForm](#ProDialogForm) 组合了 **ElDialog** 和 **ProForm** 组件，可通过 **trigger** 来控制显隐, 减少繁琐的状态管理
- [ProDrawerForm](#ProDrawerForm) 组合了 **ElDrawer** 和 **ProForm** 组件，可通过 **trigger** 来控制显隐, 减少繁琐的状态管理

## ✨ 表单项组件(一般配合布局组件一起使用)

这些组件本质上是 [ElFormItem](https://element-plus.org/zh-CN/component/form.html) 和 **组件** 的结合，我们可以把他们当成一个 [ElFormItem](https://element-plus.org/zh-CN/component/form.html) 来使用，并且支持各种 **props**

每个表单项都支持 **fieldProps** 属性来支持设置输入组件的 **props**。 我们支持了 **placeholder** 的透传，你可以直接在组件上设置 **placeholder**

对于表单项的生成，除了使用以下组件外，还支持通过 [columns](#ColumnConfig) 属性进行配置，如果你想要自定义表单元素，你仍然可以用 [ElForm](https://element-plus.org/zh-CN/component/form.html) 原有（[ElFormItem + 自定义组件](https://element-plus.org/zh-CN/component/form.html)）的方式来自定义，三者可以混合使用

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

## ProForm

在 [ElForm](https://element-plus.org/zh-CN/component/form.html) 的基础上，新增了以下属性和事件

| 属性 | 描述          | 类型                                 | 默认值 |
| ---- | ------------- | ------------------------------------ | ------ |
| v-model  | 绑定的数据实体. | `Record<string, any>` | -      |
| title  | 标题. | `string` | -      |
| grid  | 开启栅格化模式. | `boolean` | false      |
| variant | 表单变体. | `Form` / `SearchBar`/ `StepsForm`/ `DialogForm` / `DrawerForm` | Form      |
| colProps  | 开启 **grid** 模式时，需配置的布局参数. | [ColProps](https://element-plus.org/zh-CN/component/layout.html) | {}      |
| rowProps  | 开启 **grid** 模式时，需配置的布局参数. | [RowProps](https://element-plus.org/zh-CN/component/layout.html) | {}      |
| columns  | 以配置的方式生成表单项. | Array<[ColumnConfig](ColumnConfig)> | []     |
| params  | 请求参数. | `Record<string, any>` | {}      |
| request  | 发起网络请求，返回值会覆盖给 v-model. | `(params) => Promise<data>` | -      |
| readonly  | 是否只读. | `boolean` | false      |
| emptyText  | **readonly=true** 并且值为空时，需要显示的占位文本. | `string` | -      |
| labelStyle  | 表单项标签样式. | `CSSProperties` | {}      |
| submitter  | 提交器，用于配置相关按钮. | [SubmitterConfig](#SubmitterConfig) | -      |
| @reset  | 监听重置事件. | `(entity) => void` | -      |
| @submit  | 监听提交事件，若返回值为 **true** 则继续执行后续验证事件. | `(entity) => void \| boolean` | -      |
| @finish  | 监听表单验证成功，在 **submit** 事件之后执行. | `(entity) => void \| boolean \| Promise<boolean>` | -      |
| @failed  | 监听表单验证失败，在 **submit** 事件之后执行. | `(entity) => void` | -      |
| @values-change  | 监听表单绑定的数据发生变化. | `(entity, key) => void` | -      |

#### 重置和提交按钮事件权重规则：

- *submitter.submitButtonProps.onClick > submitter.onSubmit > @submit*

- *submitter.submitButtonProps.onClick > submitter.onReset > @reset*

#### 案例：

```vue
<template>
  <pro-form
    ref="formRef"
    :label-style="{ fontWeight: 600 }"
    :readonly="false"
    :required="false"
    :columns="formItems"
    :request="getFormData"
    :grid="true"
    :col-props="{ span: 24 }"
    :submitter="{
      hideResetButton: false,
      fillMode: 'full',
      submitButtonProps: {
        onClick: () => console.log('自定义提交事件')
      },
      onSubmit: entity => {
        console.log('局部绑定的提交事件，通过返回值控制是否继续', entity);
        return true;
      }
    }"
    @reset="entity => console.log('全局绑定的重置事件', entity)"
    @submit="
      entity => {
        console.log('全局绑定的提交事件，返回值为 false 关闭内部验证功能', entity);
        return false;
      }
    "
    @finish="entity => console.log('表单验证成功', entity)"
    @failed="entity => console.log('表单验证失败', entity)"
    @values-change="(entity, key) => console.log('监听绑定的值发生变化', entity, key)"
  >
  </pro-form>
</template>

<script setup lang="ts">
  import { ProForm, ProFormColumn } from "@element-plus-ui/pro-form";
  import { ref, watch } from "vue";

  const formRef = ref();
  const formItems = ref<ProFormColumn[]>([
    {
      label: "姓名:",
      prop: "user.name",
      required: true,
      order: 0,
      valueType: "text",
      hidden: (data: any) => {
        return data.switch === true;
      }
    },{
      label: "年龄:",
      prop: "age",
      valueType: "number",
      tooltip: "测试",
      rules: [{ type: "number", trigger: "change" }]
    },{
      label: "星级:",
      valueType: "rate",
      prop: "rate",
      fieldProps: {
        scoreTemplate: "{value} 级"
      }
    },{
      label: "开关:",
      prop: "switch",
      valueType: "switch",
      fieldProps: {}
    }
  ]);

  const form = ref({
    id: "1001",
    switch: false,
    rate: 3,
    age: 9
  });

  const getFormData = async (params: Record<string, any>) => {
    return {
      user: {
        name: "拔都"
      },
      age: 50
    };
  };
</script>
```

## ProSearchBar

事件绑定及权重与 [ProForm](#ProForm组件) 组件相同

| 属性 | 描述          | 类型                                 | 默认值 |
| ---- | ------------- | ------------------------------------ | ------ |
| v-model  | 绑定的数据实体. | `Record<string, string \| number \| boolean \| any[]>` | -      |
| layout  | 布局方式. | `horizontal` / `vertical` / `inline` | horizontal      |
| columns  | 以配置的方式生成表单项. | Array<[ColumnConfig](#ColumnConfig)> | []      |
| colSpan  | 栅格占据的列数. | `number` | 3      |
| preserve  | 是否能够查询收起的数据，如果设置为 false，收起后的表单数据将会丢失. | `boolean` | true      |
| labelStyle  | 表单项标签样式. | `CSSProperties` | {}      |
| collapsed  | 是否展开. | `boolean` | false      |
| extraTools  | 额外的工具集配置，权限低于插槽. | Array<[ButtonConfig](#ButtonConfig)> / `() => VNode` | []      |
| searchBefore  | 触发搜索的前置行为. | `(data) => boolean` | -      |
| submitter  | 提交器，用于配置相关按钮. | [SubmitterConfig](#SubmitterConfig) | -      |
| defaultCollapsed  | 默认是否展开. | `boolean` | false      |
| defaultColsNumber  | 默认显示列数. | `number` | 3      |

#### 案例：

```vue
<template>
  <pro-search-bar
    v-model="formData"
    :columns="columns"
    :collapse="collapse"
    :submitter="[
      {
        title: '查找',
        type: 'primary',
        onClick: data => {
          console.log('自定义配置提交器搜索按钮', data);
        }
      }
    ]"
    :extra-tools="[
      {
        title: '批量导入',
        onClick: data => console.log('批量导入', data)
      },{
        title: '批量导出',
        onClick: data => console.log('批量导出', data)
      }
    ]"
    @collapse="onCollapse"
    @search="onSearch"
  >
    <!-- 自定义额外工具触发器，只有在 extra-tools 配置为多项时，才会生效 -->
    <template #extra-tools-trigger>
      <pro-icon name="More" />
    </template>
    <!-- 自定义表单项 -->
    <el-form-item label="姓名:">
      <el-input v-model="formData.name" />
    </el-form-item>
  </pro-search-bar>
</template>

<script setup lang="ts">
  import { ProSearchBar, ProFormColumn } from "@element-plus-ui/pro-form";
  import { ProIcon } from "@element-plus-ui/pro-icon";
  import { ref } from "vue";

  const formData = ref({
    name: ""
  });

  const collapse = ref(false);

  /**
   * 定义表单项
   */
  const columns = ref<ProFormColumn[]>([
    {
      label: "手机号:",
      prop: "phone",
      valueType: "text"
    },{
      label: "出生日期:",
      prop: "date",
      valueType: "date"
    }
  ]);

  /**
   * 监听展开收起变化
   */
  const onCollapse = (v: boolean) => {
    console.log("是否展开：", v);
  };

  /**
   * 默认全局搜索事件，权重低于局部配置的事件
   * @param entity
   */
  const onSearch = (entity: Record<string, any>) => {
    console.log("数据：", entity);
  };
</script>
```

## ProStepsForm

我们提供了三种方式来生成表单，首先是通过 `ProStepForm` 组件以插槽的形式生成，这种方式权限也是最高的，其次是通过 `steps` 属性进行配置，如果在`steps` 配置中，未定义 `columns`，那么会使用全局 `columns`。

| 属性 | 描述          | 类型                                 | 默认值 |
| ---- | ------------- | ------------------------------------ | ------ |
| active  | 当前激活的步骤，透传到 **stepsProps** 中. | `number` | 0      |
| steps  | 步骤配置和表单定义. | `string[]` / [StepConfig](#StepConfig)[] | -      |
| columns  | 表单定义，需要使用二维数组来生成多个表单，否则会生成一个普通表单. | Array<[ColumnConfig](#ColumnConfig)[] \| [ColumnConfig](#ColumnConfig)> | -      |
| hideStepsBar  | 是否隐藏步骤栏. | `boolean` | false      |
| stepsProps  | **ElSteps** 组件 **Props** 配置. | [StepsProps](https://element-plus.org/zh-CN/component/steps.html) | -      |

#### 案例：

```vue
<template>
  <ProStepsForm
    :submitter="{
      fillMode: 'aequilate'
    }"
    :steps="[
      {
        title: '基础信息',
        columns: [
          {
            label: '姓名:',
            prop: 'name',
            required: true,
            valueType: 'text'
          },{
            label: '年龄:',
            prop: 'age',
            valueType: 'number',
            tooltip: '测试'
          },{
            label: '出生日期:',
            valueType: 'date'
          }
        ]
      },
      {
        title: '状态管理',
        columns: [
          {
            label: '是否通过',
            valueType: 'switch'
          },{
            label: '爱好:',
            prop: 'test',
            valueType: 'radio',
            valueEnum: {
              1: '钓鱼',
              2: '王者',
              3: '台球',
              4: '阅读'
            }
          }
        ]
      }
    ]"
    @finish="async v => {
      console.log(v, '全局触发第二步成功');
      return true;
    }"
    @failed="v => console.log(v, '全局触发第二步失败')"
  >
    <ProStepsForm.StepForm
      title="基础信息"
      :columns="[
        {
          label: '姓名:',
          prop: 'name',
          required: true,
          order: 0,
          valueType: 'text'
        },{
          label: '年龄:',
          prop: 'age',
          valueType: 'number',
          tooltip: '测试'
        },{
          label: '出生日期:',
          valueType: 'date'
        }
      ]"
      @finish="async v => {
        console.log(v, '第一步成功');
        return true;
      }"
      @failed="v => console.log(v, '第一步失败')"
    >
      <!-- 通过插槽的方式定义的表单项，权重大于 columns，所以在第一项显示 -->
      <ProForm.Cascader label="选择器" :order="0" />
    </ProStepsForm.StepForm>
    <ProStepsForm.StepForm title="项目信息">
      <ProForm.Text label="项目名称:" />
      <ProForm.Date label="启动日期:" />
    </ProStepsForm.StepForm>
  </ProStepsForm>
</template>

<script setup lang="ts">
  import { ProForm, ProStepsForm } from "@element-plus-ui/pro-form";
</script>
```

## ProDialogForm

是 [ElDiaLog](https://element-plus.org/zh-CN/component/dialog.html) 和 [ProForm](#ProForm) 组件的组合，除了以下属性外，还继承了 [ProForm](#ProForm) 的 [Props](#ProForm)，以下不再过多列举，如有需要，可查阅 [ProFormAPI](#ProForm)

| 属性 | 描述          | 类型                                 | 默认值 |
| ---- | ------------- | ------------------------------------ | ------ |
| v-model:open  | 是否打开. | `boolean` | false      |
| width  | 宽度，透传到 dialogProps 中. | `number` / `string` | 50%      |
| trigger  | 用于触发 **Dialog** 打开，一般是 **button**，减少 open 的使用. | [ButtonConfig](#ButtonConfig) / `() => VNode` | -      |
| titleSize  | 标题大小. | `number` | 16      |
| titleColor  | 标题颜色. | `string` | #303133      |
| titleWeight  | 标题粗细. | `number` / `string` | 600      |
| dialogProps  | **ElDialog** 组件 **Props** 配置。注意：不支持 **modelValue**，请使用全局的 **open**. | [DialogProps](https://element-plus.org/zh-CN/component/dialog.html) | {}     |

#### 案例：

```vue
<template>
  <el-button @click="open = true">创建用户</el-button>
  <pro-dialog-form
    v-model:open="open"
    title="创建用户"
    :grid="true"
    :col-props="{ span: 24 }"
    :trigger="{ title: '以 trigger 方式控制显隐', type: 'primary' }"
    :columns="[
      {
        label: '年龄',
        order: 1,
        valueType: 'number'
      }
    ]"
  >
    <!-- 自定义 -->
    <el-form-item label="姓名">
      <el-input />
    </el-form-item>
    <!-- 使用表单日期字段组件 -->
    <pro-form-date label="出生日期" :order="3" />
  </pro-dialog-form>
</template>

<script setup lang="ts">
  import { ProDialogForm, ProFormDate } from "@element-plus-ui/pro-form";
  import { ref } from "vue";
  const open = ref(false);
</script>
```

## ProDrawerForm

是 [ElDrawer](https://element-plus.org/zh-CN/component/drawer.html) 和 [ProForm](#ProForm) 组件的组合，除了以下属性外，还继承了 [ProForm](#ProForm) 的 [Props](#ProForm)，以下不再一一列举，如有需要，可查阅 [ProFormAPI](#ProForm)

| 属性 | 描述          | 类型                                 | 默认值 |
| ---- | ------------- | ------------------------------------ | ------ |
| v-model:open  | 是否打开. | `boolean` | false      |
| width  | 宽度，透传到 **drawerProps** 中.. | `number` / `string` | 50%      |
| trigger  | 用于触发 **Drawer** 打开，一般是 **button**，减少 open 的使用. | [ButtonConfig](#ButtonConfig) / `() => VNode` | -      |
| titleSize  | 标题大小. | `number` | 16      |
| titleColor  | 标题颜色. | `string` | #303133      |
| titleWeight  | 标题粗细. | `number` / `string` | 600      |
| drawerProps  | **ElDrawer** 组件 **Props** 配置。注意：不支持 **modelValue**，请使用全局的 **open**. | [DrawerProps](https://element-plus.org/zh-CN/component/drawer.html) | {}     |

#### 案例：

```vue
<template>
  <el-button @click="open = true">创建用户</el-button>
  <pro-drawer-form
    v-model:open="open"
    title="创建用户"
    :grid="true"
    :col-props="{ span: 24 }"
    :trigger="{ title: '以 trigger 方式控制显隐', type: 'primary' }"
    :columns="[
      {
        label: '年龄',
        order: 1,
        valueType: 'number'
      }
    ]"
  >
    <!-- 自定义 -->
    <el-form-item label="姓名">
      <el-input />
    </el-form-item>
    <!-- 使用表单日期字段组件 -->
    <pro-form-date label="出生日期" :order="3" />
  </pro-drawer-form>
</template>

<script setup lang="ts">
  import { ProDrawerForm, ProFormDate } from "@element-plus-ui/pro-form";
  import { ref } from "vue";
  const open = ref(false);
</script>
```

## ProFormFields

ProForm 自带的 Filed, 与 [ProField](https://www.npmjs.com/package/@element-plus-ui/pro-field) 组件的 type 一一对应, 除了以下新增的属性之外, 同时也继承了 [ElFormItem](https://element-plus.org/zh-CN/component/form.html) 和 [ProField](https://www.npmjs.com/package/@element-plus-ui/pro-field) 对应的组件 Props.

可以这样理解，**ProFormText** 是 **ElFormItem + ElInput** 的产物，所以我们给 **ProFormText** 设置的 **props** 其实是 **ElFormItem** 的，**fieldProps** 才是包含的组件的，要切记.

对于一些继承的属性，以下不再过多列举，如有需要, 可前往 [ElFormItem](https://element-plus.org/zh-CN/component/form.html) 和 [ProField](https://www.npmjs.com/package/@element-plus-ui/pro-field) 组件文档处进行查阅

| 属性 | 描述          | 类型                                 | 默认值 |
| ---- | ------------- | ------------------------------------ | ------ |
| order  | 表单项排序，数值越大越靠后. | `number` | -      |

#### 案例：

```vue
<template>
  <pro-form :model="entity" :grid="true" :col-props="{ span: 24 }">
    <!-- 使用对应的字段组件生成表单项 -->
    <pro-form-text label="姓名：" v-model="entity.name" />
    <pro-form-number label="年龄：" v-model="entity.age" :field-props="{max: 100}"/>
    <!-- 以对象取值的方式指定渲染的表单项字段 -->
    <ProForm.Date label="出生日期：" v-model="entity.date" />
    <ProForm.Textarea label="介绍：" v-model="entity.desc" />
    <!-- 使用原有的方式自定义 -->
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

## StepConfig

除了以下属性，同时还继承了 [ElStepProps](https://element-plus.org/zh-CN/component/steps.html) 和 [ProFormProps](#ProForm)

| 属性 | 描述          | 类型                                 | 默认值 |
| ---- | ------------- | ------------------------------------ | ------ |
| columns  | 表单项定义. | [ColumnConfig](#ColumnConfig) | []      |

## ColumnConfig

除了以下属性外，还继承了 [ElFormItemProps](https://element-plus.org/zh-CN/component/form.html)，以下不再过多列举

| 属性 | 描述          | 类型                                 | 默认值 |
| ---- | ------------- | ------------------------------------ | ------ |
| key  | 唯一标识. | `string` / `number` | -      |
| order  | 对表单项进行排序，数值越大越靠后. | `number` | -      |
| labelStyle  | **label** 样式设置. | `CSSProperties` | 
| tooltip  | **label** 提示语. | `string` | -      |
| valueType  | 值类型，同 **ProField** 组件的 **type** 属性值相同 | [ProFieldType](https://www.npmjs.com/package/@element-plus-ui/pro-field) | text      |
| valueEnum  | 要生成的选项集数据，支持多种数据结构，优先级低于 **request**. | [ProFieldValueEnum](https://www.npmjs.com/package/@element-plus-ui/pro-field) | -      |
| separator  | 多值之间的分隔符，如日期区间、多选项. | `string` | -      |
| emptyText  | **readonly=true** 时，并且值为空，提供的占位文本. | `string` | -      |
| marker  | 需要显示的标记. | [ProFieldMarker](https://www.npmjs.com/package/@element-plus-ui/pro-field) | none      |
| request  | 从服务器获取数据. | `() => Promise<ValueEnum>` | -      |
| placeholder  | 输入框占位文本，透传到 **fieldProps** 中. | `string` / `[string]` / `[string, string]` | -      |
| mappingEnumValue  | 当 **valueEnum** 数据中，未明确指定 **value** 时，需要映射的目标对象. | `lable` / `index` | lable      |
| fieldProps  | 当前 **valueType** 渲染的组件 **Props** 配置. | [FieldProps](https://www.npmjs.com/package/@element-plus-ui/pro-field) | {}      |
| hidden  | 是否隐藏当前表单项. | `boolean` / `(entity) => boolean` | false      |
| readonly  | 是否只读. | `boolean` | false      |

> 属性 **valueType**、**valueEnum**、**request**、**marker**、**mappingEnumValue**、**fieldProps** 使用方式与 [ProField](https://www.npmjs.com/package/@element-plus-ui/pro-field) 组件完全相同，在这不再过多描述，如有需要可前往 [ProField](https://www.npmjs.com/package/@element-plus-ui/pro-field) 文档处进行查阅

## ButtonConfig

在 [ElButtonProps](https://element-plus.org/zh-CN/component/button.html) 的基础上新增了以下属性

| 属性 | 描述          | 类型                                 | 默认值 |
| ---- | ------------- | ------------------------------------ | ------ |
| title  | 按钮标题文本. | `string` | -      |

## SubmitterConfig

除了支持 `boolean`、`ButtonConfig[]`、`(props, doms: VNode[]) => VNode | Array<VNode>` 类型外，还支持以下对象类型配置

| 属性 | 描述          | 类型                                 | 默认值 |
| ---- | ------------- | ------------------------------------ | ------ |
| align  | 水平排列位置. | `left` / `right` / `center` | right      |
| reverse  | 是否反转按钮前后顺序. | `boolean` | false      |
| fillMode  | 提交器按钮填充模式. | `auto` / `full` / `aequilate` | auto      |
| hideResetButton  | 是否隐藏重置按钮. | `boolean` | false      |
| resetButtonTitle  | 重置按钮文本设置. | `string` | 重置/取消/上一步      |
| submitButtonTitle  | 提交按钮文本设置. | `string` | 提交/确定/查询      |
| resetButtonProps  | 重置按钮 Props 配置. | [ButtonConfig](#ButtonConfig) | {}      |
| submitButtonProps  | 提交按钮 Props 配置. | [ButtonConfig](#ButtonConfig) | {}      |
| render  | 自定义渲染提交器，一般配合 **JSX** 或 **Vue** 的 **h** 函数使用. | `(props, doms: VNode[]) => VNode \| Array<VNode>` | -      |
| onReset  | 监听事件，权限大于全局 **v-on** 绑定的事件. | `Function` | -      |
| onSubmit  | 监听提交事件，权限大于全局 **v-on** 绑定的事件. | `Function` | -      |

#### 案例：

- 在 template 中使用

```vue
<template>
  <!-- 通过 submitter.render 自定义提交器, 可以配置其它属性配合使用 -->
  <pro-form
    :submitter="{
      fillMode: 'aequilate',
      reverse: true,
      hideResetButton: false,
      submitButtonProps: {
        onClick: () => console.log('自定义提交事件')
      },
      onSubmit: entity => {
        console.log('局部绑定的提交事件，通过返回值控制是否继续', entity);
        return true;
      },
      render: (props, doms: VNode[]) => {
        return [...doms, h(ElButton, '按钮3'), h(ElButton, '按钮4')];
      }
    }"
  />
</template>

<script setup lang="ts">
  import { ProForm } from "@element-plus-ui/pro-form";
  import { ElButton } from "element-plus";
  import { h, VNode } from "vue";
</script>
```

- 在 JSX/TSX 中使用

```vue
<template>
  <!-- 通过函数类型自定义提交器 -->
  <pro-form :submitter="renderSubmitter"/>
</template>

<script setup lang="tsx">
  import { ProForm } from "@element-plus-ui/pro-form";
  import { ElButton } from "element-plus";
  import { VNode } from "vue";

  const renderSubmitter = (_props: Record<string, any>, doms: VNode[]) => {
    return [
      doms[0], 
      <ElButton onClick={() => console.log("点击按钮2")}>按钮2</ElButton>,
      <ElButton onClick={() => console.log("点击按钮3")}>按钮3</ElButton>
    ];
  };
</script>
```

- 通过插槽自定义(**权重最大**), 并使用提交器相关配置进行布局

```vue
<template>
  <pro-form 
    :submitter="{
      fillMode: 'aequilate',
      reverse: true,
    }"
  >
    <template #submitter="{ doms }">
      <!-- 使用内部重置按钮 -->
      <component :is="doms[0]" />
      <!-- 自定义按钮 -->
      <el-button type="primary">确定</el-button>
    </template>
  </pro-form>
</template>

<script setup lang="ts">
  import { ProForm } from "@element-plus-ui/pro-form";
</script>
```

