<!--
 * @Description: 
 * @Date: 2024-07-09 16:21:57
 * @LastEditTime: 2024-08-20 17:45:12
-->
<template>
  <el-card>
    <el-space>
      <pro-button tip="确定要删除吗?">message-box</pro-button>
      <ProButton type="danger" :tip="{ mode: 'popconfirm', text: '确定要删除吗?' }">popconfirm</ProButton>
      <pro-button type="danger" :tip={mode: 'message-box', title: '温馨提示', message: '确定要删除吗?'}>
        删除
      </pro-button>
      <pro-button type="danger" :tip={mode: 'popconfirm', title: '确定要删除吗?'}>
        删除
      </pro-button>
    </el-space>
  </el-card>
</template>

<script setup lang="ts">
import { ProButton } from "@element-plus-ui/pro-button";
</script>
