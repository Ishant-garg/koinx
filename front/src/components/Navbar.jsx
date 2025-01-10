import  { useState } from "react";
import logo from '../assets/logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white  ">
      <div className="container mx-auto px-[6%] py-4 flex justify-between items-center">
        
        <div className="text-2xl font-bold text-gray-800">
          <a href="/">
          <img src={logo} width={96} height={24}  alt="logo" />
          </a>
        </div>
     
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6  items-center">
          <a
            href="/"
            className="text-customText text-base font-semibold hover:text-gray-900 transition duration-300"
          >
            Crypto Taxes
          </a>
          <a
            href="#about"
            className="text-customText text-base font-semibold hover:text-gray-900 transition duration-300"
          >
            Free Tools
          </a>
          <a
            href="#contact"
            className="text-customText text-base font-semibold hover:text-gray-900 transition duration-300"
          >
            Resource Center
          </a>

          <a
            href="#contact"
            className="text-white bg-[linear-gradient(81.62deg,_#2870EA_8.72%,_#1B4AEF_85.01%)]   py-2 px-4 rounded text-base font-semibold "
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isOpen
                  ? "M6 18L18 6M6 6l12 12" // Close icon
                  : "M4 6h16M4 12h16M4 18h16" // Hamburger icon
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 py-4 bg-white border-t">
            <a
            href="/"
            className="text-customText text-base font-semibold hover:text-gray-900 transition duration-300"
          >
            Crypto Taxes
          </a>
          <a
            href="#about"
            className="text-customText text-base font-semibold hover:text-gray-900 transition duration-300"
          >
            Free Tools
          </a>
          <a
            href="#contact"
            className="text-customText text-base font-semibold hover:text-gray-900 transition duration-300"
          >
            Resource Center
          </a>
          <a
            href="#contact"
            className="text-white bg-[linear-gradient(81.62deg,_#2870EA_8.72%,_#1B4AEF_85.01%)]   py-2 px-4 rounded text-base font-semibold "
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
