<!--
 * @Description: 
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2024-07-16 21:57:06
 * @LastEditTime: 2024-11-20 15:50:33
 * 
-->
<template>
  <el-card>
    <ProStepsForm
      :submitter="{
        fillMode: 'aequilate'
      }"
      :steps="[
        {
          title: '基础信息',
          columns: [
            {
              label: '姓名:',
              prop: 'name',
              required: true,
              valueType: 'text'
            },
            {
              label: '年龄:',
              prop: 'age',
              valueType: 'number',
              tooltip: '测试'
            },
            {
              label: '出生日期:',
              valueType: 'date'
            }
          ]
        },
        {
          title: '状态管理',
          columns: [
            {
              label: '是否通过',
              valueType: 'switch'
            },
            {
              label: '爱好:',
              prop: 'test',
              valueType: 'radio',
              valueEnum: {
                1: '钓鱼',
                2: '王者',
                3: '台球',
                4: '阅读'
              }
            }
          ]
        }
      ]"
      @finish="
        async v => {
          console.log(v, '全局触发第二步成功');
          return true;
        }
      "
      @failed="v => console.log(v, '全局触发第二步失败')"
    >
      <ProStepsForm.StepForm
        title="测试1"
        @finish="
          async v => {
            console.log(v, '第一步成功');
            return true;
          }
        "
        @failed="v => console.log(v, '第一步失败')"
        :columns="[
          {
            label: '姓名:',
            prop: 'name',
            required: true,
            order: 0,
            valueType: 'text'
          },
          {
            label: '年龄:',
            prop: 'age',
            valueType: 'number',
            tooltip: '测试'
          },
          {
            label: '出生日期:',
            valueType: 'date'
          }
        ]"
      >
        <ProForm.Cascader label="选择器" :order="0" />
      </ProStepsForm.StepForm>
      <ProStepsForm.StepForm title="测试2">
        <ProForm.Date label="日期" />
        <ProForm.Date label="日期" />
      </ProStepsForm.StepForm>
    </ProStepsForm>
  </el-card>
</template>

<script setup lang="ts">
import { ProForm, ProStepsForm } from "@element-plus-ui/pro-form";
</script>
