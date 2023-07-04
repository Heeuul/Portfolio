import { createContext, useContext, useMemo, useState } from "react";
import { colors } from "../assets/styles";

const DarkModeContext = createContext({});
export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, SetDarkMode] = useState(true);

  const darkModeMemo = useMemo(
    () => ({
      isDarkMode,
      modeColor: isDarkMode ? colors.dark : colors.light,
      invertColor: isDarkMode ? colors.light : colors.dark,
      betweenColor: colors.center,
      ToggleDarkMode: () => {
        SetDarkMode(!isDarkMode);
      },
      enable: () => SetDarkMode(true),
      disable: () => SetDarkMode(false),
    }),
    [isDarkMode]
  );

  return (
    <DarkModeContext.Provider value={darkModeMemo}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default function useDarkMode() {
  return useContext(DarkModeContext);
}
