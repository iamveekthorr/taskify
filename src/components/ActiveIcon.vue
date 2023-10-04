<template>
    <div class="circle" @click="doToggle" :style="computedStyles">
        <CheckIcon v-if="isToggled" />
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import CheckIcon from '@/components/CheckIcon.vue';
import { useToggle } from '@/hooks/useToggle.composable';

const { doToggle, isToggled } = useToggle()

const computedStyles = computed(() => ({
    background: isToggled.value ? 'var(--check-mark-linear-gradient-bg)' : 'transparent',
    border: isToggled.value ? 'none' : '1px solid',
    borderColor: 'var(--text-color-dark)'
}))


</script>

<style scoped>
.circle {
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    min-width: 2rem;
    display: grid;
    place-items: center;
    position: relative;
    transition: background 0.3s;
}

.circle:hover {
    cursor: pointer;
}

.circle::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    border-radius: inherit;
}

.circle:hover {
    background: var(--check-mark-linear-gradient-bg);
}
</style>