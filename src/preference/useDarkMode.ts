import { useEffect } from "react";
import { useLocalStorage, useMediaQuery } from "usehooks-ts";

import { DarkModePreference } from "./Preference";

const setDarkMode = (dark: boolean) => {
  if (dark) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
};

export function useDarkModePreference(defaultValue: DarkModePreference) {
  const isSystemDark = useMediaQuery("(prefers-color-scheme: dark)");

  const [darkModePreference, setDarkModePreference] =
    useLocalStorage<DarkModePreference>("dark-mode", defaultValue);

  useEffect(() => {
    setDarkMode(
      (darkModePreference === "system" && isSystemDark) ||
        darkModePreference === "dark",
    );
  }, [darkModePreference, isSystemDark]);

  return {
    darkModePreference,
    updateDarkModePreference: (mode: DarkModePreference) => {
      setDarkModePreference(mode);
    },
  };
}
