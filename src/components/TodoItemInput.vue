<template>
    <div class="custom-input-container" :style="computedStyles">
        <slot />
        <input type="text" name="todo" placeholder="what do you want to do today?" class="custom-input" v-model="todo"
            @keypress.enter="addTodoItem" />
    </div>
</template>


<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { v4 as uuidv4 } from 'uuid';

import { useTodoStore } from '@/store/todo';
import useLocalStorage from '@/hooks/useLocalStorage.composable';

import { STORAGE_KEYS } from '@/enums/storageKeys.enum';
import { Todo } from '@/types/todo.types';


const { setData, data } = useLocalStorage(STORAGE_KEYS.TODO_LIST);

const { addTodo, getAllTodo } = useTodoStore()

const todo = ref('')

watch(todo, (val: string) => todo.value = val)


// Define a prop
const props = defineProps({
    isDarkMode: Boolean,
});

const addTodoItem = () => {
    const newItem = { text: todo.value, id: uuidv4(), completed: false }

    let existingTodo = JSON.stringify(data.value)
    let parsedItem = null

    try {
        if (existingTodo) {
            parsedItem = JSON.parse(existingTodo) as Todo[]
            addTodo(newItem)
            setData([...getAllTodo, ...parsedItem])
        } else {
            addTodo(newItem)
            setData(getAllTodo)
        }
    } catch (error) {
        console.error(error)
    } finally {
        todo.value = ''
    }
}

// Define a computed property to compute styles based on the prop
const computedStyles = computed(() => ({
    backgroundColor: props.isDarkMode ? 'var(--card-bg-dark)' : 'var(--card-bg-light)',
}));

</script>

<style scoped>
.custom-input {
    width: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    color: inherit;
    font-family: inherit;
    height: 100%;
}

.custom-input:focus {
    outline: none;
    border: none;
}

.custom-input-container {
    display: flex;
    align-items: center;
    border-radius: 3px;
    height: 5.8rem;
    padding: 1rem 2.5rem;
}

.custom-input-container> :first-child {
    margin-right: 1rem;
}
</style>