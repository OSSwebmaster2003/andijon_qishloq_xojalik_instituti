import React from "react";
import "./heading.scss";

function Heading({ title, width = "120px" }) {
  return (
    <div className="heading">
      <div style={{ width }} className="empty_line"></div>
      <h1>{title}</h1>
    </div>
  );
}

export default Heading;
