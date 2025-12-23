const Footer = () => {
    return (
      <footer className="bg-black text-gray-300">
        {/* Top Footer */}
        <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-4">
          
          {/* About */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-white mb-4">
              TAXASHILA
            </h3>
            <p className="text-sm leading-relaxed">
              TAXASHILA Social & Women Development Organization (TSHMAS) works
              towards uplifting rural and vulnerable communities through
              education, environment, and women empowerment initiatives.
            </p>
          </div>
  
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary">Home</a></li>
              <li><a href="#" className="hover:text-primary">About Us</a></li>
              <li><a href="#" className="hover:text-primary">Focus Areas</a></li>
              <li><a href="#" className="hover:text-primary">Members</a></li>
              <li><a href="#" className="hover:text-primary">Contact</a></li>
            </ul>
          </div>
  
          {/* Focus Areas */}
          <div>
            <h4 className="font-semibold text-white mb-4">
              Our Focus
            </h4>
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
            <h4 className="font-semibold text-white mb-4">
              Contact Us
            </h4>
            <p className="text-sm mb-2">
              First room, Ratod Building, Near SHP (DPEP) School, Ilkal – 587125,
              Karnataka
            </p>
            <p className="text-sm">
              Email:{" "}
              <a
                href="mailto:taxashila.sansthe@gmail.com"
                className="hover:text-primary"
              >
                taxashila.sansthe@gmail.com
              </a>
            </p>
            <p className="text-sm mt-1">
              Phone: 9448224434 / 7760166943
            </p>
          </div>
        </div>
  
        {/* Bottom Footer */}
        <div className="border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm">
            <p>
              © {new Date().getFullYear()}  Taxashila Samajika Hagu Mahila Abhivraddhi Sansthe. All rights reserved.
            </p>
  
            <p className="mt-3 md:mt-0">
              Designed with ❤️ for social impact
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  