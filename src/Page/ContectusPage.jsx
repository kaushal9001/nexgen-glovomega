import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const ContactusPage = () => {
  const contactDetails = [
    {
      icon: <FaPhoneAlt />,
      title: "Phone",
      value: "+91 98765 43210",
    },
    {
      icon: <FaEnvelope />,
      title: "Email Us At",
      value: "support@company.com",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Locate Us At",
      value: "6th Floor, KRM Centre, Chennai, India",
    },
  ];

  const socialIcons = [
    { icon: <FaFacebookF />, link: "#" },
    { icon: <FaTwitter />, link: "#" },
    { icon: <FaLinkedinIn />, link: "#" },
  ];

  return (
    <section className="py-10 border border-green-200 rounded-2xl shadow-xl shadow-green-300/10 px-5 mx-5 md:mx-10 mt-10  ">
      <div className=" grid lg:grid-cols-2 gap-12">
        {/* Left Side */}
        <div className=" ">
          <h1 className="text-3xl font-semibold text-[#0F2A44] mb-6">
            Contact
          </h1>

          <p className="text-gray-600 mb-8">
            Have questions or need assistance? Our team is here to help you.
            Feel free to reach out to us using the information below.
          </p>

          {/* Contact Cards */}
          <div className="space-y-5 ">
            {contactDetails.map((item, index) => (
              <div
                key={index}
                className="border  border-gray-200 rounded-xl p-5 flex items-center gap-4 shadow-sm hover:shadow-md transition hover:translate-x-1 duration-500 "
              >
                <div className="text-green-600 text-xl">{item.icon}</div>

                <div>
                  <h3 className="font-medium text-[#0F2A44]">{item.title}</h3>

                  <p className="text-gray-600 text-sm">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-8">
            {socialIcons.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="w-10 h-10 border border-gray-300 flex items-center justify-center rounded-lg text-gray-600 hover:bg-green-600 hover:text-white transition duration-500"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right Side Form */}
        <div className="border border-gray-200 rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-[#0F2A44] mb-6">
            Enter Your Details
          </h2>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-green-600"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-green-600"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-green-600"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-green-600"
            ></textarea>

            {/* Button (same effect you fixed) */}
            <button className="relative overflow-hidden border border-green-600 text-green-600 px-6 py-2 rounded-2xl text-sm font-medium group">
              <span className="absolute inset-0 bg-green-600 w-0 group-hover:w-full transition-all duration-500"></span>

              <span className="relative z-10 group-hover:text-white transition">
                Send Message
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactusPage;
