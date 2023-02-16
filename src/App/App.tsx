import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "../Components/Header/Header";
import Loader from "../Components/Loader/Loader";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { startLoading } from "../Redux/features/settings/settingsSlice";

function App() {
  const Suspense = (React as any).Suspense;
  const lazy = (React as any).lazy;
  const Home = lazy(() => import("../Routes/Home/Home"));
  const NoPage = lazy(() => import("../Routes/NoPage/NoPage"));
  const News = lazy(() => import("../Routes/News/News"));
  const Famouses = lazy(() => import("../Routes/Famouses/Famouses"));
  const isLoading = useAppSelector((state) => state.settings.loading);
  const dispatch = useAppDispatch();
  // useEffect(() => {
  // dispatch(startLoading())

  // }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Loader />
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
            path="/famouses"
            element={
              <Suspense fallback={<></>}>
                <Famouses />
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
