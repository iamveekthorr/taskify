import { defineStore } from 'pinia';
import { Todo } from '@/types/todo.types';

export const useTodoStore = defineStore('todos', {
  state: () => ({
    todos: [] as Todo[],
  }),

  getters: {
    getAllTodo(): Todo[] {
      return this.todos as Todo[];
    },
  },

  actions: {
    addTodo(todo: Todo) {
      this.todos.push(todo);
    },

    removeTodo(todoId: string) {
      const index = this.todos.findIndex((todo) => todo.id === todoId);
      if (index !== -1) {
        this.todos.splice(index, 1);
      }
    },
  },
});
