<template>
  <el-space>
    <ProIcon name="Apple" color="green" />
    <ProIcon.Delete color="red" />
    <ProIcon :name="'ArrowDown'" @click="() => console.log(11)">
      <Delete />
    </ProIcon>
  </el-space>
</template>

<script setup lang="ts">
import { ProIcon, Delete } from "@element-plus-ui/pro-components";
</script>
