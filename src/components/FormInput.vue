<script setup lang="ts">
import { generateID } from '@/helpers/generateID'
import { ref } from 'vue'

// const props = defineProps<{
//   addTodo(todo: Todo): void
// }>()

const emit = defineEmits(['addTodo'])

const content = ref('')
const gen = generateID()

function onSubmit() {
  if (!content.value) return

  const todo = {
    id: gen.next().value,
    content: content.value,
    complete: false
  }

  emit('addTodo', todo)
}
</script>

<template>
  <form @submit.prevent="onSubmit" class="w-full flex">
    <input
      v-model="content"
      class="py-2 px-4 bg-transparent border border-white/30 w-full"
      placeholder="What to do?"
    />
    <button class="bg-white/30 py-2 px-4 text-white">Add</button>
  </form>
</template>
