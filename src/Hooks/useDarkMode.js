// src/hooks/useDarkMode.js
import { useEffect, useState } from "react";

const getTheme = () => {
  const saved = localStorage.getItem("theme");
  if (saved) return saved;
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
};

export default function useDarkMode() {
  const [theme, setTheme] = useState(getTheme());

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === "dark" ? "light" : "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return [theme, setTheme];
}

