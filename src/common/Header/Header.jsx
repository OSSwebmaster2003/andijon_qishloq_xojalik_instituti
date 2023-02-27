import React from "react";
import logo from "../../assets/logo.svg";
import profile from "../../assets/icons/profile.svg";
import LangDropdown from "../../components/Dropdown/LangDropdown";
import { BsSearch } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import "./header.scss";

function Header(props) {
  return (
    <header className="header">
      <div className="header_wrapper">
        <div className="header_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="header_search">
          <div className="search_wrapper">
            <input type="text" placeholder="kategoriya bo'yicha qidiruv" />
            <div className="button_wrapper">
              <button>
                <BsSearch />
              </button>
            </div>
          </div>
        </div>
        <div className="header_actions">
          <div className="search">
            <CiSearch />
          </div>
          <div className="header_profile">
            <Link>
              <img src={profile} alt="" />
            </Link>
          </div>
          <div className="header_lang">
            <LangDropdown />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
