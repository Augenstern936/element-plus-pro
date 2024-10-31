<!--
 * @Description: 
 * @Author: wangbowen936926
 * @Date: 2024-07-16 21:57:06
 * @LastEditTime: 2024-10-31 09:41:40
 * @FilePath: \element-plus-pro\play\src\components\DialogForm.vue
-->
<template>
  <el-card>
    <el-button @click="open = true">打开</el-button>
    <ProDialogForm
      v-model:open="open"
      :title="'创建用户'"
      :grid="true"
      :col-props="{ span: 12 }"
      :trigger="{ title: '以 trigger 方式控制显隐', type: 'primary' }"
      @finish="async () => true"
    >
      <el-form-item label="测试">
        <el-input />
      </el-form-item>
      <el-form-item label="测试">
        <el-input />
      </el-form-item>
      <el-form-item label="测试">
        <el-input />
      </el-form-item>
      <el-form-item label="测试">
        <el-input />
      </el-form-item>
      <el-form-item label="测试">
        <el-input />
      </el-form-item>
      <el-form-item label="测试">
        <el-input />
      </el-form-item>
    </ProDialogForm>
  </el-card>
</template>

<script setup lang="ts">
import { ProDialogForm } from "@element-plus-ui/pro-form";
import { ref } from "vue";

const open = ref(false);
</script>
