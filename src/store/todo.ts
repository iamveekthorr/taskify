import { defineStore } from 'pinia';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  tags: string[];
}

enum STORAGE_KEYS {
  GET_TODOS = 'GET_TODOS',
}

export const useTodoStore = defineStore('todos', {
  state: () => ({
    todos: [] as Todo[],
  }),

  getters: {
    getAllTodo(): Todo[] {
      const storedData = localStorage.getItem(STORAGE_KEYS.GET_TODOS);
      if (!storedData) return [];

      return JSON.parse(storedData) as Todo[];
    },
  },

  actions: {
    addTodo(todo: Todo) {
      this.todos.push(todo);
    },
    removeTodo(todoId: number) {
      const index = this.todos.findIndex((todo) => todo.id === todoId);
      if (index !== -1) {
        this.todos.splice(index, 1);
      }
    },
  },
});
