<!--
 * @Description: 
 * @Date: 2024-06-17 10:01:37
 * @LastEditTime: 2024-07-09 16:57:35
-->
<template>
  <pro-tabs v-model="active" :panes="panes">
    <template #1>
      <div style="text-align: center">用户管理</div>
    </template>
  </pro-tabs>
</template>

<script setup lang="tsx">
import { ref } from "vue-demi";

import Auth from "./auth.vue";

import type { TabsPane } from "@element-plus-ui/pro-components";

const active = ref(1);

const panes: TabsPane[] = [
  {
    label: "用户管理",
    value: 1
  },
  {
    label: "角色管理",
    value: 2,
    render: () => <div style={{ textAlign: "center" }}>角色管理</div>
  },
  {
    label: "权限管理",
    value: 3,
    render: () => Auth
  }
];
</script>
