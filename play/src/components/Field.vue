<template>
	<div style="height: calc(100vh - 40px); padding: 20px">
		<el-space fill>
			<ProCopyable value="17634393156" @success="() => console.log('成功')" />
			<ProField :type="'switch'" v-model="testSwitch" />
			<ProField.Rate mode="read" />
			<ProField.Slider />
			<ProField.Image
				:src="[
					'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg1',
					'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
					'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
					'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
					'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
					'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
					'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
				]"
			/>
			<ProField.Progress :percentage="50" />
			<ProText>11</ProText>
		</el-space>
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
	</div>
</template>

<script setup lang="ts">
	import { ProCopyable, ProField } from "@element-plus/pro-components";
	import { ref } from "vue";

	const test = ref([1, 3]);

	const testSwitch = ref(false);
</script>
