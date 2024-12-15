<template>
  <el-card>
    <ProInterceptor.Popconfirm :condition="() => true">
      <el-button type="danger" @click="onDel">删除</el-button>
    </ProInterceptor.Popconfirm>
  </el-card>
</template>

<script setup lang="ts">
import ProInterceptor from "@element-plus-ui/pro-interceptor";

const onDel = () => {
  console.log(11);
};
</script>
