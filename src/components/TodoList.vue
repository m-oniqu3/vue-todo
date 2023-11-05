<script setup lang="ts">
import TodoItem from '@/components/TodoItem.vue'
import type { Todo } from '@/types/todo'

defineProps<{
  todos: Todo[]
}>()
</script>

<template>
  <div v-if="todos.length">
    <ul v-for="entry in todos" :key="entry.id">
      <TodoItem :todo="entry" />
    </ul>
  </div>
  <p v-else>its empty in here</p>
</template>
