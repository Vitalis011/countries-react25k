"use client";

import { useTheme } from "@/app/context/ThemeContext";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export default function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <IconButton onClick={toggleTheme}>
      {isDarkMode ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
}
