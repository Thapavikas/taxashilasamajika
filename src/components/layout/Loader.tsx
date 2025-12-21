import logo from "../../assets/logo.png";

const Loader = () => {
    return (
      <div className="fixed inset-0 z-[9999] bg-[#f9f7f3] flex flex-col items-center justify-center">
        
        {/* Logo */}
        <img
          src={logo}
          alt="Company Logo"
          className="w-28 mb-6 animate-pulse"
        />
  
        {/* Spinner */}
        <div className="w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
  
        {/* Text */}
        <p className="mt-4 text-gray-600 font-medium">
          Loading, please wait...
        </p>
      </div>
    );
  };
  
  export default Loader;
  