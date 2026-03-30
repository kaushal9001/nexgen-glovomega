import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { FaFlag, FaUser, FaBuilding } from "react-icons/fa";
import { HiGlobeAlt } from "react-icons/hi";
import { MdDescription } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";
import emailjs from "emailjs-com";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const ServicePageDSC = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [errorsF, setErrorsF] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [type, setType] = useState("Indian");
  const [userType, setUserType] = useState("Individual");
  const [showPopup, setShowPopup] = useState(false);

  const validateField = (field, value) => {
    let message = "";

    if (field === "name") {
      if (!value.trim()) message = "Name is required";
    }

    if (field === "email") {
      if (!value) message = "Email is required";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
        message = "Invalid email format";
    }

    if (field === "phone") {
      if (!value) message = "Phone is required";
      else if (!/^[6-9]\d{9}$/.test(value))
        message = "Enter valid 10-digit number";
    }

    setErrorsF((prev) => ({ ...prev, [field]: message }));
  };

  const { title } = useParams();
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
  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    type: "Indian",
    userType: "Individual",
    certificateType: "Sign",
    validity: "1 Year",
    extras: [],
  };

  const [formData, setFormData] = useState(initialFormData);

  // 🔥 Handle Change
  const handleChange = (field, value) => {
    validateField(field, value);

    setFormData((prev) => {
      let updated = { ...prev, [field]: value };

      if (field === "type" && value === "Foreign") {
        updated.userType = "Individual";
      }

      return updated;
    });
  };

  // 🔥 Checkbox Handle
  const handleCheckbox = (item) => {
    const isAlreadySelected = formData.extras.includes(item);

    // 🔥 popup sirf tab jab SELECT kar rahe ho
    if (item === "Token" && !isAlreadySelected) {
      setShowPopup(true);
    }

    let updatedExtras;

    if (isAlreadySelected) {
      if (formData.extras.length === 1) {
        setError("At least one option required");
        return;
      }
      updatedExtras = formData.extras.filter((i) => i !== item);
    } else {
      updatedExtras = [...formData.extras, item];
    }

    setError("");
    setFormData({ ...formData, extras: updatedExtras });
  };

  // 🔥 Submit
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   console.log("Form Data:", formData);
  //   console.log(formData);

  //   // 👉 API / Email yaha bhejna
  //   // fetch("/api/send-email", { ... })
  // };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone";
    }

    setErrorsF(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitted(true);

    const isValid = validateForm(); // 🔥 ADD THIS

    if (!isValid) return; // ❌ stop if invalid

    if (formData.extras.length === 0) {
      setError("Select at least one option");
      return;
    }

    setError("");

    const emailData = {
      title: "DSC Service Form Submission",

      message: `📌 New Enquiry Received:

👤 Name: ${formData.name}
📧 Email: ${formData.email}
📱 Phone: ${formData.phone}

🌍 Type: ${formData.type}
🏢 User Type: ${formData.userType}

📄 Certificate: ${formData.certificateType}
⏳ Validity: ${formData.validity}

➕ Extras: ${formData.extras.join(", ") || "None"}

🕒 Time: ${new Date().toLocaleString()}
    `,
    };
    setSuccess(true);

    // emailjs
    //   .send(
    //     "service_9cue9ol",
    //     "template_98dridl",
    //     emailData,
    //     "GdYRv0Mahzo815au3",
    //   )
    //   .then(() => {
    //     // alert("✅ Form Submitted Successfully!");
    //     setSuccess(true);
    //     // 🔥 RESET FORM
    //     setFormData(initialFormData);

    //     setTimeout(() => setSuccess(false), 3000);
    //   })
    //   .catch((error) => {
    //     alert("❌ Error sending email: " + error.text);
    //   });
    setIsSubmitted(false);

    setTimeout(() => setSuccess(false), 3000);
  };
  // 🔥 Data Arrays
  const countryTypes = [
    { label: "Indian", icon: <FaFlag /> },
    { label: "Foreign", icon: <HiGlobeAlt /> },
  ];

  const userTypes = [
    { label: "Individual", icon: <FaUser /> },
    { label: "Organization", icon: <FaBuilding /> },
    { label: "DGFT", icon: <MdDescription /> },
    { label: "DocSigner", icon: <FaAddressCard /> },
  ];
  const filteredUserTypes =
    formData.type === "Indian" ? userTypes : userTypes.slice(0, 2);

  const certificateTypes = ["Sign", "Encrypt", "Sign + Encrypt"];
  const validityOptions = ["1 Year", "2 Years", "3 Years"];
  const extras = ["Token", "Assistance Service", "Shipping"];

  const isFormValid =
    formData.name &&
    !errorsF.name &&
    formData.email &&
    !errorsF.email &&
    formData.phone &&
    !errorsF.phone &&
    formData.extras.length > 0;
  return (
    <>
      <section className="py-10 border border-green-200 rounded-2xl shadow-xl shadow-green-300/10 px-5 mx-5 md:mx-10 mt-10  ">
        <div className=" grid lg:grid-cols-2 gap-12">
          {/* Left Side */}
          {/* <div
            onSubmit={handleSubmit}
            className="bg-green-50 p-8 rounded-2xl max-w-xl shadow-md border border-green-100"
          >
            🔥 Title
            <h2 className="text-4xl font-semibold text-[#0F2A44] mb-6">
              DSC Service
            </h2>

            🔥 Country Type
            <div className="flex gap-3 mb-6">
              {countryTypes.map((item, i) => (
                <button
                  type="button"
                  key={i}
                  onClick={() => handleChange("type", item.label)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl border ${
                    formData.type === item.label
                      ? "bg-green-600 text-white"
                      : "border-green-600 text-green-600"
                  }`}
                >
                  {item.icon}
                  {item.label}
                </button>
              ))}
            </div>

            🔥 User Type
            <div className="flex flex-wrap gap-3 mb-6">
              {filteredUserTypes.map((item, i) => (
                <button
                  type="button"
                  key={i}
                  onClick={() => handleChange("userType", item.label)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl border ${
                    formData.userType === item.label
                      ? "bg-green-600 text-white"
                      : "border-green-600 text-green-600"
                  }`}
                >
                  {item.icon}
                  {item.label}
                </button>
              ))}
            </div>

            🔥 Certificate Type
            <div className="mb-5">
              <label className="text-sm text-gray-700 mb-1 block">
                Certificate Type
              </label>
              <select
                value={formData.certificateType}
                onChange={(e) =>
                  handleChange("certificateType", e.target.value)
                }
                className="w-full border rounded-xl px-4 py-3 focus:border-green-600"
              >
                {certificateTypes.map((item, i) => (
                  <option key={i}>{item}</option>
                ))}
              </select>
            </div>

            🔥 Validity
            <div className="mb-6">
              <label className="text-sm text-gray-700 mb-1 block">
                Validity
              </label>
              <select
                value={formData.validity}
                onChange={(e) => handleChange("validity", e.target.value)}
                className="w-full border rounded-xl px-4 py-3 focus:border-green-600"
              >
                {validityOptions.map((item, i) => (
                  <option key={i}>{item}</option>
                ))}
              </select>
            </div>

            🔥 Extras
            <div className="space-y-3 mb-6">
              {extras.map((item, i) => (
                <label
                  key={i}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <input
                    type="checkbox"
                    checked={formData.extras.includes(item)}
                    onChange={() => handleCheckbox(item)}
                    className="accent-green-600"
                  />
                  {item}
                </label>
              ))}
            </div>

            🔥 Submit Button
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition"
            >
              Submit
            </button>
          </div> */}
          <div className=" ">
            <h1 className="text-4xl font-semibold text-[#0F2A44] mb-6">
              {" "}
              By DSC Service
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
          <div className="border border-gray-200 rounded-2xl p-8 shadow-sm relative">
            <h2 className="text-2xl font-semibold text-[#0F2A44] mb-6">
              Enquire Now
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                placeholder="Enter Name"
                value={formData.name || ""}
                onChange={(e) => {
                  const value = e.target.value.replace(/[^a-zA-Z\s]/g, ""); // only letters
                  handleChange("name", value);
                }}
                onBlur={(e) => validateField("name", e.target.value)}
                className={`w-full border rounded-xl px-4 py-3 outline-none transition 
${
  formData.name
    ? errorsF.name
      ? "border-red-500"
      : "border-green-500"
    : "border-gray-300"
}`}
              />
              {isSubmitted && errorsF.name && (
                <p className="text-red-500 text-sm -mt-4">{errorsF.name}</p>
              )}

              <input
                type="email"
                placeholder="Enter Email"
                value={formData.email || ""}
                onChange={(e) => handleChange("email", e.target.value)}
                onBlur={(e) => validateField("email", e.target.value)}
                className={`w-full border rounded-xl px-4 py-3 outline-none transition 
${
  formData.email
    ? errorsF.email
      ? "border-red-500"
      : "border-green-500"
    : "border-gray-300"
}`}
              />
              {isSubmitted && errorsF.email && (
                <p className="text-red-500 text-sm -mt-4">{errorsF.email}</p>
              )}

              <input
                type="tel"
                placeholder="Enter Mobile Number"
                value={formData.phone || ""}
                maxLength={10}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, ""); // only numbers
                  handleChange("phone", value);
                }}
                onBlur={(e) => validateField("phone", e.target.value)}
                className={`w-full border rounded-xl px-4 py-3 outline-none transition 
${
  formData.phone
    ? errorsF.phone
      ? "border-red-500"
      : "border-green-500"
    : "border-gray-300"
}`}
              />
              {isSubmitted && errorsF.phone && (
                <p className="text-red-500 text-sm -mt-4">{errorsF.phone}</p>
              )}
              <div className="  rounded-2xl max-w-xl">
                {/* 🔥 Country Type */}
                <div className="flex gap-3 mb-6">
                  {countryTypes.map((item, i) => (
                    <button
                      type="button"
                      key={i}
                      onClick={() => handleChange("type", item.label)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl border ${
                        formData.type === item.label
                          ? "bg-green-600 text-white"
                          : "border-green-600 text-green-600"
                      }`}
                    >
                      {item.icon}
                      {item.label}
                    </button>
                  ))}
                </div>

                {/* 🔥 User Type */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {filteredUserTypes.map((item, i) => (
                    <button
                      type="button"
                      key={i}
                      onClick={() => handleChange("userType", item.label)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl border ${
                        formData.userType === item.label
                          ? "bg-green-600 text-white"
                          : "border-green-600 text-green-600"
                      }`}
                    >
                      {item.icon}
                      {item.label}
                    </button>
                  ))}
                </div>

                {/* 🔥 Certificate Type */}
                <div className="mb-5">
                  <label className="text-sm text-gray-700 mb-1 block">
                    Certificate Type
                  </label>
                  <select
                    value={formData.certificateType}
                    onChange={(e) =>
                      handleChange("certificateType", e.target.value)
                    }
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:border-green-600"
                  >
                    {certificateTypes.map((item, i) => (
                      <option key={i}>{item}</option>
                    ))}
                  </select>
                </div>

                {/* 🔥 Validity */}
                <div className="mb-6">
                  <label className="text-sm text-gray-700 mb-1 block">
                    Validity
                  </label>
                  <select
                    value={formData.validity}
                    onChange={(e) => handleChange("validity", e.target.value)}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:border-green-600"
                  >
                    {validityOptions.map((item, i) => (
                      <option key={i}>{item}</option>
                    ))}
                  </select>
                </div>

                {/* 🔥 Extras */}
                <div className="space-y-3 mb-6">
                  {extras.map((item, i) => (
                    <label
                      key={i}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <input
                        type="checkbox"
                        checked={formData.extras.includes(item)}
                        onChange={() => handleCheckbox(item)}
                        className="accent-green-600"
                      />
                      {item}
                    </label>
                  ))}
                </div>

                {error && <p className="text-red-500 text-sm">{error}</p>}

                {/* 🔥 Submit Button */}
                {/* <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition"
                >
                  Submit
                </button> */}
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                // disabled={!isFormValid} // 🔥 important
                className={`relative overflow-hidden border border-green-600 px-6 py-2 rounded-2xl text-sm font-medium group transition`}
              >
                <span className="absolute inset-0 bg-green-600 w-0 group-hover:w-full transition-all duration-500"></span>

                <span className="relative z-10 group-hover:text-white transition">
                  Submit
                </span>
              </button>
            </form>
            {success && (
              <div className="bg-green-100 border mt-5 border-green-400 text-green-700 px-4 py-3 rounded-xl text-sm text-center">
                ✅ Form submitted successfully!
              </div>
            )}
          </div>
          {showPopup && (
            <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-2xl shadow-xl max-w-sm text-center">
                <h3 className="text-lg font-semibold text-[#0F2A44] mb-3">
                  ⚠️ Token Charges
                </h3>

                <p className="text-gray-600 text-sm mb-5">
                  Token service may include additional charges for processing
                  and delivery.
                </p>

                <button
                  onClick={() => setShowPopup(false)}
                  className="bg-green-600 text-white px-5 py-2 rounded-xl hover:bg-green-700 transition"
                >
                  Got it
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ServicePageDSC;
