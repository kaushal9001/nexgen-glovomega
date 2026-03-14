import React from "react";
import secvideof from "../assets/photos/june-ai.mp4";
import { FaCheckCircle, FaHeart, FaShieldAlt } from "react-icons/fa";
import { MdOutlinePriceCheck } from "react-icons/md";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import secimgFh from "../assets/photos/section-4-image.png";
import { FaCheck } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import client1 from "../assets/photos/flipkartimg.avif";
import client2 from "../assets/photos/icici-img.avif";
import client3 from "../assets/photos/yes-bank-img.avif";
import client4 from "../assets/photos/easemytrip-img.avif";
import HGT from "../assets/photos/Home-Grown-Technology-img.avif";
import {
  FaCalendarAlt,
  FaFileInvoiceDollar,
  FaMoneyCheckAlt,
  FaUsers,
} from "react-icons/fa";

const AboutPage = () => {
  const services = [
    {
      icon: <HiOutlineBadgeCheck />,
      title: "Premium Quality",
      desc: "We believe in building high-quality service pipelines and continuously invest resources to deliver simple, fast, and error-free services.",
    },
    {
      icon: <MdOutlinePriceCheck />,
      title: "Affordable Prices",
      desc: "We believe in building services that are affordable while delivering value and keeping customers happy.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Simple & Reliable",
      desc: "We offer standard, easily understandable services with transparent pricing.",
    },
    {
      icon: <FaHeart />,
      title: "Fair & Respectful",
      desc: "We treat every customer with fairness and respect while continuously improving our services.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Confidentiality",
      desc: "Your privacy and business data are always protected with secure systems.",
    },
    {
      icon: <BiSupport />,
      title: "Trusted Relationship",
      desc: "We focus on building long-term relationships with our clients by delivering consistent value.",
    },
  ];
  //   ---------------------------------
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
  // -----------------------------
  const points2 = [
    "Providing the right services tailored to client needs",
    "Ensuring timely and accurate delivery",
    "Offering services at fair and transparent pricing",
    "Continuously improving processes and support to serve clients better",
  ];
  //   ------------------------------------
  const clientsImg = [client1, client2, client3, client4];
  return (
    <div>
      <section className="py-20 ">
        <div className=" px-5 md:px-10 grid md:grid-cols-2 gap-10 items-center">
          {/* Left Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg p-3  bg-white">
            <video
              src={secvideof}
              autoPlay
              muted
              loop
              controls
              className="rounded-xl  md:w-full "
            ></video>
          </div>

          {/* Right Content */}
          <div className=" rounded-2xl p-5 md:p-10 shadow-sm  bg-white/50">
            <h2 className="text-4xl font-semibold text-[#0F2A44] mb-4">
              Making Entrepreneurship
            </h2>

            <p className="text-green-600 font-medium mb-3">
              Simple and Affordable
            </p>

            <p className="text-gray-600 leading-relaxed">
              At Nexgentaxsolution, our mission is to make entrepreneurship
              easier and more affordable for individuals, startups, and growing
              businesses. We believe that starting and managing a business
              should not be complicated, which is why we focus on simplifying
              registration, taxation, and compliance processes.
              <br /> Our team provides reliable guidance and professional
              support to help businesses handle important requirements such as
              company registration, GST filing, income tax returns, and
              regulatory compliance. By offering clear processes and dedicated
              assistance, we ensure that entrepreneurs can focus on building and
              expanding their ventures.
              <br /> At Nexgentaxsolution, we are committed to supporting
              entrepreneurs with practical solutions, transparent services, and
              dependable compliance assistance to help their businesses grow
              with confidence.
            </p>
          </div>
        </div>
      </section>
      <section className=" py-20">
        <div className=" px-5 md:px-10 grid lg:grid-cols-3 gap-10">
          {/* Left Content */}
          <div className="bg-white/50 rounded-2xl p-8  shadow-sm">
            <h2 className="text-3xl font-semibold text-[#0F2A44] mb-4">
              We offer a carefully curated range of high-quality services at
              affordable prices. Our mission is to make it easy for
              entrepreneurs to start, manage, and grow their businesses.
            </h2>

            <p className="text-gray-600 text-xl leading-relaxed">
              Over the years, Nexgentaxsolution has supported thousands of
              businesses with company registration, regulatory compliance, GST
              and tax filing, and other essential financial services—helping
              them focus on what matters most: building and expanding their
              ventures.
            </p>
          </div>

          {/* Cards */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {services.map((item, index) => (
              <div
                key={index}
                className="bg-white/50 p-10 rounded-2xl shadow-sm hover:shadow-md transition hover:-translate-y-1 duration-500"
              >
                <div className="text-green-600 text-2xl mb-3">{item.icon}</div>

                <h3 className="font-semibold text-2xl text-[#0F2A44] mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-10 pt-5 mt-20  ">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-semibold text-[#0F2A44]">
              Customer-First Philosophy
            </h2>

            <p className="text-gray-600 text-md mt-4 leading-relaxed">
              At Nexgentaxsolution, we are committed to building a fair,
              transparent, and performance-driven company with long-term success
              in mind. We believe that the success of any business is determined
              by the value it delivers to its customers.
            </p>
            <p className="text-gray-600 text-md mt-4 leading-relaxed">
              When customers find real value in a company’s services, the
              business thrives. When value is lacking, the business struggles.
              That’s why our focus is always on creating meaningful value for
              our clients.
            </p>
            <p className="text-gray-600 text-md mt-4 font-semibold leading-relaxed">
              How We Deliver Value:
            </p>
            {/* Cards */}
            <div className="mt-3 space-y-3">
              {points2.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <FaCheck className="text-green-600 text-sm" />

                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-600 text-md mt-4 leading-relaxed">
              By putting customers first, Nexgentaxsolution ensures that
              entrepreneurs and businesses receive reliable, practical, and
              effective solutions for all their registration, compliance, and
              taxation needs.
            </p>
          </div>

          {/* Right Image */}
          <div className="  ">
            <img src={secimgFh} alt="AI Compliance" className=" " />
          </div>
        </div>
      </section>
      <section className="px-5 md:px-10 mt-20 pb-10">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-[#0F2A44]">Our Investors</h2>
          <p className="text-gray-600 text-xl mt-4">
            We are backed by visionary, world-class institutions and investors.
          </p>

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
      <section className="py-16 bg-[#f0f8fb]">
        <div className=" px-5 md:px-10 flex flex-col-reverse lg:flex-row items-center gap-10">
          {/* Left Content */}
          <div className="lg:w-[70%]">
            <h2 className="text-4xl font-semibold text-[#0F2A44] mb-4">
              Efficient, Client-Focused Solutions
            </h2>

            <p className="text-gray-600 leading-relaxed">
              At Nexgentaxsolution, we are passionate about creating solutions
              that simplify complex business and compliance processes. Over the
              years, we have developed efficient systems and workflows that make
              company registration, GST filing, tax compliance, and other
              regulatory tasks easier and more reliable for our clients.
              <br />
              <br />
              We continue to invest in improving our processes, tools, and
              client support infrastructure to ensure that we deliver
              high-quality services consistently and at an affordable
              price—helping businesses focus on growth while we handle the
              complexities of compliance.
            </p>
          </div>

          {/* Right Image */}
          <div className="lg:w-[30%]">
            <img
              src={HGT}
              alt="technology"
              className="w-full h-[220px] object-cover rounded-2xl shadow-md"
            />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-5 flex flex-col-reverse lg:flex-row items-center gap-10">
          {/* Left Content */}
          <div className="lg:w-[70%]">
            <h2 className="text-4xl font-semibold text-[#0F2A44] mb-4">
              Our Founder
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Nexgentaxsolution was founded and is led by Mr. Sawid, a seasoned
              professional with deep expertise in accounting, taxation, and
              business advisory. With a strong educational background and
              extensive experience working with growing businesses, he is
              committed to making entrepreneurship simple and accessible for
              all.
              <br />
              <br />
              Before starting Nexgentaxsolution, Sawid worked closely with SMEs
              and startups, helping them navigate regulatory requirements and
              access financial solutions. His firsthand experience with business
              challenges inspired him to create a platform that guides
              entrepreneurs through registration, compliance, and taxation with
              clarity and confidence. <br /> Under his leadership,
              Nexgentaxsolution has grown into a trusted partner for thousands
              of businesses across India, combining expert guidance, practical
              solutions, and a client-first approach.
            </p>
          </div>

          {/* Right Image */}
          <div className="lg:w-[30%]">
            <img
              src="/images/technology.jpg"
              alt="technology"
              className="w-full h-[220px] object-cover rounded-2xl shadow-md"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
