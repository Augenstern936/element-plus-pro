<template>
  <el-card>
    <ProDrawer title="Dialog" :trigger="({ open }) => ({ title: '测试', onClick: open })" @open="() => console.log('打开')">
      <!-- <template #trigger="{ open }">
          <el-button type="success" @click="open">新增</el-button>
        </template> -->
      <template #footer="{ close }">
        <el-button type="primary" @click="close">确定</el-button>
      </template>
    </ProDrawer>
  </el-card>
</template>

<script setup lang="ts">
import ProDrawer from "@element-plus-ui/pro-drawer";
</script>
