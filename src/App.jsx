import "./App.scss";
import Home from "./pages/Home.jsx";

// Layouts
import RootLayout from "./layout/RootLayout.jsx";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout/>}>
        <Route path="/" index element={<Home />} />

        {/* <Route path="*" element={<PageError />} /> */}
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
