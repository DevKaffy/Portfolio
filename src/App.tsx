import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";
import Skills from "./Pages/Skills/Skills";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/projects",
      element: <Projects />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/skills",
      element: <Skills />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
