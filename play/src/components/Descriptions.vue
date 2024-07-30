<!--
 * @Description: 
 * @Author: wangbowen936926
 * @Date: 2024-07-09 22:33:10
 * @LastEditTime: 2024-07-26 22:30:12
 * @FilePath: \element-plus-pro\play\src\components\Descriptions.vue
-->
<template>
  <el-card>
    <ProDescriptions
      :title="{
        text: ['个人简介'],
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
import { ProDescriptions } from "@element-plus-pro/components";
</script>
