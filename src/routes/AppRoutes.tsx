import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Volunter from "../pages/volunter";
import Activiteis from "../pages/Activiteis";
import Gallery from "../pages/Gallery";
import Donate from "../pages/Donate";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/volunter" element={<Volunter />} />
      <Route path="/activities" element={<Activiteis />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  );
};

export default AppRoutes;
