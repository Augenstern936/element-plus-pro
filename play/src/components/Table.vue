<template>
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
</template>

<script setup lang="ts">
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
</script>
