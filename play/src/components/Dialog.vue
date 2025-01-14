<!--
 * @Description: 
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2024-12-17 15:44:42
 * @LastEditTime: 2025-01-02 14:04:37
-->
<template>
  <el-card>
    <ProDialog title="Dialog" :trigger="({ open }) => ({ title: '测试', onClick: open })" @open="() => console.log('打开')">
      <!-- <template #trigger="{ open }">
        <el-button type="success" @click="open">新增</el-button>
      </template> -->
      <template #footer="{ close }">
        <el-button type="primary" @click="close">确定</el-button>
      </template>
    </ProDialog>
  </el-card>
</template>

<script setup lang="ts">
import ProDialog from "@element-plus-ui/pro-dialog";
</script>
