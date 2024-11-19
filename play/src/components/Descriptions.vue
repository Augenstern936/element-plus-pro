<!--
 * @Description: 
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2024-07-09 22:33:10
 * @LastEditTime: 2024-11-15 16:01:59
 * 
-->
<template>
  <el-card>
    <ProDescriptions
      :title="{
        text: ['个人简介', '项目经验'],
        mark: {
          shape: 'disclosure-closed'
        }
      }"
      :gap="20"
      :items="[
        [{ label: '姓名' }, { label: '年龄' }, { label: '爱好' }],
        [{ label: '姓名' }, { label: '年龄' }, { label: '爱好' }]
      ]"
    />
  </el-card>
</template>

<script setup lang="ts">
import { ProDescriptions } from "@element-plus-ui/pro-components";
</script>
