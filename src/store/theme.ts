import { defineStore } from 'pinia';

export const useThemeStore = defineStore('theme', {
  state: () => ({
    darkMode: window.matchMedia('(prefers-color-scheme: dark)').matches,
  }),
  actions: {
    toggleTheme() {
      this.darkMode = !this.darkMode;
    },
  },

  getters: {
    isDarkMode(): boolean {
      return this.darkMode;
    },
  },
});
