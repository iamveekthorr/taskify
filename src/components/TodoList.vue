<template>
    <section class="app-section">

        <section class="app-container">
            <nav class="todo-heading-and-input-container">
                <ThemeToggle />
                <TodoItemInput :isDarkMode="theme.isDarkMode">
                    <ActiveIcon :doToggle="doToggle" :isToggled="isToggled" />
                </TodoItemInput>
            </nav>

            <section class="todo-list-container" :data-mode="theme.darkMode ? 'dark' : 'light'">
                <div v-for="(item) in todoList" :key="uuidv4()" @dragstart="startDrag($event, item)" @dragover.prevent
                    @dragenter.prevent @drop.prevent="onDrop($event)" draggable="true">
                    <TodoListItem>
                        <template v-slot:task_name>
                            <p>{{ item.text }}</p>
                        </template>

                        <template v-slot:delete_icon>
                            <p class="icon-x">X</p>
                        </template>
                    </TodoListItem>
                </div>
                <!-- footer content -->
                <Footer />
            </section>
        </section>
    </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useThemeStore } from '@/store/theme';
import { v4 as uuidv4 } from 'uuid'

import { STORAGE_KEYS } from '@/enums/storageKeys.enum';
import { Todo } from '@/types/todo.types';

import { useToggle } from '@/hooks/useToggle.composable'
import { useDraggable } from '@/hooks/useDraggable.composable';
import useLocalStorage from '@/hooks/useLocalStorage.composable';


import ThemeToggle from '@/components/ThemeToggle.vue';
import Footer from '@/components/Footer.vue';
import TodoItemInput from '@/components/TodoItemInput.vue';
import ActiveIcon from '@/components/ActiveIcon.vue';
import TodoListItem from '@/components/TodoListItem.vue';

const { data } = useLocalStorage(STORAGE_KEYS.TODO_LIST)

onMounted(() => {

    const jsonString = JSON.stringify(data.value)

    const todos = JSON.parse(jsonString) as Todo[]

    todoList.value = todos
})

let todoList = ref<Todo[]>([])

//  HOOKS
const theme = useThemeStore()
const { isToggled, doToggle } = useToggle()



const { startDrag, onDrop, draggedItem } = useDraggable(todoList.value)

console.log(draggedItem, 'item..')


</script>

<style scoped>
.todo-list-container {
    background-color: inherit;
    height: auto;
    border-radius: 3px;
    background-color: var(--card-bg-light);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

}

.todo-list-container[data-mode='dark'] {
    background-color: var(--card-bg-dark);
}

.todo-list-container>*:not(:last-child) {
    border-bottom: 1px solid var(--border-color);
}

.app-container> :first-child {
    margin-bottom: 2rem;
}

.icon-x {
    user-select: none;
    cursor: pointer;
}

.todo-heading-and-input-container> :first-child {
    margin-bottom: 3rem;
    ;
}

.app-section {
    position: absolute;
    top: 20%;
    right: 50%;
    transform: translateX(50%);
}


@media only screen and (min-width: 64em) {
    .todo-list-container {
        width: 50rem;
    }

}
</style>