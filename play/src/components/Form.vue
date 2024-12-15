<!--
 * @Description: 
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2024-07-09 22:25:21
 * @LastEditTime: 2024-12-14 23:23:58
-->
<template>
  <el-card>
    <ProForm
      ref="formRef"
      :label-style="{ fontWeight: 600 }"
      :readonly="false"
      :required="false"
      :columns="formItems"
      :request="getFormData"
      :grid="true"
      :col-props="{ span: 24 }"
      :submitter="{
        fillMode: 'aequilate',
        reverse: false,
        hideResetButton: false,
        submitButtonProps: {
          onClick: () => console.log('自定义提交事件')
        },
        onSubmit: entity => {
          console.log('局部绑定的提交事件，通过返回值控制是否继续', entity);
          return true;
        },
        render: renderSubmitter
      }"
      @reset="entity => console.log('全局绑定的重置事件', entity)"
      @submit="
        entity => {
          console.log('全局绑定的提交事件', entity);
          return true;
        }
      "
      @finish="entity => console.log('表单验证成功', entity)"
      @failed="entity => console.log('表单验证失败', entity)"
      @values-change="(entity, key) => console.log('监听绑定的值发生变化', entity, key)"
    >
      <template #submitter="{ doms }">
        <component :is="doms[1]" />
        <el-button type="primary">确定</el-button>
      </template>
    </ProForm>
  </el-card>
</template>

<script setup lang="tsx">
import { ProForm, ProFormColumn } from "@element-plus-ui/pro-form";
import { ElButton } from "element-plus";
import { ref, VNode, watch } from "vue";

const formRef = ref();

const renderSubmitter = (_props: Record<string, any>, doms: VNode[]) => {
  return [
    doms[0],
    <ElButton onClick={() => console.log("点击按钮2")}>按钮2</ElButton>,
    <ElButton onClick={() => console.log("点击按钮3")}>按钮3</ElButton>
  ];
};

const formItems = ref<ProFormColumn[]>([
  {
    label: "姓名:",
    prop: "user.name",
    required: true,
    order: 0,
    valueType: "text",
    hidden: (data: any) => {
      return data.switch === true;
    }
  },
  {
    label: "年龄:",
    prop: "age",
    valueType: "number",
    tooltip: "测试",
    rules: [{ type: "number", trigger: "change" }]
  },
  // {
  //   label: "出生日期:",
  //   valueType: "date",
  //   prop: "date",
  //   rules: { type: "date", trigger: "change", required: true },
  //   fieldProps: {}
  // },
  // {
  //   label: "头像:",
  //   prop: "avatar",
  //   valueType: "uploadAvatar",
  //   marker: "female",
  //   fieldProps: {
  //     size: "default",
  //     src: "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg"
  //   }
  // },
  // {
  //   label: "爱好:",
  //   prop: "test",
  //   valueType: "radio",
  //   valueEnum: {
  //     1: "钓鱼",
  //     2: "王者",
  //     3: "台球",
  //     4: "阅读"
  //   }
  // },
  {
    label: "星级:",
    valueType: "rate",
    prop: "rate",
    fieldProps: {
      scoreTemplate: "{value} 级"
    }
  },
  // {
  //   label: "进度:",
  //   valueType: "slider",
  //   prop: "slider"
  // }
  // {
  //   label: "相册:",
  //   valueType: "uploadImage",
  //   fieldProps: {
  //     src: [
  //       "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg1",
  //       "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
  //       "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
  //       "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg2",
  //       "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
  //       "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg",
  //       "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg"
  //     ]
  //   }
  // },
  {
    label: "开关:",
    prop: "switch",
    valueType: "switch",
    fieldProps: {}
  }
  // {
  //   label: "百分比:",
  //   prop: "progress",
  //   valueType: "progress",
  //   fieldProps: {
  //     percentage: 50
  //   }
  // }
]);

const form = ref({
  id: "1001",
  switch: false,
  rate: 3,
  age: 9
});

const getFormData = async (params: Record<string, any>, props: Record<string, any>) => {
  return {
    user: {
      name: "拔都"
    },
    age: 50
  };
};

watch(
  form.value,
  v => {
    console.log(v, "v11");
  },
  {
    deep: true
  }
);
</script>
