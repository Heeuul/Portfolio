import { useState } from "react";

export default function useDarkMode() {
  const [isDarkMode, SetDarkMode] = useState(false);

  return {
    isDarkMode,
    ToggleDarkMode: () => {
      console.log("aaa");
      SetDarkMode(!isDarkMode);
    },
    enable: () => SetDarkMode(true),
    disable: () => SetDarkMode(false),
  };
}
