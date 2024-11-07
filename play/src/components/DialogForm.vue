<!--
 * @Description: 
 * @Author: wangbowen936926
 * @Date: 2024-07-16 21:57:06
 * @LastEditTime: 2024-11-07 22:29:02
 * @FilePath: \element-plus-pro\play\src\components\DialogForm.vue
-->
<template>
  <el-card>
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
      :trigger="{ title: '以 trigger 方式控制显隐', type: 'primary' }"
      :columns="[
        {
          label: '姓名',
          dataField: 'name',
          required: true
        }
      ]"
      :request="
        async () => {
          return {
            name: 1
          };
        }
      "
      @finish="
        async v => {
          console.log(v, '完成');
          return true;
        }
      "
    >
      <!-- -->
      <!-- <el-form-item label="测试">
        <el-input />
      </el-form-item> -->
    </ProDialogForm>
  </el-card>
</template>

<script setup lang="ts">
import { ProDialogForm } from "@element-plus-ui/pro-form";
import { ref } from "vue";

const formRef = ref();

const open = ref(false);
</script>
