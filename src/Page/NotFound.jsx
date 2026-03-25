import { Link } from "react-router-dom";
import NotFoundImg from "../assets/photos/NotFound.png";

const NotFound = () => {
  return (
    <section className=" flex items-center justify-center lg:h-[80vh]">
      <div className="text-center max-w-2xl">
        <div className="grid grid-cols-3 items-center h-40 sm:h-50 md:h-60 ">
          {/* Left 4 */}
          <h1 className="text-[80px] sm:text-[120px] font-bold text-[#0F2A44] text-right  ">
            4
          </h1>

          {/* Center Image */}
          <div className="flex  justify-center ">
            <img
              src={NotFoundImg}
              alt="404"
              className="w-50 h-50 object-cover sm:scale-150  float drop-shadow-[0_0_20px_rgba(0,255,200,0.2)]"
            />
          </div>

          {/* Right 4 */}
          <h1 className="text-[80px] sm:text-[120px]  font-bold text-[#0F2A44] text-left">
            4
          </h1>
        </div>
        {/* Heading */}
        <h1 className="text-2xl  sm:text-5xl font-bold text-[#0F2A44] mb-4">
          Oops! Page Not Found
        </h1>

        {/* Description */}
        <p className="text-gray-600 mb-8">
          Looks like the page you’re trying to visit doesn’t exist or has been
          moved. Let’s get you back on track
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">
          {/* Go Home */}
          <Link to="/">
            <button className="relative shadow-md  cursor-pointer overflow-hidden border border-green-600 text-green-600 px-6 py-2 rounded-2xl text-sm font-medium group">
              <span className="absolute inset-0 bg-green-600 w-0 group-hover:w-full transition-all duration-500"></span>

              <span className="relative z-10 group-hover:text-white transition">
                Go to Home
              </span>
            </button>
          </Link>

          {/* Contact */}
          <Link to="/contact-us">
            <button className="border cursor-pointer border-gray-300 text-gray-700 px-6 py-2 rounded-2xl text-sm bg-white/50 hover:bg-green-600 shadow-md duration-500 hover:text-white transition">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
