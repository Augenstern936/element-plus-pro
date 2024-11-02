<!--
 * @Description: 
 * @Author: wangbowen936926
 * @Date: 2024-07-16 21:57:06
 * @LastEditTime: 2024-10-31 22:56:23
 * @FilePath: \element-plus-pro\play\src\components\StepsForm.vue
-->
<template>
  <el-card>
    <ProStepsForm
      :hide-steps-bar="true"
      :submitter="{
        fillMode: 'aequilate'
      }"
      :steps="[
        {
          title: '基础信息',
          columns: [
            {
              label: '姓名:',
              dataField: 'name',
              required: true
            },
            {
              label: '年龄:',
              dataField: 'age',
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
              dataField: 'test',
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
    >
      <ProStepsForm.StepForm
        title="测试1"
        :columns="[
          {
            label: '姓名:',
            dataField: 'name',
            required: true,
            order: 0
          },
          {
            label: '年龄:',
            dataField: 'age',
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
        <ProForm.Date label="日期" />
        <ProForm.Date label="日期" />
      </ProStepsForm.StepForm>
      <ProStepsForm.StepForm title="测试3" />
      <div>22</div>
    </ProStepsForm>
  </el-card>
</template>

<script setup lang="ts">
import { ProForm, ProStepsForm } from "@element-plus-ui/pro-form";
</script>
