import { NavLink } from "react-router-dom";

import notFound from "../../Images/404.png"
import "./NoPage.scss";
function NoPage() {
  return (
    <div className="nopage-container global-container">
      <img style={{width:"600px"}} src={notFound} alt="" />
      <h1 className="page-heading nopage">Oops . We couldn't Find the page</h1>
      <div className="nopage-bottom-text">
        Maybe You can find whatever you want{" "}
        <NavLink className="nopage-home-link" to="/">
          here
        </NavLink>
      </div>
    </div>
  );
}

export default NoPage;
