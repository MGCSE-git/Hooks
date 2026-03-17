import React from "react";
import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function ThemeSwitch(){
    const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme} style={{ margin: "20px", padding: "10px", background: theme === "light" ? "#000" : "#fff", color: theme === "light" ? "#fff" : "#000" }}>
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}
export  default ThemeSwitch;