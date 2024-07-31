<!--
 * @Description: 
 * @Date: 2024-06-17 10:01:37
 * @LastEditTime: 2024-07-09 16:57:30
-->
<template>
  <pro-tabs v-model="active" :panes="panes" :empty="globalEmpty" />
</template>

<script setup lang="tsx">
import { ref } from "vue-demi";

import NotData from "./not-data.vue";

import type { TabsPane } from "@element-plus-ui/pro-components";

const active = ref(1);

const panes: TabsPane[] = [
  {
    label: "用户管理",
    value: 1,
    badge: 10
  },
  {
    label: "角色管理",
    value: 2,
    empty: NotData
  },
  {
    label: "权限管理",
    value: 3,
    empty: <div style={{ padding: "100px 0" }}>暂无数据</div>
  },
  {
    label: "日志信息",
    value: 4,
    empty: false
  }
];

const globalEmpty = <img src="/images/data.png" style={{ width: "200px" }} />;
</script>
