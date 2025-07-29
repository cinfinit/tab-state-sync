// src/useSyncedState.ts
import { useEffect, useState } from "react";
function useSyncedState(key, defaultValue) {
  const [state, setState] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : defaultValue;
    } catch {
      return defaultValue;
    }
  });
  useEffect(() => {
    const handler = (e) => {
      if (e.key === key && e.newValue !== null) {
        try {
          setState(JSON.parse(e.newValue));
        } catch {
        }
      }
    };
    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, [key]);
  const updateState = (value) => {
    setState(value);
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
    }
  };
  return [state, updateState];
}
export {
  useSyncedState
};
