<!--
 * @Description: 
 * @Date: 2024-07-09 16:21:57
 * @LastEditTime: 2024-07-09 17:58:05
-->
<template>
	<el-container>
		<el-aside width="200px">
			<el-menu :active="String(active)">
				<el-menu-item v-for="(menu, index) in menus" :index="index" :key="index" @click="onSelect(index)">
					<template #title>{{ menu.title }}</template>
				</el-menu-item>
			</el-menu>
		</el-aside>
		<el-main>
			<component :is="menus[active].component" />
		</el-main>
	</el-container>
</template>

<script setup lang="ts">
	import { ref } from "vue";
	import Button from "./components/Button.vue";
	import Test from "./components/Test.vue";
	const menus = ref([
		{
			title: "pro-button",
			component: Button,
		},
		{
			title: "Test",
			component: Test,
		},
	]);

	const active = ref(0);

	const onSelect = (index: number) => {
		active.value = index;
	};
</script>
