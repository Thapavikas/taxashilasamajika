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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        
        {/* LOGO */}
        <NavLink to="/" className="flex items-center gap-3">
          <img src={logo} className="w-12 sm:w-14" alt="Taxashila" />

          {/* Responsive Text */}
          <div className="leading-tight max-w-[200px] sm:max-w-none">
            <p className="text-sm sm:text-base font-bold text-[#111827]">
              TAXASHILA SAMAJIKA
            </p>
            <p className="text-[10px] sm:text-xs text-gray-600">
              HAGU MAHILA ABHIVRADDHI SANSTHE
            </p>
          </div>
        </NavLink>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-8 text-[#6B7280]">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                isActive ? activeClass : linkClass
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* DONATE BUTTON (Desktop only) */}
        <NavLink to="/donate" className="hidden md:block">
          <button
            className="px-6 py-2 rounded-full text-sm font-semibold text-white"
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
          <nav className="px-6 py-4 space-y-3 text-[#6B7280]">
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

            {/* Donate Button (Mobile Menu) */}
            <NavLink to="/donate" onClick={() => setOpen(false)}>
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
