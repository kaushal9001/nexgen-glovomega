import { FaCheckCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

// const handleChange = (field, value) => {
//   setFormData({ ...formData, [field]: value });

//   let message = "";

//   if (field === "name") {
//     if (!value.trim()) message = "Name is required";
//   }

//   if (field === "email") {
//     if (!value) message = "Email is required";
//     else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
//       message = "Invalid email";
//   }

//   if (field === "phone") {
//     if (!value) message = "Phone is required";
//     else if (!/^[6-9]\d{9}$/.test(value)) message = "Invalid phone";
//   }

//   setErrors((prev) => ({ ...prev, [field]: message }));
// };

// const handleSubmit = (e) => {
//   e.preventDefault();

//   if (errors.name || errors.email || errors.phone) return;

//   if (!formData.name || !formData.email || !formData.phone) {
//     alert("Fill all fields");
//     return;
//   }

//   console.log("Form Submitted:", formData);
// };

const ServicePage = () => {
  const { title } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });

    let message = "";

    if (field === "name") {
      if (!value.trim()) message = "Name is required";
    }

    if (field === "email") {
      if (!value) message = "Email is required";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
        message = "Invalid email";
    }

    if (field === "phone") {
      if (!value) message = "Phone is required";
      else if (!/^[6-9]\d{9}$/.test(value)) message = "Invalid phone";
    }

    setErrors((prev) => ({ ...prev, [field]: message }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (errors.name || errors.email || errors.phone) return;

    if (!formData.name || !formData.email || !formData.phone) {
      alert("Fill all fields");
      return;
    }

    console.log("Form Submitted:", formData);
  };

  const contactDetails = [
    {
      icon: <FaCheckCircle />,
      title: "Product Testing & Certification Guidance",
      // value: "+91 98765 43210",
    },
    {
      icon: <FaCheckCircle />,
      title: "BIS Standards & Scheme Assistance",
      // value: "support@company.com",
    },
    {
      icon: <FaCheckCircle />,
      title: "Expert Support at Every Step",
      // value: "6th Floor, KRM Centre, Chennai, India",
    },
    {
      icon: <FaCheckCircle />,
      title: "Expert Support at Every Step",
      // value: "6th Floor, KRM Centre, Chennai, India",
    },
    {
      icon: <FaCheckCircle />,
      title: "Expert Support at Every Step",
      // value: "6th Floor, KRM Centre, Chennai, India",
    },
  ];

  const socialIcons = [
    { icon: <FaFacebookF />, link: "#" },
    { icon: <FaTwitter />, link: "#" },
    { icon: <FaLinkedinIn />, link: "#" },
  ];
  return (
    <>
      {/* <section className="py-10 ">
        <div className="md:px-10 px-5 grid md:grid-cols-2 gap-10 items-center">
         
          <div>
            <h1 className="text-5xl font-bold text-[#0F2A44] mb-4">{title}</h1>

            <p className="text-gray-600 text-xl mb-6 leading-relaxed">
              Get your service done quickly and efficiently with our expert
              team. We simplify the entire process and provide end-to-end
              support.
            </p>

           
            <div className="space-y-3 mb-6">
              {[
                "Complete Application Filing",
                "Expert Assistance",
                "Fast Processing",
                "Compliance Support",
                "Trusted by 20,000+ Clients",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-600" />
                  <p className="text-gray-700 text-xl">{item}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-8 text-sm text-gray-700">
              <div className="text-xl">
                ⭐ 4.6 out of 5 <span className="text-gray-500">(7180)</span>
              </div>
              <div className="text-xl">
                ⭐ 4.7 out of 5 <span className="text-gray-500">(3784)</span>
              </div>
            </div>
          </div>

        
          <div className="bg-white p-8 rounded-2xl shadow-md border">
            <h2 className="text-xl font-semibold text-[#0F2A44] mb-6">
              Get Free Consultation
            </h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-green-600"
              />

              <input
                type="tel"
                placeholder="Enter Your Phone"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-green-600"
              />

              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-green-600"
              />

              
              <button className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition">
                Claim Free Consultation
              </button>

              <p className="text-xs text-gray-500 text-center">
                By submitting, you agree to our terms & privacy policy.
              </p>
            </form>
          </div>
        </div>
      </section> */}
      <section className="py-10 border border-green-200 rounded-2xl shadow-xl shadow-green-300/10 px-5 mx-5 md:mx-10 mt-10  ">
        <div className=" grid lg:grid-cols-2 gap-12">
          {/* Left Side */}
          <div className=" ">
            <h1 className="text-4xl font-semibold text-[#0F2A44] mb-6">
              {title}
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
                  className=" border-gray-200 rounded-xl p-3 flex items-center gap-4 shadow-sm hover:shadow-md transition hover:-translate-y-1 duration-400 "
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
          <div className="border border-gray-200 rounded-2xl p-8 shadow-sm relative">
            <h2 className="text-2xl font-semibold text-[#0F2A44] mb-6">
              Enquire Now
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                placeholder="Enter Name"
                value={formData.name}
                onChange={(e) => {
                  const value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
                  handleChange("name", value);
                }}
                className={`w-full border rounded-xl outline-none px-4 py-3 
  ${
    formData.name
      ? errors.name
        ? "border-red-500"
        : "border-green-500"
      : "border-gray-300"
  }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm -mt-4">{errors.name}</p>
              )}

              <input
                type="email"
                placeholder="Enter Email address"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className={`w-full border rounded-xl px-4 py-3 outline-none
  ${
    formData.email
      ? errors.email
        ? "border-red-500"
        : "border-green-500"
      : "border-gray-300"
  }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm -mt-4">{errors.email}</p>
              )}

              <input
                type="tel"
                placeholder="Enter Mobile Number"
                value={formData.phone}
                maxLength={10}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "");
                  handleChange("phone", value);
                }}
                className={`w-full border rounded-xl px-4 py-3 outline-none
  ${
    formData.phone
      ? errors.phone
        ? "border-red-500"
        : "border-green-500"
      : "border-gray-300"
  }`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm -mt-4">{errors.phone}</p>
              )}

              <input
                type="text"
                placeholder="Select interested Location"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-green-600"
              />
              <input
                type="text"
                placeholder="Select interest type"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-green-600"
              />

              {/* Submit Button */}
              <button className="relative overflow-hidden border border-green-600 text-green-600 px-6 py-2 rounded-2xl text-sm font-medium group">
                <span className="absolute inset-0 bg-green-600 w-0 group-hover:w-full transition-all duration-500"></span>

                <span className="relative z-10 group-hover:text-white transition">
                  Submit
                </span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicePage;
