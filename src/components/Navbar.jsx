import "./Navbar.scss";
import logo from "../img/logo.jpg";
import { useState } from "react";

function Navbar() {
  const [isOpenButtons, setIsOpenButtons] = useState(false);
  return (
    <div className="navbar">
      <div className="container">
        <div className="wrapper">
          <a href="#">
            {" "}
            <img src={logo} alt="logo" />
          </a>

          <div className="links">
            <a href="">Biz haqimizda</a>
            <a href="">Maktab hayoti</a>
            <a href="">Kun tartibi</a>
            <a href="">Qabul jarayoni</a>
            <a href="">Bizning jamoa</a>
            <a href="">Aloqa</a>
          </div>
          <div className="right">
            <a href="tel:+998787771110">+998-78-777-11-10</a>
            <button
              onClick={() => {
                setIsOpenButtons(!isOpenButtons);
              }}
              className={isOpenButtons ? "btn active" : "btn"}
            >
              O'z
            </button>
            <ul className={isOpenButtons ? "" : "hidden"}>
              <li>
                <button className="btn1">En</button>
              </li>
              <li>
                <button className="btn2">Ру</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
