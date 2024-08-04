<!--
 * @Description: 
 * @Date: 2024-07-09 16:21:57
 * @LastEditTime: 2024-08-04 17:37:11
-->
<template>
  <el-container style="height: 100vh">
    <el-aside width="200px">
      <el-menu
        :default-active="active + ''"
        text-color="#fff"
        active-text-color="#ffd04b"
        background-color="#545c64"
        style="height: 100%"
      >
        <el-menu-item v-for="(menu, index) in menus" :index="index + ''" :key="index" @click="onSelect(index)">
          <template #title>{{ menu.title }}</template>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main style="background: #eee">
      <component :is="menus[active].component" />
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import { ref, shallowRef } from "vue";
import Button from "./components/Button.vue";
import Text from "./components/Text.vue";
import Descriptions from "./components/Descriptions.vue";
import Field from "./components/Field.vue";
import Form from "./components/Form.vue";
import SearchBar from "./components/SearchBar.vue";
import Table from "./components/Table.vue";
const menus = shallowRef([
  {
    title: "pro-button",
    component: Button
  },
  {
    title: "pro-text",
    component: Text
  },
  {
    title: "pro-field",
    component: Field
  },
  {
    title: "pro-form",
    component: Form
  },
  {
    title: "pro-search-bar",
    component: SearchBar
  },
  {
    title: "pro-table",
    component: Table
  },
  {
    title: "pro-descriptions",
    component: Descriptions
  }
]);

const active = ref(0);

const onSelect = (index: number) => {
  active.value = index;
};
</script>
