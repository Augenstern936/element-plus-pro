<!--
 * @Description: 
 * @Author: wangbowen936926
 * @Date: 2024-07-16 21:57:06
 * @LastEditTime: 2024-10-10 11:40:07
 * @FilePath: \element-plus-pro\play\src\components\Icon.vue
-->
<template>
  <el-card>
    <el-space>
      <pro-icon :name="'ArrowDown'" @click="() => console.log(11)">
        <Delete />
      </pro-icon>
      <ProIcon.Delete color="red" />
    </el-space>
  </el-card>
</template>

<script setup lang="ts">
import { ProIcon, Delete } from "@element-plus-ui/pro-icon";
</script>
