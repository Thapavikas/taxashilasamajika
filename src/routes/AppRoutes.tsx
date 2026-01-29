import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Volunter from "../pages/volunter";
import Activiteis from "../pages/Activiteis";
import Gallery from "../pages/Gallery";
import Donate from "../pages/Donate";
import ActivityDetails from "../pages/ActivityDetails";
import Documents from "../pages/Documents";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/volunter" element={<Volunter />} />
      <Route path="/activities" element={<Activiteis />} />
      <Route path="/activities/:id" element={<ActivityDetails />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/documents" element={<Documents />} />
    </Routes>
  );
};

export default AppRoutes;
