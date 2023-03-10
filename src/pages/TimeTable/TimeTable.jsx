import React, { useState } from "react";
import Heading from "../../components/Header/Heading";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
import "./timeTable.scss";
import { useSelector } from "react-redux";
import Slider from "react-slick";

function TimeTable(props) {
  const { timetables } = useSelector((state) => state.data);
  const { courses } = useSelector((state) => state.data);
  const { faculties } = useSelector((state) => state.data);
  const { fields } = useSelector((state) => state.data);

  const [course, setCourse] = useState(false);
  const [faculty, setFaculty] = useState(false);
  const [field, setField] = useState(false);

  const toggleCourse = () => setCourse((prevState) => !prevState);
  const toggleFaculty = () => setFaculty((prevState) => !prevState);
  const toggleField = () => setField((prevState) => !prevState);

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <AiOutlineRight />,
    prevArrow: <AiOutlineLeft />,
  };
  return (
    <div className="timetable_page">
      <div className="timetable_wrapper">
        <div className="timetable_header">
          <Heading title="Dars Jadvali" />
        </div>
        <div className="timetable_body">
          <div className="timetable_filters">
            <div className="course_dropdown" id="for_dropdown">
              <Dropdown isOpen={course} toggle={toggleCourse}>
                <DropdownToggle caret>Ta`lim bosqichi</DropdownToggle>
                <DropdownMenu>
                  {courses.map((item) => (
                    <DropdownItem key={item.id}>{item.course}</DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            </div>
            <div className="faculty_dropdown" id="for_dropdown">
              <Dropdown isOpen={faculty} toggle={toggleFaculty}>
                <DropdownToggle caret>Fakulteti</DropdownToggle>
                <DropdownMenu>
                  {faculties.map((item) => (
                    <DropdownItem key={item.id}>{item.faculty}</DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            </div>
            <div className="field_dropdown" id="for_dropdown">
              <Dropdown isOpen={field} toggle={toggleField}>
                <DropdownToggle caret>Ta`lim yo`nalishi</DropdownToggle>
                <DropdownMenu>
                  {fields.map((item) => (
                    <DropdownItem key={item.id}>{item.faculty}</DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
          <div className="timetable_slider">
            <Slider {...settings}>
              {timetables.map((item) => (
                <div className="timetable_card" key={item.id}>
                  <div className="timetable_card_header">
                    <h1>{item.title}</h1>
                  </div>
                  <div className="for_image">
                    <img src={item.content} alt="" />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimeTable;
