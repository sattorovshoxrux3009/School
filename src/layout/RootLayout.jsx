import Navbar from "../sections/Navbar.jsx";
import Footer from "../sections/Footer.jsx";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default RootLayout;
