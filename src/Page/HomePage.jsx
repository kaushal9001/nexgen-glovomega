import { FaBuilding } from "react-icons/fa";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { MdOutlineReceiptLong } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import secimgF from "../assets/photos/sectionF-image.png";
import secimgS from "../assets/photos/section-2-image.png";
import secimgFh from "../assets/photos/section-4-image.png";
import secvideoth from "../assets/photos/IndiaFilings-The-Journey!.mp4";
import secvideof from "../assets/photos/june-ai.mp4";
import client1 from "../assets/photos/flipkartimg.avif";
import client2 from "../assets/photos/icici-img.avif";
import client3 from "../assets/photos/yes-bank-img.avif";
import client4 from "../assets/photos/easemytrip-img.avif";

import {
  FaCalendarAlt,
  FaFileInvoiceDollar,
  FaMoneyCheckAlt,
  FaUsers,
} from "react-icons/fa";
import FAQ from "../Component/FAQ";

const HomePage = () => {
  const services = [
    {
      icon: <FaBuilding />,
      title: "Business Registration",
      color: "text-orange-500",
      border: "lg:border-e lg:border-b-0 border-b",
    },
    {
      icon: <RiMoneyDollarCircleLine />,
      title: "GST Compliance",
      color: "text-green-600",
      border: "lg:border-e lg:border-b-0 border-b",
    },
    {
      icon: <HiOutlineOfficeBuilding />,
      title: "MCA Compliance",
      color: "text-orange-500",
      border: "lg:border-e lg:border-b-0 border-b",
    },
    {
      icon: <MdOutlineReceiptLong />,
      title: "Income Tax Filing",
      color: "text-green-600",
    },
  ];
  // -------------------
  const clientsImg = [client1, client2, client3, client4];
  //   -----------------------------

  const points = [
    "Company Registration",
    "Bank Account Assistance",
    "GST Registration",
    "Trade License",
    "GST Return Filing",
    "TDS Return Filing",
    "HR & Payroll Processing",
    "Trademark Protection",
    "MCA Compliance",
  ];
  //   ---------------------------------

  const points2 = [
    "Business Registration (Pvt Ltd / LLP / OPC)",
    "GST Registration & Filing",
    "Income Tax Return Filing",
    "ROC & Annual Compliance",
  ];

  const steps = [
    {
      title: "Choose business structure",
      desc: "Select Private Limited, LLP, or OPC based on your needs.",
    },
    {
      title: "We prepare & register",
      desc: "DIN, DSC, PAN, company name approval, and incorporation documents.",
    },
    {
      title: "GST & Tax setup",
      desc: "GST registration, TAN, and expert-led accounting support.",
    },
    {
      title: "Stay compliant",
      desc: "GST filing, income tax returns, ROC compliance & annual filing.",
    },
  ];
  //   ----------------------------------
  const features = [
    {
      icon: <FaCalendarAlt />,
      title: "Calendar & Alerts",
      desc: "Never miss a deadline — reminders and tracking.",
      color: "text-blue-500",
    },
    {
      icon: <FaFileInvoiceDollar />,
      title: "Accounting",
      desc: "Organize invoices and reconcile financial inputs.",
      color: "text-blue-500",
    },
    {
      icon: <FaMoneyCheckAlt />,
      title: "Tax Filing",
      desc: "File GST and income tax with guided steps.",
      color: "text-green-500",
    },
    {
      icon: <FaUsers />,
      title: "HR & Payroll",
      desc: "Streamline payroll processing and statutory tasks.",
      color: "text-purple-500",
    },
  ];

  return (
    <>
      <section className="pt-10 md:pt-15 pb-12 bg-[#f0f8fb]">
        <div className="px-5 md:px-10 text-center">
          {/* Heading */}
          <h1 className="text-[25px]  md:text-5xl font-semibold text-[#0F2A44] leading-tight">
            India’s Trusted Platform for Businesses and Tax Compliance
          </h1>

          {/* underline */}
          <div className="w-20 h-[3px] bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7]  mx-auto my-6 rounded"></div>

          {/* paragraph */}
          <p className="text-gray-600 max-w-3xl mx-auto text-base leading-relaxed">
            Businesses across India rely on our expertise to manage their MCA,
            GST, and Income Tax compliance smoothly. With experienced
            professionals and a streamlined process, we provide end-to-end
            support, paperless documentation, and secure record management for
            hassle-free filings.
          </p>
        </div>

        {/* Services */}
        <div className=" mt-10">
          <div className=" border-y  border-gray-300 flex flex-col lg:flex-row flex-wrap lg:justify-center items-start py-2  ">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex w-full justify-start  lg:w-80  ${service.border} px-5 py-2 md:px-10 px-2 border-gray-300 justify-center items-center gap-2 text-sm group cursor-pointer`}
              >
                <span
                  className={`text-3xl ${service.color} group-hover:scale-110 transition`}
                >
                  {service.icon}
                </span>

                <span className="text-[15px] font-semibold text-gray-700 group-hover:text-green-600 transition">
                  {service.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#f0f8fb] pb-10">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-[#0F2A44]">Our Clients</h2>

          <div className="w-20 h-[3px]  bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>
        </div>

        {/* Slider */}
        <div className="overflow-hidden relative">
          <div className="flex w-max  animate-scroll cursor-pointer hover:animate-none gap-8">
            {[...clientsImg, ...clientsImg].map((logo, index) => (
              <div
                key={index}
                className="flex items-center  justify-center  rounded-xl px-8 py-3 mb-5 min-w-[160px]  shadow-md shadow-green-900/50  "
              >
                <img
                  src={logo}
                  alt="client"
                  className="h-8 w-30 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mt-20 rounded-4xl mx-5 md:mx-10 py-10  bg-gray-400/10  bg-clip-padding backdrop-filter backdrop-blur-sm  border-gray-100">
        <div className="px-5 md:px-10 ">
          <div className="grid grid-rows  lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="border-l-4 pl-5  border-green-600 ">
              <div className="border-green-600">
                <h2 className="text-4xl font-semibold text-[#0F2A44]">
                  Professional Guidance for Business, GST & Tax Filings
                </h2>

                {/* <h3 className="text-4xl text-green-600 mt-2">
                  Professional Guidance for Business, GST & Tax Filings
                </h3> */}
              </div>
              <p className="text-xl text-gray-600 mt-6 leading-relaxed">
                Handle your business requirements more efficiently with expert
                assistance. We support you with documentation, invoicing, GST
                compliance, tax filings, and payroll management, ensuring every
                process runs smoothly.
              </p>

              <button className="mt-5 relative cursor-pointer overflow-hidden border border-green-600 text-green-600 px-6 py-3 rounded-2xl text-sm font-medium group">
                <span className="absolute inset-0 bg-green-600 w-0 group-hover:w-full transition-all duration-500"></span>

                <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition duration-500">
                  Learn More
                  <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>
            </div>

            {/* Right Image */}
            <div className="bg-gray-100  border border-gray-200 shadow-gray-300  rounded-2xl shadow-md">
              <video
                src={secvideof}
                autoPlay
                muted
                loop
                controls
                className="rounded-xl  w-full "
              ></video>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-20 rounded-4xl p-5 md:p-10">
        <div className="">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="bg-gray-100 border border-gray-200 shadow-gray-300 rounded-2xl  shadow-md">
              <img
                src={secimgS}
                alt="Compliance"
                className="rounded-xl w-full  md:h-100"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-4xl font-semibold text-[#0F2A44]">
                Complete compliance solution
              </h2>

              <p className="text-gray-600 text-xl mt-4">
                From company registration to GST filing, income tax returns to
                trademark protection — we handle all your compliance needs in
                one place.
              </p>

              {/* List */}
              <div className="mt-6 space-y-3">
                {points.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <FaCheck className="text-green-600 text-sm" />

                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-20">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-[#0F2A44]">Our Partners</h2>

          <div className="w-20 h-[3px]  bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>

          <p className="text-gray-600 text-xl mt-4">
            Trusted by leading institutions supporting entrepreneurship,
            finance, and growth across India.
          </p>
        </div>

        {/* Slider */}
        <div className="overflow-hidden relative">
          <div className="flex w-max  animate-scroll cursor-pointer hover:animate-none gap-8">
            {[...clientsImg, ...clientsImg].map((logo, index) => (
              <div
                key={index}
                className="flex items-center  justify-center  rounded-xl px-8 py-3 mb-5 min-w-[160px]  shadow-md shadow-green-900/50  "
              >
                <img src={logo} alt="client" className="h-8 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mt-20 rounded-4xl mx-5 md:mx-10  py-10  bg-gray-400/10  bg-clip-padding backdrop-filter backdrop-blur-sm  border-gray-100">
        <div className="px-5 md:px-10">
          <div className="grid  lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="border-l-4 pl-5   border-green-600 ">
              <div className="border-green-600">
                <h2 className="text-4xl font-semibold text-[#0F2A44]">
                  Our Story!
                </h2>

                <h3 className="text-4xl text-green-600 mt-2">
                  The Journey of Nexgentaxsolution
                </h3>
              </div>
              <p className="text-xl text-gray-600 mt-6 leading-relaxed">
                At Nexgentaxsolution, our mission is to make entrepreneurship
                simple, accessible, and affordable for everyone. We provide a
                streamlined and user-friendly platform that helps individuals
                and businesses start their ventures and manage tax and
                regulatory compliance with ease.
                <br /> Our goal is to support entrepreneurs, startups, and
                growing businesses by offering reliable guidance and efficient
                solutions for business registration, taxation, and compliance
                management.
              </p>

              <button className="mt-5 relative cursor-pointer overflow-hidden border border-green-600 text-green-600 px-6 py-3 rounded-2xl text-sm font-medium group">
                <span className="absolute inset-0 bg-green-600 w-0 group-hover:w-full transition-all duration-500"></span>

                <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition duration-500">
                  Learn More
                  <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>
            </div>

            {/* Right Image */}
            <div className="bg-gray-100  rounded-2xl shadow-md">
              <video
                src={secvideoth}
                autoPlay
                muted
                loop
                controls
                className="rounded-xl w-full "
              ></video>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-20 flex justify-center px-5 md:px-10  w-full ">
        <div className="grid md:grid-cols-2 gap-12  items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl font-semibold text-[#0F2A44]">
              Launch Your Business in India the Right Way
            </h2>

            <p className="text-gray-600 mt-4 leading-relaxed">
              Select the ideal business structure for your startup — Private
              Limited, LLP, or OPC. Nexgentaxsolution helps you handle business
              registration, GST, tax filing, and regulatory compliance with
              ease.
            </p>

            {/* Points */}
            <div className="mt-6 space-y-3">
              {points2.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <FaCheck className="text-green-600 text-sm" />

                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Steps */}
          <div className="space-y-5">
            {steps.map((step, index) => (
              <div
                key={index}
                className="border border-gray-200 bg-white/50 rounded-xl p-3 shadow-sm hover:shadow-md  hover:-translate-y-1 transition duration-500"
              >
                <h3 className="text-lg font-medium text-[#0F2A44] mt-1 flex gap-3">
                  <span className="text-green-600 text-md  font-semibold">
                    0{index + 1}
                  </span>
                  {step.title}
                </h3>

                <p className="text-gray-600 text-sm mt-1">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-5 md:px-10 pt-5 mt-20  ">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="">
            <h2 className="text-4xl font-semibold text-[#0F2A44]">
              Complete Business Compliance Solutions in India
            </h2>

            <p className="text-gray-600 text-xl mt-4 leading-relaxed">
              Stay compliant with India’s tax and regulatory requirements with
              expert assistance for GST filing, income tax returns, ROC
              compliance, and annual filings. Our team ensures accurate
              documentation, proper validation of details, and timely reminders
              so your business remains fully compliant without hassle.
            </p>

            {/* Cards */}
            <div className="grid md:grid-cols-2 gap-5 mt-8">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="border bg-white/50 border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition hover:-translate-y-1   duration-500"
                >
                  <div className=" flex gap-3">
                    <div className={`${item.color}  text-xl mb-2`}>
                      {item.icon}
                    </div>

                    <h3 className="font-medium text-[#0F2A44]">{item.title}</h3>
                  </div>

                  <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className=" ">
            <img src={secimgFh} alt="AI Compliance" className=" " />
          </div>
        </div>
      </section>
      <section className="mt-20">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-[#0F2A44]">
            Frequently asked
          </h2>

          <div className="w-20 h-[3px]  bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>
          <p className="text-gray-600 text-xl mt-4">
            Short, straight answers for founders.
          </p>
        </div>
        <FAQ />
      </section>
      <section className="mx-5 md:mx-10 mt-20 bg-gray-400/10 rounded-4xl">
        <div className=" ">
          <div className="border border-gray-200 rounded-4xl p-5 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 ">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl font-semibold text-[#0F2A44]">
                Ready to get started?
              </h2>

              <p className="text-gray-600 text-xl mt-2 text-sm">
                Create an account to start your company registration or migrate
                your existing business. No-credit card required to explore.
              </p>
            </div>

            {/* Button */}
            <button className="cursor-pointer relative overflow-hidden border border-green-600 text-green-600 w-40 px-6 py-3 rounded-2xl text-sm font-medium group">
              <span className="absolute inset-0 bg-green-600 w-0 group-hover:w-full transition-all duration-500"></span>

              <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition">
                Start in India
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
