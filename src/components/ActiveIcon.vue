<template>
    <div class="circle" @click="doToggle" :data-isToggled="isToggled">
        <CheckIcon v-if="isToggled" />
    </div>
</template>

<script setup lang="ts">
import CheckIcon from '@/components/CheckIcon.vue';

const { isToggled, doToggle } = defineProps<{ isToggled: boolean, doToggle: () => void }>()

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
    background: transparent;
    border: 1px solid;
    border-color: var(--text-color-dark);
}

.circle[data-isToggled="true"] {
    background: var(--check-mark-linear-gradient-bg);
    border: none;
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
    border-color: var(--check-mark-linear-gradient-bg);
}
</style>