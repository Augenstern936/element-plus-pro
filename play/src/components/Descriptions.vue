<template>
    <ProDescriptions
        :title="{
            text: ['个人简介'],
            mark: {
                shape: 'disclosure-closed',
            },
        }"
        :gap="20"
        :items="[
            [{ label: '姓名' }, { label: '年龄' }, { label: '爱好' }],
            [{ label: '姓名' }, { label: '年龄' }, { label: '爱好' }],
        ]"
    />
</template>

<script setup lang="ts">
    import { ProDescriptions } from '@element-plus/pro-components';
</script>