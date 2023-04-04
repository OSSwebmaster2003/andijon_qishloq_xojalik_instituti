import React from "react";
import banner from "../../assets/home/banner.png";
import "./about.scss";

function About(props) {
  return (
    <div className="about_page">
      <div className="about_wrapper">
        <div className="about_info">
          <div className="about_header">
            <h1>Institut haqida batafsil ma'lumot</h1>
          </div>
          <div className="about_text">
            <div className="text_wrapper">
              <h2>EST 1988</h2>
              <h1>Our Story</h1>
              <p>
                Inventore aliquam beatae at et id alias. Ipsa dolores amet
                consequuntur minima quia maxime autem. Quidem id sed ratione.
                Tenetur provident autem in reiciendis rerum at dolor. Aliquam
                consectetur laudantium temporibus dicta minus dolor.
              </p>
              <ul>
                <li>Ullamco laboris nisi ut aliquip ex ea commo</li>
                <li>Duis aute irure dolor in reprehenderit in</li>
                <li>Ullamco laboris nisi ut aliquip ex ea</li>
              </ul>
              <p>
                Vitae autem velit excepturi fugit. Animi ad non. Eligendi et non
                nesciunt suscipit repellendus porro in quo eveniet. Molestias in
                maxime doloremque.
              </p>
            </div>
          </div>
        </div>
        <div className="about_img">
          <img src={banner} alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
