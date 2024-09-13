<!--
 * @Description: 
 * @Author: wangbowen936926
 * @Date: 2024-07-16 21:57:06
 * @LastEditTime: 2024-09-13 18:02:55
 * @FilePath: \element-plus-pro\play\src\components\Text.vue
-->
<template>
  <el-card>
    <pro-text
      tag="i"
      :content="'cessssss111111111111111111111122222222222222222222222222333333333333333333333334444444444444444455555555555555'"
      :truncated="true"
      :copyable="{
        text: '复制的文本',
        onCopy: (isSuccess: boolean, text: string) => {
          console.log(isSuccess, text);
        }
      }"
      :editable="{
        //text: '编辑的文本',
        tooltip: '测试',
        //editing: true,
        //maxLength: 100,
        //autoSize: { minRows: 3 },
        onInput: (text: string) => {
          console.log(text);
        },
        onChange: (editing: boolean, text: string) => {
          console.log(editing, text);
        }
      }"
      style="font-size: 33px"
      >测试</pro-text
    >
  </el-card>
</template>

<script setup lang="ts">
import { ProText } from "@element-plus-ui/pro-text";
</script>
