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
	font-family: 'Microsoft YaHei', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	width: 100vw;
	height: 100vh;
	padding: 0;
	margin: 0;
	overflow: hidden;
	box-sizing: border-box;
	position: relative;
}
</style>
<style scoped>
.app-wrapper {
	width: 100%;
	height: 100%;
	box-sizing: border-box;
}
</style>
