<script setup lang="ts">
import Container from '@/components/Container.vue'
import FormInput from '@/components/FormInput.vue'
import TodoList from '@/components/TodoList.vue'
import type { Todo } from '@/types/todo.ts'

import type { Ref } from 'vue'
import { ref } from 'vue'

const todos = ref([]) as Ref<Todo[]>

function addTodo(todo: Todo) {
  todos.value.push(todo)
  console.log(todos.value)
}
</script>

<template>
  <Container>
    <FormInput @add-todo="addTodo" />
    <TodoList :todos="todos" />
  </Container>
</template>

<style scoped></style>
