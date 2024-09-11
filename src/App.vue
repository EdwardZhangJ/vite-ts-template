<script setup lang="ts">
import {RouterView} from 'vue-router'

</script>

<template>
  <div class="app-wrapper">
    <router-view v-slot="{Component}">
      <component :is="Component" />
    </router-view>
  </div>
</template>

<style scoped>
.app-wrapper {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
</style>
