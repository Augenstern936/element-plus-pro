<!--
 * @Description: 
 * @Date: 2024-07-14 14:26:48
 * @LastEditTime: 2024-07-15 21:43:00
-->
<template>
	<ProSearchBar :columns="formItems" />
</template>

<script setup lang="ts">
	import { ProSearchBar } from '@element-plus/pro-components';
	import { ref } from 'vue';

	const formItems = ref([
		{
			label: '姓名:',
			dataField: 'name',
		},
		{
			label: '年龄:',
			dataField: 'age',
			valueType: 'number',
		},
		{
			label: '出生日期:',
			valueType: 'date',
		},
		{
			label: '开关:',
			dataField: 'switch',
			valueType: 'switch',
		},
	]);
</script>
