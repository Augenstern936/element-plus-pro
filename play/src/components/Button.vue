<!--
 * @Description: 
 * @Date: 2024-07-09 16:21:57
 * @LastEditTime: 2024-07-09 22:38:38
-->
<template>
	<el-space>
		<pro-button tip="提示内容">default</pro-button>
		<ProButton type="danger" :tip="{ mode: 'popconfirm', text: '确定要删除吗?' }">popconfirm</ProButton>
	</el-space>
</template>

<script setup lang="ts">
	import { ProButton } from "@element-plus/pro-button";
</script>
