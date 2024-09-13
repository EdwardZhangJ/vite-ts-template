<script setup lang="ts">
const timeNull = ref(9)
</script>

<template>
	<div class="index-wrapper">
		<div class="test-less"></div>
		<v-btn> Button </v-btn>

		<div class="bg-white">
			<div class="text-20">{{ timeNull }}</div>
			<div class="add h-20 w-20 cursor-pointer" @click="timeNull++">add</div>
		</div>
	</div>
</template>

<style scoped lang="less">
.index-wrapper {
	.test-less {
		width: 100px;
		height: 100px;
		background-color: red;
	}
}
</style>
