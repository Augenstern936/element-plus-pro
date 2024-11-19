<!--
 * @Description: 
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2024-07-16 21:57:06
 * @LastEditTime: 2024-11-19 11:35:28
 * 
-->
<template>
  <el-card>
    <el-space>
      <el-button @click="open = true">打开</el-button>
      <ProDrawerForm
        v-model:open="open"
        :title="'创建用户'"
        :grid="true"
        :col-props="{ span: 24 }"
        :columns="[
          {
            label: '年龄',
            order: 1,
            prop: 'age',
            valueType: 'number'
          }
        ]"
        :trigger="{ title: '以 trigger 方式控制显隐', type: 'primary' }"
        :submitter="{
          fillMode: 'full'
        }"
      >
        <!-- 自定义 -->
        <el-form-item label="姓名">
          <el-input />
        </el-form-item>
        <!-- 使用表单日期字段组件 -->
        <ProFormDate label="出生日期" :order="3" />
      </ProDrawerForm>
    </el-space>
  </el-card>
</template>

<script setup lang="ts">
import { ProDrawerForm, ProFormDate } from "@element-plus-ui/pro-form";
import { ref } from "vue";
const open = ref(false);
</script>
