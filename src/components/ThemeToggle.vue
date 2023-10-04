<template>
    <section class="app-name-and-icon-container">
        <h1 class="app-name">todo</h1>
        <MoonIcon @click="toggleTheme" v-if="!isDarkMode" class="icon" />
        <SunIcon @click="toggleTheme" v-if="isDarkMode" class="icon" />
    </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useThemeStore } from '@/store/theme';
import MoonIcon from '@/components/MoonIcon.vue';
import SunIcon from '@/components/SunIcon.vue';

const themeStore = useThemeStore();

const isDarkMode = computed(() => themeStore.isDarkMode);

const toggleTheme = () => {
    themeStore.toggleTheme();
};

</script>


<style scoped>
.app-name-and-icon-container {
    display: flex;
    align-items: center;
}


.app-name {
    text-transform: uppercase;
    letter-spacing: 1rem;
    color: white;
    margin-right: auto
}

.u-flex {
    display: flex;
}

.icon {
    cursor: pointer;
}
</style>