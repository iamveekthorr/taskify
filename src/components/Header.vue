<template>
    <header class="header">
        <div class="header-image-container">
            <!-- dark mode desktop -->
            <img src="../assets/bg-desktop-dark.jpg" alt="background image of walkway desktop dark mode"
                v-if="desktop.matches.value && theme.darkMode" />

            <!--  light mode desktop -->
            <img src="../assets/bg-desktop-light.jpg" alt="background image of mountain, desktop light mode"
                v-else-if="desktop.matches.value && !theme.darkMode" />

            <!-- dark moe mobile -->
            <img src="../assets/bg-mobile-dark.jpg" alt="background image of walkway mobile dark mode"
                v-else-if="mobile.matches.value && theme.darkMode" />

            <!--  light mode mobile -->
            <img src="../assets/bg-mobile-light.jpg" alt="background image of mountain, mobile light mode"
                v-else-if="mobile.matches.value && !theme.darkMode" />
        </div>
    </header>
</template>

<script setup lang="ts">
import { useMediaQuery } from '@/hooks/useMediaQuery.composable';
import { useThemeStore } from '@/store/theme';

const desktop = useMediaQuery('(min-width: 64em)');
const mobile = useMediaQuery('(max-width: 48.0625em)');

const theme = useThemeStore()
</script>

<style scoped>
.header {
    position: relative;
}

.header-image-container>img {
    width: 100%;
}

.header-image-container>img {
    height: 100%;
    width: 100%;
    object-fit: contain;
}
</style>
