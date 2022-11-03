import type { ReactNode } from "react";
import { UseDarkMode } from "@/types/hooks.types";

export type AppProviderProps = {
  children: ReactNode;
};

export type AppContextType = UseDarkMode;
