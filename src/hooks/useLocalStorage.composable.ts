// useLocalStorage.ts

import { ref, onMounted, watch } from 'vue';

const useLocalStorage = (key: string) => {
  const data = ref(null);

  // Load data from local storage when the component is mounted
  onMounted(() => {
    try {
      const savedData = localStorage.getItem(key);
      if (savedData && savedData !== 'undefined') {
        data.value = JSON.parse(savedData);
      }
    } catch (error) {
      console.error(error);
    }
  });

  // Watch for changes to data and save it to local storage
  watch(data, (newData) => {
    localStorage.setItem(key, JSON.stringify(newData));
  });

  // Public function to set the data
  const setData = (newData: any) => {
    data.value = newData;
  };

  // Public function to clear the data from local storage
  const clearData = () => {
    localStorage.removeItem(key);
    data.value = null;
  };

  return {
    data,
    setData,
    clearData,
  };
};

export default useLocalStorage;
