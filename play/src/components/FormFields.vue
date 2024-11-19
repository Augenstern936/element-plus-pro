<!--
 * @Description: 
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2024-11-01 15:53:55
 * @LastEditTime: 2024-11-16 22:30:58
 * 
-->
<template>
  <el-card>
    <ProForm :model="entity" :grid="true" :col-props="{ span: 24 }">
      <ProFormText label="姓名：" v-model="entity.name" />
      <ProFormNumber label="年龄：" v-model="entity.age" />
      <ProForm.DateTime label="出生日期：" v-model="entity.date" />
      <ProForm.Textarea label="介绍：" v-model="entity.desc" />
    </ProForm>
  </el-card>
</template>

<script setup lang="ts">
import { ProForm, ProFormText, ProFormNumber } from "@element-plus-ui/pro-form";
import { ref } from "vue";

const entity = ref({
  name: "",
  age: 10,
  date: "",
  desc: ""
});
</script>
