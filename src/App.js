import React from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import Header from "./common/Header/Header";
import Footer from "./common/Footer/Footer";

function App(props) {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
