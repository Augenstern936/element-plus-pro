<!--
 * @Description: 
 * @Date: 2024-06-17 10:01:37
 * @LastEditTime: 2024-12-11 17:50:49
-->
<template>
  <pro-table
    label="标题"
    :columns="columns"
    :header-cell-style="{ color: '#333' }"
    :ellipsis="false"
    :search="false"
    :toolbar="toolbar"
    :request="getTableData"
  >
    <template #label>
      <el-button type="danger">删除</el-button>
    </template>
    <template #search-bar-right-tools>
      <el-button type="primary">新增</el-button>
      <el-button type="success">导出</el-button>
    </template>
  </pro-table>
</template>

<script setup lang="tsx">
import { computed, ref } from "vue-demi";

import type { TableColumn, TableToolbarConfig } from "@element-plus-ui/pro-components";

const toolbar = computed(
  (): TableToolbarConfig => ({
    search: {
      actionText: "搜索",
      actionStyle: { color: "#fff", background: "#409eff" },
      onAction: onToolbarSearchChange
    },
    actions: { content: "导入数据", type: "primary" }
  })
);

const columns = ref<TableColumn[]>([
  {
    label: "姓名",
    prop: "name",
    search: true
  },
  {
    label: "年龄",
    prop: "age",
    copyable: true,
    sorter: true
  },
  {
    label: "头像",
    prop: "avatar",
    valueType: "avatar",
    sorter: false
  },
  {
    label: "等级",
    prop: "rate",
    valueType: "rate",
    sorter: false
  },
  {
    label: "操作",
    valueType: "action",
    width: 160
  }
]);
const getTableData = async () => {
  const data = Array.of(1, 2).map(item => ({
    id: item,
    name: ["李斯", "岳飞"][item - 1],
    age: 18 * item,
    sex: item,
    rate: item + 2,
    avatar: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
  }));

  return {
    total: data.length,
    data: data
  };
};

const onToolbarSearchChange = v => {
  console.log(v, "v");
};

const onAdd = selection => {
  console.log(selection, "onAdd");
};
</script>
