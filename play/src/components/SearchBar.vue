<!--
 * @Description: 
 * @Date: 2024-07-14 14:26:48
 * @LastEditTime: 2024-07-26 19:01:46
-->
<template>
  <el-card>
    <ProSearchBar
      :extra-tools="[
        {
          title: '批量导入'
        },
        {
          title: '批量导出'
        }
      ]"
      :columns="formItems"
      @collapse="onCollapse"
    >
      <template #extra-tools-trigger>11</template>
    </ProSearchBar>
  </el-card>
</template>

<script setup lang="ts">
import { ProSearchBar } from "@element-plus-pro/components";
import { ref } from "vue";

const onCollapse = (v: boolean) => {
  console.log(v, "1111111111");
};

const formItems = ref([
  {
    label: "姓名:",
    dataField: "name"
  },
  {
    label: "年龄:",
    dataField: "age",
    valueType: "number"
  },
  {
    label: "出生日期:",
    valueType: "date"
  },
  {
    label: "开关:",
    dataField: "switch",
    valueType: "switch"
  }
]);
</script>
