import Main from "../components/home/Main.jsx";
import Support from "../components/home/Support.jsx";
import Content from "../components/home/Content.jsx";
import Methods from "../components/home/Methods.jsx";

function Home() {
  return (
    <div className="home">
      <Main />
      <Support />
      <Content/>
      <Methods/>
    </div>
  );
}

export default Home;
