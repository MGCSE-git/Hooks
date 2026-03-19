import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function Footer(){
    const {theme} = useContext(ThemeContext);
    return(
        <div className="container-fluid my-3" style={{background: theme==="light"?"#fff":"#222", color: theme==="light"?"#000":"#fff"}}>
            <h5>Contact</h5>
            <p>Email: support@learnhub.com</p>
            <p>Phone: +1 123-456-7890</p>
            <div>
              <a href="https://facebook.com" className="text-white me-3"><i className="bi bi-facebook"></i></a>
              <a href="https://twitter.com" className="text-white me-3"><i className="bi bi-twitter"></i></a>
              <a href="https://linkedin.com" className="text-white"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
    );
}
export default Footer;
