import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { HiOutlineX } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import logo from "../assets/photos/logoo.png";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [mobileActive, setMobileActive] = useState(null);
  const [mobileNested, setMobileNested] = useState(null);
  const [mobileSub, setMobileSub] = useState(null);
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeCategory, setActiveCategory] = useState(
    "Income Tax Return Filling",
  );

  const menuItems = [
    "Services",
    "Tools",
    "Investment",
    "UAE Services",
    "ERP Implementation & Customization",
    "Vistior Count",
  ];

  // 🔥 Services Data (Mega Menu)
  const submenuItems = {
    "Income Tax Return Filling": null,
    "GST Registration & Returns": null,
    "TDS Return & Payment": null,
    "MCA Compliance": [
      { title: "Company Registration" },
      { title: "ROC Filing" },
      { title: "Director KYC" },
    ],
    "Regulatory Complaince": [
      { title: "Profession Tax" },
      { title: "Provident Fund" },
      { title: "ESIC" },
      { title: "Labour Welfare Fund" },
    ],
    "DSC Services": [
      {
        title: "Class -3",
        subItems: ["Individual", "Organization", "DGFT", "Foreign Individual"],
      },
    ],
    "Accounting Services": null,
    Audit: [
      { title: "Internal Audit" },
      { title: "Statutory Audit" },
      { title: "Stock Audit" },
      { title: "GST Audit" },
    ],
    "15 CA/CB Services": null,
    "Consulting Services": [{ title: "Business Setup" }],
    "Licensesing Services": [
      { title: "Gumasta" },
      { title: "FSSAI" },
      { title: "MSME/Udyam" },
      { title: "IEC" },
      { title: "PAN" },
      { title: "TAN" },
    ],
  };

  // 🔥 Other Dropdown Data
  const dropdownData = {
    Tools: [{ title: "GST Calculator" }, { title: "Income Tax Calculator" }],
    Investment: [{ title: "Mutual Funds" }, { title: "Stock Advisory" }],
    "UAE Services": [
      { title: "Company Setup UAE" },
      { title: "Visa Assistance" },
    ],
    "ERP Implementation & Customization": [
      { title: "ERP Setup" },
      { title: "Customization" },
    ],
  };

  return (
    <nav className={`w-full ${isHome ? "bg-[#f0f8fb]" : ""} pt-5`}>
      <div className="md:px-10 px-5 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="logo" className="h-15 w-35" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-7 text-gray-700 text-sm font-medium">
          <Link
            className="hover:text-green-600 cursor-pointer transition"
            to={"/about-us"}
          >
            About us
          </Link>
          {menuItems.map((item, index) => (
            <li
              key={index}
              onMouseEnter={() => setActiveMenu(item)}
              onMouseLeave={() => setActiveMenu(null)}
              className="relative hover:text-green-600 cursor-pointer transition"
            >
              {item}

              {/* 🔥 Dropdown */}
              {(item === "Services" || dropdownData[item]) && (
                <div
                  className={`absolute top-6 left-0  bg-white shadow-2xl rounded-xl p-6 z-50 transition-all duration-300 ${
                    activeMenu === item
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-5 pointer-events-none"
                  }`}
                >
                  {/* 🟢 SERVICES MEGA MENU */}
                  {item === "Services" ? (
                    <div className="flex gap-6 ">
                      {/* Left */}
                      <div className="w-[250px] space-y-3 border-r pr-4">
                        {Object.keys(submenuItems).map((cat, i) => (
                          <p
                            key={i}
                            onMouseEnter={() => setActiveCategory(cat)}
                            className={`cursor-pointer text-sm flex  justify-between  ${
                              activeCategory === cat
                                ? "text-green-600 font-semibold"
                                : "text-gray-700 hover:text-green-600"
                            }`}
                          >
                            {cat}

                            {submenuItems[cat]?.length > 0 && (
                              <span>
                                <IoIosArrowForward />
                              </span>
                            )}
                          </p>
                        ))}
                      </div>

                      {/* Right */}
                      {submenuItems[activeCategory]?.length > 0 && (
                        <div className="w-[400px] grid grid-cols-2  gap-4">
                          {submenuItems[activeCategory].map((item, i) => (
                            <div key={i}>
                              {/* Main Card */}
                              <div
                                onClick={() =>
                                  item.subItems
                                    ? setOpenSub(openSub === i ? null : i)
                                    : null
                                }
                                className="bg-gray-100 p-4  rounded-xl shadow-sm hover:scale-105 transition cursor-pointer"
                              >
                                <p className="font-semibold flex justify-between">
                                  {item.title}

                                  {/* Arrow only if subItems */}
                                  {item.subItems && (
                                    <span>
                                      <IoIosArrowForward />
                                    </span>
                                  )}
                                </p>
                              </div>

                              {/* 🔥 Sub Items */}
                              {item.subItems && openSub === i && (
                                <div className="pl-4 mt-2 space-y-1 border-t rounded-md p-1 shadow">
                                  {item.subItems.map((sub, idx) => (
                                    <p
                                      key={idx}
                                      className="text-sm  text-gray-600 hover:text-green-600 cursor-pointer"
                                    >
                                      {sub}
                                    </p>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    /* 🟢 SIMPLE DROPDOWN */
                    <div className="w-[220px] space-y-2 border-l-2 pl-2">
                      {dropdownData[item].map((sub, i) => (
                        <p
                          key={i}
                          className="text-gray-700 text-sm hover:text-green-600 cursor-pointer"
                        >
                          {sub.title}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-5">
          <button className="hidden lg:flex relative overflow-hidden border border-green-600 text-green-600 px-6 py-2 rounded-2xl text-sm font-medium group">
            <span className="absolute inset-0 bg-green-600 w-0 group-hover:w-full transition-all duration-500"></span>
            <span className="relative z-10 group-hover:text-white transition">
              Login
            </span>
          </button>

          <button
            onClick={() => setOpen(true)}
            className="lg:hidden border border-green-600 text-green-600 px-4 py-2 rounded-2xl"
          >
            <FaBars />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-80 overflow-auto bg-white shadow-lg transform transition-transform duration-500 z-50 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6 space-y-6 ">
            {/* Close */}
            <button onClick={() => setOpen(false)}>
              <HiOutlineX className="text-3xl" />
            </button>

            {/* Menu */}
            <ul className="flex flex-col gap-2">
              <Link
                onClick={() => setOpen(false)}
                className="border-b py-2"
                to={"/about-us"}
              >
                About us
              </Link>
              {menuItems.map((item, index) => (
                <li key={index} className={`border-b py-2`}>
                  {/* Main Menu */}
                  <div
                    onClick={() =>
                      setMobileActive(mobileActive === item ? null : item)
                    }
                    className={`flex justify-between items-center cursor-pointer hover:text-green-600  `}
                  >
                    {item}
                    {(item === "Services" || dropdownData[item]) && (
                      <span>
                        <IoIosArrowForward />
                      </span>
                    )}
                  </div>

                  {/* 🔥 SERVICES MOBILE */}
                  {item === "Services" && mobileActive === item && (
                    <div className="pl-4 mt-2 space-y-2">
                      {Object.keys(submenuItems).map((cat, i) => (
                        <div key={i}>
                          <p
                            onClick={() =>
                              setMobileSub(mobileSub === cat ? null : cat)
                            }
                            className="flex justify-between cursor-pointer text-sm text-gray-600"
                          >
                            {cat}
                            {submenuItems[cat]?.length > 0 && (
                              <span>
                                {" "}
                                <IoIosArrowForward />
                              </span>
                            )}
                          </p>

                          {/* Sub items */}
                          {mobileSub === cat &&
                            submenuItems[cat]?.map((sub, j) => (
                              <div key={j}>
                                {/* Main Item */}
                                <p
                                  onClick={() =>
                                    sub.subItems
                                      ? setMobileNested(
                                          mobileNested === j ? null : j,
                                        )
                                      : null
                                  }
                                  className="pl-4  text-sm text-gray-500 py-1 flex justify-between cursor-pointer"
                                >
                                  • {sub.title}
                                  {sub.subItems && (
                                    <span>
                                      <IoIosArrowForward />
                                    </span>
                                  )}
                                </p>

                                {/* 🔥 Nested Sub Items (Class -3 ke andar) */}
                                {sub.subItems && mobileNested === j && (
                                  <div className="pl-6 space-y-1 ">
                                    {sub.subItems.map((inner, k) => (
                                      <p
                                        key={k}
                                        className="text-xs text-gray-500"
                                      >
                                        - {inner}
                                      </p>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* 🔥 OTHER DROPDOWN */}
                  {dropdownData[item] && mobileActive === item && (
                    <div className="pl-4 mt-2 space-y-1">
                      {dropdownData[item].map((sub, i) => (
                        <p key={i} className="text-sm text-gray-600">
                          • {sub.title}
                        </p>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
