import { easeOut, motion } from "framer-motion";
import { act, useState } from "react";
import "./Team.scss";
import { useTranslation } from "react-i18next";
import beginnerteacher1 from "../../img/beginnerteacher1.jpg";
import beginnerteacher2 from "../../img/beginnerteacher2.jpg";
import beginnerteacher3 from "../../img/beginnerteacher3.jpg";
import highteacher1 from "../../img/highteacher1.jpg";

function Team() {
  const { t } = useTranslation();
  const [active, setActive] = useState("leadership");
  console.log(active);
  return (
    <div className="team">
      <div className="container">
        <span>
          <motion.button
            whileInView={{ y: [50, 1] }}
            transition={{ duration: 0.2, ease: easeOut }}
            onClick={() => {
              setActive("leadership");
            }}
            className={active == "leadership" ? "active" : ""}
          >
            {t("leadership")}
          </motion.button>
          <motion.button
            whileInView={{ y: [50, 1] }}
            transition={{ duration: 0.3, ease: easeOut }}
            onClick={() => {
              setActive("beginner");
            }}
            className={active == "beginner" ? "active" : ""}
          >
            {t("beginner")}
          </motion.button>
          <motion.button
            whileInView={{ y: [50, 1] }}
            transition={{ duration: 0.4, ease: easeOut }}
            onClick={() => {
              setActive("high");
            }}
            className={active == "high" ? "active" : ""}
          >
            {t("high")}
          </motion.button>
        </span>
        <ul>
          {active == "leadership" ? (
            <></>
          ) : active == "beginner" ? (
            <>
              <motion.li
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.2, ease: easeOut }}
              >
                <img src={beginnerteacher1} alt="" />
                <h1>{t("team1")}</h1>
                <p>{t("team2")}</p>
              </motion.li>
              <motion.li
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.7, ease: easeOut }}
              >
                <img src={beginnerteacher2} alt="" />
                <h1></h1>
                <p>{t("team2")}</p>
              </motion.li>
              <motion.li
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 1.2, ease: easeOut }}
              >
                <img src={beginnerteacher3} alt="" />
                <h1></h1>
                <p>{t("team2")}</p>
              </motion.li>
            </>
          ) : (
            <>
              <motion.li
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.2, ease: easeOut }}
              >
                <img src={highteacher1} alt="" />
                <h1>{t("team3")}</h1>
                <p>{t("team4")}</p>
              </motion.li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Team;
