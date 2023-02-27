import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "../Components/Header/Header";
import Loader from "../Components/Loader/Loader";
// import noConnection from "../Components/noConnection/noConnection";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { startLoading } from "../Redux/features/settings/settingsSlice";

function App() {
  const Suspense = (React as any).Suspense;
  const lazy = (React as any).lazy;
  const Home = lazy(() => import("../Routes/Home/Home"));
  const NoPage = lazy(() => import("../Routes/NoPage/NoPage"));
  const News = lazy(() => import("../Routes/News/News"));
  const Converter = lazy(() => import("../Routes/Converter/Converter"));
  // const isLoading = useAppSelector((state) => state.settings.loading);
  const dispatch = useAppDispatch();
  // useEffect(() => {
  // dispatch(startLoading())

  // }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Loader />
        {/* <noConnection /> */}
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<></>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/converter"
            element={
              <Suspense fallback={<></>}>
                <Converter />
              </Suspense>
            }
          />
          <Route
            path="/news"
            element={
              <Suspense fallback={<></>}>
                <News />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<></>}>
                <NoPage />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
