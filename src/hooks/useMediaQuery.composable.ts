// useMediaQuery.js
import { ref, watchEffect } from 'vue';

export function useMediaQuery(query: string) {
  const matches = ref(window.matchMedia(query).matches);

  const updateMatches = () => {
    matches.value = window.matchMedia(query).matches;
  };

  watchEffect(() => {
    window.addEventListener('resize', updateMatches);
    updateMatches();

    return () => {
      window.removeEventListener('resize', updateMatches);
    };
  });

  return {
    matches,
  };
}
