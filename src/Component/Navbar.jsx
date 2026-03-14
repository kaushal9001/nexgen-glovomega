import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaClosedCaptioning, FaCut } from "react-icons/fa";
import logo from "../assets/photos/logo.jpg";
import { HiOutlineX } from "react-icons/hi";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const isHome = location.pathname === "/";

  const [open, setOpen] = useState(false);
  const menuItems = [
    "Startup",
    "Registrations",
    "Trademark",
    "GST",
    "Income Tax",
    "MCA",
    "Compliance",
    "Global",
    "We're Hiring",
  ];

  return (
    <nav
      className={`w-full ${isHome ? "bg-[#f0f8fb] " : "bg-transparent"} pt-5`}
    >
      <div className="md:px-10 px-5  py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to={"/"} className="text-xl font-bold bg-green-600">
          <img src={logo} alt="logo" className="h-15 w-35 cursor-pointer" />
        </Link>

        {/* Menu */}
        <ul className="hidden lg:flex items-center gap-7 text-gray-700 text-sm font-medium">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="hover:text-green-600 cursor-pointer transition"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-5">
          {/* <FiSearch className="text-xl text-gray-600 hover:text-green-600 cursor-pointer" /> */}

          <button className=" cursor-pointer hidden lg:flex relative overflow-hidden border border-green-600 text-green-600 px-6 py-2 rounded-2xl text-sm font-medium group">
            <span className="absolute inset-0 bg-green-600 w-0 group-hover:w-full transition-all duration-500"></span>

            <span className="relative z-10 group-hover:text-white transition">
              Login
            </span>
          </button>
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden relative  overflow-hidden border border-green-600 text-green-600 px-4 py-2 rounded-2xl text-sm font-medium group flex items-center gap-2"
          >
            <FaBars className="text-xl" />

            <span className="absolute inset-0 bg-green-600 w-0 group-hover:w-full transition-all duration-500"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={` fixed top-0 z-50 right-0 h-full w-90 bg-white shadow-lg transform transition-transform duration-500 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6 space-y-6 ">
            <button
              onClick={() => setOpen(false)}
              className="text-gray-500 h-15 w-15 flex justify-start  items-center "
            >
              <HiOutlineX className="text-2xl cursor-pointer text-3xl font-bold" />
            </button>

            {/* Menu Items */}
            <ul className="flex flex-col gap-2">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className="text-gray-700 hover:text-green-600 cursor-pointer border-b-1 border-gray-200 px-2 py-1"
                >
                  {item}
                </li>
              ))}
            </ul>

            {/* Login Button */}
            <button className="cursor-pointer relative overflow-hidden border border-green-600 text-green-600 px-6 py-2 rounded-2xl text-sm font-medium group w-full">
              <span className="absolute inset-0 bg-green-600 w-0 group-hover:w-full transition-all duration-500"></span>

              <span className="relative z-10 group-hover:text-white transition">
                Login
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
