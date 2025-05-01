import "./Events.scss";
import eventImg from "../../img/events.webp";
import { useEffect, useRef, useState } from "react";

function Events() {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);
  const faqs = [
    {
      question: "IT, robototexnika",
      answer:
        "Kurs dasturlash asoslari, algoritmlarni o‘rganish, veb-saytlar va mobil ilovalar yaratish, kiberxavfsizlikni joriy qilishni o‘z ichiga oladi. Bu talabalar uchun tez rivojlanayotgan texnologiya sanoatida talab qilinadigan ko'nikmalarni o'rganish uchun ajoyib imkoniyatdir.",
    },
    {
      question: "karate",
      answer:
        "Klassik karate mashg'ulotlari o'quvchilarning jismoniy tayyorgarligini oshirishga, chidamlilik, kuch va muvofiqlashtirishni rivojlantirishga yordam beradi. Karate, shuningdek, intizom, hurmat va o'ziga ishonchni uyg'otadi.",
    },
    {
      question: "Shaxmat",
      answer:
        "Shaxmat to‘garagi o‘quvchilarda strategik fikrlash, mantiq va sabr-toqatni rivojlantirishga yordam beradi. Shaxmat o‘ynash diqqatni yaxshilaydi va ongli qarorlar qabul qilishga o‘rgatadi, bu nafaqat doskada, balki hayotda ham foydalidir.",
    },
    {
      question: "stol tennisi",
      answer:
        "Stol tennisi mashg'ulotlari chaqqonlik, reaktsiya tezligi va muvofiqlashtirishni rivojlantirishga yordam beradi. Sport o'ynash, shuningdek, chidamlilik va konsentratsiyani o'rgatadi, jismoniy va aqliy rivojlanishga yordam beradi.",
    },
    {
      question: "chizish",
      answer:
        "Ushbu kurs tasviriy san'at, rassomlik, haykaltaroshlik va dekorativ hunarmandchilikni o'z ichiga oladi. O`quvchilar ijodiy qobiliyatlarini rivojlantiradilar va turli xil badiiy texnikalar orqali o'z g'oyalari va his-tuyg'ularini ifodalashni o'rganadilar.",
    },
  ];
  const handleClick = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  useEffect(() => {
    contentRefs.current.forEach((ref, i) => {
      if (!ref) return;

      if (i === openIndex) {
        ref.style.height = "0px"; // oldin nol qilamiz
        const scrollHeight = ref.scrollHeight;

        requestAnimationFrame(() => {
          ref.style.height = scrollHeight + "px";
        });
      } else {
        ref.style.height = "0px";
      }
    });
  }, [openIndex]);
  return (
    <div className="events">
      <div className="container">
        <div className="left">
          <h1>Sinfdan tashqari tadbirlar</h1>
          <ul className="max-w-xl mx-auto">
            {faqs.map((faq, index) => (
              <li key={index} onClick={() => handleClick(index)}>
                <div>
                  <div
                    className={
                      openIndex === index ? "active question" : "question"
                    }
                  >
                    {faq.question}
                  </div>
                  <div className="symbol">
                    <div className="line horizontal" />
                    <div
                      className={`line vertical ${
                        openIndex === index ? "fade-out" : "fade-in"
                      }`}
                    />
                  </div>
                </div>
                <div
                  ref={(el) => (contentRefs.current[index] = el)}
                  className="answer-wrapper"
                >
                  <div className="answer">{faq.answer}</div>
                </div>
                {/* <hr /> */}
              </li>
            ))}
          </ul>
        </div>
        <div className="right">
          <img src={eventImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Events;
