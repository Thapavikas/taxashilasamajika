import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <main className="pt-[88px]">
        <AppRoutes />
      </main>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
