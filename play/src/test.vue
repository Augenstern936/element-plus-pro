<template>
	<div style="background-color: red">{{ name }}</div>
</template>

<script setup>
	import { ref } from 'vue';
	const name = ref('111');
</script>
