import { UseDarkMode } from "@/types/hooks.types";
import { useCallback, useEffect, useState } from "react";

const LS_KEY = "theme";
const INITIAL_LS_VALUE =
  typeof localStorage !== "undefined" ? localStorage.getItem(LS_KEY) : null;
const INITIAL_VALUE = INITIAL_LS_VALUE === "dark" ? true : false;

export function useDarkMode(): UseDarkMode {
  const [isDark, setIsDark] = useState(INITIAL_VALUE);

  const toggleTheme = useCallback(() => setIsDark(!isDark), [isDark]);
  const setLightTheme = useCallback(() => setIsDark(false), []);
  const setDarkTheme = useCallback(() => setIsDark(true), []);

  useEffect(() => {
    const body = document.querySelector("body");

    if (isDark && body) {
      body.classList.add("dark");
      localStorage.setItem(LS_KEY, "dark");
    } else if (!isDark && body) {
      body.classList.remove("dark");
      localStorage.removeItem(LS_KEY);
    }
  }, [isDark]);

  return {
    isDark,
    toggleTheme,
    setLightTheme,
    setDarkTheme,
  };
}
