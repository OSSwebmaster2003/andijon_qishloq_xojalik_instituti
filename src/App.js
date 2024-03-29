import React from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import RoomOrders from "./pages/RoomOrders/RoomOrders";
import Books from "./pages/Books/Books";
import Header from "./common/Header/Header";
import Footer from "./common/Footer/Footer";
import RoomList from "./pages/RoomList/RoomList";
import CanteenList from "./pages/CanteenList/CanteenList";
import Vacancy from "./pages/Vacancy/Vacancy";
import TimeTable from "./pages/TimeTable/TimeTable";
import FreeCourses from "./pages/FreeCourses/FreeCourses";
import About from "./pages/About/About";

function App(props) {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room_ordering" element={<RoomOrders />} />
        <Route path="/library" element={<Books />} />
        <Route path="/house_renting" element={<RoomList />} />
        <Route path="/canteens_and_cafes" element={<CanteenList />} />
        <Route path="/vacancies" element={<Vacancy />} />
        <Route path="/timetable" element={<TimeTable />} />
        <Route path="/free_courses" element={<FreeCourses />} />
        <Route path="/about_institute" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
