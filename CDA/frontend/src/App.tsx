import React from "react";
import { useRoutes } from "react-router";
import routes from "./routes";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  const element = useRoutes(routes);
  return (
    <>
      <Navbar />
      {element}
      <Footer />
    </>
  );
}

export default App;
