import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
const Navbar = () => {
  const linkClass = "text-sm font-medium transition hover:text-[#F2A31B]";

  const activeClass = "text-[#F2A31B] font-semibold";

  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <NavLink
          to="/"
          className="font-heading flex items-center gap-2 text-xl font-bold text-[#111827]"
        >
          <img src={logo} className=" w-16 " alt="" />
          <span> TAXASHILA</span>
        </NavLink>

        {/* NAV LINKS */}
        <nav className="hidden md:flex gap-8 text-[#6B7280]">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeClass : linkClass)}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? activeClass : linkClass)}
          >
            About
          </NavLink>

          <NavLink
            to="/team"
            className={({ isActive }) => (isActive ? activeClass : linkClass)}
          >
            Team
          </NavLink>

          <NavLink
            to="/volunter"
            className={({ isActive }) => (isActive ? activeClass : linkClass)}
          >
            Volunteer
          </NavLink>
          <NavLink
            to="/activities"
            className={({ isActive }) => (isActive ? activeClass : linkClass)}
          >
            Activities
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) => (isActive ? activeClass : linkClass)}
          >
            Gallery
          </NavLink>

          <NavLink
            to="/contact-us"
            className={({ isActive }) => (isActive ? activeClass : linkClass)}
          >
            Contact
          </NavLink>
        </nav>

        {/* DONATE BUTTON */}
        <button
          className="px-6 py-2 rounded-full text-sm font-semibold text-white transition"
          style={{ backgroundColor: "#F2A31B" }}
        >
          Donate
        </button>
      </div>
    </header>
  );
};

export default Navbar;
