import React, { useState } from "react";

const advisoryFeatures = [
  "Research Based Recommendations",
  "Long-Term Wealth Creation",
  "Portfolio Management",
  "Risk Management",
];

const investmentGoals = [
  {
    id: 1,
    label: "Long-Term Investment",
    value: "long_term",
  },
  {
    id: 2,
    label: "Short-Term Trading",
    value: "short_term",
  },
  {
    id: 3,
    label: "Retirement Planning",
    value: "retirement",
  },
  {
    id: 4,
    label: "Wealth Creation",
    value: "wealth_creation",
  },
];

const stockServices = [
  {
    id: 1,
    title: "Intraday Advisory",
    desc: "Get timely buy and sell recommendations for intraday trading opportunities.",
    tag: "Daily Trading",
  },
  {
    id: 2,
    title: "Swing Trading",
    desc: "Capture short to medium-term market movements with expert guidance.",
    tag: "Short Term",
  },
  {
    id: 3,
    title: "Positional Trading",
    desc: "Hold positions for weeks or months based on market trends and analysis.",
    tag: "Medium Term",
  },
  {
    id: 4,
    title: "Long-Term Investing",
    desc: "Build wealth through carefully selected stocks with long-term growth potential.",
    tag: "Wealth Creation",
  },
  {
    id: 5,
    title: "Portfolio Review",
    desc: "Analyze your current portfolio and optimize it for better performance.",
    tag: "Portfolio Management",
  },
  {
    id: 6,
    title: "Retirement Planning",
    desc: "Create a stock investment strategy aligned with your retirement goals.",
    tag: "Future Planning",
  },
];

const advisoryProcess = [
  {
    id: "01",
    title: "Submit Your Details",
    desc: "Fill out the consultation form with your investment goals and preferences.",
  },
  {
    id: "02",
    title: "Risk Assessment",
    desc: "Our experts evaluate your risk tolerance and investment profile.",
  },
  {
    id: "03",
    title: "Strategy Planning",
    desc: "We create a personalized investment strategy based on your objectives.",
  },
  {
    id: "04",
    title: "Stock Recommendations",
    desc: "Receive research-backed stock recommendations and portfolio guidance.",
  },
  {
    id: "05",
    title: "Portfolio Monitoring",
    desc: "Track performance and receive timely updates and recommendations.",
  },
];

const investmentStrategies = [
  {
    title: "Long-Term Investing",
    desc: "Focus on quality companies with strong growth potential over many years.",
  },
  {
    title: "Value Investing",
    desc: "Identify undervalued stocks trading below their intrinsic value.",
  },
  {
    title: "Growth Investing",
    desc: "Invest in companies expected to deliver above-average earnings growth.",
  },
  {
    title: "Dividend Investing",
    desc: "Build passive income through companies with consistent dividend payouts.",
  },
];

const riskManagement = [
  {
    title: "Portfolio Diversification",
    desc: "Spread investments across sectors and asset classes to reduce risk.",
  },
  {
    title: "Stop Loss Strategy",
    desc: "Limit potential losses through predefined exit levels.",
  },
  {
    title: "Capital Protection",
    desc: "Prioritize preservation of capital during market volatility.",
  },
  {
    title: "Risk-Reward Analysis",
    desc: "Evaluate every investment based on potential return versus risk.",
  },
];

const StockAdvisory = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    amount: "",
    goal: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "mobile") {
      const mobile = value.replace(/\D/g, "");

      if (mobile.length > 10) return;

      setFormData((prev) => ({
        ...prev,
        mobile,
      }));

      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleGoalSelect = (goal) => {
    setFormData((prev) => ({
      ...prev,
      goal,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      newErrors.mobile = "Invalid mobile number";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }

    if (!formData.amount.trim()) {
      newErrors.amount = "Investment amount is required";
    }

    if (!formData.goal) {
      newErrors.goal = "Select investment goal";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log(formData);

      setSubmitted(true);
      console.log(formData);

      setFormData({
        name: "",
        mobile: "",
        email: "",
        amount: "",
        goal: "",
      });
      setSuccess(true);
    }
    setTimeout(() => setSuccess(false), 3000);
  };
  return (
    <>
      <section className="md:px-10 px-5 mt-10">
        <div className="border border-green-200 rounded-3xl shadow-xl px-8 py-8">
          <div className="grid lg:grid-cols-2 gap-10 ">
            {/* Left Side */}
            <div className="">
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                Stock Advisory Services
              </span>

              <h1 className="text-3xl md:text-5xl font-bold text-[#0F2A44] mt-5 leading-tight">
                Expert Stock Market Guidance For Smarter Investments
              </h1>

              <p className="text-gray-600 mt-5 text-lg leading-8">
                Get research-driven stock recommendations, portfolio guidance,
                and personalized investment strategies to achieve your financial
                goals with confidence.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {advisoryFeatures.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 border border-green-200 rounded-2xl p-4"
                  >
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      ✓
                    </div>

                    <span className="font-medium text-[#0F2A44]">{item}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              {/* <div className="grid grid-cols-3 gap-4 mt-10">
                {[
                  {
                    number: "500+",
                    label: "Stocks Analyzed",
                  },
                  {
                    number: "1000+",
                    label: "Investors Assisted",
                  },
                  {
                    number: "95%",
                    label: "Client Satisfaction",
                  },
                ].map((item, index) => (
                  <div key={index}>
                    <h3 className="text-2xl font-bold text-green-600">
                      {item.number}
                    </h3>

                    <p className="text-gray-600 text-sm">{item.label}</p>
                  </div>
                ))}
              </div> */}
            </div>

            {/* Right Side Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="border border-green-200 rounded-3xl p-8 ">
                <h2 className="text-2xl font-bold text-[#0F2A44] mb-2">
                  Get Free Consultation
                </h2>

                <p className="text-gray-500 mb-6">
                  Speak with our experts and get personalized stock market
                  guidance.
                </p>

                <div className="space-y-5">
                  <div>
                    <label className="block font-medium mb-2">Full Name</label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter Your Name"
                      className="w-full border border-gray-300 rounded-xl px-5 py-3"
                    />

                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block font-medium mb-2">
                      Mobile Number
                    </label>

                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="Enter Mobile Number"
                      className="w-full border border-gray-300 rounded-xl px-5 py-3"
                    />

                    {errors.mobile && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.mobile}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block font-medium mb-2">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter Email Address"
                      className="w-full border border-gray-300 rounded-xl px-5 py-3"
                    />

                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block font-medium mb-2">
                      Investment Amount
                    </label>

                    <input
                      type="number"
                      name="amount"
                      value={formData.amount}
                      onChange={handleChange}
                      placeholder="Enter Investment Amount"
                      className="w-full border border-gray-300 rounded-xl px-5 py-3"
                    />

                    {errors.amount && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.amount}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block font-medium mb-3">
                      Investment Goal
                    </label>

                    <div className="grid grid-cols-2 gap-3">
                      {investmentGoals.map((goal) => (
                        <button
                          key={goal.id}
                          type="button"
                          onClick={() => handleGoalSelect(goal.value)}
                          className={`border rounded-xl px-4 py-3 transition ${
                            formData.goal === goal.value
                              ? "bg-green-600 text-white border-green-600"
                              : "border-gray-300"
                          }`}
                        >
                          {goal.label}
                        </button>
                      ))}
                    </div>

                    {errors.goal && (
                      <p className="text-red-500 text-sm mt-2">{errors.goal}</p>
                    )}
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full mt-5 bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold"
                >
                  Get Free Consultation
                </button>
                {success && (
                  <div className="bg-green-100 border mt-5 border-green-400 text-green-700 px-4 py-3 rounded-xl text-sm text-center">
                    ✅ Form submitted successfully!
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className="md:px-10 mt-20 ">
        <div className="">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0F2A44] mt-4">
              Our Stock Advisory Services
            </h2>
            <div className="w-20 h-[3px]  bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              We provide research-driven stock recommendations and investment
              guidance tailored to different trading styles and financial goals.
            </p>
          </div>

          {/* Services */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stockServices.map((service) => (
              <div
                key={service.id}
                className="border border-green-200 rounded-3xl p-6 hover:border-green-500 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center">
                    <span className="text-green-700 font-bold text-lg">
                      0{service.id}
                    </span>
                  </div>

                  <span className="bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full text-xs font-medium">
                    {service.tag}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-[#0F2A44] mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-7">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="md:px-10 mt-20">
        <div className="">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0F2A44] mt-4">
              How Our Advisory Process Works
            </h2>
            <div className="w-20 h-[3px]  bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              Our structured advisory process helps investors make informed
              decisions and build a strong investment portfolio.
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {advisoryProcess.map((item) => (
              <div
                key={item.id}
                className="relative border border-green-200 rounded-3xl p-6 text-center hover:border-green-500 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                  <span className="text-green-700 text-xl font-bold">
                    {item.id}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-[#0F2A44] mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-7">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Bottom Info */}
          <div className="mt-12 border border-green-200 bg-green-50 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-[#0F2A44] mb-4">
              Personalized Investment Journey
            </h3>

            <p className="text-gray-700 leading-8">
              Every investor has unique financial goals. Our advisory process
              focuses on understanding your objectives, managing risk and
              providing personalized stock recommendations to help you achieve
              long-term financial success.
            </p>
          </div>
        </div>
      </section>
      <section className="md:px-10 mt-20">
        <div className="">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0F2A44] mt-4">
              Investment Strategies & Risk Management
            </h2>
            <div className="w-20 h-[3px]  bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              Successful investing requires the right strategy along with
              disciplined risk management. We help investors grow wealth while
              protecting capital.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Investment Strategies */}
            <div className="border border-green-200 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-[#0F2A44] mb-6">
                Investment Strategies
              </h3>

              <div className="space-y-4">
                {investmentStrategies.map((item, index) => (
                  <div
                    key={index}
                    className="border border-green-100 rounded-2xl p-5"
                  >
                    <h4 className="font-semibold text-[#0F2A44] mb-2">
                      {item.title}
                    </h4>

                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Risk Management */}
            <div className="border border-green-200 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-[#0F2A44] mb-6">
                Risk Management Approach
              </h3>

              <div className="space-y-4">
                {riskManagement.map((item, index) => (
                  <div
                    key={index}
                    className="border border-green-100 rounded-2xl p-5"
                  >
                    <h4 className="font-semibold text-[#0F2A44] mb-2">
                      {item.title}
                    </h4>

                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StockAdvisory;
