<template>
	<div style="height: calc(100vh - 40px); padding: 20px; background-color: #f5f5f5">
		<pro-table title="测试" :columns="columns" :dataSource="data" :ghost="false">
			<template #search-bar-right-tools>
				<ElButton type="info">新增</ElButton>
				<ElButton type="info">删除</ElButton>
			</template>
		</pro-table>
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import { ProTable } from '@element-plus/pro-components';
	import type { TableColumns } from '@element-plus/pro-components';
	import { ElButton } from 'element-plus';

	const columns = ref<TableColumns[]>([
		{
			title: '姓名1',
			dataField: 'id',
		},
		{
			title: '姓名',
			dataField: 'name',
		},
		{
			title: '年龄',
			dataField: 'age',
			//valueType: 'rate',
			valueEnum: {
				0: {
					text: '测试',
					status: 'Processing',
				},
			},
		},
		{
			title: '性别',
			dataField: 'sex',
			//width: 500,
		},
		{
			title: '性别2',
			dataField: 'sex2',
			//valueType: 'avatar',
		},
		{
			title: '性别3',
			dataField: 'sex3',
		},
		{
			title: '操作',
			valueType: 'action',
			width: 300,
			fixed: 'right',
		},
	]);

	const data = ref([
		{
			id: 1,
			name: '李斯',
			age: 0,
			sex: '男',
		},
		{
			id: 2,
			name: '李斯',
			age: 30,
			sex: '男',
			sex2: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
		},
		{
			id: 3,
			name: '李斯',
			age: 15,
			sex: '男',
		},
	]);

	const getTableData = async () => {
		const data = Array.of(1, 2).map((item) => ({
			id: item,
			name: '李斯',
			age: 18 + item,
			sex: item,
		}));

		return {
			total: 100,
			data: data,
		};
	};
</script>
