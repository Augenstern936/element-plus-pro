<!--
 * @Description: 
 * @Date: 2024-07-09 16:21:57
 * @LastEditTime: 2024-07-09 22:35:01
-->
<template>
	<el-container style="height: 100vh;">
		<el-aside width="200px">
			<el-menu :default-active="active" text-color="#fff" active-text-color="#ffd04b" background-color="#545c64" style="height: 100%;">
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
	import Form from './components/Form.vue';
	import Descriptions from './components/Descriptions.vue'
	const menus = ref([
		{
			title: "pro-button",
			component: Button,
		},
		{
			title: "pro-field",
			component: Test,
		},
		{
			title: "pro-form",
			component: Form,
		},
		{
			title: "pro-descriptions",
			component: Descriptions,
		},
	]);

	const active = ref(0);

	const onSelect = (index: number) => {
		active.value = index;
	};
</script>
