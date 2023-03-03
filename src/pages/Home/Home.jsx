import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import Banner from "../../components/Banner/Banner";
import Heading from "../../components/Header/Heading";
import ResSlider from "../../components/ResSlider/ResSlider";
import report from "../../assets/icons/report.svg";
import classroom from "../../assets/icons/classroom.svg";
import student from "../../assets/icons/student.svg";
import News from "../../components/News/News";
import "./home.scss";

function Home(props) {
  const { departments } = useSelector((state) => state.data);
  const { most_read_books } = useSelector((state) => state.data);
  const defaultState = {
    center: [40.8154, 72.2837],
    zoom: 5,
  };
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
      <div className="flats_section">
        <div className="flats_wrapper">
          <div className="flats_header">
            <Heading title="XONADONLAR RO’YXATI" />
          </div>
          <div className="flats_body">
            <ResSlider />
            <button>
              <Link>Barchasini ko’rish</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="short_about_section">
        <div className="short_about_wrapper">
          <div className="all_courses">
            <div className="for_image">
              <img src={report} alt="" />
            </div>
            <div className="for_info">
              <h1>6050+</h1>
              <h4>Umumiy kurslar</h4>
            </div>
          </div>
          <div className="all_students">
            <div className="for_image">
              <img src={student} alt="" />
            </div>
            <div className="for_info">
              <h1>20550+</h1>
              <h4>Umumiy studentlar</h4>
            </div>
          </div>
          <div className="professors">
            <div className="for_image">
              <img src={classroom} alt="" />
            </div>
            <div className="for_info">
              <h1>3055+</h1>
              <h4>Tajribali ustozlar</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="news_section">
        <News />
        <button>
          <Link>Barcha yangliklar</Link>
        </button>
      </div>
      <div className="map_section">
        <div className="map_wrapper">
          <div className="map_header">BIZ BILAN BOGLANISH</div>
          <div className="map_body">
            <div className="contact_modal">
              <div className="contact_wrapper">
                <div className="contact_wrapper">
                  <div className="contact_header">
                    <h2>Biz bilan bog’lanish</h2>
                  </div>
                  <form>
                    <div>
                      <input type="text" placeholder="Ism" />
                      <input type="text" placeholder="Familiya" />
                    </div>
                    <div>
                      <input type="text" placeholder="Tel:" />
                      <input type="text" placeholder="Email" />
                    </div>
                    <div className="for_comment">
                      <label>Mavzu</label>
                      <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <button>Habar qoldirish</button>
                  </form>
                </div>
              </div>
            </div>
            <div className="andijan_map">
              <YMaps className="map">
                <Map defaultState={defaultState}>
                  <Placemark geometry={[55.684758, 37.738521]} />
                </Map>
              </YMaps>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
