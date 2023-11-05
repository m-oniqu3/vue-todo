<script setup lang="ts">
import Button from '@/components/Button.vue'
import type { Todo } from '@/types/todo'
import { ref } from 'vue'

import { inject } from 'vue'

defineProps<{
  todo: Todo
}>()

const completed = ref(false)

const remove = inject('remove') as (id: number) => void
</script>

<template>
  <li class="grid grid-cols-[20px,1fr,auto] mb-2 place-items-center gap-4">
    <input type="checkbox" class="w-6 h-6 accent-emerald-600" v-model="completed" />

    <span class="mr-auto">
      {{ todo.content }}
    </span>

    <button @click="remove(todo.id)">Delete</button>
    <!-- <Button>Delete</Button> -->
  </li>
</template>
