import "./Main.scss";
import { easeOut, motion } from "framer-motion";
import ourTeamBG from "../../img/ourTeamBG.webp";

function Main() {
  return (
    <div className="main">
      <div className="container">
        <span>
          <motion.h1
            whileInView={{ y: [100, 1] }}
            transition={{ duration: 0.3, ease: easeOut }}
          >
            Bizning jamoamiz
          </motion.h1>
          <motion.p
            whileInView={{ y: [100, 1] }}
            transition={{ duration: 0.5, ease: easeOut }}
          >
            Maktabimiz o‘qituvchilari o‘z vazifalaridan ilhomlangan tajribali
            mutaxassislardir.
          </motion.p>
        </span>
        <motion.img
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.3, ease: easeOut }}
          src={ourTeamBG}
          alt=""
        />
      </div>
    </div>
  );
}

export default Main;
