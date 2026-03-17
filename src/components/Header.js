import { useContext } from "react";
import ThemeContext from './ThemeContext'
//const ThemeContext = createContext();
function Header(){
    const { theme } = useContext(ThemeContext);
    
  return (
    <div className="container my-3">
        <header style={{ background: theme === "light" ? "#f8f8f8" : "#444", color: theme === "light" ? "#000" : "#fff", padding: "10px", textAlign: "center" }}>
        <h1>KEC Learning Portal</h1>
        </header>
    </div>
  );
}
export default Header;