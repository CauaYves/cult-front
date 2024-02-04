import { useState, Dispatch, SetStateAction } from "react";
import Cookies from "js-cookie";

type SetValue<T> = T | ((prevValue: T) => T);

type UseLocalStorageReturn<T> = [T, Dispatch<SetStateAction<T>>, () => void];

export default function useLocalStorage<T>(
  key: string,
  initialValue: T
): UseLocalStorageReturn<T> {
  const [storedValue, setStoredValue] = useState<T>(() => {
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

  const setValue = (value: SetValue<T>) => {
    try {
      const valueToStore =
        value instanceof Function ? (value as Function)(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
      Cookies.set(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  const removeValue = () => {
    try {
      window.localStorage.removeItem(key);
      Cookies.remove(key);
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue, removeValue];
}
