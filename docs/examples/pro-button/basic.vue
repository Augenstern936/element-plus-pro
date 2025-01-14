<template>
  <pro-button>Default</pro-button>
  <pro-button type="danger" tip="确定要删除吗？" @click="onDel">删除</pro-button>
  <pro-button type="danger" :tip="{ mode: 'popconfirm', title: '确定要删除吗？' }" @click="onDel">批量删除</pro-button>
</template>

<script setup lang="ts">
import { ProButton } from "@element-plus-ui/pro-components";
import { ElMessage } from "element-plus";

const onDel = () => ElMessage.success("删除成功");
</script>
