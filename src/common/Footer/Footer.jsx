import React from "react";
import { Link } from "react-router-dom";
import footer_logo from "../../assets/white_logo.svg";
import footer_search from "../../assets/icons/footer_search.svg";
import location from "../../assets/icons/location.svg";
import call from "../../assets/icons/call.svg";
import email from "../../assets/icons/email.svg";
import instagram from "../../assets/icons/instagram.svg";
import youtube from "../../assets/icons/youtube.svg";
import facebook from "../../assets/icons/facebook.svg";
import telegram from "../../assets/icons/telegram.svg";
import "./footer.scss";

function Footer(props) {
  return (
    <footer className="footer">
      <div className="footer_wrapper">
        <div className="footer_logo">
          <img src={footer_logo} alt="" />
          <p>
            Andijon qishloq xo’jaligi va agrotexnologiyalar institutining rasmiy
            web sahifasi
          </p>
        </div>
        <div className="footer_menu">
          <h1>Menyu</h1>
          <ul>
            <li>
              <Link>Asosiy</Link>
            </li>
            <li>
              <Link>Bo’limlar</Link>
            </li>
            <li>
              <Link>Kitoblar</Link>
            </li>
            <li>
              <Link>Xonadonlar</Link>
            </li>
            <li>
              <Link>Yangiliklar</Link>
            </li>
            <li>
              <Link>Aloqa</Link>
            </li>
          </ul>
        </div>
        <div className="footer_parts">
          <h1>Bo’limlar</h1>
          <ul>
            <li>
              <Link>Dars jadvali</Link>
            </li>
            <li>
              <Link>Xonalar joylashuvi</Link>
            </li>
            <li>
              <Link>Ijaraga uylar</Link>
            </li>
            <li>
              <Link>Bo’sh ish o’rinlari</Link>
            </li>
            <li>
              <Link>Oshxona va kafelar</Link>
            </li>
            <li>
              <Link>To’garaklar ro’yxati</Link>
            </li>
            <li>
              <Link>Kutubxona</Link>
            </li>
            <li>
              <Link>Institut haqida</Link>
            </li>
            <li>
              <Link>Iqtidorli talabalar</Link>
            </li>
          </ul>
        </div>
        <div className="footer_details">
          <div className="footer_search">
            <button>
              <img src={footer_search} alt="" />
            </button>
            <input type="text" placeholder="Qidiruv..." />
          </div>
          <div className="footer_info">
            <h1>Ma’lumot</h1>
            <div className="location">
              <img src={location} alt="" />
              <h2>
                Andijon viloyati, Andijon shahar Buyuk Turon 21, Avtovokzal
                ortida.
              </h2>
            </div>
            <div className="call">
              <img src={call} alt="" />
              <h2>
                <a href="tel:+998936843757">+998 99 899 90 05</a>
              </h2>
            </div>
            <div className="email">
              <img src={email} alt="" />
              <h2>
                <a href="www.gmail.com">robocode.andijan@mail.ru</a>
              </h2>
            </div>
          </div>
          <div className="footer_icons">
            <a href="www.instagram.com" target="blank">
              <img src={instagram} alt="" />
            </a>
            <a href="www.youtube.com" target="blank">
              <img src={youtube} alt="" />
            </a>
            <a href="www.facebook.com" target="blank">
              <img src={facebook} alt="" />
            </a>
            <a href="https://t.me/Otabek_Sobirjonovich" target="blank">
              <img src={telegram} alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
