<!--
 * @Description: 
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2024-07-16 21:57:06
 * @LastEditTime: 2024-12-31 18:39:37
-->
<template>
  <el-card>
    <el-space>
      <el-button
        @click="
          () => {
            open = true;
          }
        "
        >打开</el-button
      >
      <ProDialogForm
        ref="formRef"
        v-model:open="open"
        :title="'创建用户'"
        :trigger="({ open }) => ({ title: '以 trigger 方式控制显隐', type: 'primary', onClick: open })"
        :columns="[
          {
            label: '姓名',
            prop: 'name',
            required: true,
            valueType: 'text'
          }
        ]"
        :request="
          async () => {
            return {
              name: 1
            };
          }
        "
        :submitter="(_, doms) => doms[0]"
        @finish="
          async v => {
            console.log(v, '完成');
            return true;
          }
        "
      >
      </ProDialogForm>
    </el-space>
  </el-card>
</template>

<script setup lang="ts">
import { ProDialogForm } from "@element-plus-ui/pro-form";
import { ref } from "vue";

const formRef = ref();

const open = ref(false);
</script>
