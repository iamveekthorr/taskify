<template>
    <section class="app-section">

        <section class="app-container">
            <nav class="todo-heading-and-input-container">
                <ThemeToggle />
                <TodoItemInput :isDarkMode="theme.isDarkMode">
                    <div class="circle">&nbsp;</div>
                </TodoItemInput>
            </nav>

            <section class="todo-list-container" :data-mode="theme.darkMode ? 'dark' : 'light'">
                <div>
                    &nbsp;
                </div>
                <!-- footer content -->
                <Footer />
            </section>
        </section>
    </section>
</template>

<script setup lang="ts">
import ThemeToggle from '@/components/ThemeToggle.vue';
import Footer from '@/components/Footer.vue';
import TodoItemInput from '@/components/TodoItemInput.vue';

import { useThemeStore } from '@/store/theme';

const theme = useThemeStore()
</script>

<style scoped>
.todo-list-container {
    background-color: inherit;
    height: 20rem;
    border-radius: 3px;
    background-color: var(--card-bg-light);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

}

.todo-list-container[data-mode='dark'] {
    background-color: var(--card-bg-dark);

}

.todo-list-container>*:not(:last-child) {
    border-bottom: 1px solid white;
}

.app-container> :first-child {
    margin-bottom: 2rem;
    ;
}

.todo-heading-and-input-container> :first-child {
    margin-bottom: 2rem;
    ;
}

.app-section {
    position: absolute;
    top: 20%;
    right: 50%;
    transform: translateX(50%);
}


.circle {
    height: 2rem;
    width: 2rem;
    background: orangered;
    border-radius: 50%;
    min-width: 2rem;
}

@media only screen and (min-width: 64em) {
    .todo-list-container {
        width: 50rem;
    }

}
</style>