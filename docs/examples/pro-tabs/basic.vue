<template>
	<pro-tabs v-model="active" :panes="panes" />
</template>

<script setup lang="ts">
	import { ref } from "vue-demi";

	import type { TabsPane } from "@element-plus/pro-components";

	const active = ref(1);

	const panes: TabsPane[] = [
		{
			label: "用户管理",
			value: 1,
			badge: 10,
		},
		{
			label: "角色管理",
			value: 2,
		},
	];
</script>
