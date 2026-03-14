import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "../assets/photos/logoo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = [
    {
      title: "Nexgentaxsolution",
      links: [
        { name: "About Nexgentaxsolution", path: "/about-us" },
        { name: "Services", path: "/services" },
        { name: "Contact Us", path: "contact-us" },
      ],
    },
    {
      title: "Usage",
      links: [
        { name: "Terms & Conditions", path: "/terms-conditions" },
        { name: "Privacy Policy", path: "/privacy-policy" },
        { name: "Refund Policy", path: "/refund" },
      ],
    },
    {
      title: "Platforms",
      links: [
        { name: "Business Search", path: "/business-search" },
        { name: "Trademark Search", path: "/trademark-search" },
        { name: "Filings.AE for UAE", path: "/uae" },
      ],
    },

    {
      title: "Legal",
      links: [
        { name: "Confidentiality Policy", path: "/confidentiality" },
        { name: "Disclaimer Policy", path: "/disclaimer" },
        { name: "Nexgentaxsolution Review", path: "/review" },
      ],
    },
  ];

  return (
    <footer className="bg-[#0F2A44] text-gray-300 mt-20 pt-15 pb-8">
      <div className="grid md:grid-cols-5 gap-10 px-10 ">
        {/* Logo + Text */}
        <div>
          <Link to={"/"} className="text-xl font-bold ">
            <img src={logo} alt="logo" className="h-15 w-35 cursor-pointer" />
          </Link>

          <p className="text-xl text-gray-400">
            India's Largest Digital Corporate Services Provider & Compliance
            Platform.
          </p>
        </div>

        {/* Links */}
        {footerLinks.map((section, index) => (
          <div key={index}>
            <h3 className="text-white text-2xl font-semibold mb-4 ">
              {section.title}
            </h3>

            <ul className="space-y-2 text-sm ">
              {section.links.map((link, i) => (
                <li
                  key={i}
                  className="transition hover:-translate-y-0.5 duration-500  w-35"
                >
                  <Link
                    to={link.path}
                    className="hover:text-green-400 transition  "
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div className=" mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-400 px-10 ">
          © 2026 Nexgentaxsolution. All rights reserved.
        </p>

        <div className="flex gap-4 px-10 ">
          <div className="cursor-pointer w-9 h-9 border border-gray-600 flex items-center justify-center rounded-md hover:bg-green-600 transition duration-600">
            <FaFacebookF />
          </div>

          <div className=" cursor-pointer w-9 h-9 border border-gray-600 flex items-center justify-center rounded-md hover:bg-green-600 transition duration-600">
            <FaTwitter />
          </div>

          <div className="cursor-pointer w-9 h-9 border border-gray-600 flex items-center justify-center rounded-md hover:bg-green-600 transition duration-600">
            <FaYoutube />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
