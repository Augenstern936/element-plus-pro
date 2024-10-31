<!--
 * @Description: 
 * @Date: 2024-07-14 14:26:48
 * @LastEditTime: 2024-10-31 11:03:28
-->
<template>
  <el-card>
    <ProSearchBar
      :layout="'vertical'"
      :extra-tools="[
        {
          title: '批量导入'
        },
        {
          title: '批量导出'
        }
      ]"
      :collapse="collapse"
      :submitter="[
        {
          title: '测试',
          type: 'primary',
          onClick: () => console.log(11)
        }
      ]"
      @collapse="onCollapse"
      @search="() => console.log(11)"
    >
      <template #extra-tools-trigger>
        <ProIcon :name="'More'" />
      </template>
      <el-form-item label="测试">
        <el-input />
      </el-form-item>
      <el-form-item label="测试">
        <el-input />
      </el-form-item>
      <el-form-item label="测试">
        <el-input />
      </el-form-item>
      <el-form-item label="测试">
        <el-input />
      </el-form-item>
      <el-form-item label="测试">
        <el-input />
      </el-form-item>
      <el-form-item label="测试">
        <el-input />
      </el-form-item>
    </ProSearchBar>
  </el-card>
</template>

<script setup lang="tsx">
import { ProSearchBar, ProFormColumn } from "@element-plus-ui/pro-form";
import ProIcon from "@element-plus-ui/pro-icon";
import { ref } from "vue";

const collapse = ref(false);

const onCollapse = (v: boolean) => {
  console.log(v, "1111111111");
};

const formItems = ref<ProFormColumn[]>([
  {
    label: "姓名:",
    dataField: "name"
  },
  {
    label: "年龄:",
    dataField: "age",
    valueType: "number"
  },
  {
    label: "出生日期:",
    valueType: "date"
  },
  {
    label: "开关:",
    dataField: "switch",
    valueType: "switch"
  }
]);
</script>
