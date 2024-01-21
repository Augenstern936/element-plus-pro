<template>
	<div style="height: calc(100vh - 40px); padding: 20px; background-color: #f5f5f5">
		<pro-table title="测试" :columns="columns" :request="getTableData" :ghost="false">
			<template #search-bar-right-tools>
				<ElButton type="info">新增</ElButton>
				<ElButton type="info">删除</ElButton>
			</template>
		</pro-table>
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import { ProTable, ProTabs } from '@element-plus/pro-components';
	import Test from './test.vue';
	import type { TableColumns, TabsPane } from '@element-plus/pro-components';
	import { ElButton } from 'element-plus';

	const columns = ref<TableColumns[]>([
		{
			type: 'selection',
		},
		{
			title: '姓名',
			dataField: 'name',
			type: 'sortable',
		},
		{
			title: '年龄',
			dataField: 'age',
		},
		{
			title: '性别',
			dataField: 'sex',
		},
		{
			title: '性别2',
			dataField: 'sex2',
		},
		{
			title: '性别3',
			dataField: 'sex3',
		},
		{
			title: '操作',
			type: 'action',
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
