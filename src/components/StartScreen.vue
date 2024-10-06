<script setup>
import { useGameStore } from '../stores/game'
import { useTimerStore } from '../stores/timer'
import { ref } from 'vue'

const gameStore = useGameStore()
const timerStore = useTimerStore()
const name = ref('')

const startGame = () => {
  gameStore.changeGameState('game')
  timerStore.coutDownTimer()
}

const handleFormSubmit = (e) => {
  e.preventDefault()
  console.log('hejje', name.value)
  gameStore.changeUserName(name.value)
  name.value = ''
}

</script>

<template>
  <div class="start-screen">
    <img src="../assets/tiny-students.jpg" alt="">
    <!-- <div v-if="!gameStore.userName">
      <form @submit="handleFormSubmit" class="form">
        <label for="name">Vad heter du?</label>
        <div class="flex">
          <input type="text" id="name" v-model="name">
          <button class="btn">Lägg till</button>
        </div>
      </form>
    </div> -->
  
    <div v-if="!gameStore.userName">
      <!-- Senare: Knapp för att bestämma tid -->
      <p>{{ gameStore.userName }}</p>
    
      <h2>Välkommen till Multiplikationstränaren!</h2>
      <p>Träna gångertabeller på ett enkelt och roligt sätt. Följ dina framsteg och bli bättre varje dag.</p>
      <button class="btn" @click="startGame">Start</button>
    </div>

  </div>
</template>

<style scoped>
.start-screen {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  & > div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
}
img {
  width: 100%;
}
input {
  padding: .5rem;
  border-radius: 1rem;
  border: 1px solid green;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: .5rem;
}
.flex {
  display: flex;
  gap: .5rem;
}
</style>