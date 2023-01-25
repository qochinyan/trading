import { NavLink } from "react-router-dom";

import logo from"../../Images/logo.png"
import "./Header.scss"
const Header = () => {
  return (
    <div className="header-container global-container">
        <div className="logo">
            <img className="logo-img" src={logo} alt="" />
        </div>
      <nav className="header-navigation">
        <NavLink className="header-link" to="/">Home</NavLink>
        <NavLink className="header-link" to="/news">News</NavLink>
        <NavLink className="header-link" to="/famouses">Famouses</NavLink>
      </nav>
    </div>
  );
};

export default Header;
