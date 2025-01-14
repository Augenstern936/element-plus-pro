<!--
 * @Description: 
 * @Date: 2024-04-27 16:16:26
 * @LastEditTime: 2025-01-02 11:13:32
-->
<template>
  <el-popconfirm
    v-if="tipType == 'popconfirm' && (tip as TipConfig).title"
    v-bind="tip"
    v-model:visible="popconfirmVisible"
    :title="tip.title"
    :icon="IconMap.WarningFilled"
    trigger=""
    @confirm="emits('click')"
  >
    <template #reference>
      <el-button v-bind="props" :icon="Icon" @click.stop="onClick">
        <slot>{{ title }}</slot>
      </el-button>
    </template>
  </el-popconfirm>
  <el-button v-else v-bind="props" :icon="Icon" @click.stop="onClick">
    <slot>{{ title }}</slot>
  </el-button>
</template>

<script setup name="ProButton" lang="ts">
import * as IconMap from "@element-plus/icons-vue";
import { isObject } from "@vueuse/core";
import { ElButton, ElMessageBox, ElPopconfirm } from "element-plus";
import { computed, ref } from "vue-demi";
import { MessageBoxConfig, ProButtonProps, TipConfig } from "./typing";

const emits = defineEmits(["click"]);

const props = defineProps<ProButtonProps>();

const popconfirmVisible = ref(false);

const Icon = computed(() => {
  return IconMap?.[props.icon as keyof typeof IconMap] ?? props.icon;
});

const tipType = computed(() => {
  return typeof props.tip == "string" ? "message-box" : (props.tip?.mode ?? "message-box");
});

const onClick = () => {
  if (!props.tip) return emits("click");

  let isContinue = true;
  let tipText: any = typeof props.tip === "string" ? props.tip : "";

  if (isObject(props.tip)) {
    const tip = props.tip as MessageBoxConfig;
    tipText = tipType.value === "popconfirm" ? tip.title : tip.message;
    isContinue = props.tip?.before?.() ?? true;
  }

  if (!tipText) return emits("click");

  if (isContinue === true) {
    if (tipType.value == "popconfirm") {
      popconfirmVisible.value = true;
      return;
    }

    const config = isObject(props.tip) ? props.tip : {};

    ElMessageBox.confirm(tipText, (props.tip as MessageBoxConfig).title ?? "提示", {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: "warning",
      message: tipText,
      ...config
    }).then(() => {
      emits("click");
    });
  }
};
</script>
