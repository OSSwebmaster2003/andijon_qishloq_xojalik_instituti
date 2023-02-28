import React from "react";
import Banner from "../../components/Banner/Banner";
import "./home.scss";

function Home(props) {
  return (
    <div className="home_page">
      <div className="banner_section">
        <Banner />
      </div>
    </div>
  );
}

export default Home;
