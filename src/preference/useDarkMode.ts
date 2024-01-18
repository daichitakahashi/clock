import { useCallback } from "react";
import { useDarkMode as useDarkModeValue } from "usehooks-ts";
import { DarkModePreference } from "./Preference";

export const useDarkMode = () => {
  const { isDarkMode, enable, disable } = useDarkModeValue();
  if (isDarkMode) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
  const updateDarkMode = useCallback(
    (mode: DarkModePreference) => {
      switch (true) {
        case mode === "light" && isDarkMode:
          disable();
          break;
        case mode === "dark" && !isDarkMode:
          enable();
          break;
        case mode === "system":
          if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            enable();
          } else {
            disable();
          }
      }
    },
    [isDarkMode, enable, disable],
  );

  return updateDarkMode;
};
