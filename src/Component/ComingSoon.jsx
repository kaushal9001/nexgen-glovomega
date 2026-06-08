import React from "react";
import { FaRocket, FaTools, FaClock } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ComingSoon = () => {
  return (
    <section className="md:px-10 px-5 mt-10  flex items-center justify-center">
      <div className="">
        <div className="rounded-[40px] bg-gray-400/10 backdrop-blur-sm border border-gray-200 p-8 md:p-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200 text-green-600 text-sm font-medium">
                <FaRocket />
                New Service Launching Soon
              </div>

              <h1 className="mt-6 text-5xl md:text-6xl font-semibold text-[#0F2A44] leading-tight">
                Something Amazing
                <span className="block text-green-600">Is Coming Soon</span>
              </h1>

              <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                We're currently working on this page to provide a better
                experience and valuable business solutions. Stay tuned, we're
                almost ready.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button className="relative overflow-hidden border border-green-600 text-green-600 px-6 py-3 rounded-2xl text-sm font-medium group">
                  <span className="absolute inset-0 bg-green-600 w-0 group-hover:w-full transition-all duration-500"></span>

                  <Link
                    to={"/"}
                    className="relative z-10 flex items-center gap-2 group-hover:text-white transition duration-500"
                  >
                    Back To Home
                    <FaArrowRight className="text-xs group-hover:translate-x-1 transition" />
                  </Link>
                </button>
              </div>
            </div>

            {/* Right */}
            <div className="grid gap-5">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-4">
                  <div className="text-green-600 text-2xl">
                    <FaTools />
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#0F2A44]">
                      Under Development
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      We're building something valuable for you.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-4">
                  <div className="text-green-600 text-2xl">
                    <FaClock />
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#0F2A44]">
                      Launching Soon
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Our team is working hard to complete this page.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-4">
                  <div className="text-green-600 text-2xl">
                    <FaRocket />
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#0F2A44]">
                      Better Experience
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Faster, cleaner and more professional experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
