import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function HeroSection(){
     const { theme } = useContext(ThemeContext);
     // eslint-disable-next-line no-lone-blocks
     {/*
     let bgColor, txtColor;
     if(theme==="light"){
        bgColor="#fff";
        txtColor="#000";
     }
     else{
        bgColor="#222";
        txtColor="#fff";
     }*/}
  return (
    <section  className="container my-3" style={{ background: theme==="light"?"#fff":"#f23", color: theme==="light"?"#000":"#fff", padding: "20px" }}>
      <p>This is the main content area.</p>
    </section>
  );
}
export default HeroSection;