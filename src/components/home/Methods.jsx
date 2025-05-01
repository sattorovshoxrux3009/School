import "./Methods.scss";
import method1 from "../../img/methods1.webp";
import { useRef } from "react";
import { motion, AnimatePresence, easeOut } from "framer-motion";

function Methods() {
  const listRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - listRef.current.offsetLeft;
    scrollLeft.current = listRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - listRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    listRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div className="methods">
      <div className="container">
        <div>
          <motion.h1
            whileInView={{ y: [100, 1] }}
            transition={{ duration: 0.3, ease: easeOut }}
          >
            bizning <span>usulimiz</span>
          </motion.h1>
          <motion.p
            whileInView={{ y: [100, 1] }}
            transition={{ duration: 0.5, ease: easeOut }}
          >
            Maktabimizdagi ta’lim bosqichma-bosqich tizim asosida har tomonlama
            rivojlantirish va xalqaro standartlarga asoslangan.
          </motion.p>
        </div>
        <ul
          ref={listRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onContextMenu={(e) => {
            e.preventDefault();
            console.log("Right-click context menu prevented");
          }}
        >
          <motion.li
            whileInView={{ opacity: [0, 1] }}
            transition={{ delay: 0, duration: 0.5, ease: "easeOut" }}
          >
            <img src={method1} alt="" />
            <span>
              <h1>1-4 sinflar</h1>
              <p>
                O‘quvchilar ustozlari bilan birgalikda topshiriqlarni
                bajaradilar, bu esa ularga mavzularni yaxshiroq tushunish
                imkonini beradi. Topshiriqlar sodda, aniq va bola tilida
                tushuntiriladi
              </p>
            </span>
          </motion.li>
          <motion.li
            whileInView={{ opacity: [0, 1] }}
            transition={{ delay: 0.3, duration: 0.3, ease: "easeOut" }}
          >
            <img src={method1} alt="" />
            <span>
              <h1>5-9 sinflar</h1>
              <p>
                Asosiy fanlarni, jumladan chet tillari, tabiiy fanlar va
                texnologiyalarni chuqur o‘rganishadi. Tanqidiy fikrlash va
                tadqiqotchilik ko‘nikmalarini yanada rivojlantirishadi.
              </p>
            </span>
          </motion.li>
          <motion.li
            whileInView={{ opacity: [0, 1] }}
            transition={{ delay: 0.6, duration: 0.3, ease: "easeOut" }}
          >
            <img src={method1} alt="" />
            <span>
              <h1>10–11-sinflar</h1>
              <p>
                Universitetlarga tayyorgarlik: professional yo‘nalishlarini
                tanlash, xalqaro imtihonlarga (IELTS, SAT) intensiv tayyorgarlik
                ko`rish va loyihalar yaratish bilan shug`ullanishadi
              </p>
            </span>
          </motion.li>
        </ul>
      </div>
    </div>
  );
}

export default Methods;
