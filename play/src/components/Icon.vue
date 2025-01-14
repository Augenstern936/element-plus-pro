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
