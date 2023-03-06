import React from "react";
import "./bookCard.scss";

function BookCard({ img, author, title }) {
  return (
    <div className="book_card">
      <div className="book_card_wrapper">
        <div className="card_img">
          <img src={img} alt="" />
        </div>
        <div className="card_body">
          <h2>{title}</h2>
          <h3>{author}</h3>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
