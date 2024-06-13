<template>
	<div style="height: calc(100vh - 40px); padding: 20px">
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
		<!-- <pro-button type="danger" :tip="{ mode: 'popconfirm', text: '确定要删除吗?' }">删除</pro-button> -->
		<el-space>
			<ProButton type="danger" :tip="{ mode: 'popconfirm', text: '确定要删除吗?' }">测试</ProButton>
			<ProCopyable value="17634393156" @success="() => console.log('成功')" />
			<ProField.Rate mode="read" />
			<ProField.Slider />
			<ProField.Image
				:src="[
					'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
					'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
					'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
					'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
					'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
					'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
					'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
				]"
			/>
			<ProField.Progress mode="read" :percentage="50" style="width: 200px" />
		</el-space>
		<ProField mode="read" :type="'color'" />
		<ProField.CheckboxButton
			v-model="test"
			:mode="'read'"
			:mark-shape="'disclosure-closed'"
			:value-enum="{
				1: {
					label: '拔都',
					status: 'success',
				},
				2: {
					label: '海都',
					color: 'red',
				},
				3: {
					label: '蒙哥',
					status: 'warning',
				},
			}"
		/>
		<ProDescriptions
			:title="{
				text: ['个人简介'],
				mark: {
					shape: 'disclosure-closed',
				},
			}"
			:gap="100"
			:items="[
				[{ label: '姓名' }, { label: '年龄' }, { label: '爱好' }],
				[{ label: '姓名' }, { label: '年龄' }, { label: '爱好' }],
			]"
		/>
	</div>
</template>

<script setup lang="ts">
	import { ProButton, ProCopyable, ProDescriptions, ProField } from "@element-plus/pro-components";
	import { reactive, ref } from "vue";
	// import type { TableColumns } from "@element-plus/pro-components";
	// import { ElButton } from "element-plus";

	const test = ref([1, 2, 3]);

	const columns = ref<any[]>([
		{
			title: "ID",
			dataField: "id",
			search: false,
		},
		{
			title: "姓名",
			dataField: "name",
			search: {
				order: 10,
			},
		},
		{
			title: "性别",
			dataField: "sex",
			valueType: "radioButton",
			search: {
				order: 8,
			},
			valueEnum: {
				0: "男",
				1: "女",
			},
		},
		{
			title: "头像",
			dataField: "avatar",
			valueType: "avatar",
		},
		{
			title: "图片",
			dataField: "avatar",
			valueType: "image",
		},
		{
			title: "评价",
			dataField: "rate",
			valueType: "rate",
			search: true,
		},
		{
			title: "状态",
			dataField: "age",
			valueEnum: {
				0: {
					text: "进行中",
					status: "Processing",
				},
				1: {
					text: "已完成",
					status: "Success",
				},
			},
		},
		{
			title: "会员",
			dataField: "slider",
			valueType: "slider",
		},
		{
			title: "颜色",
			dataField: "color",
			valueType: "color",
		},
		{
			title: "生日",
			dataField: "date",
			valueType: "dateYear",
		},
		{
			title: "操作",
			valueType: "action",
			width: 300,
			fixed: "right",
		},
	]);

	const data = reactive({
		total: 5,
		data: [
			{
				id: 1,
				name: "张三",
				age: 0,
				sex: "男",
				rate: 0,
				avatar: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
			},
			{
				id: 2,
				name: "李斯",
				age: 30,
				sex: "女",
				avatar: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
				rate: 5,
			},
			{
				id: 3,
				name: "王五",
				age: 15,
				sex: "男",
				rate: 3,
			},
		],
	});
</script>
