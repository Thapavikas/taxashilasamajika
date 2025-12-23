import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const linkClass =
    "block py-2 text-sm font-medium transition hover:text-[#F2A31B]";
  const activeClass = "text-[#F2A31B] font-semibold";

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/volunter", label: "Volunteer" },
    { to: "/activities", label: "Activities" },
    { to: "/gallery", label: "Gallery" },
    { to: "/contact-us", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <NavLink
          to="/"
          className="flex items-center gap-2 text-xl font-bold text-[#111827]"
        >
          <img src={logo} className="w-14" alt="Taxashila" />
          <span>
            TAXASHILA SAMAJIKA
            <br />
            <span className=" text-sm"> HAGU MAHILA ABHIVRADDHI SANSTHE </span>
          </span>
        </NavLink>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-8 text-[#6B7280]">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? activeClass : linkClass)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* DONATE BUTTON (Desktop) */}
        <NavLink to="/donate">
          <button
            className="w-full mt-4 px-6 py-2 rounded-full text-sm font-semibold text-white"
            style={{ backgroundColor: "#F2A31B" }}
          >
            Donate
          </button>
        </NavLink>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <nav className="px-6 py-4 space-y-2 text-[#6B7280]">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive ? activeClass : linkClass
                }
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink to="/donate">
              <button
                className="w-full mt-4 px-6 py-2 rounded-full text-sm font-semibold text-white"
                style={{ backgroundColor: "#F2A31B" }}
              >
                Donate
              </button>
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
