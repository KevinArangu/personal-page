import { useApp } from "@/context/AppContext"
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export default function ToggleTheme () {
  const { isDark, toggleTheme } = useApp();

  return (
    <button type="button">
      {isDark && <SunIcon onClick={toggleTheme} className="w-8 h-8 fill-current shrink-0" />}
      {!isDark && <MoonIcon onClick={toggleTheme} className="w-8 h-8 fill-current shrink-0" />}
    </button>
  )
}