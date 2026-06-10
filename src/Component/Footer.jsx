import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaInstagramSquare,
  FaLinkedin,
  FaLinkedinIn,
  FaLocationArrow,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
// import logo from "../assets/photos/logoo.png";
import logo from "../assets/photos/logo.jpg";
import { Link } from "react-router-dom";
import {
  FaLocationPin,
  FaLocationPinLock,
  FaSquareInstagram,
} from "react-icons/fa6";

const Footer = () => {
  const footerLinks = [
    {
      title: "Nexgentaxsolution",
      links: [
        { name: "About Us", path: "/about-us" },
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
        { name: "Business Search", path: "/Business Setup" },
        {
          name: "Trademark Search",
          path: "https://tmrsearch.ipindia.gov.in/tmrpublicsearch/",
        },
        { name: "Filings.AE for UAE", path: "/Company Setup UAE" },
      ],
    },

    {
      title: "Legal",
      links: [
        { name: "Confidentiality Policy", path: "/confidentiality" },
        { name: "Disclaimer Policy", path: "/disclaimer" },
        { name: "Review", path: "/review" },
      ],
    },
    {
      title: "Important Link",
      links: [
        {
          name: "Income Tax",
          path: "https://www.incometax.gov.in",
        },
        {
          name: "MCA Compliance",
          path: "https://www.mca.gov.in",
        },
        {
          name: "TDS",
          path: "https://www.traces.tdscpc.gov.in",
        },
        {
          name: "Provident Fund (EPF)",
          path: "https://www.epfindia.gov.in",
        },
        {
          name: "EPF UAN Portal",
          path: "https://unifiedportal-mem.epfindia.gov.in",
        },
        {
          name: "RBI",
          path: "https://www.rbi.org.in",
        },
        {
          name: "SEBI",
          path: "https://www.sebi.gov.in",
        },
      ],
    },
  ];

  return (
    <footer className="bg-[#0F2A44] text-gray-300 mt-20 pt-15 pb-8">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 px-10 ">
        {/* Logo + Text */}
        <div>
          <Link to={"/"} className="text-xl  font-bold ">
            <img
              src={logo}
              alt="logo"
              className="h-15 w-35   rounded-md cursor-pointer"
            />
          </Link>

          <p className="text-sm pt-2 text-gray-400">
            India's Largest Digital Corporate Services Provider & Compliance
            Platform.
          </p>

          <div className="">
            <h3 className="text-white text-md font-semibold mb-2  b">
              Contact Information
            </h3>

            <ul className="space-y-2 text-sm ">
              <li className="  ">
                <div className=" flex gap-2 items-start ">
                  <FaMapMarkerAlt size={20} />
                  <p className="text-[11px]">
                    501/B, B3 Saileela CHS. Building, MP Mill Compound, Tardeo,
                    Mumbai -400034, INDIA
                  </p>
                </div>
              </li>
              <li className="  ">
                <div className=" flex gap-2 items-start ">
                  <FaPhoneAlt size={12} />
                  <p className="text-[11px]">+91 7021182227</p>
                </div>
              </li>
              <li className="  ">
                <div className=" flex gap-2 items-start ">
                  <FaEnvelope size={12} />
                  <p className="text-[11px]">info@nexgentaxsolution.com</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Links */}
        {footerLinks.map((section, index) => (
          <div key={index}>
            <h3 className="text-white text-2xl font-semibold mb-4  b">
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
          <a
            href="https://www.facebook.com/Nexgentaxsolutions"
            className="cursor-pointer w-9 h-9 border border-gray-600 flex items-center justify-center rounded-md hover:bg-green-600 transition duration-600"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.instagram.com/nexgentaxsolutions/"
            className=" cursor-pointer w-9 h-9 border border-gray-600 flex items-center justify-center rounded-md hover:bg-green-600 transition duration-600"
          >
            <FaInstagram />
          </a>

          <div className="cursor-pointer w-9 h-9 border border-gray-600 flex items-center justify-center rounded-md hover:bg-green-600 transition duration-600">
            <FaLinkedinIn />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
