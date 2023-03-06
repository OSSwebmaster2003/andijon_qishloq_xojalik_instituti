import React from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import RoomOrders from "./pages/RoomOrders/RoomOrders";
import Books from "./pages/Books/Books";
import Header from "./common/Header/Header";
import Footer from "./common/Footer/Footer";
import RoomList from "./pages/RoomList/RoomList";

function App(props) {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room_ordering" element={<RoomOrders />} />
        <Route path="/library" element={<Books />} />
        <Route path="/house_renting" element={<RoomList />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
