import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Heading from "../../components/Header/Heading";
import "./home.scss";

function Home(props) {
  const { departments } = useSelector((state) => state.data);
  return (
    <div className="home_page">
      <div className="banner_section">
        <Banner />
      </div>
      <div className="departments_section">
        <div className="departments_wrapper">
          <div className="departments_header">
            <Heading title="BO’LIMLAR" />
          </div>
          <div className="departments_body">
            {departments.map(({ id, title, body, link, img }) => (
              <Link className="department_card" key={id} to={link}>
                <div className="card_wrapper">
                  <img src={img} alt="" />
                  <h2>{title}</h2>
                  <p>{body}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
