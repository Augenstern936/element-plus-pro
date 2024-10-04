<!--
 * @Description: 
 * @Date: 2024-07-09 16:21:57
 * @LastEditTime: 2024-10-04 21:06:09
-->
<template>
  <el-card>
    <el-space>
      <pro-button tip="确定要删除吗?" @click="onDelete"> default </pro-button>
      <pro-button type="danger" :tip="{ mode: 'message-box', title: '温馨提示', message: '确定要删除吗?' }" @click="onDelete">
        message-box
      </pro-button>
      <pro-button type="danger" :tip="{ mode: 'popconfirm', title: '确定要删除吗?' }" @click="onDelete"> popconfirm </pro-button>
    </el-space>
  </el-card>
</template>

<script setup lang="ts">
import ProButton from "@element-plus-ui/pro-button";

const onDelete = () => {
  console.log("确定删除");
};
</script>
