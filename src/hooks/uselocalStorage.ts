import { ref, onMounted } from 'vue';

// Define the hook
export function useLocalStorage(key: string) {
  // Create a ref to store the data
  const data = ref(null);

  // Function to set data in local storage
  const setLocalStorage = (value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  // Function to get data from local storage
  const getLocalStorage = () => {
    const storedData = localStorage.getItem(key);
    if (storedData) {
      data.value = JSON.parse(storedData);
    }
  };

  // Initialize data from local storage when the component is mounted
  onMounted(getLocalStorage);

  // Watch for changes in data and update local storage
  const saveDataToLocalStorage = () => {
    setLocalStorage(data.value);
  };

  // Expose the data, set function, and save function to the component
  return {
    data,
    setLocalStorage,
    saveDataToLocalStorage,
  };
}
