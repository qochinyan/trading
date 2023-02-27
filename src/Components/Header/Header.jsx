import { NavLink } from "react-router-dom";

import logo from "../../Images/logo.png";
// import { startLoading } from "../../Redux/features/settings/settingsSlice";
// import { useAppDispatch } from "../../Redux/hooks";
import "./Header.scss";
const Header = () => {
  // const dispatch = useAppDispatch()

  return (
    <div className="header-container global-container">
      <div className="logo">
        <NavLink to="/">
          <img className="logo-img" src={logo} alt="" />
        </NavLink>
      </div>
      <nav className="header-navigation">
        <NavLink className="header-link" to="/" >
          Home
        </NavLink>
        <NavLink className="header-link" to="/news">
          News
        </NavLink>
        <NavLink className="header-link" to="/converter">
          Converter
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
