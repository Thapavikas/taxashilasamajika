import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Members from "../pages/memeber";
import Volunter from "../pages/volunter";
import Activiteis from "../pages/Activiteis";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/team" element={<Members />} />
      <Route path="/volunter" element={<Volunter />} />
      <Route path="/activities" element={<Activiteis />} />
    </Routes>
  );
};

export default AppRoutes;
