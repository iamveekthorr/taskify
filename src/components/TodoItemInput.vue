<template>
    <div class="custom-input-container" :style="computedStyles">
        <slot />
        <input type="text" name="todo" value="what do you want to do today?" class="custom-input" />
    </div>
</template>


<script setup lang="ts">
import { computed } from 'vue';

// Define a prop
const props = defineProps({
    isDarkMode: Boolean,
});

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