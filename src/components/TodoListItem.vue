<template>
    <div class="list-item flex">
        <ActiveIcon :doToggle="doToggle" :isToggled="isToggled" />
        <div class="flex task-item">
            <slot name="task_name" />
            <slot name="delete_icon" />
        </div>
    </div>
</template>


<script setup lang="ts">
import { watch } from 'vue';
import ActiveIcon from '@/components/ActiveIcon.vue';
import { useToggle } from '@/hooks/useToggle.composable'

const { isToggled, doToggle } = useToggle()
watch(isToggled, (newValue) => {
    console.log('isToggled changed:', newValue);
});
console.log(isToggled, 'todo list item')
</script>


<style scoped>
.list-item {
    border-radius: 3px;
    height: 5.8rem;
    padding: 1rem 2.5rem;
    /* user-select: none; */
}

/* .list-item:hover {
    cursor: grab;
} */

.list-item> :first-child {
    margin-right: 1rem;
}



.flex {
    display: flex;
    align-items: center;
}

.task-item {
    width: 100%;
}

.task-item> :first-child {
    margin-right: auto;
}
</style>