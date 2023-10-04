import { ref } from 'vue';

export const useToggle = (initialState: boolean = false) => {
  const isToggled = ref(initialState);

  const doToggle = () => {
    isToggled.value = !isToggled.value;
  };

  return { isToggled, doToggle };
};
