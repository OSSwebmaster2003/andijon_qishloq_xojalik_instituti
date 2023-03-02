import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./resSlider.scss";

function ResSlider(props) {
  const { flats } = useSelector((state) => state.data);
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    // speed: 2000,
    autoplaySpeed: 3500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1401,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="res_slider">
      <Slider {...settings}>
        {flats.slice(0, 6).map((item) => (
          <Link className="flat_card" key={item.id}>
            <div className="card_img">
              <img src={item.img} alt="" />
            </div>
            <div className="card_content">
              <h3>
                <span>Uy Egasi :</span> {item.owner}
              </h3>
              <h3>
                <span>Manzil :</span> {item.location}
              </h3>
              <h3>
                <span>Tel Raqami :</span> {item.call_number}
              </h3>
              <h3>
                <span>Talablar :</span> {item.requirement}
              </h3>
              <h3>
                <span>Sharoitlar :</span> {item.condition}
              </h3>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
}

export default ResSlider;
