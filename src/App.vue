<script setup>
import StartScreen from './components/StartScreen.vue'
import Game from './components/Game.vue'
import HighScore from './components/HighScore.vue'

import { useGameStore } from './stores/game'

const gameStore = useGameStore()

</script>

<template>
  <div class="container">
    <StartScreen v-if="gameStore.gameState === 'start'"/>
    <Game v-if="gameStore.gameState === 'game'"/>
    <HighScore v-if="gameStore.gameState === 'highScore'"/>
  </div>
</template>

<style scoped>
.container {
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: center;
  justify-content: center;
  height: 100%;
}

</style>
