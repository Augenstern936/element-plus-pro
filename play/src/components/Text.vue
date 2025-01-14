<template>
  <el-card>
    <pro-text
      :content="'通过content设置的文本，优先级低于默认插槽'"
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
    >
      通过插槽设置文本内容通过插槽设置文本内容通过插槽设置文本内容通过插槽设置文本内容通过插槽设置文本内容通过插槽设置文本内容通过插槽设置文本内容通过插槽设置文本内容通过插槽设置文本内容通过插槽设置文本内容通过插槽设置文本内容通过插槽设置文本内容通过插槽设置文本内容通过插槽设置文本内容通过插槽设置文本内容通过插槽设置文本内容通过插槽设置文本内容通过插槽设置文本内容通过插槽设置文本内容
    </pro-text>
  </el-card>
</template>

<script setup lang="ts">
import { ProText } from "@element-plus-ui/pro-text";
</script>
