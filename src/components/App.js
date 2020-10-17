import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";

function App() {
  function getPage() {
    const route = window.location.pathname;
    return route === "/about" ? <AboutPage /> : <HomePage />;
  }
  return (
    <div className="container-Fluid">
      <Header />
      {getPage()}
    </div>
  );
}

export default App;
