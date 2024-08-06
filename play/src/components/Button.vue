<!--
 * @Description: 
 * @Date: 2024-07-09 16:21:57
 * @LastEditTime: 2024-08-06 21:14:20
-->
<template>
  <el-card>
    <el-space>
      <pro-button tip="确定要删除吗?">message-box</pro-button>
      <ProButton type="danger" :tip="{ mode: 'popconfirm', text: '确定要删除吗?' }">popconfirm</ProButton>
    </el-space>
  </el-card>
</template>

<script setup lang="ts">
import { ProButton } from "@element-plus-ui/pro-button";
</script>
