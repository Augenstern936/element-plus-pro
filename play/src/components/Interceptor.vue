<template>
  <el-card>
    <ProInterceptor.Message>
      <el-button type="danger" @click="onDel">删除</el-button>
    </ProInterceptor.Message>
  </el-card>
</template>

<script setup lang="ts">
import ProInterceptor from "@element-plus-ui/pro-interceptor";

const onDel = (ref: Record<string, any>) => {
  console.log(ref, "ref");
};
</script>
