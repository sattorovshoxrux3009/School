import "./Navbar.scss";
import logo from "../img/logo.jpg";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function Navbar() {
  const [isOpenButtons, setIsOpenButtons] = useState(false);
  const [active, setActive] = useState(false);
  const [activeLang, setActiveLang] = useState(
    localStorage.getItem("i18nextLng")
  );

  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(localStorage.getItem("i18nextLng"));

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  function setLanguage(lang) {
    setIsOpenButtons(false);
    setActiveLang(lang);
    setLang(lang);
  }

  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="wrapper">
            <a href="#">
              {" "}
              <img src={logo} alt="logo" />
            </a>

            <div className="links">
              <a href="">{t("aboutUs")}</a>
              <a href="">{t("schoolLife")}</a>
              <a href="">{t("agenda")}</a>
              <a href="">{t("admission")}</a>
              <a href="">{t("ourTeam")}</a>
              <a href="">{t("contact")}</a>
            </div>
            <div className="right">
              <a href="tel:+998787771110">+998-78-777-11-10</a>
              <button
                onClick={() => {
                  setIsOpenButtons(!isOpenButtons);
                }}
                className={isOpenButtons ? "btn active" : "btn"}
              >
                {activeLang == "uz" ? "O'z" : activeLang == "en" ? "En" : "Ру"}
              </button>
              <ul className={isOpenButtons ? "" : "hidden"}>
                <li>
                  <button
                    onClick={() => {
                      const nextLang =
                        activeLang == "uz"
                          ? "en"
                          : activeLang == "en"
                          ? "ru"
                          : "uz";
                      setLanguage(nextLang);
                    }}
                    className="btn1"
                  >
                    {activeLang == "uz"
                      ? "En"
                      : activeLang == "en"
                      ? "Ру"
                      : "O'z"}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      const nextLang =
                        activeLang === "uz"
                          ? "ru"
                          : activeLang === "ru"
                          ? "en"
                          : "uz";
                      setLanguage(nextLang);
                    }}
                    className="btn2"
                  >
                    {activeLang === "uz"
                      ? "Ру"
                      : activeLang === "en"
                      ? "O'z"
                      : "En"}
                  </button>
                </li>
              </ul>
            </div>
            <div
              className={`hamburger ${active ? "active" : ""}`}
              onClick={() => setActive(!active)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <div className={`navbar-mobile ${active ? "active" : ""}`}>
        <div className="container">
          <div
            className={`hamburger ${active ? "active" : ""}`}
            onClick={() => setActive(!active)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="links">
            <a href="">{t("aboutUs")}</a>
            <a href="">{t("schoolLife")}</a>
            <a href="">{t("agenda")}</a>
            <a href="">{t("admission")}</a>
            <a href="">{t("ourTeam")}</a>
            <a href="">{t("contact")}</a>
          </div>
          <div className="bottom">
            <a href="tel:+998787771110">+998-78-777-11-10</a>
            <button
              onClick={() => {
                setIsOpenButtons(!isOpenButtons);
              }}
              className={isOpenButtons ? "btn active" : "btn"}
            >
              {activeLang == "uz" ? "O'z" : activeLang == "en" ? "En" : "Ру"}
            </button>
            <ul className={isOpenButtons ? "" : "hidden"}>
              <li>
                <button
                  onClick={() => {
                    const nextLang =
                      activeLang == "uz"
                        ? "en"
                        : activeLang == "en"
                        ? "ru"
                        : "uz";
                    setLanguage(nextLang);
                  }}
                  className="btn1"
                >
                  {activeLang == "uz"
                    ? "En"
                    : activeLang == "en"
                    ? "Ру"
                    : "O'z"}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const nextLang =
                      activeLang === "uz"
                        ? "ru"
                        : activeLang === "ru"
                        ? "en"
                        : "uz";
                    setLanguage(nextLang);
                  }}
                  className="btn2"
                >
                  {activeLang === "uz"
                    ? "Ру"
                    : activeLang === "en"
                    ? "O'z"
                    : "En"}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
