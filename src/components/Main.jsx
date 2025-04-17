import "./Main.scss";
import mainImage from "../img/main.jpg";

function Main() {
  return (
    <div className="main">
      <div className="container">
        <div className="left">
          <h1>
            FARZANDINGIZ <span>MUVAFFAQIYATI</span> UCHUN SIFATLI TA'LIM
          </h1>
          <p>
            Har bir o'quvchi bilan individual yondashuv asosida ta'lim.
            Zamonaviy o'qitish metodlari asosida o'zgacha ta'lim tizimi.
            Tajribali o'qituvchilar.
          </p>
        </div>
        <div className="right">
          <img src={mainImage} alt="main" className="walpaper" />
          <a href="#">
            <button>Ro'yxatdan o'tish</button>
          </a>
        </div>
        <div className="bottom"></div>
        <a href="#" className="btn">
          <button>Ro'yxatdan o'tish</button>
        </a>
      </div>
    </div>
  );
}

export default Main;
