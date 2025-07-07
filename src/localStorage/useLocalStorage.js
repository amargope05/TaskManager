import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // console.log("rendered first time----")
      const item = window.localStorage.getItem(key);
      
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Error reading LocalStorage:", error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
    //   console.log("value-- ",value)
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error writing to LocalStorage:", error);
    }
  };

  return [storedValue, setValue];
};
