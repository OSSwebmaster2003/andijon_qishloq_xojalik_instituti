import React from "react";
import { useSelector } from "react-redux";
import Heading from "../../components/Header/Heading";
import "./vacancy.scss";

function Vacancy(props) {
  const { vacancies } = useSelector((state) => state.data);
  return (
    <div className="vacancy_page">
      <div className="vacancy_wrapper">
        <div className="vacancy_header">
          <Heading title="Bo’sh ish o’rinlari" />
        </div>
        <div className="vacancy_body">
          {vacancies.map((item) => (
            <div className="vacancy_card" key={item.id}>
              <div className="card_img">
                <img src={item.img} alt="" />
              </div>
              <div className="card_body">
                <div className="card_details">
                  <p>
                    <span>Ish Joy Nomi: </span> {item.office}
                  </p>
                  <p>
                    <span>Ishturi: </span> {item.work}
                  </p>
                  <p>
                    <span>Bo'sh Joylar Soni: </span> {item.free_space}ta
                  </p>
                  <p>
                    <span>Ish Vaqti: </span> {item.work_time}
                  </p>
                  <p>
                    <span>Qulayliklar: </span> {item.opportunity}
                  </p>
                  <p>
                    <span>Manzil: </span> {item.location}
                  </p>
                </div>
                <div className="card_action">
                  <h1>Maosh: {item.cost}</h1>
                  <p>
                    <span>Telefon Raqami: </span> {item.number}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Vacancy;
