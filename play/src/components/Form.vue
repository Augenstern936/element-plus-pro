<!--
 * @Description: 
 * @Author: wangbowen936926
 * @Date: 2024-07-09 22:25:21
 * @LastEditTime: 2024-08-04 16:19:50
 * @FilePath: \element-plus-pro\play\src\components\Form.vue
-->
<template>
  <el-card>
    <ProForm
      v-model="form"
      :label-style="{ fontWeight: 600 }"
      :readonly="true"
      :required="true"
      :columns="formItems"
      :request="getFormData"
      :params="form"
      :grid="true"
      :col-props="{ span: 24 }"
      :submitter="{
        hideResetButton: false,
        buttonFillMode: 'aequilate'
      }"
    >
      <!-- female male-->
      <ProFormAvatar
        label="头像2"
        :order="2"
        :fieldProps="{ gender: 'male', src: 'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg' }"
      />
      <ProFormAvatar
        label="头像3"
        :order="3"
        :fieldProps="{ gender: 'female', src: 'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg' }"
      />
      <ProForm.Switch v-model="form.switch" :order="1" label="开关测试:" activeText="已打开" inactive-text="测试" />
    </ProForm>
  </el-card>
</template>

<script setup lang="ts">
import { ProForm, ProFormAvatar } from "@element-plus-ui/pro-components";
import { ref } from "vue";

const test = ref(false);

const formItems = ref([
  {
    label: "姓名:",
    dataField: "name",
    required: true,
    hidden: (data: any) => {
      console.log(data, "data222222");
      return data.switch === true;
    }
  },
  {
    label: "年龄:",
    dataField: "age",
    valueType: "number",
    tooltip: "测试"
  },
  {
    label: "出生日期:",
    valueType: "date"
  },
  {
    label: "头像:",
    dataField: "avatar",
    valueType: "avatar",
    fieldProps: {
      gender: "male",
      src: "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg"
    }
  },
  {
    label: "爱好:",
    dataField: "test",
    valueType: "radio",
    valueEnum: {
      1: "钓鱼",
      2: "王者",
      3: "台球",
      4: "阅读"
    }
  },
  {
    label: "星级:",
    valueType: "rate",
    fieldProps: {
      scoreTemplate: "{value} 级"
    }
  },
  {
    label: "进度:",
    valueType: "slider"
  },
  {
    label: "相册:",
    valueType: "image",
    fieldProps: {
      src: [
        "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg1",
        "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
        "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
        "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg2",
        "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
        "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg",
        "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg"
      ]
    }
  },
  {
    label: "开关:",
    dataField: "switch",
    valueType: "switch"
  },
  {
    label: "百分比:",
    dataField: "progress",
    valueType: "progress",
    fieldProps: {
      percentage: 50
    }
  }
]);

const form = ref({
  id: "1001",
  switch: false
});

const getFormData = async (params: Record<string, any>, props: Record<string, any>) => {
  console.log("请求参数", params, props);
  return {
    name: "拔都",
    age: 50
  };
};
</script>
