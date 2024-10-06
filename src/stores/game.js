import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useGameStore = defineStore('gameStore', () => {
  const correctAnswers = ref(0)
  const userHighscore = ref(0)
  const userName = ref('')

  // 'start' | 'game' | 'highScore'
  const gameState = ref('start')

  const changeGameState = (state) => {
    gameState.value = state
  }

  const changeUserName = (name) => {
    console.log('här var det namn!', name)
    userName.value = name
    console.log('userName: ', userName.value)
  }

  // function to increment correctAnswers
  const incrementCorrectAnswers = () => {
    correctAnswers.value++
  }

  const resetCorrectAnswer = () => {
    correctAnswers.value = 0
  }

  return {
    gameState,
    correctAnswers,
    userHighscore,
    userName,
    changeGameState,
    changeUserName,
    incrementCorrectAnswers,
    resetCorrectAnswer
  }
})
