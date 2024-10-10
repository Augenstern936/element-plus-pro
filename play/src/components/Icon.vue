<!--
 * @Description: 
 * @Author: wangbowen936926
 * @Date: 2024-07-16 21:57:06
 * @LastEditTime: 2024-10-10 09:47:35
 * @FilePath: \element-plus-pro\play\src\components\Icon.vue
-->
<template>
  <el-card>
    <el-space fill>
      <pro-icon :name="'ArrowDown'" @click="() => console.log(11)" />
      <ProIcon.ArrowDown />
    </el-space>
  </el-card>
</template>

<script setup lang="ts">
import ProIcon from "@element-plus-ui/pro-icon";

console.log(ProIcon, "prop");
</script>
