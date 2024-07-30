<!--
 * @Description: 
 * @Date: 2024-07-16 08:59:01
 * @LastEditTime: 2024-07-29 15:44:16
-->
<template>
  <div style="height: calc(100vh - 40px)">
    <ProTable
      :title="{
        text: 'ProTable',
        tooltip: '高级表格组件'
      }"
      :columns="columns"
      :request="onAction"
      :ghost="false"
      :selection="true"
      :search="{
				colSpan: 8,
				//searchButtonTitle: '测试',
				extraTools: [
					{
						title: '测试',
						type: 'success',
					},
					{
						title: '测试',
						type: 'success',
					},
				],
				searchBefore: (params) => {
					console.log(params, 'params');
				},
				onCollapse: (v: boolean) => console.log(v, '是否展开1'),
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
import { ProTable } from "@element-plus-pro/components";
import { reactive, ref } from "vue";
//import { server } from "../mock";

const columns = ref<any[]>([
  {
    title: "ID",
    dataField: "id",
    search: false,
    width: 100
  },
  {
    title: "姓名",
    dataField: "name",
    search: {
      order: 10
    }
  },
  {
    title: "性别",
    dataField: "sex",
    search: false,
    valueType: "radioButton",
    valueEnum: {
      0: "男",
      1: "女"
    }
  },
  {
    title: "年龄",
    dataField: "age"
  },
  {
    title: "头像",
    dataField: "avatar",
    valueType: "avatar"
  },
  {
    title: "户籍",
    dataField: "city",
    search: true
  },
  // {
  // 	title: "状态",
  // 	dataField: "age",
  // 	valueEnum: {
  // 		0: {
  // 			text: "进行中",
  // 			status: "Processing",
  // 		},
  // 		1: {
  // 			text: "已完成",
  // 			status: "Success",
  // 		},
  // 	},
  // },
  // {
  // 	title: "会员",
  // 	dataField: "slider",
  // 	valueType: "slider",
  // },
  // {
  // 	title: "颜色",
  // 	dataField: "color",
  // 	valueType: "color",
  // },
  {
    title: "生日",
    dataField: "date",
    valueType: "dateYear"
  },
  {
    title: "操作",
    valueType: "action",
    width: 200,
    fixed: "right"
  }
]);

const data = reactive({
  total: 5,
  data: [
    {
      id: 1,
      name: "张三",
      age: 0,
      sex: "男",
      rate: 0,
      avatar: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
    },
    {
      id: 2,
      name: "李斯",
      age: 30,
      sex: "女",
      avatar: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      rate: 5
    },
    {
      id: 3,
      name: "王五",
      age: 15,
      sex: "男",
      rate: 3
    }
  ]
});

const onAction = () => {
  //getData();
};

// const getData = async () => {
//     server.start();
// 	try {
// 		const res = await fetch("https://example.com/api/pro-table/list");
// 		const data = await res.json();
// 		console.log(data, "数据");
// 	} catch (err) {
// 		console.log(err, "异常");
// 	} finally {

// 	}
// };
</script>
