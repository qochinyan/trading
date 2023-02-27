import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../Redux/hooks";
import { setConnection } from "../../Redux/features/settings/settingsSlice";
import "./Loader.scss";
import warn from "../../Images/warn.png";
import { AppDispatch, store } from "../../Redux/store";
const Loader = () => {
  const dispatch = useAppDispatch();

  const isLoading = useAppSelector((state) => state.settings.loading);
  const connection = useAppSelector((state) => state.settings.connection);
  useEffect(() => {
    setTimeout(() => {
      dispatch(setConnection({payload:false}));
    }, 1000);
  }, [isLoading]);

  return (
    <div className={isLoading ? "loader" : "loader disappear"}>
      <div
        id="particles-background"
        className={
          isLoading
            ? `vertical-centered-box appear`
            : `vertical-centered-box disappear`
        }></div>
      <div className="vertical-centered-box">
        <div className="content">
          <div className="loader-circle"></div>
          <div className="loader-line-mask">
            <div className="loader-line"></div>
          </div>
        </div>
      </div>{" "}
      {isLoading && !connection && (
        <div className="noConnection-loader">
          Check Your Connection<br />
          <img style={{ width: "100px" }} src={warn} alt="" />
        </div>
      )}
    </div>
  );
};

export default Loader;
