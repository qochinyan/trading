import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import "./App.css";
import Header from "../Components/Header/Header";
import Loader from "../Components/Loader/Loader";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { startLoading } from "../Redux/features/settings/settingsSlice";

function App() {
  const Home = React.lazy(() => import("../Routes/Home/Home"));
  const NoPage = React.lazy(() => import("../Routes/NoPage/NoPage"));
  const News = React.lazy(() => import("../Routes/News/News"));
  const Famouses = React.lazy(() => import("../Routes/Famouses/Famouses"));
  const isLoading = useAppSelector((state) => state.settings.loading);
  const dispatch = useAppDispatch()
  // useEffect(() => {
  // dispatch(startLoading())
    
  // }, [])
   
  return (
    <div className="App">
      <BrowserRouter>
        <Loader/>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <React.Suspense fallback={<></>}>
                <Home />
              </React.Suspense>
            }
          />
          <Route
            path="/famouses"
            element={
              <React.Suspense fallback={<></>}>
                <Famouses />
              </React.Suspense>
            }
          />
          <Route
            path="/news"
            element={
              <React.Suspense fallback={<></>}>
                <News />
              </React.Suspense>
            }
          />
          <Route
            path="*"
            element={
              <React.Suspense fallback={<></>}>
                <NoPage />
              </React.Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
