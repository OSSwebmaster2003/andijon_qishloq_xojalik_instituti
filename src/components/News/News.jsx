import React from "react";
import { useSelector } from "react-redux";
import "./news.scss";

function News(props) {
  const { news } = useSelector((state) => state.data);
  const newNews = news.slice(0, 5);

  return (
    <div className="news_wrapper">
      <div className="top_part_news">
        <div className="left_part">
          <div className="news_header">
            <h1>INSTITUT SO’NGGI YANGILIKLARI</h1>
          </div>
          <div className="little_card">
            <div className="card_img">
              <img src={newNews[0].img && newNews[0].img} alt="" />
            </div>
            <div className="card_body">
              <h2>{newNews[0].title}</h2>
              <p>{newNews[0].body}</p>
            </div>
          </div>
        </div>
        <div className="right_part">
          <img src={newNews[1].cover && newNews[1].cover} alt="" />
          <h2>{newNews[1].title}</h2>
          <p>{newNews[1].body}</p>
        </div>
      </div>
      <div className="bottom_part_news">
        <div className="left_part">
          <img src={newNews[2].cover && newNews[2].cover} alt="" />
          <h2>{newNews[2].title}</h2>
          <p>{newNews[2].body}</p>
        </div>
        <div className="right_part">
          <div className="little_card">
            <div className="card_img">
              <img src={newNews[3].img && newNews[3].img} alt="" />
            </div>
            <div className="card_body">
              <h2>{newNews[3].title}</h2>
              <p>{newNews[3].body}</p>
            </div>
          </div>
          <div className="little_card">
            <div className="card_img">
              <img src={newNews[4].img && newNews[4].img} alt="" />
            </div>
            <div className="card_body">
              <h2>{newNews[4].title}</h2>
              <p>{newNews[4].body}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
