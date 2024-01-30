"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { CiDark } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  console.log(theme);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="flex flex-col items-center justify-center text-sm duration-200">
      <button className="flex justify-center items-center" onClick={toggleTheme}>
        {theme === "light" ? <MdOutlineDarkMode size={20} /> : <MdOutlineLightMode size={20} />}
        <span className="ml-1 font-medium">{theme === "light" ? "Dark" : "Light"}</span>
      </button>
    </div>
  );
};

export default ThemeSwitcher;
