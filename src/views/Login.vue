<script setup lang="ts">
import { useMainStore } from '../store/main'
const mainStore = useMainStore()
</script>

<template>
  <h1>Login{{ mainStore.name }}zzzzzzzzzzzzz</h1>
  <n-button type="tertiary"> Tertiary </n-button>
</template>

<style lang="scss" scoped></style>
