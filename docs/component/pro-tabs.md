---
title: ProTabs
outline: deep
---

# ProTabs

## 基础用法

通过配置 `panes` 参数，渲染展示的标签页方式.

<demo src="../examples/pro-tabs/basic.vue"/>

## empty

<demo src="../examples/pro-tabs/empty.vue"/>

## 标签内容渲染

通过`slots`插入内容进行渲染，同时支持`panes`配置项`render`自定义渲染内容，当两者同时配置时，`slots`优先级最高.

<demo src="../examples/pro-tabs/pane-content.vue"/>

## API

| 属性                  | 描述                                               | 类型                                    | 默认值 | 是否必填 |
| --------------------- | -------------------------------------------------- | --------------------------------------- | ------ | -------- |
| model-value / v-model | 绑定值.                                            | `string` / `number`                     | -      | 否       |
| panes                 | 生成的标签页配置.                                  | [`PaneConfig[]`](#panes)                | []     | 否       |
| empty                 | 标签页内容为空时，显示的内容.                      | `boolean` / `Component` / `JSX.Eelemnt` | -      | 否       |
| beforeChange          | 切换标签之前的钩子函数， 与 Element Plus 用法相同. | `Function(activeName, oldActiveName)`   | -      | 否       |

### panes

| 属性   | 描述                                          | 类型                                                                            | 默认值 | 是否必填 |
| ------ | --------------------------------------------- | ------------------------------------------------------------------------------- | ------ | -------- |
| label  | 标签文本.                                     | `string`                                                                        | -      | 是       |
| value  | 标签值.                                       | `string` / `number`                                                             | -      | 是       |
| badge  | 徽章.                                         | `string` / `number`                                                             | -      | 否       |
| empty  | 标签内容为空时, 显示的内容.                   | `string` / `number` / `Component` / `JSX.Element`                               | -      | 否       |
| props  | `render` 返回值为 `Component` 时所携带的参数. | `object`                                                                        | -      | 否       |
| render | 标签渲染的内容.                               | `(props?: Record<string, any>) => string \| number \| Component \| JSX.Element` | -      | 否       |
