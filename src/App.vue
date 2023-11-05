<script setup lang="ts">
import Container from '@/components/Container.vue'
import FormInput from '@/components/FormInput.vue'
import TodoList from '@/components/TodoList.vue'
import type { Todo } from '@/types/todo.ts'

import { provide } from 'vue'

import type { Ref } from 'vue'
import { ref } from 'vue'

const todos = ref([]) as Ref<Todo[]>

function addTodo(todo: Todo) {
  todos.value.push(todo)
}

function deleteTodo(id: number) {
  todos.value = todos.value.filter((todo) => todo.id !== id)
}

provide('remove', (id: number) => deleteTodo(id))
</script>

<template>
  <Container>
    <FormInput @add-todo="addTodo" />
    <TodoList :todos="todos" />
  </Container>
</template>

<style scoped></style>
