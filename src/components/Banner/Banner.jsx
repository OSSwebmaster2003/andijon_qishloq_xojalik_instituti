import React from "react";
import banner from "../../assets/home/banner.png";
import "./banner.scss";

function Banner(props) {
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="banner_info">
        <h1>talabalar platformasi</h1>
        <p>ANDIJON QISHLOQ XO‘JALIGI VA AGROTEXNOLOGIYALAR INSTITUTI</p>
      </div>
    </div>
  );
}

export default Banner;
