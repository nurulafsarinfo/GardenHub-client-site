// src/components/ThemeToggle.jsx
import React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkMode from "./useDarkMode";

export default function ThemeToggle() {
  const [theme, setTheme] = useDarkMode();

  const toggle = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <DarkModeSwitch
      checked={theme === "dark"}
      onChange={toggle}
      size={25}
    />
  );
}
