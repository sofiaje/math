import { defineStore } from "pinia"
import { ref, watch } from "vue"
import { useGameStore } from "./game"

export const useTimerStore = defineStore('timerStore', () => {
const gameStore = useGameStore()
const timerCount = ref(59)
let timer = ref(null)

const coutDownTimer = () => {
    if (timerCount.value > 0) {
      timer = setTimeout(() => {
          timerCount.value -= 1
          coutDownTimer()
      }, 1000)
    }
}

const resetTimer = () => {
  clearTimeout(timer)
  timerCount.value = 59
}

const stopTimer = () => {
  clearTimeout(timer)
}
  
watch(timerCount, () => {
  if (timerCount.value === 0) {
    gameStore.changeGameState('highScore') 
  }
})

return {
  timerCount,
  coutDownTimer,
  resetTimer,
  stopTimer
}
})