<template>
	<pro-tabs v-model="active" :panes="panes"></pro-tabs>
	<pro-table :columns="columns" :request="getTableData" />
</template>

<script setup lang="tsx">
	import { ref } from 'vue';
	import { ProTable, ProTabs } from '@element-plus/pro-components';
	import type { TableColumns, TabsPane } from '@element-plus/pro-components';

	const active = ref(1);

	const panes: TabsPane[] = [
		{
			label: '表格',
			name: 1,
			badge: 10,
		},
		{
			label: '表单',
			name: 2,
		},
	];

	const columns = ref<TableColumns[]>([
		{
			type: 'selection',
		},
		{
			title: '姓名',
			field: 'name',
			type: 'sortable',
		},
		{
			title: '年龄',
			field: 'age',
		},
		{
			title: '性别',
			field: 'sex',
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
