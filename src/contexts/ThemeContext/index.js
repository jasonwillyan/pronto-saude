import { createContext, useEffect, useState } from "react";

import light from "../../utils/theme/light";
import highContrast from "../../utils/theme/highContrast";
import enumTheme from "../../utils/theme/enumTheme";

export const ThemeContext = createContext({});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(light);

  useEffect(() => {
    const themeActive = localStorage.getItem("theme");
    if (themeActive && themeActive === enumTheme.highContrast) setTheme(highContrast);
    else localStorage.setItem("theme", enumTheme.light);
  }, []);

  function switchTheme() {
    const themeActive = localStorage.getItem("theme");
    if (themeActive === enumTheme.highContrast) {
      setTheme(light);
      localStorage.setItem("theme", enumTheme.light);
    } else if (themeActive === enumTheme.light) {
      setTheme(highContrast);
      localStorage.setItem("theme", enumTheme.highContrast);
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
