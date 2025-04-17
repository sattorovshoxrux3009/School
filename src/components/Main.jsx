import "./Main.scss";
import mainImage from "../img/main.jpg";
import { useTranslation } from "react-i18next";

function Main() {
  const { t } = useTranslation();
  return (
    <div className="main">
      <div className="container">
        <div className="left">
          <h1>
            {t("child")} <span> {t("success")}</span> {t("education")}
          </h1>
          <p>{t("mainText")}</p>
        </div>
        <div className="right">
          <img src={mainImage} alt="main" className="walpaper" />
          <a href="#">
            <button> {t("signUp")}</button>
          </a>
        </div>
        <div className="bottom"></div>
        <a href="#" className="btn">
          <button> {t("signUp")}</button>
        </a>
      </div>
    </div>
  );
}

export default Main;
