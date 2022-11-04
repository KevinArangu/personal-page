import { useDarkMode } from "@/hooks/useDarkMode";
import { AppContextType, AppProviderProps } from "@/types/contexts.types";
import { createContext, useContext } from "react";

const AppContextDefaultValues: AppContextType = {
  isDark: false,
  toggleTheme: () => {},
  setLightTheme: () => {},
  setDarkTheme: () => {},
};

export const AppContext = createContext<AppContextType>(
  AppContextDefaultValues
);

export function AppProvider({ children }: AppProviderProps) {
  const theme = useDarkMode();

  const value = {
    ...theme,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);

  if (!context) {
    console.error("useApp must be used inside an AppContext.");
  }

  return context;
}
