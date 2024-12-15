<template>
  <div style="height: calc(100vh - 40px)">
    <ProTable
      :title="{
        text: 'ProTable',
        tooltip: '高级表格组件'
      }"
      :columns="columns"
      :request="getData"
      :ghost="false"
      :border="true"
      :selection="true"
      :search="{
        colSpan: 8,
        extraTools: [
          {
            title: '测试',
            type: 'success'
          },
          {
            title: '测试',
            type: 'success'
          }
        ],
        searchBefore: params => {
          console.log(params, 'params');
          return params;
        },
        onCollapse: (v: boolean) => console.log(v, '是否展开1')
      }"
      @action="onAction"
      @collapse="console.log($event, '是否展开2')"
    >
      <!-- <template #search-bar> 11 </template> -->
      <template #search-bar-right-tools>
        <ElButton type="info">新增</ElButton>
        <ElButton type="info">删除</ElButton>
      </template>
    </ProTable>
  </div>
</template>

<script setup lang="ts">
import { ProTable } from "@element-plus-ui/pro-components";
import type { TableColumn } from "@element-plus-ui/pro-components";
import { reactive, ref } from "vue";
//import { server } from "../mock";

const columns = ref<TableColumn[]>([
  {
    label: "ID",
    prop: "id",
    search: false,
    width: 100,
    ellipsis: true
  },
  {
    label: "姓名",
    prop: "name",
    copyable: true,
    search: {
      order: 10
    }
  },
  {
    label: "性别",
    prop: "sex",
    search: false,
    type: "radioButton",
    valueMark: "tag",
    valueEnum: {
      0: "男",
      1: "女"
    }
  },
  {
    label: "年龄",
    prop: "age"
  },
  {
    label: "头像",
    prop: "avatar",
    type: "uploadAvatar"
  },
  {
    label: "相册",
    prop: "images",
    type: "uploadImage"
  },
  {
    label: "户籍",
    prop: "city",
    search: true
  },
  {
    label: "状态",
    prop: "status",
    //valueEnum: ["进行中", "已完成", "已失败"]
    valueMark: "disc",
    type: "select",
    valueEnum: {
      0: {
        label: "进行中",
        status: "processing"
      },
      1: {
        label: "已完成",
        status: "success"
      },
      2: {
        label: "已失败",
        status: "error"
      }
    }
  },
  {
    label: "会员",
    prop: "slider",
    type: "slider"
  },
  {
    label: "颜色",
    prop: "color",
    type: "color"
  },
  {
    label: "生日",
    prop: "date",
    type: "dateYear",
    render: row => {
      return 0;
    }
  },
  {
    label: "操作",
    type: "actions",
    width: 200,
    fixed: "right"
  }
]);

const data = reactive({
  total: 5,
  list: [
    {
      id: "139999999999999999999999999999999999999",
      name: "张三",
      age: 0,
      sex: 1,
      rate: 0,
      status: 0,
      slider: 60,
      avatar: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
    },
    {
      id: 2,
      name: "李斯",
      age: 30,
      sex: 0,
      status: 1,
      slider: 90,
      avatar: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      rate: 5
    },
    {
      id: 3,
      name: "王五",
      age: 15,
      sex: 1,
      rate: 3,
      status: 2
    }
  ]
});

const onAction = () => {
  //getData();
};

const getData = async (params: any) => {
  //   server.start();
  // try {
  // 	const res = await fetch("https://example.com/api/pro-table/list");
  // 	const data = await res.json();
  // 	console.log(data, "数据");
  // } catch (err) {
  // 	console.log(err, "异常");
  // } finally {

  // }
  return data;
};
</script>
