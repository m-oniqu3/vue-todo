<script setup lang="ts">
import { generateID } from '@/helpers/generateID'
import { ref } from 'vue'
import Button from './Button.vue'

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

  content.value = ''
}
</script>

<template>
  <form @submit.prevent="onSubmit" class="w-full flex">
    <input
      v-model="content"
      class="py-2 px-4 bg-transparent border border-white/30 w-full"
      placeholder="What to do?"
    />
    <Button>Add</Button>
  </form>
</template>
