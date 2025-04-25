import "./Support.scss";
import { easeOut, motion } from "framer-motion";
import img1 from "../../img/teacher1.png";
import img2 from "../../img/teacher2.png";
import img3 from "../../img/teacher3.png";
import img4 from "../../img/teacher4.png";
import { useTranslation } from "react-i18next";

function Support() {
  const { t } = useTranslation();

  return (
    <section className="support">
      <div className="container">
        <motion.div
          whileInView={{ y: [100, 1] }}
          transition={{ duration: 0.3, ease: easeOut }}
          className="left"
        >
          <ul>
            <li>
              <div>
                <h1>200+</h1>
                <p>{t("pupils")}</p>
              </div>
              <div>
                <h1>3</h1>
                <p>{t("food")}</p>
              </div>
            </li>
            <li>
              <h3>{t("helpPlace")}</h3>
            </li>
          </ul>
        </motion.div>
        <motion.a
          href=""
          whileInView={{ y: [100, 1] }}
          transition={{ duration: 0.3, ease: easeOut }}
          className="right"
        >
          <h1>{t("professionalTeachers")}</h1>
          <p>{t("keySuccess")}</p>
          <div>
            <img className="img1" src={img1} alt="image" />
            <img className="img2" src={img2} alt="image" />
            <img className="img3" src={img3} alt="image" />
            <img className="img4" src={img4} alt="image" />
          </div>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1.96802L30.9998 30.9998"
              stroke="#00264B"
              stroke-width="1.49999"
              stroke-linecap="round"
            ></path>
            <path
              d="M1 31H30.9998"
              stroke="#00264B"
              stroke-width="1.49999"
              stroke-linecap="square"
            ></path>
            <path
              d="M31 1V30.0318"
              stroke="#00264B"
              stroke-width="1.49999"
              stroke-linecap="square"
            ></path>
          </svg>
        </motion.a>
      </div>
    </section>
  );
}

export default Support;
