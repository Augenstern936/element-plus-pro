<template>
  <pro-search-bar :items="formItems" :span="2">
    <template #toolbar>
      <el-button type="success">新增</el-button>
      <el-button type="success">删除</el-button>
    </template>
  </pro-search-bar>
</template>

<script setup lang="ts">
import { ref } from "vue-demi";

import type { SearchBarItem } from "@element-plus-ui/pro-components";

const formItems = ref<SearchBarItem[]>([
  {
    label: "姓名",
    field: "name"
  },
  {
    label: "年龄",
    field: "age"
  },
  {
    label: "性别",
    field: "sex",
    valueType: "select",
    valueOptions: [
      {
        label: "男",
        value: 1
      },
      {
        label: "女",
        value: 2
      }
    ]
  }
]);
</script>
