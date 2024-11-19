<template>
  <el-card>
    <ProSearchBar
      v-model="formData"
      :columns="columns"
      :collapse="collapse"
      :submitter="[
        {
          title: '查找',
          type: 'primary',
          onClick: data => {
            console.log('自定义配置提交器搜索按钮', data);
          }
        }
      ]"
      :extra-tools="[
        {
          title: '批量导入',
          onClick: data => console.log('批量导入', data)
        },
        {
          title: '批量导出',
          onClick: data => console.log('批量导出', data)
        }
      ]"
      @collapse="onCollapse"
      @search="onSearch"
    >
      <!-- 自定义额外工具触发器，只有在 extra-tools 配置为多项时，才会生效 -->
      <template #extra-tools-trigger>
        <pro-icon name="More" />
      </template>
      <!-- 自定义表单项 -->
      <el-form-item label="姓名:">
        <el-input v-model="formData.name" />
      </el-form-item>
    </ProSearchBar>
  </el-card>
</template>

<script setup lang="ts">
import { ProSearchBar, ProFormColumn } from "@element-plus-ui/pro-form";
import { ProIcon } from "@element-plus-ui/pro-icon";
import { ref } from "vue";

const formData = ref({
  name: ""
});

const collapse = ref(false);

const columns = ref<ProFormColumn[]>([
  {
    label: "手机号:",
    prop: "phone",
    valueType: "text"
  },
  {
    label: "出生日期:",
    prop: "date",
    valueType: "date"
  }
]);

/**
 * 监听展开收起变化
 */
const onCollapse = (v: boolean) => {
  console.log("是否展开：", v);
};

/**
 * 默认全局搜索事件，权重低于局部配置的事件
 * @param entity
 */
const onSearch = (entity: Record<string, any>) => {
  console.log("数据：", entity);
};
</script>
