<script setup lang="ts">
import type { Todo } from '@/types/todo'

defineProps<{
  todos: Todo[]
}>()
</script>

<template>
  <ul v-if="todos.length">
    <li v-for="entry in todos" :key="entry.id">
      {{ entry.content }}
    </li>
  </ul>
  <p v-else>its empty in here</p>
</template>
