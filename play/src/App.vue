<template>
	<div style="height: calc(100vh - 40px); padding: 20px; background-color: #f5f5f5">
		<!-- <pro-table
			title="标题"
			:columns="columns"
			:dataSource="data.data"
			:ghost="false"
			@action="console.log($event, 'action')"
		>
			<template #search-bar-right-tools>
				<ElButton type="info">新增</ElButton>
				<ElButton type="info">删除</ElButton>
			</template>
		</pro-table> -->
		<ProField mode="read" type="date" :field-props="{ format: '' }" />
		<!-- <pro-button type="danger" :tip="{ mode: 'popconfirm', text: '确定要删除吗?' }">删除</pro-button> -->
	</div>
</template>

<script setup lang="ts">
	import { reactive, ref } from 'vue';
	// import { ProField } from '@element-plus/pro-components';
	import { ProField } from '@element-plus/pro-field';
	// import type { TableColumns } from "@element-plus/pro-components";
	// import { ElButton } from "element-plus";

	//const test = ref('');

	const columns = ref<any[]>([
		{
			title: 'ID',
			dataField: 'id',
			search: false,
		},
		{
			title: '姓名',
			dataField: 'name',
			search: {
				order: 10,
			},
		},
		{
			title: '性别',
			dataField: 'sex',
			valueType: 'radioButton',
			search: {
				order: 8,
			},
			valueEnum: {
				0: '男',
				1: '女',
			},
		},
		{
			title: '头像',
			dataField: 'avatar',
			valueType: 'avatar',
		},
		{
			title: '图片',
			dataField: 'avatar',
			valueType: 'image',
		},
		{
			title: '评价',
			dataField: 'rate',
			valueType: 'rate',
			search: true,
		},
		{
			title: '状态',
			dataField: 'age',
			valueEnum: {
				0: {
					text: '进行中',
					status: 'Processing',
				},
				1: {
					text: '已完成',
					status: 'Success',
				},
			},
		},
		{
			title: '会员',
			dataField: 'slider',
			valueType: 'slider',
		},
		{
			title: '颜色',
			dataField: 'color',
			valueType: 'color',
		},
		{
			title: '生日',
			dataField: 'date',
			valueType: 'dateYear',
		},
		{
			title: '操作',
			valueType: 'action',
			width: 300,
			fixed: 'right',
		},
	]);

	const data = reactive({
		total: 5,
		data: [
			{
				id: 1,
				name: '张三',
				age: 0,
				sex: '男',
				rate: 0,
				avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
			},
			{
				id: 2,
				name: '李斯',
				age: 30,
				sex: '女',
				avatar: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
				rate: 5,
			},
			{
				id: 3,
				name: '王五',
				age: 15,
				sex: '男',
				rate: 3,
			},
		],
	});
</script>
