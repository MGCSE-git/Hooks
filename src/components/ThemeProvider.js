import { useState } from "react";
import ThemeContext from "./ThemeContext";
function ThemeProvider({ children }){
  const [theme, setTheme] = useState("light");

  function toggleTheme(){
    let x;
    if(theme==="light"){
        x="dark;"
    }
    else{
        x="light";
    }
    setTheme(x);
  }
  

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
export default ThemeProvider;