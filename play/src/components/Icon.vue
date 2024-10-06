<!--
 * @Description: 
 * @Author: wangbowen936926
 * @Date: 2024-07-16 21:57:06
 * @LastEditTime: 2024-10-06 17:04:22
 * @FilePath: \element-plus-pro\play\src\components\Icon.vue
-->
<template>
  <el-card>
    <el-space fill>
      <pro-icon :name="'ArrowDown'" @click="() => console.log(11)" />
    </el-space>
  </el-card>
</template>

<script setup lang="ts">
import ProIcon from "@element-plus-ui/pro-icon";
</script>
