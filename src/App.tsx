import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header/Header";

function App() {
  const Home = React.lazy(() => import("./Routes/Home/Home"));
  const NoPage = React.lazy(() => import("./Routes/NoPage/NoPage"));
  const News = React.lazy(() => import("./Routes/News/News"));
  const Famouses = React.lazy(() => import("./Routes/Famouses/Famouses"));
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <React.Suspense fallback={<>...</>}>
                <Home />
              </React.Suspense>
            }
          />
          <Route
            path="/famouses"
            element={
              <React.Suspense fallback={<>...</>}>
                <Famouses />
              </React.Suspense>
            }
          />
          <Route
            path="/news"
            element={
              <React.Suspense fallback={<>...</>}>
                <News />
              </React.Suspense>
            }
          />
          <Route
            path="*"
            element={
              <React.Suspense fallback={<>...</>}>
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
