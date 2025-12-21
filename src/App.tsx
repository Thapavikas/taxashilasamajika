import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AppRoutes from "./routes/AppRoutes";

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loader from "./components/layout/Loader";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
};


const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Navbar />

      <main className="pt-[78px]">
        <AppRoutes />
      </main>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
