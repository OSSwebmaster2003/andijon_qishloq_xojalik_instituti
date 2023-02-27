import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import profile from "../../assets/icons/profile.svg";
import LangDropdown from "../../components/Dropdown/LangDropdown";
import { BsSearch } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./header.scss";

function Header(props) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };
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
          <div className="search" onClick={() => handleToggleMenu()}>
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
      <div
        className={
          toggleMenu ? "mobile_search_box mobile_open" : "mobile_search_box"
        }
      >
        <div className="mobile_search">
          <div className="mobile_search_wrapper">
            <input type="text" placeholder="kategoriya bo'yicha qidiring" />
            <div className="button_wrapper">
              <button>
                <BsSearch />
              </button>
            </div>
            <div className="button_wrapper" onClick={() => handleToggleMenu()}>
              <button>
                <AiOutlineClose />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
