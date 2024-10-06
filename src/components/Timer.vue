<script setup>
import { useTimerStore } from '../stores/timer'

const timerStore = useTimerStore()
</script>

<template>
  <div>
    <p>Sekunder kvar: {{ timerStore.timerCount }}</p>
  </div>
</template>

<style scoped>

</style>