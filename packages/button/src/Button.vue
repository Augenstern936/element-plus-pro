<!--
 * @Description: 
 * @Date: 2024-04-27 16:16:26
 * @LastEditTime: 2024-05-13 19:32:22
-->
<template>
	<el-popconfirm
		v-if="tipType == 'popconfirm' && (tip as TipConfig).text"
		v-model:visible="popconfirmVisible"
		:title="(tip as TipConfig).text"
		:icon="WarningFilled"
		cancel-button-text="取消"
		confirm-button-text="确定"
		trigger=""
		@confirm="emits('click')"
	>
		<template #reference>
			<el-button v-bind="props" @click.stop="onClick">
				<slot>{{ render }}</slot>
			</el-button>
		</template>
	</el-popconfirm>
	<el-button v-else v-bind="props" @click.stop="onClick">
		<slot>{{ render }}</slot>
	</el-button>
</template>

<script setup name="ProButton" lang="ts">
	import { ElButton, ElMessageBox, ElPopconfirm } from "element-plus";
	import { WarningFilled } from "@element-plus/icons-vue";
	import { ProButtonProps, TipConfig } from "./typing";
	import { ref, computed } from "vue";

	const emits = defineEmits(["click"]);

	const props = defineProps<ProButtonProps>();

	const popconfirmVisible = ref(false);

	const tipType = computed(() => {
		return typeof props.tip == "string" ? "message-box" : props.tip?.mode ?? "message-box";
	});

	const onClick = () => {
		if (!props.tip) {
			return emits("click");
		}

		let isContinue = true;

		if (typeof props.tip == "object" && typeof props.tip.before == "function") {
			isContinue = props.tip.before();
		}

		const tipText = typeof props.tip == "string" ? props.tip : props.tip.text;

		if (!tipText) {
			return emits("click");
		}

		if (isContinue === true) {
			if (tipType.value == "popconfirm") {
				popconfirmVisible.value = true;
				return;
			}

			ElMessageBox.confirm(tipText, "提示", {
				confirmButtonText: "确定",
				cancelButtonText: "取消",
				type: "warning",
			}).then(() => {
				emits("click");
			});
		}
	};
</script>

<style scoped lang="scss">
	@import "./styles/index.scss";
</style>
