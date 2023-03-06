import React from "react";
import { useSelector } from "react-redux";
import Heading from "../../components/Header/Heading";
import "./canteenList.scss";

function CanteenList(props) {
  const { canteens } = useSelector((state) => state.data);
  return (
    <div className="canteen_cafe_page">
      <div className="canteen_cafe_wrapper">
        <div className="canteen_header">
          <Heading title="Oshxonalar va kafelar Royhati" />
        </div>
        <div className="canteen_body">
          {canteens.map((item) => (
            <div className="canteen_card" key={item.id}>
              <div className="card_img">
                <img src={item.img} alt="" />
              </div>
              <div className="card_body">
                <h1>{item.name}</h1>
                <div className="card_details">
                  <p>
                    <span>Manzil: </span> {item.location}
                  </p>
                  <p>
                    <span>Ish vaqti: </span> {item.work_time}
                  </p>
                  <p>
                    <span>Taomlar: </span> {item.menu}
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

export default CanteenList;
