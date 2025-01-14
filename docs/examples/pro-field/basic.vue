<template>
  <el-space :size="20">
    <!-- 通过 type 属性指定渲染的组件 -->
    <ProField type="switch" v-model="isOpenSwitch" />
    <!-- 通过导出的形式直接使用对应的组件 -->
    <ProFieldSelect v-model="selectedRadio" :request="getSelectList" style="width: 100px" />
    <!-- 通过对象取值的方式指定渲染的组件 -->
    <ProField.Radio
      v-model="selectedRadio"
      mode="read"
      marker="disc"
      :value-enum="{
        1: {
          label: '红楼梦',
          status: 'success'
        },
        2: {
          label: '水浒传',
          color: 'red'
        },
        3: {
          label: '西游记',
          status: 'warning'
        },
        4: '三国演义',
        聊斋志异: '聊斋志异',
        笑傲江湖: '笑傲江湖'
      }"
    />
  </el-space>
</template>

<script setup lang="ts">
import { ProField, ProFieldSelect } from "@element-plus-ui/pro-components";
import { ref } from "vue";

const isOpenSwitch = ref(true);
const selectedRadio = ref(1);

const getSelectList = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {
          label: "红楼梦",
          value: 1,
          disabled: true
        },
        {
          label: "水浒传",
          value: 2
        },
        {
          label: "西游记",
          value: 3
        },
        {
          label: "三国演义",
          value: 4
        },
        "聊斋志异",
        "笑傲江湖"
      ]);
    }, 2000);
  });
};
</script>
