import Main from "../components/home/Main.jsx";
import Support from "../components/home/Support.jsx";
import Content from "../components/home/Content.jsx";
import Methods from "../components/home/Methods.jsx";
import Events from "../components/home/Events.jsx";

function Home() {
  return (
    <div className="home">
      <Main />
      <Support />
      <Content/>
      <Methods/>
      <Events/>
    </div>
  );
}

export default Home;
