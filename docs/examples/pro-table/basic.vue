<template>
	<pro-table header-title="查询表格" :columns="columns" :request="getTableData">
		<!-- <template #headerTitle>
			<el-button type="danger">删除</el-button>
		</template> -->
		<template #toolbar>
			<el-button type="success">新增</el-button>
			<el-button type="success">删除</el-button>
		</template>
	</pro-table>
</template>

<script setup lang="ts">
	import { ref } from 'vue';

	import type { TableColumns } from '@element-plus/pro-components';

	const activeName = ref('first');

	const columns = ref<TableColumns[]>([
		{
			type: 'selection',
		},
		{
			title: '姓名',
			dataField: 'name',
		},
		{
			title: '年龄',
			dataField: 'age',
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
			age: 18 + item,
			sex: item,
		}));

		return {
			total: 5,
			data: data,
		};
	};
</script>
