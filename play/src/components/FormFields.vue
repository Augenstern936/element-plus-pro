<!--
 * @Description: 
 * @Author: wangbowen936926
 * @Date: 2024-11-01 15:53:55
 * @LastEditTime: 2024-11-02 14:06:13
 * @FilePath: \element-plus-pro\play\src\components\FormFields.vue
-->
<template>
  <ProForm :model="entity" :grid="true" :col-props="{ span: 24 }">
    <ProFormText label="姓名：" v-model="entity.name" />
    <ProFormNumber label="年龄：" v-model="entity.age" />
    <ProForm.Date label="出生日期：" v-model="entity.date" />
    <ProForm.Textarea label="介绍：" v-model="entity.desc" />
    <el-form-item label="自定义：">
      <el-input v-model="entity.name" />
    </el-form-item>
  </ProForm>
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
