<template>
	<pro-tabs v-model="active" :panes="panes" />
	<pro-table :columns="columns" :request="getTableData" />
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import { ProTable, ProTabs } from '@element-plus/pro-components';
	import Test from './test.vue';
	import type { TableColumns, TabsPane } from '@element-plus/pro-components';

	const active = ref(1);

	const panes: TabsPane[] = [
		{
			label: '表格',
			value: 1,
			badge: 10,
			empty: Test,
		},
		{
			label: '表单',
			value: 2,
		},
	];

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
