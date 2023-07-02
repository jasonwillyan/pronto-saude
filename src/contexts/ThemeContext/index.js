import { createContext, useEffect, useState } from "react";

import light from "../../utils/theme/light";
import highContrast from "../../utils/theme/highContrast";

export const ThemeContext = createContext({});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(light);

  useEffect(() => {
    const themeActive = localStorage.getItem("theme");
    if (themeActive && themeActive === "highContrast") setTheme(highContrast);
    else localStorage.setItem("theme", "light");
  }, []);

  function switchTheme() {
    const themeActive = localStorage.getItem("theme");
    if (themeActive === "highContrast") {
      setTheme(light);
      localStorage.setItem("theme", "light");
    } else if (theme === "light") {
      setTheme(highContrast);
      localStorage.setItem("theme", "highContrast");
    }
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        switchTheme
      }}>
      {children}
    </ThemeContext.Provider>
  );
}
