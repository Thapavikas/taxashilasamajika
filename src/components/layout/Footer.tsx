import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300">
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-4">
        {/* About */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">TAXASHILA</h3>
          <p className="text-sm leading-relaxed">
            TAXASHILA Social & Women Development Organization (TSHMAS) works
            towards uplifting rural and vulnerable communities through
            education, environment, and women empowerment initiatives.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <NavLink to="/" className="hover:text-[#F2A31B]">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-[#F2A31B]">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/activities" className="hover:text-[#F2A31B]">
                Activites
              </NavLink>
            </li>
            <li>
              <NavLink to="/volunter" className="hover:text-[#F2A31B]">
                Volunter
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact-us" className="hover:text-[#F2A31B]">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/donate" className="hover:text-[#F2A31B]">
                Donate us
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Focus Areas */}
        <div>
          <h4 className="font-semibold text-white mb-4">Our Focus</h4>
          <ul className="space-y-2 text-sm">
            <li>Rural Development</li>
            <li>Education</li>
            <li>Special Education</li>
            <li>Environment</li>
            <li>Women Empowerment</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold text-white mb-4">Contact Us</h4>
          <p className="text-sm">
            Email:{" "}
            <a
              href="mailto:taxashila.sansthe@gmail.com"
              className="hover:text-[#F2A31B]"
            >
              taxashila.sansthe@gmail.com
            </a>
          </p>
          <p className="text-sm mt-1">Phone: 9448224434 / 7760166943</p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>
            © {new Date().getFullYear()} Taxashila Samajika Hagu Mahila
            Abhivraddhi Sansthe. All rights reserved.
          </p>

          <p className="mt-3 md:mt-0">Designed with ❤️ for social impact</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
