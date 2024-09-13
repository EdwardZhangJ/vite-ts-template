<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
	<div class="app-wrapper bg-[#232f22]">
		<router-view v-slot="{ Component }">
			<component :is="Component" />
		</router-view>
	</div>
</template>

<style>
#app {
	position: relative;
	box-sizing: border-box;
	width: 100vw;
	height: 100vh;
	margin: 0;
	padding: 0;
	overflow: hidden;
	font-family: 'Microsoft YaHei', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
</style>
<style scoped>
.app-wrapper {
	box-sizing: border-box;
	width: 100%;
	height: 100%;
}
</style>
