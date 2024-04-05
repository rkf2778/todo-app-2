'use server'

import { createTodo, updateTodo, deleteTodo } from '@/lib/todos'
import { revalidatePath } from 'next/cache'

export async function createTodoAction(title: string) {
  await createTodo(title)
  revalidatePath('/')
}

export async function updateTodoAction(id: string, isCompleted: boolean) {
  await updateTodo(id, isCompleted)
  revalidatePath('/')
}

export async function deleteTodoAction(id: string) {
  await deleteTodo(id)
  revalidatePath('/')
}
