"use client"
import { useState } from 'react';
import Cookies from 'js-cookie';

export default function useLocalStorage(key: any, initialValue: any) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      if (typeof window !== "undefined") {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      }
    } catch (error) {
      console.log(error);
    }
    return initialValue;
  });

  const setValue = (value: any) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      // if (typeof window !== "undefined") {
      //   window.localStorage.setItem(key, JSON.stringify(valueToStore));
      //   Cookies.set(key, JSON.stringify(valueToStore));
      // }
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
          Cookies.set(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  const removeValue = () => {
    try {
    //   if (typeof window !== "undefined") {
    //     window.localStorage.removeItem(key);
    //     Cookies.remove(key);
    window.localStorage.removeItem(key);
    Cookies.remove(key);
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue, removeValue];
}
