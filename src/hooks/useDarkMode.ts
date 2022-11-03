import { UseDarkMode } from "@/types/hooks.types";
import { useCallback, useEffect, useState } from "react";

const INITIAL_LS_VALUE =
  typeof localStorage !== "undefined" ? localStorage.getItem("theme") : null;
const INITIAL_VALUE = INITIAL_LS_VALUE === "dark" ? true : false;

export function useDarkMode(): UseDarkMode {
  const [isDark, setIsDark] = useState(INITIAL_VALUE);

  const toggleTheme = useCallback(() => setIsDark(!isDark), [isDark]);
  const setLightTheme = useCallback(() => setIsDark(false), []);
  const setDarkTheme = useCallback(() => setIsDark(true), []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else if (!isDark) {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return {
    isDark,
    toggleTheme,
    setLightTheme,
    setDarkTheme,
  };
}
