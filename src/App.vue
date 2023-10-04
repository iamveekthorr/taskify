<script setup lang="ts">
import { useThemeStore } from './store/theme';
import Header from '@/components/Header.vue';
import TodoList from './components/TodoList.vue';

const themeStore = useThemeStore();
</script>

<template>
  <main :class="{ 'dark-mode': themeStore.isDarkMode }" class="main">
    <Header />
    <!-- Your app content here -->
    <TodoList />
  </main>
</template>

<style scoped>
.main {
  height: 100vh;
}


.u-grid {
  display: grid;
}
</style>
