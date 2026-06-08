import React, { useState } from "react";

const Form = () => {
  const [shakeKey, setShakeKey] = useState(0);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    interest: "",
  });

  const [success, setSuccess] = useState(false);

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

    setIsSubmitted(true);

    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email";

    if (!formData.phone) newErrors.phone = "Phone is required";
    else if (!/^[6-9]\d{9}$/.test(formData.phone))
      newErrors.phone = "Invalid phone";

    if (!formData.location) newErrors.location = "Location is required";

    if (!formData.interest) newErrors.interest = "Interest is required";

    setErrors(newErrors);

    // 🔥 FIRST: check error
    if (Object.keys(newErrors).length > 0) {
      setShakeKey((prev) => prev + 1); // 🔥 har click pe shake
      return;
    }

    // ✅ SUCCESS
    console.log("Form Submitted:", formData);

    setSuccess(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      location: "",
      interest: "",
    });

    setIsSubmitted(false);

    setTimeout(() => setSuccess(false), 3000);
  };
  return (
    <>
      {" "}
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
            value={formData.name}
            onChange={(e) => {
              const value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
              handleChange("name", value);
            }}
            className={`w-full border rounded-xl outline-none px-4 py-3  focus:border-green-600 focus:ring-2 focus:ring-green-200
  ${
    formData.name
      ? errors.name
        ? "border-red-500"
        : "border-green-500"
      : "border-gray-300"
  } ${isSubmitted && errors.name ? " shake" : ""}`}
          />
          {isSubmitted && errors.name && (
            <p className="text-red-500 text-sm -mt-4">{errors.name}</p>
          )}

          <input
            key={`email-${shakeKey}`}
            type="email"
            placeholder="Enter Email address"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className={`w-full border rounded-xl px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-200
  ${
    formData.email
      ? errors.email
        ? "border-red-500 "
        : "border-green-500"
      : "border-gray-300"
  } ${isSubmitted && errors.email ? " shake" : ""}`}
          />
          {isSubmitted && errors.email && (
            <p className="text-red-500 text-sm -mt-4">{errors.email}</p>
          )}

          <input
            key={`phone-${shakeKey}`}
            type="tel"
            placeholder="Enter Mobile Number"
            value={formData.phone}
            maxLength={10}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "");
              handleChange("phone", value);
            }}
            className={`w-full border rounded-xl px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-200
  ${
    formData.phone
      ? errors.phone
        ? "border-red-500"
        : "border-green-500"
      : "border-gray-300"
  } ${isSubmitted && errors.phone ? " shake" : ""}`}
          />
          {isSubmitted && errors.phone && (
            <p className="text-red-500 text-sm -mt-4">{errors.phone}</p>
          )}

          <input
            key={`location-${shakeKey}`}
            type="text"
            placeholder="Select interested Location"
            value={formData.location}
            onChange={(e) => handleChange("location", e.target.value)}
            className={`w-full border border-gray-300 focus:border-green-600 focus:ring-2 focus:ring-green-200 rounded-xl px-4 py-3 focus:outline-none ${isSubmitted && errors.location ? " shake" : ""}`}
          />
          {isSubmitted && errors.location && (
            <p className="text-red-500 text-sm -mt-4">{errors.location}</p>
          )}
          <input
            key={`interest-${shakeKey}`}
            type="text"
            placeholder="Select interest type"
            value={formData.interest}
            onChange={(e) => handleChange("interest", e.target.value)}
            className={`w-full border border-gray-300 focus:border-green-600 focus:ring-2 focus:ring-green-200 rounded-xl px-4 py-3 focus:outline-none ${isSubmitted && errors.interest ? " shake" : ""}`}
          />
          {isSubmitted && errors.interest && (
            <p className="text-red-500 text-sm -mt-4">{errors.interest}</p>
          )}

          {/* Submit Button */}
          <button className="relative overflow-hidden border border-green-600 text-green-600 px-6 py-2 rounded-2xl text-sm font-medium group">
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
    </>
  );
};

export default Form;
