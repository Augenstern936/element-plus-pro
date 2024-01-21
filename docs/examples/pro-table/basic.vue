<template>
	<pro-table
		title="测试"
		:columns="columns"
		:header-cell-style="{ color: '#333' }"
		:ellipsis="false"
		:search="false"
		:toolbar="toolbar"
		:request="getTableData"
	>
		<!-- <template #title>
			<el-button type="danger">删除</el-button>
		</template> -->
		<template #search-bar-right-tools> 111 </template>
		<template #toolbar="{ selection }">
			<el-button type="success" @click="onAdd(selection)">新增</el-button>
			<el-button type="success">删除</el-button>
		</template>
	</pro-table>
</template>

<script setup lang="tsx">
	import { ref, computed } from 'vue';

	import type { TableColumns, TableToolbarConfig } from '@element-plus/pro-components';

	const toolbar = computed(
		(): TableToolbarConfig => ({
			search: {
				actionText: '查找',
				actionStyle: { color: '#fff', background: '#409eff' },
				onAction: onToolbarSearchChange,
			},
			actions: { content: '删除', type: 'success' },
		})
	);

	const columns = ref<TableColumns[]>([
		{
			type: 'selection',
		},
		{
			title: '姓名',
			dataField: 'name',
			search: true,
		},
		{
			title: '年龄',
			dataField: 'age',
			copyable: true,
			sorter: true,
		},
		{
			title: '操作',
			type: 'action',
			width: 160,
		},
	]);
	const getTableData = async () => {
		const data = Array.of(1, 2).map((item) => ({
			id: item,
			name: '李斯',
			age: '12' + item,
			sex: item,
		}));

		return {
			total: 5,
			data: data,
		};
	};

	const onToolbarSearchChange = (v) => {
		console.log(v, 'v');
	};

	const onAdd = (selection) => {
		console.log(selection, 'onAdd');
	};
</script>
