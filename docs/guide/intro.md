---
outline: deep
---

<h1 style="opacity: 0.5;font-size: 5vw; margin-bottom: 60px; display: flex; align-items: center; justify-content: center">
   <img src="/element-plus-logo-small.svg" width="10%"/>ProComponents
</h1>

## 设计理念

[Element Plus](https://element-plus.org/zh-CN/) 定义了基础的设计规范，对应也提供了大量的基础组件。但是对于中后台类应用，我们希望提供更高程度的抽象，提供更上层的设计规范，并且提供相应的组件使得开发者可以快速搭建出高质量的页面。

在 ProComponents 中我们内置了一系列的设计规范，预设了常用的逻辑。在这个基础上我们同样提供了灵活的支持，比如对于 ProTable 来说你也可以把它完全当做 [Element Plus](https://element-plus.org/zh-CN/) 的 Table 来用，对于 ProForm 来说你也可以直接使用 [Element Plus](https://element-plus.org/zh-CN/) 的基础组件或者你的自定义组件。我们希望通过 Pro 系列组件提供快速高效搭建高质量中后台应用的能力，进一步扩展 [Element Plus](https://element-plus.org/zh-CN/) 的能力，欢迎使用并提出宝贵的意见

## 开发工作流

我们使用了 [monorepo](#) 的方式来管理我们的仓库，仓库中包含多个独立的包，以便于更改可以一起联调，这样可以一起跑测试用例，如果变更出现问题，我们可以很快地定位到问题。

pnpm-workspace.yaml 可以帮助我们在多个包中共享依赖。

## 参与贡献

我们非常欢迎你的贡献，你可以通过以下方式和我们一起共建 😊 ：

- 在你的公司或个人项目中使用 **ProComponents**。
- 通过 **Issue** 报告 **bug** 或进行咨询。
- 提交 **Pull Request** 改进 **ProComponents** 的代码。