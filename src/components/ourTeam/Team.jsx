import { easeOut, motion } from "framer-motion";
import { act, useState } from "react";
import "./Team.scss";
import teacher1 from "../../img/teamTeacher1.png";
import { useTranslation } from "react-i18next";

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
            <>
              <motion.li
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.3, ease: easeOut }}
              >
                <img src={teacher1} alt="" />
                <h1>TO‘XTANAZAROV XURSHID SHAVKATBEKOVICH</h1>
                <p>Maktab direktor</p>
              </motion.li>
              <motion.li
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.3, ease: easeOut }}
              >
                <img src={teacher1} alt="" />
                <h1>TO‘XTANAZAROV XURSHID SHAVKATBEKOVICH</h1>
                <p>Maktab direktor</p>
              </motion.li>
              <motion.li
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.3, ease: easeOut }}
              >
                <img src={teacher1} alt="" />
                <h1>TO‘XTANAZAROV XURSHID SHAVKATBEKOVICH</h1>
                <p>Maktab direktori</p>
              </motion.li>
              <motion.li
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.3, ease: easeOut }}
              >
                <img src={teacher1} alt="" />
                <h1>TO‘XTANAZAROV XURSHID SHAVKATBEKOVICH</h1>
                <p>Maktab direktor</p>
              </motion.li>
            </>
          ) : active == "beginner" ? (
            <>
              <motion.li
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.2, ease: easeOut }}
              >
                <img src={teacher1} alt="" />
                <h1>TO‘XTANAZAROV XURSHID SHAVKATBEKOVICH</h1>
                <p>Maktab direktor</p>
              </motion.li>
              <motion.li
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.7, ease: easeOut }}
              >
                <img src={teacher1} alt="" />
                <h1>TO‘XTANAZAROV XURSHID SHAVKATBEKOVICH</h1>
                <p>Maktab direktor</p>
              </motion.li>
              <motion.li
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 1.2, ease: easeOut }}
              >
                <img src={teacher1} alt="" />
                <h1>TO‘XTANAZAROV XURSHID SHAVKATBEKOVICH</h1>
                <p>Maktab direktori</p>
              </motion.li>
              <motion.li
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 1.7, ease: easeOut }}
              >
                <img src={teacher1} alt="" />
                <h1>TO‘XTANAZAROV XURSHID SHAVKATBEKOVICH</h1>
                <p>Maktab direktor</p>
              </motion.li>
            </>
          ) : (
            <>
              <motion.li
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.2, ease: easeOut }}
              >
                <img src={teacher1} alt="" />
                <h1>TO‘XTANAZAROV XURSHID SHAVKATBEKOVICH</h1>
                <p>Maktab direktor</p>
              </motion.li>
              <motion.li
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.7, ease: easeOut }}
              >
                <img src={teacher1} alt="" />
                <h1>TO‘XTANAZAROV XURSHID SHAVKATBEKOVICH</h1>
                <p>Maktab direktor</p>
              </motion.li>
              <motion.li
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 1.2, ease: easeOut }}
              >
                <img src={teacher1} alt="" />
                <h1>TO‘XTANAZAROV XURSHID SHAVKATBEKOVICH</h1>
                <p>Maktab direktori</p>
              </motion.li>
              <motion.li
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 1.7, ease: easeOut }}
              >
                <img src={teacher1} alt="" />
                <h1>TO‘XTANAZAROV XURSHID SHAVKATBEKOVICH</h1>
                <p>Maktab direktor</p>
              </motion.li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Team;
