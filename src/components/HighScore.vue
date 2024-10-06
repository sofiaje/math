<script setup>
import { useGameStore } from '../stores/game'
import { useTimerStore } from '../stores/timer'

const gameStore = useGameStore()
const timerStore = useTimerStore()
const restartGame = () => {
    timerStore.resetTimer()
    gameStore.changeGameState('start')
    gameStore.resetCorrectAnswer()
}
</script>

<template>
    <!-- <img src="../assets/win.jpg" alt=""> -->
<h2>Tiden är ute!</h2>
<p>Du fick {{ gameStore.correctAnswers }} poäng</p>

<!-- <h3>Tidigare resultat:</h3> -->
<!-- Visa tio bästa resultat -->

<button class="btn" @click="restartGame">Försök igen</button>
</template>

