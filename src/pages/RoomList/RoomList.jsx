import React from "react";
import { useSelector } from "react-redux";
import Heading from "../../components/Header/Heading";
import "./roomList.scss";

function RoomList(props) {
  const { flats } = useSelector((state) => state.data);
  return (
    <div className="room_list_page">
      <div className="room_list_wrapper">
        <div className="room_list_header">
          <Heading title="Xonadonlar ro‘yxati" />
        </div>
        <div className="room_list_body">
          {flats.map((item) => (
            <div className="flats_card" key={item.id}>
              <div className="card_img">
                <img src={item.img} alt="" />
              </div>
              <div className="card_body">
                <h1>{item.title}</h1>
                <div className="card_details">
                  <p>
                    <span>Uy Egasi: </span> {item.owner}
                  </p>
                  <p>
                    <span>Manzil: </span> {item.location}
                  </p>
                  <p>
                    <span>Talaba: </span> {item.requirement}
                  </p>
                  <p>
                    <span>Bo'sh joylar soni: </span> 2ta
                  </p>
                  <p>
                    <span>Sharoitlar: </span> {item.condition}
                  </p>
                </div>
                <div className="card_actions">
                  <h2>Narxi : {item.cost}</h2>
                  <p>
                    <span>Telefon raqami: </span> {item.call_number}
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

export default RoomList;
