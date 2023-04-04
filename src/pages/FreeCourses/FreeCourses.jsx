import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Heading from "../../components/Header/Heading";
import "./freeCourses.scss";

function FreeCourses(props) {
  const { free_courses } = useSelector((state) => state.data);
  console.log(free_courses);
  return (
    <div className="courses_page">
      <div className="courses_wrapper">
        <div className="courses_header">
          <Heading title="To'garaklar ro‘yxati" />
        </div>
        <div className="courses_body">
          {free_courses.map((item) => (
            <div className="course_card" key={item.id}>
              <div className="card_wrapper">
                <div className="card_img">
                  <img src={item.img} alt="" />
                </div>
                <div className="card_info">
                  <h1>{item.science}</h1>
                  <div className="card_info_body">
                    <p>
                      <span>O'qituvchi</span> {item.prof}
                    </p>
                    <p>
                      <span>O'quvchi soni</span> {item.capacity}
                    </p>
                    <p>
                      <span>Bog'lanish uchun raqam</span> {item.number}
                    </p>
                    <p>
                      <span>Kurs vaqti</span> {item.time}
                    </p>
                    <div className="for_btn">
                      <Link>Batafsil</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FreeCourses;
