<template>
    <ProButton type="danger" tip="确定要删除吗？">pro-button</ProButton>
    <!-- <pro-radio :option="option" mode="button" direction="column"/>

    <pro-table :columns="columns" :request="getTableData"></pro-table> -->
</template>

<script setup lang="tsx">
    import { ref } from "vue";

    const columns = ref([
        {
            title: '姓名',
            field: 'name',
        },{
            title: '年龄',
            field: 'age'
        },{
            title: '性别',
            field: 'sex',
        },{
            title: '操作',
            type: 'action'
        }
    ]);

    const getTableData = async () => {

        const data = Array.of(1, 2).map(item => ({
            id: item,
            name: '李斯',
            age: 18 + item,
            sex: item
        }))

        return {
            total: 100,
            data: data
        }
    }
   

</script>