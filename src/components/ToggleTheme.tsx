import { useApp } from "@/context/AppContext";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

export default function ToggleTheme({ onClick = () => {} }) {
  const { isDark, toggleTheme } = useApp();
  const [isDarkTheme, setIsDarkTheme] = useState(isDark);

  useEffect(() => {
    setIsDarkTheme(isDark);
  }, [isDark]);

  return (
    <button type="button" onClick={onClick}>
      {isDarkTheme && (
        <SunIcon
          onClick={toggleTheme}
          className="w-8 h-8 fill-current shrink-0"
        />
      )}
      {!isDarkTheme && (
        <MoonIcon
          onClick={toggleTheme}
          className="w-8 h-8 fill-current shrink-0"
        />
      )}
    </button>
  );
}
