import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Heading from "../../components/Header/Heading";
import "./home.scss";

function Home(props) {
  const { departments } = useSelector((state) => state.data);
  const { most_read_books } = useSelector((state) => state.data);
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
      <div className="most_read_books_section">
        <div className="books_section_wrapper">
          <div className="books_section_header">
            <h1>ENG KO’P O’QILGAN KITOBLAR</h1>
          </div>
          <div className="books_section_body">
            <div className="most_read_books">
              {most_read_books.map(({ id, cover }) => (
                <Link className="most_read_book" key={id}>
                  <div className="book_wrapper">
                    <img src={cover} alt="" />
                  </div>
                </Link>
              ))}
            </div>
            <button>
              <Link>Barcha kitoblar</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
