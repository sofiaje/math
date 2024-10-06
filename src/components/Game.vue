<script setup>
import { useGameStore } from '../stores/game'
import { useTimerStore } from '../stores/timer'
import { questions } from '../data/questions'
import { onMounted, reactive, ref } from 'vue'
import Timer from '../components/Timer.vue'

const gameStore = useGameStore()
const timerStore = useTimerStore()

let num = ref(0)
let currentQuestion = reactive({ question: '2 x 2', answers: ['1','2','4'], correctAnswer: 4})

onMounted(() => {
  setNewQuestion()
})

const getRandomNumber = () => {
  return Math.floor(Math.random() * questions.length)
}

const setNewQuestion = () => {
  // const newNumber = getRandomNumber()
  // console.log('numren', newNumber, num.value)
  // if (newNumber === num.value) {
  //   console.log('samma nummer')
  //   setNewQuestion()
  // } else {
  //   console.log('ej samma nummer')
  //   num.value = newNumber
  //   console.log(num.value)
  // }

  num = getRandomNumber()

  currentQuestion.question = questions[num].question
  currentQuestion.answers = questions[num].answers
  currentQuestion.correctAnswer = questions[num].correctAnswer
}

const handleClick = (item) => {
  if (item === currentQuestion.correctAnswer) {
    gameStore.incrementCorrectAnswers()
  } 
  setNewQuestion()
}

const abortMission = () => {
  gameStore.changeGameState('start')
  timerStore.resetTimer()
}
</script>


<template>
  <div class="game-container">
    <button @click="abortMission" class="close-btn">&#x2715</button>

    <div class="game-card">
      <div class="info-container">
        <p>{{ gameStore.correctAnswers }} poäng</p>
        <Timer /> 
      </div>
  
      <div class="question-container">
        <p class="question">{{ currentQuestion.question }}</p>
    
        <div class="button-container">
          <button v-for="item in currentQuestion.answers" @click="handleClick(item)">{{ item }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.game-container {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  border-radius: 1rem;

  .close-btn {
    align-self: flex-end;
    cursor: pointer;
    background-color: transparent;
    color: rgb(196, 196, 196);
    border: none;
    font-size: 1.1rem;
    font-weight: bold;
  }

  .game-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
    gap: 2rem;
  }

  .info-container {
    display: flex;
    align-items: center;
    width: 100%;
    border-radius: 1rem;
    border: 2px solid var(--game-card-color);
    
    p {
      border-right: 2px solid var(--game-card-color);
    }

    & >* {
      padding: 1rem;
      width: 100%;
    }
  }

  .question-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 2px solid var(--game-card-color);

    border-radius: 1rem;
    height: 100%;
    flex-grow: 1;
    
    .question {
      padding: 6rem;
      font-size: 1.8rem;
    }

    .button-container {
      display: flex;
      justify-content: center;
      gap: 1rem;
      padding: 1rem 2rem;

      button {
        cursor: pointer;
        padding: 1rem 1.5rem;
        border-radius: 1rem;
        border: none;
        width: 100%;
        background-color: var(--game-btn-color);
        color: white;

        &:hover {
          background-color: var(--accent-color-hover);
        }
      }
    } 
  }
}

</style>