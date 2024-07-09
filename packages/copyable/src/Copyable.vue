<!--
 * @Description: 
 * @Date: 2024-05-22 10:21:00
 * @LastEditTime: 2024-07-09 16:58:02
-->
<template>
	<template v-if="value">
		<span class="copyable-value" :style="valueStyle ?? {}">{{ value }}</span>
		<el-icon v-show="!isCopySuccess" class="copy-icon" color="var(--el-color-primary)" @click="onCopy">
			<DocumentCopy />
		</el-icon>
		<el-icon v-show="isCopySuccess" color="var(--el-color-success)">
			<Select />
		</el-icon>
	</template>
</template>

<script setup lang="ts">
	import { DocumentCopy, Select } from "@element-plus/icons-vue";
	import { ElMessage } from "element-plus";
	import { ref } from "vue-demi";

	export interface CopyableProps {
		value: string | number;
		valueStyle?: Record<string, any>;
	}

	// 接受父组件参数，配置默认值
	const props = withDefaults(defineProps<CopyableProps>(), {
		value: "",
	});

	const emit = defineEmits(["success", "error"]);

	const isCopySuccess = ref(false);

	const onCopy = async () => {
		try {
			await navigator.clipboard.writeText(String(props.value));
			isCopySuccess.value = true;
			ElMessage.success("复制成功");
			emit("success");
			setTimeout(() => {
				isCopySuccess.value = false;
			}, 1000);
		} catch (err) {
			ElMessage.error(props.value ? `复制【${props.value}】失败` : "复制失败");
			isCopySuccess.value = false;
			emit("error");
		}
	};
</script>

<style>
	*:has(> .copyable-value) {
		display: inline-flex !important;
		flex-direction: row !important;
		align-items: center !important;
	}
</style>
