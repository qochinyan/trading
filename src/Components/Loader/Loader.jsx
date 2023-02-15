import { useState } from "react";
import { useAppSelector } from "../../Redux/hooks";
import "./Loader.scss";
const Loader = () => {
  const isLoading = useAppSelector(state=>state.settings.loading)
  return (
    <div className={isLoading ? `loader`: `loader disappear`}>
      <div id="particles-background" className={isLoading ? `vertical-centered-box appear`: `vertical-centered-box disappear`}></div>
      
      <div className="vertical-centered-box">
        <div className="content">
          <div className="loader-circle"></div>
          <div className="loader-line-mask">
            <div className="loader-line"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
