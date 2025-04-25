import "./Support.scss";

function Support() {
  return (
    <div className="support">
      <div className="container">
        <div className="left">
          <ul>
            <li>
              <h1>200+</h1>
              <p>maktabdagi o'quvchilar</p>
            </li>
            <li>
              <h1>3</h1>
              <p>mahal ovqat</p>
            </li>
            <li>
              <h3>
                Woonder Kids shunchaki o'qish joyi emas, balki har bir bolaga
                shaxsiy yordam va e'tibor qaratiladigan joy.
              </h3>
            </li>
          </ul>
        </div>
        <div className="right">
          <h1>Professional o'qituvchilar</h1>
          <p>
            30+ o'qituvchi – bu bizning o'quvchilarimiz muvaffaqiyatining
            kaliti.
          </p>
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
        </div>
      </div>
    </div>
  );
}

export default Support;
