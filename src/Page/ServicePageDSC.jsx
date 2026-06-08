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
  const [shakeKey, setShakeKey] = useState(0);
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

    // return Object.keys(newErrors).length === 0;
    if (Object.keys(newErrors).length > 0) {
      setShakeKey((prev) => prev + 1); // 🔥 har click pe shake
      return;
    }
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

  const dscInfo = [
    {
      id: 1,
      title: "Digital Signature Certificate",
      desc: "A DSC is a secure digital key issued by a Certifying Authority to verify the identity of the holder electronically.",
    },
    {
      id: 2,
      title: "Electronic Authentication",
      desc: "It allows individuals and businesses to digitally sign documents with legal validity and authenticity.",
    },
    {
      id: 3,
      title: "Legally Recognized",
      desc: "Digital signatures are legally recognized under the Information Technology Act, 2000.",
    },
    {
      id: 4,
      title: "Secure Transactions",
      desc: "Ensures data integrity, authenticity, and security in online transactions and filings.",
    },
    {
      id: 5,
      title: "Paperless Documentation",
      desc: "Eliminates the need for physical signatures and enables faster document processing.",
    },
    {
      id: 6,
      title: "Compliance Requirement",
      desc: "Required for MCA filings, GST filings, Income Tax filings, e-tendering, and various government portals.",
    },
  ];
  const whoNeedsDSC = [
    {
      id: 1,
      title: "Company Directors",
      desc: "Directors require DSC for MCA filings, annual compliance, and company registrations.",
    },
    {
      id: 2,
      title: "Business Owners",
      desc: "Businesses use DSC for tax filings, registrations, and government compliance activities.",
    },
    {
      id: 3,
      title: "Chartered Accountants",
      desc: "CAs use DSC for Income Tax filings, audits, and client compliance work.",
    },
    {
      id: 4,
      title: "Company Secretaries",
      desc: "CS professionals require DSC for corporate filings and regulatory submissions.",
    },
    {
      id: 5,
      title: "GST Registered Businesses",
      desc: "Businesses registered under GST often require DSC for filing returns and compliance activities.",
    },
    {
      id: 6,
      title: "Government Tender Participants",
      desc: "Organizations participating in e-tenders require DSC for secure bidding and submissions.",
    },
  ];
  const dscDocuments = [
    "PAN Card",
    "Aadhaar Card",
    "Passport Size Photograph",
    "Mobile Number",
    "Email ID",
    "Address Proof",
  ];

  const dscProcess = [
    {
      id: "01",
      title: "Submit Documents",
      desc: "Provide identity proof, address proof, photograph, and contact details.",
    },
    {
      id: "02",
      title: "Verification Process",
      desc: "Complete OTP, Aadhaar, or video verification as required.",
    },
    {
      id: "03",
      title: "Application Filing",
      desc: "DSC application is submitted to the authorized Certifying Authority.",
    },
    {
      id: "04",
      title: "Document Review",
      desc: "The submitted documents are verified and validated.",
    },
    {
      id: "05",
      title: "Approval",
      desc: "Application is approved after successful verification.",
    },
    {
      id: "06",
      title: "DSC Issued",
      desc: "Digital Signature Certificate is generated and activated for use.",
    },
  ];
  const dscBenefits = [
    {
      title: "Secure Digital Transactions",
      desc: "Protects online transactions and documents from tampering and unauthorized access.",
    },
    {
      title: "Legal Recognition",
      desc: "Digital signatures are legally valid and recognized under the Information Technology Act.",
    },
    {
      title: "Fast Document Signing",
      desc: "Sign and submit documents electronically without physical paperwork.",
    },
    {
      title: "Compliance Made Easy",
      desc: "Required for MCA, GST, Income Tax, EPFO, and other government filings.",
    },
    {
      title: "Identity Authentication",
      desc: "Verifies the identity of the signer and ensures document authenticity.",
    },
    {
      title: "Paperless Operations",
      desc: "Promotes environmentally friendly and efficient digital workflows.",
    },
  ];
  return (
    <>
      <section
        className="md:px-10 px-5 mt-10
       "
      >
        <div className=" grid lg:grid-cols-2 gap-12 border border-green-200 rounded-4xl p-8">
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
          <div
            key={shakeKey}
            className={`border border-gray-200 rounded-2xl p-8 shadow-sm relative ${
              shakeKey > 0 ? "shake" : ""
            }`}
          >
            <h2 className="text-2xl font-semibold text-[#0F2A44] mb-6">
              Enquire Now
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                key={`name-${shakeKey}`}
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
} ${isSubmitted && errorsF.name ? " shake" : ""}`}
              />
              {isSubmitted && errorsF.name && (
                <p className="text-red-500 text-sm -mt-4">{errorsF.name}</p>
              )}

              <input
                key={`email-${shakeKey}`}
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
} ${isSubmitted && errorsF.email ? " shake" : ""}`}
              />
              {isSubmitted && errorsF.email && (
                <p className="text-red-500 text-sm -mt-4">{errorsF.email}</p>
              )}

              <input
                key={`phone-${shakeKey}`}
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
} ${isSubmitted && errorsF.phone ? " shake" : ""}`}
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
      <section className="md:px-10 px-5 mt-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0F2A44]">What is DSC?</h2>

          <div className="w-20 h-[3px] bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            A Digital Signature Certificate (DSC) is a secure electronic
            signature used to authenticate the identity of individuals and
            organizations. It provides security, authenticity, and legal
            validity to online transactions and digital documents.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dscInfo.map((item) => (
            <div
              key={item.id}
              className="border border-green-200 rounded-3xl p-6 hover:border-green-500 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-5">
                <span className="text-green-700 font-bold text-lg">
                  0{item.id}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-[#0F2A44] mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-7">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 border border-green-200 bg-green-50 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-[#0F2A44] mb-4">
            Secure & Legally Valid Digital Signing
          </h3>

          <p className="text-gray-700 leading-8">
            DSC enables individuals and businesses to sign documents
            electronically with complete security and legal validity. It is
            widely used for MCA, GST, Income Tax, e-Tendering, and various
            government compliance requirements.
          </p>
        </div>
      </section>
      <section className="md:px-10 px-5 mt-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0F2A44]">Who Needs DSC?</h2>

          <div className="w-20 h-[3px] bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            DSC is required by individuals, professionals, businesses, and
            organizations involved in online filings, regulatory compliance,
            government registrations, and secure digital transactions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whoNeedsDSC.map((item) => (
            <div
              key={item.id}
              className="border border-green-200 rounded-3xl p-6 hover:border-green-500 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-5">
                <span className="text-green-700 font-bold text-lg">
                  0{item.id}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-[#0F2A44] mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-7">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 border border-green-200 bg-green-50 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-[#0F2A44] mb-4">
            Essential for Digital Compliance
          </h3>

          <p className="text-gray-700 leading-8">
            Whether you are a company director, business owner, CA, CS, or
            government contractor, a DSC helps ensure secure digital signing,
            legal compliance, and seamless interaction with government portals.
          </p>
        </div>
      </section>
      <section className="md:px-10 px-5 mt-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0F2A44]">
            Documents Required & DSC Application Process
          </h2>

          <div className="w-20 h-[3px] bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Keep the required documents ready and follow a simple verification
            process to obtain your Digital Signature Certificate quickly and
            securely.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Documents */}
          <div className="border border-green-200 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-[#0F2A44] mb-6">
              Required Documents
            </h3>

            <div className="space-y-4">
              {dscDocuments.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 border border-green-100 rounded-2xl p-4"
                >
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold">
                    ✓
                  </div>

                  <p className="font-medium text-[#0F2A44]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="border border-green-200 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-[#0F2A44] mb-6">
              DSC Application Process
            </h3>

            <div className="space-y-4">
              {dscProcess.map((step) => (
                <div
                  key={step.id}
                  className="flex gap-4 border border-green-100 rounded-2xl p-4"
                >
                  <div className="min-w-[50px] h-[50px] bg-green-100 rounded-full flex items-center justify-center font-bold text-green-700">
                    {step.id}
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#0F2A44] mb-1">
                      {step.title}
                    </h4>

                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="md:px-10 px-5 mt-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0F2A44]">Benefits of DSC</h2>

          <div className="w-20 h-[3px] bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            A Digital Signature Certificate provides security, authenticity, and
            convenience for businesses and professionals involved in online
            transactions and regulatory compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dscBenefits.map((item, index) => (
            <div
              key={index}
              className="border border-green-200 rounded-3xl p-6 hover:border-green-500 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                ✓
              </div>

              <h3 className="text-xl font-semibold text-[#0F2A44] mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-7">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 border border-green-200 bg-green-50 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-[#0F2A44] mb-4">
            Secure Your Digital Identity
          </h3>

          <p className="text-gray-700 leading-8">
            DSC simplifies online compliance, enhances security, and enables
            legally valid digital signing for businesses, professionals, and
            organizations. It is an essential tool for today's digital business
            environment.
          </p>
        </div>
      </section>
    </>
  );
};

export default ServicePageDSC;
